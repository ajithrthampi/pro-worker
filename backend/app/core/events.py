from typing import Callable

from fastapi import FastAPI
from loguru import logger

from backend.app.api.utils.file_operations import create_initial_directories
from backend.app.cache.events import close_cache_connection, connect_to_cache
from backend.app.core.settings.app import AppSettings
from backend.app.db.events import close_db_connection, connect_to_db


def create_start_app_handler(
    app: FastAPI,
    settings: AppSettings,
) -> Callable:  # type: ignore
    async def start_app() -> None:
        await connect_to_db(app, settings)
        await connect_to_cache(app, settings)
        await create_initial_directories(app)

    return start_app


def create_stop_app_handler(app: FastAPI) -> Callable:  # type: ignore
    @logger.catch
    async def stop_app() -> None:
        await close_db_connection(app)
        await close_cache_connection(app)

    return stop_app
