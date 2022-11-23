from __future__ import print_function
from flask import Flask, request, jsonify
import time

app = Flask(__name__)

@app.route('/hello', methods=["GET"])
def hello():
    return "Server active!"

@app.route('/echo', methods=["POST"])
def echo():
    try:
        data = request.json
        print("Server: ", data["key"])
        return "Hello World from Server!"
    except Exception as e:
        raise e

# :5000 is the flask default port.
# You can change it to something else if you would like.
if __name__ == '__main__':
    app.run(host='localhost', port=5000)
