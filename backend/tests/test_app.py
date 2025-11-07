from app import app

def test_root():
    client = app.test_client()
    res = client.get("/api")
    assert res.status_code == 200
