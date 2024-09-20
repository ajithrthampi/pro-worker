import os
from typing import Union, List

import aiofiles
import numpy as np
import pandas as pd
from backend.app.api.routes.access.user.user_helper import (
    get_user_by_email_or_id,
)
from fastapi import HTTPException, UploadFile
from sqlalchemy.ext.asyncio import AsyncSession
from sqlmodel import Session, SQLModel
from starlette import status
from starlette.background import BackgroundTasks

# from backend.app.api.routes.user.helpers.user_helper import get_user_by_email
from backend.app.db.database import update_db

SUPPORTED_FILE_TYPES = [
    "application/vnd.ms-excel",
    "vnd.ms-excel.sheet.binary.macroEnabled.12",
    "application/vnd.ms-excel.sheet.macroEnabled.12",
    "application/vnd.ms-excel.sheet.binary.macroEnabled.12",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.ms-excel",
    "application/vnd.ms-excel.template.macroEnabled.12",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
]

CHUNK_SIZE = 1024 * 1024


def df_to_sqlmodel(df: pd.DataFrame, instance) -> List[SQLModel]:
    """Convert a pandas DataFrame into a list of SQLModel objects."""
    objs = [instance(**row) for row in df.to_dict("records")]
    return objs


async def get_model_data_from_file(
    file: str,
    instance: any,
    sheet_names: List,
    session: Union[AsyncSession, Session],
    # background_task: BackgroundTasks,
    request_name: str,
    created_by: str = None,
    is_csv: bool = False,
    data_conversion_method: any = None,
):
    if is_csv:
        df = pd.read_csv(file, na_filter=False)
    else:
        xl = pd.ExcelFile(file)
        xl_sheet_names = xl.sheet_names
        # get the first priority sheet if it exists
        priority_sheet = next(
            (sheet for sheet in xl_sheet_names if sheet in sheet_names), None
        )
        if priority_sheet is None:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"Sheet name not found in {sheet_names}",
            )
        df = pd.read_excel(file, sheet_name=priority_sheet, na_filter=False)
    # df = df[df.iloc[:, 0] != ""]
    df = df.replace("", np.nan)  # Replace empty strings with NaN
    df.dropna(how="all", inplace=True)
    df = df.replace(np.nan, "")
    # print(df)
    df.columns = [
        x.lower().replace(" ", "_").replace("-", "_").replace(".", "_").strip()
        for x in df.columns
    ]  # convert to snake case and remove spaces
    # print(df.columns)
    df = df.astype(object).where(pd.notnull(df), None)  # replace NaN with None

    df_models = df_to_sqlmodel(df, instance)
    if data_conversion_method:
        df_models = await data_conversion_method(
            instance=df_models, request_name=request_name, session=session
        )
    #  check instance for created_by column
    if hasattr(instance, "created_by") and created_by is not None:
        user = await get_user_by_email_or_id(
            session, created_by, raise_exception_on_not_found=True
        )
        for model in df_models:
            model.created_by = user.id
    # print(df_models)
    return df_models


async def push_file_data_to_db(
    file: str,
    instance: any,
    sheet_names: List,
    session: Union[AsyncSession, Session],
    background_task: BackgroundTasks,
    created_by: str = None,
    data_conversion_method: any = None,
):
    xl = pd.ExcelFile(file)
    xl_sheet_names = xl.sheet_names
    # get the first priority sheet if it exists
    priority_sheet = next(
        (sheet for sheet in xl_sheet_names if sheet in sheet_names), None
    )
    if priority_sheet is None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Sheet name not found in {sheet_names}",
        )
    df = pd.read_excel(file, sheet_name=priority_sheet)
    df.columns = [
        x.lower().replace(" ", "_").replace("-", "_").replace(".", "_").strip()
        for x in df.columns
    ]  # convert to snake case and remove spaces
    print(df.columns)
    df = df.astype(object).where(pd.notnull(df), None)  # replace NaN with None
    df_models = df_to_sqlmodel(df, instance)
    print(df_models[1])
    if data_conversion_method:
        df_models = await data_conversion_method(
            instance=df_models, session=session
        )

    #  check instance for created_by column
    if hasattr(instance, "created_by") and created_by is not None:
        user = await get_user_by_email_or_id(
            session, created_by, raise_exception_on_not_found=True
        )
        for model in df_models:
            model.created_by = user.id
    background_task.add_task(update_db, session, df_models)
    return {
        "detail": "Validation passed, pushing data to DB in background and will be available in a few minutes"
    }


async def upload_file(
    file: UploadFile,
    folder: str,
    sheet_names: List[str],
    session: Union[AsyncSession, Session],
    instance: any,
    background_task: BackgroundTasks,
    created_by: str,
    data_conversion_method: any = None,
):
    if file.content_type not in SUPPORTED_FILE_TYPES:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Only Excel files are supported",
        )
    # try:
    filepath = os.path.join(
        "./", "files", folder, os.path.basename(file.filename)
    )
    # print(filepath)
    async with aiofiles.open(filepath, "wb") as f:
        while chunk := await file.read(CHUNK_SIZE):
            await f.write(chunk)
    result = await push_file_data_to_db(
        file=filepath,
        session=session,
        instance=instance,
        background_task=background_task,
        sheet_names=sheet_names,
        created_by=created_by,
        data_conversion_method=data_conversion_method,
    )
    return result
