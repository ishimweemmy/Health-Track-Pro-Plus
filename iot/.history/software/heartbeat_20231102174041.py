import serial
import requests

ser = serial.Serial("/dev/ttyACM0", 9600, timeout=1)

# API endpoint URL
api_url = "http://localhost:4000/api/sensors"

try:
    while True:
        data = ser.readline().decode().strip()
        # if data and float(data) <=120 and float(data) >= 60:
        #     print(f"Received data from Arduino: {data}")
        #     request_body = {"heartRate": float(data), "bodyTemperature": 40, "patientId": 1}
        #     response = requests.post(api_url, json=request_body)
        #     if response.status_code == 201:
        #         print('Data uploaded successfully!')
        #     else:
        #         print("Failed to upload data")
except KeyboardInterrupt:
    print("Serial communication interrupted.")
except requests.exceptions.RequestException as e:
    print(f"Error: {e}")
finally:
    ser.close()
