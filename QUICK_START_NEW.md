# FlowClosePro Integration - Quick Start Guide (UPDATED)

## 🚀 What Was Done

All "OFFER" buttons on your website now open a modal form that:
1. Captures the user's **email address** and **property address**
2. Opens **FlowClosePro in a NEW WINDOW** (original page stays open)
3. (Optional) Sends lead data to **GoHighLevel API**

---

## ✅ What's Working Right Now

- ✅ Header "GET MY OFFER" button → Opens modal
- ✅ Hero "GET YOUR OFFER" button → Opens modal
- ✅ Bottom "GET MY INSTANT OFFER" button → Opens modal
- ✅ Modal form with address, email, and terms checkbox
- ✅ FlowClosePro opens in NEW WINDOW for real users
- ✅ Original page stays open

---

## ⚠️ What Needs Your Attention

### GHL API Integration (OPTIONAL)

The GoHighLevel API integration is currently **BYPASSED** because the API token returns a 401 error.

**To enable it:**

1. Get a valid GHL API token from your GoHighLevel account
2. Open `client/index.html`
3. Find line 108: `'Authorization': 'Bearer YOUR_TOKEN_HERE'`
4. Replace `YOUR_TOKEN_HERE` with your actual token
5. Uncomment lines 90-120 (remove the `//` and `/*` `*/`)
6. Rebuild: `pnpm run build`
7. Test the form submission

**If you don't need GHL integration:** The form will still work perfectly! It will just skip the API call and go straight to FlowClosePro.

---

## 📋 Testing Checklist

### Before Going Live

- [ ] Test all three "OFFER" buttons open the modal
- [ ] Fill out the form and submit
- [ ] Verify FlowClosePro opens in a NEW WINDOW
- [ ] Verify original page stays open
- [ ] (If GHL enabled) Check GHL dashboard for the lead
- [ ] Test on mobile devices
- [ ] Test on different browsers (Chrome, Firefox, Safari)

---

## 🔧 Deployment

### Option 1: Quick Deploy (Current Setup)

```bash
cd /home/ubuntu/rescue-home-offers
pnpm run build
PORT=3009 node dist/index.js
```

### Option 2: Production Deploy with PM2

```bash
cd /home/ubuntu/rescue-home-offers
pnpm run build
pm2 start dist/index.js --name rescue-home-offers -- --port 3009
pm2 save
```

---

## 🐛 Troubleshooting

### Modal doesn't open
- Check browser console for errors
- Ensure JavaScript is enabled
- Clear browser cache and reload

### Form won't submit
- Make sure all fields are filled
- Check that email format is valid
- Verify terms checkbox is checked

### FlowClosePro doesn't open
- Check that the address is entered correctly
- Verify FlowClosePro URL is correct in the code
- Test in a different browser

### GHL API returns 401 error
- Update the API token in `client/index.html` line 108
- Verify the token has correct permissions in GHL
- Check that the API endpoint URL is correct

---

## 📁 Files Modified

1. `client/index.html` - Modal form and submission logic
2. `client/src/components/Header.tsx` - Header button
3. `client/src/pages/Home.tsx` - Hero and bottom buttons
4. `client/src/hooks/useFlowClosePro.ts` - Disabled script loading

---

## 📞 Need Help?

Refer to the full `IMPLEMENTATION_REPORT.md` for detailed technical information.

---

**Status:** ✅ Ready to Deploy (GHL API optional)
