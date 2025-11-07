from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/api")
def root():
    return jsonify({"message": "Backend running", "status": "ok"})

@app.route("/api/health")
def health():
    return jsonify({"health": "pass"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
