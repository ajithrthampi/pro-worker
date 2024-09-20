from redis import asyncio as aioredis, ConnectionPool, Redis
from fastapi import FastAPI
from loguru import logger

from backend.app.core.settings.app import AppSettings


async def connect_to_cache(app: FastAPI, settings: AppSettings):
    redis_url: str = f"redis://{settings.redis_host}:{settings.redis_port}"
    logger.info("Connecting to Redis Cache {0}", repr(redis_url))
    pool = ConnectionPool.from_url(redis_url)
    app.state.redis = Redis(connection_pool=pool, decode_responses=True)
    # async with aioredis.from_url(
    #     redis_url, encoding="utf8", decode_responses=True
    # ) as pool:
    #     # app.state.cache = aioredis.Redis(connection_pool=pool).connection_pool
    #     app.state.cache = aioredis.Redis(connection_pool=pool)
    logger.info("Redis Cache Connection established")


async def close_cache_connection(app: FastAPI):
    logger.info("Closing connection to Redis Cache")

    # await app.state.cache.close()
    app.state.redis.connection_pool.disconnect()

    logger.info("Connection to Redis Cache closed")
