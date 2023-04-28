from flask import Flask, request, jsonify
import numpy as np
from flask_cors import CORS
from infer import Inferrer
import cv2
from PIL import Image

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'
inferrer = Inferrer()

@app.route("/")
def welcome():
    return "<p>Welcome to the paddy plant backend!</p>"

@app.route("/predict", methods=["POST"])
def predict():
    # Get array from request body

    data = request.get_json()
    # Convert to numpy array
    data = np.asarray(data, dtype=np.uint8)
    # img = Image.fromarray(data, 'RGB')
    # img.save('my.png')
    # img.show()

    # Resize to (224, 224, 3)
    data = cv2.resize(data, (224, 224), interpolation=cv2.INTER_CUBIC)

    # Change from (224, 224, 3) to (1, 224, 224, 3)
    data = np.expand_dims(data, axis=0)

    # Get prediction
    prediction = inferrer.infer(data)
    #print(prediction)

    # Send prediction in body
    return jsonify(prediction)

if __name__ == '__main__':
    app.run(debug=True)