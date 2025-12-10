# 🔑 GoHighLevel API - Complete Setup Guide

**Date:** December 10, 2025  
**Owner:** Chad Passa (chad@chadpassa.com)  
**Agency:** Flow Close Pro

---

## 🎯 API TOKENS

### Agency-Level Token (ALL Sub-Accounts)
```
pit-f79fe76e-2a2d-4852-831a-430a490d5b8c
```

**Access:** All 3 sub-accounts + agency-level operations  
**Scopes:** 21 agency-level scopes (full permissions)  
**Use for:** Managing all sub-accounts, bulk operations, agency settings

---

### Rescue Home Offers Token (Location-Specific)
```
pit-0ec610fc-60ff-4c83-adb9-0d6bd907fcd2
```

**Access:** Rescue Home Offers sub-account ONLY  
**Scopes:** 133 location-level scopes (full permissions)  
**Use for:** Calculator automation, contact management, workflows

---

## 📍 YOUR 3 SUB-ACCOUNTS

### 1. Chad Passa LLC
- **Location ID:** `cZ77If8UskKmtSlFBzAo`
- **Website:** chadpassa.com
- **Address:** 540 Pear Lake St., Las Vegas, NV 89138
- **Email:** chad@chadpassa.com
- **Phone:** +12084302423
- **Private Token:** Use agency token `pit-f79fe76e-2a2d-4852-831a-430a490d5b8c`

### 2. Flow Close Pro
- **Location ID:** `QvJQThUJwXM8PzRRg6Gy`
- **Address:** 540 Pear Lake St., Las Vegas, NV 89138
- **Email:** chad@chadpassa.com
- **Phone:** +12084302423
- **Private Token:** Use agency token `pit-f79fe76e-2a2d-4852-831a-430a490d5b8c`

### 3. Rescue Home Offers (Home of the Second Opinion)
- **Location ID:** `yMCGMW3LHecaTwX5vU3v`
- **Website:** www.rescuehomeoffers.com
- **Address:** 540 Pear Lake St., Las Vegas, NV 89138
- **Email:** chad@chadpassa.com
- **Phone:** +12084302423
- **Private Token:** `pit-0ec610fc-60ff-4c83-adb9-0d6bd907fcd2` (dedicated token with 133 scopes)

---

## 🚀 CALCULATOR AUTOMATION (Rescue Home Offers)

### What's Been Completed:

✅ **Email Gate Deployed** - Live on rescuehomeoffers.com  
✅ **GHL Integration** - Sends contacts with tags to GoHighLevel  
✅ **Duplicate Prevention** - Updates existing contacts instead of creating duplicates  
✅ **Tags Implemented** - Sends bold text from each answer as tags  

### Tags Being Sent:

**Source Tag:**
- `offer-calculator`

**Question 1 Tags (Situation):**
- `I'm facing a financial challenge`
- `My home needs major repairs`
- `Both - I need to sell fast AND my home needs work`
- `Neither - My home is fine, I just want the best deal`

**Question 2 Tags (Timeline):**
- `0-60 DAYS - I need to move FAST`
- `60-90 DAYS - I have some flexibility`
- `90+ DAYS - I want to maximize my profit`

**Question 3 Tags (Priority):**
- `SPEED & CERTAINTY`
- `MAXIMUM VALUE`
- `AVOID REPAIRS`
- `FLEXIBILITY`

### What You Need to Do:

**Set up the email workflow in GoHighLevel:**

1. Go to **Automation → Workflows** in GHL
2. Click **Create New Workflow**
3. Name it: "Calculator Completion Email"
4. **Trigger:** Contact Tag Added → Select "offer-calculator"
5. **Action:** Send Email
   - Create new email template
   - Copy/paste the HTML from `calculator_email_template.html`
   - Subject: "Your Personalized Home Solutions - We're Working on Your Offers!"
6. **Save and Activate**

**Detailed instructions:** See `CALCULATOR_WORKFLOW_SETUP_GUIDE.md`

---

## 📋 CODE CHANGES DEPLOYED

### Files Modified:
- `client/src/components/Calculator.tsx` - Added email gate (step 3)
- `client/src/lib/ghl.ts` - Added tags, duplicate prevention
- `client/src/components/Calculator.tsx` - Updated email gate copy

### Git Commits:
- Latest commit with all changes
- Backup file created: `Calculator-backup-before-email-gate.tsx`

### Deployed To:
- **Production:** https://rescuehomeoffers.com
- **Netlify:** Auto-deployed from GitHub

---

## 🔐 SECURITY

**⚠️ KEEP THESE TOKENS SECRET!**

- Never commit to GitHub
- Never share publicly
- Store in environment variables when using in code
- Regenerate if compromised (Settings → Private Integrations in GHL)

---

## 📚 API DOCUMENTATION

**Base URL:** `https://services.leadconnectorhq.com`  
**API Version:** `2021-07-28` (required header)  
**Docs:** https://marketplace.gohighlevel.com/docs

### Example API Call:
```bash
curl -X GET "https://services.leadconnectorhq.com/contacts/" \
  -H "Authorization: Bearer pit-f79fe76e-2a2d-4852-831a-430a490d5b8c" \
  -H "Version: 2021-07-28"
```

---

## 📁 FILES IN THIS PROJECT

- `GHL_API_COMPLETE_SETUP.md` - This file (complete reference)
- `GHL_API_TOKENS_AND_ACCOUNTS.md` - Detailed token documentation
- `CALCULATOR_WORKFLOW_SETUP_GUIDE.md` - Step-by-step workflow setup
- `calculator_email_template.html` - Email template (ready to use)
- `EMAIL_GATE_IMPLEMENTATION.md` - Technical implementation details
- `GHL_TAGS_GUIDE.md` - Complete tag reference

---

## ✅ WHAT'S WORKING NOW

1. ✅ Calculator email gate is LIVE on rescuehomeoffers.com
2. ✅ Contacts are being sent to GoHighLevel with tags
3. ✅ Duplicate prevention is working (updates existing contacts)
4. ✅ All calculator responses are captured as tags
5. ✅ Email gate encourages using same email for tracking

## 🎯 NEXT STEP

**Set up the email workflow in GHL** (5 minutes) - Follow the guide in `CALCULATOR_WORKFLOW_SETUP_GUIDE.md`

---

**Questions?** Contact Manus or check the documentation files.

**Last Updated:** December 10, 2025
