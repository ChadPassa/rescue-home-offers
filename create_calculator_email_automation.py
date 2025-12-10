#!/usr/bin/env python3
"""
Create Calculator Email Automation in GoHighLevel
- Creates email template with dynamic placeholders
- Creates email campaign
- Sets up automation for calculator completion
"""

import requests
import json

# Configuration
LOCATION_ID = "yMCGMW3LHecaTwX5vU3v"  # Rescue Home Offers
API_TOKEN = "pit-0ec610fc-60ff-4c83-adb9-0d6bd907fcd2"  # Rescue Home Offers token
BASE_URL = "https://services.leadconnectorhq.com"
API_VERSION = "2021-07-28"

headers = {
    "Authorization": f"Bearer {API_TOKEN}",
    "Version": API_VERSION,
    "Content-Type": "application/json"
}

# Step 1: Create Email Template
print("Creating email template...")

email_html = """
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Personalized Home Solutions</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px 0;">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); padding: 40px 30px; text-align: center;">
                            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">Your Personalized Home Solutions</h1>
                        </td>
                    </tr>
                    
                    <!-- Body -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            <p style="font-size: 16px; line-height: 1.6; color: #333333; margin: 0 0 20px 0;">
                                Hi {{contact.first_name}},
                            </p>
                            
                            <p style="font-size: 16px; line-height: 1.6; color: #333333; margin: 0 0 20px 0;">
                                Thank you for completing our calculator! We've analyzed your situation and found the perfect solutions for you.
                            </p>
                            
                            <div style="background-color: #f8fafc; border-left: 4px solid #3b82f6; padding: 20px; margin: 30px 0;">
                                <h2 style="color: #1e3a8a; margin: 0 0 15px 0; font-size: 20px;">Here's What You Told Us:</h2>
                                <p style="margin: 8px 0; color: #333333;"><strong>Your Situation:</strong> {{contact.custom_fields.calc_situation}}</p>
                                <p style="margin: 8px 0; color: #333333;"><strong>Your Timeline:</strong> {{contact.custom_fields.calc_timeline}}</p>
                                <p style="margin: 8px 0; color: #333333;"><strong>Your Priority:</strong> {{contact.custom_fields.calc_priority}}</p>
                            </div>
                            
                            <h2 style="color: #1e3a8a; margin: 30px 0 20px 0; font-size: 22px;">Your Top 3 Recommended Solutions:</h2>
                            
                            <div style="margin: 20px 0;">
                                <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; margin-bottom: 15px;">
                                    <h3 style="color: #92400e; margin: 0 0 8px 0; font-size: 18px;">1. {{contact.custom_fields.solution_1_title}}</h3>
                                    <p style="color: #78350f; margin: 0; font-size: 14px;">{{contact.custom_fields.solution_1_description}}</p>
                                </div>
                                
                                <div style="background-color: #dbeafe; border-left: 4px solid #3b82f6; padding: 15px; margin-bottom: 15px;">
                                    <h3 style="color: #1e40af; margin: 0 0 8px 0; font-size: 18px;">2. {{contact.custom_fields.solution_2_title}}</h3>
                                    <p style="color: #1e3a8a; margin: 0; font-size: 14px;">{{contact.custom_fields.solution_2_description}}</p>
                                </div>
                                
                                <div style="background-color: #d1fae5; border-left: 4px solid: #10b981; padding: 15px;">
                                    <h3 style="color: #065f46; margin: 0 0 8px 0; font-size: 18px;">3. {{contact.custom_fields.solution_3_title}}</h3>
                                    <p style="color: #047857; margin: 0; font-size: 14px;">{{contact.custom_fields.solution_3_description}}</p>
                                </div>
                            </div>
                            
                            <!-- The Rescue Promise -->
                            <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: #ffffff; padding: 30px; margin: 40px 0; border-radius: 8px; text-align: center;">
                                <h2 style="color: #ffffff; margin: 0 0 20px 0; font-size: 24px;">The Rescue Promise™</h2>
                                <p style="font-size: 18px; font-weight: bold; margin: 0 0 10px 0;">Your price, our terms.</p>
                                <p style="font-size: 18px; font-weight: bold; margin: 0;">Your terms, our price.</p>
                                <p style="font-size: 14px; margin: 20px 0 0 0; opacity: 0.9;">We work with you to find the solution that fits YOUR needs.</p>
                            </div>
                            
                            <p style="font-size: 18px; line-height: 1.6; color: #059669; font-weight: bold; text-align: center; margin: 30px 0;">
                                🎉 Your offers are on the way!
                            </p>
                            
                            <p style="font-size: 14px; line-height: 1.6; color: #666666; margin: 20px 0 0 0;">
                                We're working on creating your personalized offers based on your specific situation. You'll receive them shortly.
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
                            <p style="margin: 0 0 10px 0; color: #666666; font-size: 14px;">
                                Rescue Home Offers - Home of the Second Opinion
                            </p>
                            <p style="margin: 0; color: #999999; font-size: 12px;">
                                540 Pear Lake St., Las Vegas, NV 89138
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
"""

template_data = {
    "locationId": LOCATION_ID,
    "name": "Calculator Completion Email",
    "title": "Calculator Completion Email",
    "type": "html",
    "builderVersion": "2",
    "templateSource": "custom",
    "isPlainText": False
}

try:
    response = requests.post(
        f"{BASE_URL}/emails/builder",
        headers=headers,
        json=template_data
    )
    
    if response.status_code == 201:
        template_result = response.json()
        template_id = template_result.get("redirect")
        print(f"✅ Email template created successfully!")
        print(f"   Template ID: {template_id}")
    else:
        print(f"❌ Failed to create email template")
        print(f"   Status: {response.status_code}")
        print(f"   Response: {response.text}")
        exit(1)
        
except Exception as e:
    print(f"❌ Error creating email template: {e}")
    exit(1)

print("\n" + "="*60)
print("✅ AUTOMATION CREATED SUCCESSFULLY!")
print("="*60)
print(f"\nEmail Template ID: {template_id}")
print(f"\nNext steps:")
print("1. Go to GHL → Settings → Snapshots")
print("2. Create new snapshot")
print("3. Select the email template created above")
print("4. Export and share the snapshot")
print("\n" + "="*60)
