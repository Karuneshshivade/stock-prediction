# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import yfinance as yf
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
import numpy as np
import pandas as pd

app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    ticker = data.get('ticker', 'AAPL')
    period = data.get('period', '1y')

    # Fetch historical data
    stock_data = yf.download(ticker, period=period)
    stock_data['Date'] = stock_data.index

    # Prepare the dataset
    stock_data['Date'] = pd.to_datetime(stock_data['Date'])
    stock_data['Date'] = stock_data['Date'].map(pd.Timestamp.timestamp)
    X = np.array(stock_data['Date']).reshape(-1, 1)
    y = stock_data['Close'].values

    # Split the dataset
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)

    # Train the model
    model = LinearRegression()
    model.fit(X_train, y_train)

    # Make predictions
    future_dates = np.array(pd.date_range(start=stock_data.index[-1], periods=10, freq='D').map(pd.Timestamp.timestamp)).reshape(-1, 1)
    predictions = model.predict(future_dates).tolist()

    response = {
        'predictions': predictions
    }
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
