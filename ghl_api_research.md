# GHL API Research - Email Templates & Workflows

## Email Template Creation API

**Endpoint:** `POST https://services.leadconnectorhq.com/emails/builder`

**Required Scope:** `emails/builder.write`

**Auth:** Private Integration Token (Sub-Account Token)

**Required Parameters:**
- `locationId` - The sub-account ID
- `type` - Type of template (html, folder, import, builder, blank)
- `importProvider` - If importing (mailchimp, active_campaign, kajabi)

**Optional Parameters:**
- `title` - Template title
- `name` - Template name
- `builderVersion` - "1" or "2" (default: "2")
- `updatedBy` - User ID
- `parentId` - Parent folder ID
- `templateDataUrl` - URL to template data
- `importURL` - URL to import from
- `templateSource` - Source (e.g., "template_library")
- `isPlainText` - Boolean

**Response:**
- `redirect` - Template ID
- `traceId` - Trace ID

## Next Steps

1. Create email template via API
2. Research workflow API endpoints
3. Create workflow with trigger and action

