#!/usr/bin/env python3
"""
Create custom fields in GHL for calculator data
"""

import requests
import json

# GHL API Configuration
LOCATION_ID = "yMCGMW3LHecaTwX5vU3v"  # Rescue Home Offers
API_TOKEN = "pit-0ec610fc-60ff-4c83-adb9-0d6bd907fcd2"

# API Endpoint
url = f"https://services.leadconnectorhq.com/locations/{LOCATION_ID}/customFields"

headers = {
    "Authorization": f"Bearer {API_TOKEN}",
    "Version": "2021-07-28",
    "Content-Type": "application/json"
}

# Custom fields to create
custom_fields = [
    {
        "name": "calc_situation",
        "dataType": "TEXT",
        "position": 1
    },
    {
        "name": "calc_timeline",
        "dataType": "TEXT",
        "position": 2
    },
    {
        "name": "calc_priority",
        "dataType": "TEXT",
        "position": 3
    },
    {
        "name": "solution_1_title",
        "dataType": "TEXT",
        "position": 4
    },
    {
        "name": "solution_1_description",
        "dataType": "LARGE_TEXT",
        "position": 5
    },
    {
        "name": "solution_2_title",
        "dataType": "TEXT",
        "position": 6
    },
    {
        "name": "solution_2_description",
        "dataType": "LARGE_TEXT",
        "position": 7
    },
    {
        "name": "solution_3_title",
        "dataType": "TEXT",
        "position": 8
    },
    {
        "name": "solution_3_description",
        "dataType": "LARGE_TEXT",
        "position": 9
    }
]

print("Creating custom fields in GHL...\n")

for field in custom_fields:
    print(f"Creating field: {field['name']}")
    
    response = requests.post(url, headers=headers, json=field)
    
    if response.status_code in [200, 201]:
        result = response.json()
        print(f"  ✅ Created: {result.get('customField', {}).get('id', 'Success')}")
    else:
        print(f"  ❌ Error: {response.status_code} - {response.text}")
    
    print()

print("\n✅ Custom fields creation complete!")
