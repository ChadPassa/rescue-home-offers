# Calculator Email Automation Setup Guide

## Overview
This guide will help you set up the automated email that sends when someone completes the calculator on rescuehomeoffers.com.

---

## Step 1: Create the Email Template

1. **Go to:** Marketing → Email → Templates
2. **Click:** "New Template"
3. **Choose:** "Email Builder" (not HTML)
4. **Name it:** "Calculator Completion - Thank You"
5. **Design the email** with these sections:
   - **Header:** "Your Personalized Home Solutions"
   - **Body:** Thank you message
   - **Calculator Results:** Use custom fields:
     - `{{contact.first_name}}`
     - Their answers (we'll add these as custom fields)
   - **Top 3 Solutions:** List their recommended solutions
   - **The Rescue Promise™:** Copy from website
   - **Next Steps:** "Your offers are on the way!"
   - **CTA Button:** Link to website
6. **Save Template**

### Email Template HTML
I've created a complete HTML template for you at:
`/home/ubuntu/rescue-home-offers/calculator_email_template.html`

You can either:
- **Option A:** Copy/paste this HTML into GHL Email Builder
- **Option B:** Recreate it manually in the visual editor

---

## Step 2: Create Custom Fields (if needed)

Go to Settings → Custom Fields and create these fields for contacts:
- `calc-situation` (Text)
- `calc-timeline` (Text)
- `calc-priority` (Text)
- `solution-1`, `solution-2`, `solution-3` (Text)
- `solution-1-desc`, `solution-2-desc`, `solution-3-desc` (Text)

**Note:** The calculator already sends tags, so this step is optional. You can use tags instead of custom fields.

---

## Step 3: Create the Workflow

1. **Go to:** Automation → Workflows
2. **Click:** "Create Workflow"
3. **Name it:** "Calculator Completion Email"
4. **Description:** "Sends thank you email when someone completes the calculator"

### Workflow Steps:

#### Trigger:
- **Type:** Contact Tag Added
- **Tag:** `offer-calculator`

#### Action 1: Send Email
- **Type:** Send Email
- **Template:** Select "Calculator Completion - Thank You"
- **From Name:** "Rescue Home Offers" (or your name)
- **From Email:** Your email address
- **Subject:** "Your Personalized Home Solutions Are Ready!"

#### Optional Action 2: Wait
- **Wait:** 1 hour

#### Optional Action 3: Send SMS (if you want)
- **Message:** "Hi {{contact.first_name}}, we're working on your personalized offers. Check your email for details!"

5. **Save Workflow**
6. **Activate Workflow** (toggle switch to ON)

---

## Step 4: Test the Workflow

1. Go to rescuehomeoffers.com
2. Complete the calculator with your email
3. Check your email inbox for the automated email
4. Verify all the information is correct

---

## What's Already Working

✅ **Email Gate:** Deployed and live on website
✅ **GoHighLevel Integration:** Calculator sends data to GHL
✅ **Tags:** All calculator responses are tagged:
   - `offer-calculator` (source)
   - Situation tags (e.g., "I'm facing a financial challenge")
   - Timeline tags (e.g., "0-60 DAYS - I need to move FAST")
   - Priority tags (e.g., "SPEED & CERTAINTY")
✅ **Duplicate Prevention:** Updates existing contacts instead of creating duplicates

---

## Troubleshooting

**Email not sending?**
- Check that workflow is activated
- Verify the trigger tag matches: `offer-calculator`
- Check email template is published
- Look in GHL Contacts to see if the tag was added

**Missing calculator data?**
- The calculator sends tags, not custom fields
- You can see all tags in the contact's profile
- Use tags in email template like: `{{contact.tags}}`

**Want to customize the email?**
- Edit the template in Marketing → Email → Templates
- Changes will apply to all future emails automatically

---

## Next Steps

Once this is working, you can:
1. Add more sophisticated follow-up sequences
2. Create different emails based on their answers (using IF/THEN in workflow)
3. Assign leads to team members based on urgency
4. Send SMS reminders
5. Track conversion rates

---

## Support

If you need help, the HTML template is ready to use at:
`/home/ubuntu/rescue-home-offers/calculator_email_template.html`

All code changes are committed to GitHub for backup.
