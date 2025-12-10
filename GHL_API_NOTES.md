# GoHighLevel API Notes

## Email Template Creation

**Endpoint:** `POST https://services.leadconnectorhq.com/emails/builder`

**Required Headers:**
- `Authorization: Bearer pit-0ec610fc-60ff-4c83-adb9-0d6bd907fcd2`
- `Version: 2021-07-28`
- `Content-Type: application/json`

**Required Body Parameters:**
- `locationId`: Sub-account ID (need to get this)
- `type`: "builder" (for Email Builder templates)
- `builderVersion`: "2"
- `name`: Template name
- `title`: Template title

**Optional Parameters:**
- `templateDataUrl`: URL to template JSON data
- `isPlainText`: false

**Response:**
- Returns template ID in `redirect` field

## Next Steps:
1. Get locationId for Rescue Home Offers sub-account
2. Create HTML email template with calculator results
3. Upload template via API
4. Create workflow to trigger on "offer-calculator" tag

## Location ID
Need to find: Rescue Home Offers location ID
API endpoint: GET /locations or check GHL dashboard
