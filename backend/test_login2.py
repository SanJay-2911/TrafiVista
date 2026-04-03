from fastapi.testclient import TestClient
from app.main import app
import traceback

client = TestClient(app)

try:
    response = client.post("/api/auth/login", json={"email": "admin@gmail.com", "password": "admin123"})
    print("STATUS", response.status_code)
    print("BODY", response.json())
except Exception as e:
    traceback.print_exc()

