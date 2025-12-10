# GoHighLevel API Tokens & Sub-Accounts

**Date Created:** December 10, 2025  
**Agency:** Flow Close Pro  
**Owner:** Chad Passa (chad@chadpassa.com)

---

## 🔑 API Tokens

### 1. Agency-Level Private Integration Token
**Token:** `pit-f79fe76e-2a2d-4852-831a-430a490d5b8c`  
**Name:** Flow Close Pro - Agency API - Full Access  
**Scope:** Agency-level (all 21 scopes)  
**Access:** ALL sub-accounts under Flow Close Pro  

**Capabilities:**
- ✅ View/Edit all locations (sub-accounts)
- ✅ View/Edit all users
- ✅ View/Edit SaaS subscriptions
- ✅ View/Edit snapshots
- ✅ View/Edit custom menu links
- ✅ Access to all 21 agency-level API scopes

**Use this token for:**
- Managing multiple sub-accounts
- Agency-level operations
- Bulk operations across all locations

---

### 2. Rescue Home Offers Sub-Account Token
**Token:** `pit-0ec610fc-60ff-4c83-adb9-0d6bd907fcd2`  
**Name:** Calculator Email Automation - Full Access  
**Scope:** Location-level (all 133 scopes)  
**Access:** Rescue Home Offers sub-account ONLY  

**Capabilities:**
- ✅ Full access to all 133 location-level API scopes
- ✅ Create/manage contacts, workflows, email templates
- ✅ Access to all features within Rescue Home Offers location

**Use this token for:**
- Rescue Home Offers specific automations
- Calculator email workflow
- Contact management for rescuehomeoffers.com

---

## 📍 Sub-Accounts (Locations)

### 1. Rescue Home Offers (Home of the Second Opinion)
**Location ID:** `yMCGMW3LHecaTwX5vU3v`  
**Website:** www.rescuehomeoffers.com  
**Address:** 540 Pear Lake St., Las Vegas, NV 89138  
**Timezone:** America/Los_Angeles  
**Email:** chad@chadpassa.com  
**Phone:** +12084302423  
**Date Added:** 2023-12-06

**Private Integration Token:** `pit-0ec610fc-60ff-4c83-adb9-0d6bd907fcd2` (full 133 scopes)

---

### 2. Chad Passa LLC
**Location ID:** `lMjCCgqOlCYPpYOAZWuS`  
**Website:** chadpassa.com  
**Address:** 540 Pear Lake St., Las Vegas, NV 89138  
**Timezone:** America/Los_Angeles  
**Email:** chad@chadpassa.com  
**Phone:** +12084302423  
**Date Added:** 2023-12-06

**Private Integration Token:** Not yet created (use agency token for now)

---

## 🔐 Security Notes

1. **Keep these tokens SECRET** - They provide full access to your GHL account
2. **Never commit to GitHub** - These tokens are saved locally only
3. **Regenerate if compromised** - You can regenerate tokens in GHL Settings → Private Integrations
4. **Use environment variables** - When using in code, store in `.env` files (not in git)

---

## 📚 API Documentation

**Base URL:** `https://services.leadconnectorhq.com`  
**API Version Header:** `Version: 2021-07-28`  
**Documentation:** https://marketplace.gohighlevel.com/docs

**Example API Call:**
```bash
curl -X GET "https://services.leadconnectorhq.com/contacts/" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -H "Version: 2021-07-28"
```

---

## 🎯 Next Steps

### For Rescue Home Offers Calculator Automation:
1. Follow the setup guide in `CALCULATOR_WORKFLOW_SETUP_GUIDE.md`
2. Use the email template in `calculator_email_template.html`
3. Use token: `pit-0ec610fc-60ff-4c83-adb9-0d6bd907fcd2`

### For Agency-Level Operations:
1. Use token: `pit-f79fe76e-2a2d-4852-831a-430a490d5b8c`
2. Can access all 3 sub-accounts
3. Can create new locations, manage users, etc.

---

**Last Updated:** December 10, 2025
