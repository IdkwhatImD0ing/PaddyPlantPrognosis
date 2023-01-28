from flask import Flask, request, jsonify
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/")
def welcome():
    return "<p>Welcome to this flask backend!</p>"

if __name__ == '__main__':
    app.run(debug=True)