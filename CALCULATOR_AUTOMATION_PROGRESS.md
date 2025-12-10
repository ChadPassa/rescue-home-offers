# Calculator Email Automation - Progress Update

## ✅ COMPLETED

### 1. Email Template Created via API
- **Template ID:** `6939e71f67a244c26d49b2c4`
- **Name:** "Calculator Completion Email"
- **Location:** Rescue Home Offers (yMCGMW3LHecaTwX5vU3v)
- **Created:** Dec 10, 2025

### 2. Email Content Includes:
- Personalized greeting with {{contact.first_name}}
- Summary of their calculator answers:
  - Situation (from tags)
  - Timeline (from tags)
  - Priority (from tags)
- Top 3 recommended solutions
- The Rescue Promise™
- "Your offers are on the way!" message

### 3. Placeholders Used:
- `{{contact.first_name}}` - First name
- `{{contact.custom_fields.calc_situation}}` - Situation answer
- `{{contact.custom_fields.calc_timeline}}` - Timeline answer
- `{{contact.custom_fields.calc_priority}}` - Priority answer
- `{{contact.custom_fields.solution_1_title}}` - Solution 1 title
- `{{contact.custom_fields.solution_1_description}}` - Solution 1 description
- `{{contact.custom_fields.solution_2_title}}` - Solution 2 title
- `{{contact.custom_fields.solution_2_description}}` - Solution 2 description
- `{{contact.custom_fields.solution_3_title}}` - Solution 3 title
- `{{contact.custom_fields.solution_3_description}}` - Solution 3 description

## ⏳ IN PROGRESS

### 4. Workflow Creation (Manual via Browser)
- **Status:** Creating workflow through GHL interface
- **Trigger:** Contact Tag Added → "offer-calculator"
- **Action:** Send Email → Template ID 6939e71f67a244c26d49b2c4
- **Location:** Currently on Workflows page in GHL

## 📋 NEXT STEPS

1. Click "Create Workflow" button
2. Set up trigger: Tag Added → "offer-calculator"
3. Add action: Send Email → Select template 6939e71f67a244c26d49b2c4
4. Activate workflow
5. Test by completing calculator
6. Export as snapshot (optional)

## 🔑 API TOKENS

### Rescue Home Offers (Location-Level)
- **Token:** `pit-0ec610fc-60ff-4c83-adb9-0d6bd907fcd2`
- **Location ID:** `yMCGMW3LHecaTwX5vU3v`
- **Scopes:** All 133 location-level scopes

### Flow Close Pro (Agency-Level)
- **Token:** `pit-f79fe76e-2a2d-4852-831a-430a490d5b8c`
- **Scopes:** All 21 agency-level scopes
- **Access:** All 3 sub-accounts

## 🎯 GOAL

Create complete automated email workflow that:
1. Triggers when someone completes the calculator
2. Sends personalized email with their answers
3. Includes The Rescue Promise™
4. Works seamlessly with existing calculator code
