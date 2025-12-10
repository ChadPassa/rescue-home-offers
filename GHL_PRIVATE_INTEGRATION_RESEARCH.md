# GoHighLevel Private Integrations Research

## Key Findings

### What is Private Integrations?
- **Purpose**: Build custom integrations between HighLevel and third-party apps
- **Access**: Provides API v2.0 access (state-of-the-art)
- **Security**: Allows restricting scopes/permissions
- **Type**: Static OAuth2 Access Tokens

### Advantages over API Keys (v1)
✅ **More Secure**: Restrict scopes/permissions
✅ **API v2.0**: More powerful APIs, more features
✅ **Better maintained**: v1 has reached end-of-life

### How to Create Private Integration

**Step 1**: Navigate to Settings → Private Integrations
**Step 2**: Click "Create new Integration"
**Step 3**: Name and description
**Step 4**: Select scopes/permissions needed
**Step 5**: Copy the generated token

### Where to Find It
- **Agency Level**: Settings → Private Integrations
- **Sub-Account Level**: Settings → Private Integrations
- **Note**: Must be enabled in Labs first if not visible

### Using the Token

```bash
curl --request POST \
  --url https://services.leadconnectorhq.com/contacts/ \
  --header 'Authorization: Bearer <PRIVATE_INTEGRATION_TOKEN>' \
  --header 'Content-Type: application/json' \
  --header 'Version: 2021-07-28' \
  --data '{...}'
```

### API v2 Capabilities

Based on the API documentation sidebar, v2 API includes:
- ✅ Workflows API
- ✅ Email API
- ✅ Contacts API
- ✅ Campaigns API
- ✅ Conversations API
- ✅ Forms API
- ✅ And many more...

### Next Steps for Our Use Case

1. Create Private Integration in GHL Settings
2. Select scopes: `workflows.write`, `campaigns.write`, `contacts.write`
3. Get the API token
4. Use Python script to:
   - Create email template via API
   - Create workflow via API
   - Set up trigger (tag added)

## Important Notes

- **Security**: Only share token with trusted parties
- **Rotation**: Recommended every 90 days
- **Permissions**: Can be edited without changing token
- **Deletion**: Can delete when no longer needed
