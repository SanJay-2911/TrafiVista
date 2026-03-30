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

                # store access token for later calls
                token = data.get("access_token")
            else:
                print(f"Error: {response.text}")
        except Exception as e:
            print(f"Connection failed: {e}")

        # verify history only returns admin's own uploads
        try:
            headers = {"Authorization": f"Bearer {token}"}
            # upload a fake traffic record as admin; response contains uploaded_by_id
            payload = {
                "state": "TestState",
                "district": "TestDistrict",
                "city": "TestCity",
                "spot": "TestSpot",
                "timestamp": "2025-01-01T00:00:00"
            }
            upload_resp = client.post(f"{BASE_URL}/traffic/upload", json=payload, headers=headers)
            admin_id = upload_resp.json().get("uploaded_by_id")
            history_resp = client.get(f"{BASE_URL}/traffic/history", headers=headers)
            if history_resp.status_code == 200:
                records = history_resp.json()
                assert all(r.get("uploaded_by_id") == admin_id for r in records), "History returned other users' records"
            else:
                print(f"History fetch error: {history_resp.text}")
        except Exception as e:
            print(f"History check failed: {e}")

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
        user_token = None
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
                user_token = data.get("access_token")
            else:
                print(f"Error: {response.text}")
        except Exception as e:
            print(f"Connection failed: {e}")

        # 4. Verify non-admin upload does not persist
        if user_token:
            headers = {"Authorization": f"Bearer {user_token}"}
            payload = {
                "state": "UState",
                "district": "UDistrict",
                "city": "UCity",
                "spot": "USpot",
                "timestamp": "2025-01-02T12:00:00"
            }
            upload_resp = client.post(f"{BASE_URL}/traffic/upload", json=payload, headers=headers)
            print("User upload status", upload_resp.status_code)
            assert upload_resp.status_code == 200
            rec = upload_resp.json()
            # since we don't save user data, id should be zero or otherwise fake
            assert rec.get("id") == 0

            history_resp = client.get(f"{BASE_URL}/traffic/history", headers=headers)
            print("User history status", history_resp.status_code)
            if history_resp.status_code == 200:
                history = history_resp.json()
                assert len(history) == 0, "Regular user uploads should not be stored"
            else:
                print(f"History fetch error for user: {history_resp.text}")

if __name__ == "__main__":
    test_roles()
