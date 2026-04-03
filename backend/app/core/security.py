from datetime import datetime, timedelta
from typing import Any, Union
from jose import jwt
import os
from dotenv import load_dotenv

# --- bcrypt 4.x / passlib 1.7.4 compatibility fix ---
# passlib reads bcrypt.__about__.__version__ which no longer exists in bcrypt >= 4.0.
# Inject a shim so passlib doesn't throw AttributeError during verify/hash.
import bcrypt as _bcrypt
if not hasattr(_bcrypt, "__about__"):
    import types
    _about = types.ModuleType("bcrypt.__about__")
    _about.__version__ = _bcrypt.__version__
    _bcrypt.__about__ = _about

from passlib.context import CryptContext

load_dotenv()

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

SECRET_KEY = os.getenv("SECRET_KEY", "your-secret-key-for-development")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24 * 7  # 7 days

def create_access_token(data: dict, expires_delta: timedelta = None) -> str:
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password: str) -> str:
    return pwd_context.hash(password)
