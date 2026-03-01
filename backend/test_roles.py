import httpx
import json

BASE_URL = "http://localhost:8000/api"

def test_roles():
    print("Testing Role-Based Access Control...")
    
    with httpx.Client() as client:
        # 1. Test Admin Login
        print("\n1. Testing Admin Login...")
        try:
            response = client.post(
                f"{BASE_URL}/auth/login",
                data={"username": "trafivista@gmail.com", "password": "grizzly"}
            )
            print(f"Status: {response.status_code}")
            if response.status_code == 200:
                data = response.json()
                print(f"Role: {data.get('role')}")
                assert data.get('role') == "admin"
            else:
                print(f"Error: {response.text}")
        except Exception as e:
            print(f"Connection failed: {e}")

        # 2. Test User Registration
        print("\n2. Testing User Registration...")
        try:
            user_data = {
                "email": "testuser@example.com",
                "password": "testpassword",
                "full_name": "Test User"
            }
            response = client.post(f"{BASE_URL}/auth/register", json=user_data)
            print(f"Status: {response.status_code}")
            if response.status_code == 200:
                data = response.json()
                print(f"Is Admin: {data.get('is_admin')}")
                assert data.get('is_admin') == False
            else:
                print(f"Error: {response.text}")
        except Exception as e:
            print(f"Connection failed: {e}")

        # 3. Test User Login
        print("\n3. Testing User Login...")
        try:
            response = client.post(
                f"{BASE_URL}/auth/login",
                data={"username": "testuser@example.com", "password": "testpassword"}
            )
            print(f"Status: {response.status_code}")
            if response.status_code == 200:
                data = response.json()
                print(f"Role: {data.get('role')}")
                assert data.get('role') == "user"
            else:
                print(f"Error: {response.text}")
        except Exception as e:
            print(f"Connection failed: {e}")

if __name__ == "__main__":
    test_roles()
