import urllib.request
import json

req = urllib.request.Request(
    'http://127.0.0.1:8000/api/auth/login',
    data=b'{"email":"admin@gmail.com","password":"admin123"}',
    headers={'Content-Type': 'application/json'}
)
try:
    urllib.request.urlopen(req)
except Exception as e:
    print(e.read().decode('utf-8'))
