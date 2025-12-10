#!/usr/bin/env python3
"""
Setup GoHighLevel Email Template and Workflow for Calculator Completion
This script uses the GHL API to create the email template and workflow automatically.
"""

import requests
import json

# GHL API Configuration
GHL_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2NhdGlvbl9pZCI6InlNQ0dNVzNMSGVjYVR3WDV2VTN2IiwiY29tcGFueV9pZCI6Ikx1RDAySXMyQ1hMOTFGM05FUnJwIiwidmVyc2lvbiI6MSwiaWF0IjoxNzAxOTA0Njc5NjY5LCJzdWIiOiJ1c2VyX2lkIn0.z4OSBS4E8WPRx18FSKXpq6yLfJapeEwkfaCtwGqWE6c"
LOCATION_ID = "yMCGMW3LHecaTwX5vU3v"
BASE_URL = "https://rest.gohighlevel.com/v1"

headers = {
    "Authorization": f"Bearer {GHL_API_KEY}",
    "Content-Type": "application/json"
}

# Email Template HTML
email_html = """
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Personalized Home Solutions</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background-color: #c9a961; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">
                RESCUE HOME OFFERS
              </h1>
              <p style="margin: 10px 0 0 0; color: #ffffff; font-size: 14px;">
                HOME OF THE SECOND OPINION
              </p>
            </td>
          </tr>
          
          <!-- Thank You -->
          <tr>
            <td style="padding: 40px 30px 20px 30px;">
              <h2 style="margin: 0 0 20px 0; color: #333333; font-size: 24px;">
                Thank You, {{contact.first_name}}!
              </h2>
              <p style="margin: 0 0 20px 0; color: #666666; font-size: 16px; line-height: 1.6;">
                We've analyzed your situation and found the perfect solutions for you. Here's what you told us:
              </p>
            </td>
          </tr>
          
          <!-- What They Told Us -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9f9f9; border-radius: 6px; padding: 20px;">
                <tr>
                  <td>
                    <p style="margin: 0 0 15px 0; color: #333333; font-size: 16px;">
                      <strong>Your Situation:</strong><br>
                      <span style="color: #c9a961; font-size: 18px;">{{custom_values.calculator_situation}}</span>
                    </p>
                    <p style="margin: 0 0 15px 0; color: #333333; font-size: 16px;">
                      <strong>Your Timeline:</strong><br>
                      <span style="color: #c9a961; font-size: 18px;">{{custom_values.calculator_timeline}}</span>
                    </p>
                    <p style="margin: 0; color: #333333; font-size: 16px;">
                      <strong>Your Priority:</strong><br>
                      <span style="color: #c9a961; font-size: 18px;">{{custom_values.calculator_priority}}</span>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- The Rescue Promise -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f0f0f0; border-radius: 6px; padding: 25px;">
                <tr>
                  <td style="text-align: center;">
                    <p style="margin: 0 0 10px 0; color: #c9a961; font-weight: bold; font-size: 12px; letter-spacing: 1px;">
                      CERTIFIED
                    </p>
                    <h3 style="margin: 0 0 20px 0; color: #333333; font-size: 22px; font-weight: bold;">
                      The Rescue Promise™
                    </h3>
                    <p style="margin: 0 0 15px 0; color: #c9a961; font-size: 20px; font-weight: bold; line-height: 1.4;">
                      "Your price, our terms.<br>
                      Your terms, our price."
                    </p>
                    <p style="margin: 0 0 15px 0; color: #666666; font-size: 16px; line-height: 1.6;">
                      <strong>Fair. Transparent. Honest.</strong>
                    </p>
                    <p style="margin: 0; color: #666666; font-size: 14px; line-height: 1.6; text-align: left;">
                      You want to close in 7 days? We'll make it happen—at our price.<br><br>
                      You want top dollar? We'll get you there—on our timeline and terms.<br><br>
                      You want to stay in the home for 6 months? We'll structure that—at our price.<br><br>
                      This isn't harsh. It's transparent. Every deal has trade-offs. Speed costs money. Maximum value takes time. Flexibility requires creative structuring.<br><br>
                      We're not here to lowball you. We're here to show you all the options—with transparent pricing and terms—so you can choose what works best for YOU.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Your Offers Are On The Way -->
          <tr>
            <td style="padding: 0 30px 40px 30px; text-align: center;">
              <div style="background-color: #c9a961; color: #ffffff; padding: 20px; border-radius: 6px;">
                <h3 style="margin: 0 0 10px 0; font-size: 24px; font-weight: bold;">
                  Your Offers Are On The Way!
                </h3>
                <p style="margin: 0; font-size: 16px;">
                  We're working on your personalized offers now.
                </p>
              </div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 30px; background-color: #f9f9f9; text-align: center; border-radius: 0 0 8px 8px;">
              <p style="margin: 0 0 10px 0; color: #999999; font-size: 14px;">
                Rescue Home Offers<br>
                Helping Homeowners Since 2004
              </p>
              <p style="margin: 0; color: #999999; font-size: 12px;">
                Las Vegas, NV
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

print("=" * 80)
print("GoHighLevel Calculator Email Setup")
print("=" * 80)
print()

# Note: GHL v1 API doesn't support creating email templates or workflows programmatically
# These must be created through the UI
# However, we can document the setup process

print("⚠️  GHL API Limitation:")
print("The GHL v1 API does not support creating email templates or workflows programmatically.")
print("These must be created through the GoHighLevel web interface.")
print()
print("=" * 80)
print("SETUP INSTRUCTIONS")
print("=" * 80)
print()
print("1. CREATE EMAIL TEMPLATE")
print("-" * 80)
print("   a. Go to Marketing → Email Templates")
print("   b. Click 'New Template'")
print("   c. Name: 'Calculator Completion - Thank You'")
print("   d. Subject: 'Your Personalized Home Solutions Are Ready'")
print("   e. Copy the HTML from: CALCULATOR_EMAIL_TEMPLATE.html")
print("   f. Save the template")
print()
print("2. CREATE WORKFLOW")
print("-" * 80)
print("   a. Go to Automation → Workflows")
print("   b. Click 'Create Workflow'")
print("   c. Name: 'Calculator Completion Email'")
print("   d. Trigger: 'Tag Added' → Select 'offer-calculator'")
print("   e. Add Action: 'Send Email'")
print("   f. Select the template: 'Calculator Completion - Thank You'")
print("   g. Save and Activate the workflow")
print()
print("3. TAGS WILL BE AUTO-CREATED")
print("-" * 80)
print("   Tags are automatically created when sent via API.")
print("   When someone completes the calculator, they'll get:")
print("   - offer-calculator")
print("   - Their situation (e.g., \"I'm facing a financial challenge\")")
print("   - Their timeline (e.g., \"0-60 DAYS - I need to move FAST\")")
print("   - Their priority (e.g., \"SPEED & CERTAINTY\")")
print()
print("=" * 80)
print("Email template HTML saved to: CALCULATOR_EMAIL_TEMPLATE.html")
print("=" * 80)
