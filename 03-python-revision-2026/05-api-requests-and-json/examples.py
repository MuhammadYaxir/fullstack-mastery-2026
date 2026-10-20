# API Requests & JSON Handling

# What are API Requests and JSON Handling in Python?

# HTTP Requests (requests library): Python doesn't include an HTTP client built directly into its core syntax for clean REST requests, so developers use the industry-standard requests library to communicate with external web servers and APIs.

# JSON Handling (.json()): APIs typically exchange data in JSON (JavaScript Object Notation) format. Python automatically parses JSON strings into native dictionaries and lists using the .json() method, allowing you to access data effortlessly.

# Error & Status Handling: Robust applications check HTTP status codes (e.g., 200 OK, 404 Not Found, 500 Server Error) and catch network exceptions to prevent app crashes.

# Note: If you haven't installed the requests library yet, you can run pip install requests in your terminal.

# 📂 Hands-on Code Example


# ==========================================
# TOPIC: API Requests & JSON Handling
# ==========================================

import requests

# 1. Making a GET Request to a Public API
print("=== 1. Fetching Data (GET Request) ===" )
api_url = "https://jsonplaceholder.typicode.com/users/1"

try:
    # Sending a GET request with a timeout of 5 seconds
    response = requests.get(api_url, timeout=5)
    
    # Check if the HTTP status code indicates success (200)
    if response.status_code == 200:
        # Parse the JSON response into a Python dictionary
        user_data = response.json()
        
        print("API Request Successful!")
        print(f"Name: {user_data.get('name')}")
        print(f"Username: {user_data.get('username')}")
        print(f"Email: {user_data.get('email')}")
        print(f"Company: {user_data.get('company', {}).get('name')}")
    else:
        print(f"Failed to fetch data. Server returned status code: {response.status_code}")

except requests.exceptions.Timeout:
    print("Error: The request timed out.")
except requests.exceptions.RequestException as e:
    print(f"An error occurred during the network request: {e}")


print("\n=== 2. Sending Data (POST Request with JSON Payload) ===" )
post_url = "https://jsonplaceholder.typicode.com/posts"

# Payload dictionary to send to the server
payload = {
    "title": "Full-Stack Python & TypeScript Mastery",
    "body": "Building robust automation workflows and backend systems.",
    "userId": 101
}

try:
    # Sending a POST request with JSON data
    response = requests.post(post_url, json=payload, timeout=5)
    
    # Status code 201 Created typically indicates a successful POST
    if response.status_code == 201:
        created_post = response.json()
        print("POST Request Successful!")
        print(f"Server Assigned ID: {created_post.get('id')}")
        print(f"Submitted Title: {created_post.get('title')}")
    else:
        print(f"POST failed with status code: {response.status_code}")

except requests.exceptions.RequestException as e:
    print(f"An error occurred during the POST request: {e}")