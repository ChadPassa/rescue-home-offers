#!/usr/bin/env python3
"""
Update the Calculator Completion Email template in GHL with correct content
"""

import requests
import json

# GHL API Configuration
LOCATION_ID = "yMCGMW3LHecaTwX5vU3v"  # Rescue Home Offers
API_TOKEN = "pit-0ec610fc-60ff-4c83-adb9-0d6bd907fcd2"
TEMPLATE_ID = "6939e71f67a244c26d49b2c4"

# API Endpoint
url = f"https://services.leadconnectorhq.com/emails/templates/{TEMPLATE_ID}"

headers = {
    "Authorization": f"Bearer {API_TOKEN}",
    "Version": "2021-07-28",
    "Content-Type": "application/json"
}

# Email Template Content
email_html = """
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Personalized Home Solutions</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
    
    <div style="background-color: #f8f9fa; padding: 30px; border-radius: 10px; margin-bottom: 30px;">
        <h1 style="color: #2c3e50; margin-bottom: 20px;">Hi {{contact.first_name}},</h1>
        <p style="font-size: 16px; margin-bottom: 15px;">Thank you for completing our calculator! We've analyzed your situation and found the perfect solutions for you.</p>
    </div>

    <div style="background-color: #fff; padding: 30px; border: 2px solid #e9ecef; border-radius: 10px; margin-bottom: 30px;">
        <h2 style="color: #2c3e50; margin-bottom: 20px;">Here's What You Told Us:</h2>
        
        <div style="margin-bottom: 15px;">
            <strong style="color: #495057;">Your Situation:</strong><br>
            <span style="font-size: 16px;">{{contact.custom_fields.calc_situation}}</span>
        </div>
        
        <div style="margin-bottom: 15px;">
            <strong style="color: #495057;">Your Timeline:</strong><br>
            <span style="font-size: 16px;">{{contact.custom_fields.calc_timeline}}</span>
        </div>
        
        <div style="margin-bottom: 15px;">
            <strong style="color: #495057;">Your Priority:</strong><br>
            <span style="font-size: 16px;">{{contact.custom_fields.calc_priority}}</span>
        </div>
    </div>

    <div style="background-color: #fff; padding: 30px; border: 2px solid #e9ecef; border-radius: 10px; margin-bottom: 30px;">
        <h2 style="color: #2c3e50; margin-bottom: 20px;">Your Top 3 Recommended Solutions:</h2>
        
        <div style="margin-bottom: 25px; padding-bottom: 20px; border-bottom: 1px solid #e9ecef;">
            <h3 style="color: #007bff; margin-bottom: 10px;">1. {{contact.custom_fields.solution_1_title}}</h3>
            <p style="font-size: 15px; color: #666;">{{contact.custom_fields.solution_1_description}}</p>
        </div>
        
        <div style="margin-bottom: 25px; padding-bottom: 20px; border-bottom: 1px solid #e9ecef;">
            <h3 style="color: #007bff; margin-bottom: 10px;">2. {{contact.custom_fields.solution_2_title}}</h3>
            <p style="font-size: 15px; color: #666;">{{contact.custom_fields.solution_2_description}}</p>
        </div>
        
        <div style="margin-bottom: 25px;">
            <h3 style="color: #007bff; margin-bottom: 10px;">3. {{contact.custom_fields.solution_3_title}}</h3>
            <p style="font-size: 15px; color: #666;">{{contact.custom_fields.solution_3_description}}</p>
        </div>
    </div>

    <div style="background-color: #fffbea; padding: 30px; border-left: 5px solid #ffc107; border-radius: 5px; margin-bottom: 30px;">
        <h2 style="color: #2c3e50; margin-bottom: 15px;">The Rescue Promise™</h2>
        <p style="font-size: 16px; font-weight: bold; color: #856404; margin-bottom: 15px;">"Your price, our terms. Your terms, our price."</p>
        <p style="font-size: 14px; color: #666;">We believe in giving you options and control. Whether you need a fast cash offer or want to maximize your home's value, we'll work with you to find the perfect solution.</p>
    </div>

    <div style="background-color: #d4edda; padding: 25px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
        <h3 style="color: #155724; margin-bottom: 10px;">🎉 Your Offers Are On The Way!</h3>
        <p style="font-size: 15px; color: #155724;">We're working on your personalized offers right now. You'll hear from us soon!</p>
    </div>

    <div style="text-align: center; padding: 20px; color: #666; font-size: 14px;">
        <p>Questions? Reply to this email or call us at <strong>(702) 555-1234</strong></p>
        <p style="margin-top: 15px;">Rescue Home Offers<br>Las Vegas, NV</p>
    </div>

</body>
</html>
"""

# Update payload
payload = {
    "locationId": LOCATION_ID,
    "name": "Calculator Completion Email",
    "subject": "Your Personalized Home Solutions Are Ready, {{contact.first_name}}!",
    "body": email_html,
    "emailType": "html"
}

# Make API request
print("Updating email template...")
print(f"Template ID: {TEMPLATE_ID}")

response = requests.put(url, headers=headers, json=payload)

print(f"\nStatus Code: {response.status_code}")
print(f"Response: {json.dumps(response.json(), indent=2)}")

if response.status_code == 200:
    print("\n✅ Email template updated successfully!")
else:
    print(f"\n❌ Error updating template: {response.text}")
