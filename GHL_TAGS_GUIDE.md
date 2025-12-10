# GoHighLevel Tags Guide - Calculator Tracking

## How It Works

**YES, the calculator IS tracking all 3 answers as separate tags!** Here's exactly how it works:

---

## What Gets Sent to GoHighLevel

When someone completes the calculator and submits their email, here's what gets sent:

### Example Submission

**User answers:**
1. Question 1: "I'm facing a financial challenge"
2. Question 2: "0-60 days"
3. Question 3: "Speed & certainty"

**Tags sent to GHL:**
```
✅ offer-calculator
✅ calc-situation-financial
✅ calc-timeline-0-60-days
✅ calc-priority-speed
```

**Contact created in GHL:**
- Name: John Smith
- Email: john@example.com
- Tags: All 4 tags above

---

## Complete Tag Mapping

### Question 1: Situation

| User Clicks | Tag Sent to GHL |
|-------------|-----------------|
| "I'm facing a financial challenge" | `calc-situation-financial` |
| "My home needs major repairs" | `calc-situation-property` |
| "Both - I need to sell fast AND my home needs work" | `calc-situation-financial` + `calc-situation-property` (2 tags!) |
| "Neither - My home is fine, I just want the best deal" | *(no situation tag)* |

### Question 2: Timeline

| User Clicks | Tag Sent to GHL |
|-------------|-----------------|
| "0-60 days" | `calc-timeline-0-60-days` |
| "60-90 days" | `calc-timeline-60-120-days` |
| "90+ days" | `calc-timeline-120-plus-days` |

### Question 3: Priority

| User Clicks | Tag Sent to GHL |
|-------------|-----------------|
| "Speed & certainty" | `calc-priority-speed` |
| "Maximum value" | `calc-priority-value` |
| "Flexibility & options" | `calc-priority-flexibility` |

### Source Tag (Always Sent)

| Tag | Meaning |
|-----|---------|
| `offer-calculator` | Contact came from the calculator (not hero form, not other sources) |

---

## How to View Tags in GoHighLevel

### Step 1: Go to Contacts
1. Log into GoHighLevel
2. Click **Contacts** in the left sidebar
3. Find the contact by email or name

### Step 2: View Contact Tags
1. Click on the contact to open their profile
2. Look for the **Tags** section (usually near the top)
3. You should see all the tags listed

### Step 3: Filter by Tags
You can filter contacts by tags:
1. In Contacts view, click **Filter**
2. Select **Tags**
3. Choose the tag you want to filter by (e.g., `calc-priority-speed`)
4. See all contacts who selected "Speed & certainty"

---

## Example Use Cases

### Segment by Urgency
**Filter:** `calc-timeline-0-60-days`
- **Result:** All leads who need to sell in 0-60 days (URGENT!)
- **Action:** Assign to your fastest-response team member

### Segment by Situation
**Filter:** `calc-situation-financial`
- **Result:** All leads facing financial challenges
- **Action:** Send them info about foreclosure prevention, subject-to deals

### Segment by Priority
**Filter:** `calc-priority-value`
- **Result:** All leads who want maximum value
- **Action:** Send them info about Fix & List It, traditional listing

### Combine Filters
**Filter:** `calc-timeline-0-60-days` + `calc-situation-financial`
- **Result:** Urgent leads with financial challenges
- **Action:** Immediate follow-up with cash offer

---

## GHL Workflow Ideas

### Workflow 1: Auto-Assign Based on Timeline
```
IF contact has tag "calc-timeline-0-60-days"
THEN assign to "Urgent Team"
ELSE assign to "Standard Team"
```

### Workflow 2: Send Personalized Email
```
IF contact has tag "calc-priority-speed"
THEN send email "Fast Cash Offer - Close in 7 Days"

IF contact has tag "calc-priority-value"
THEN send email "Get Top Dollar - Fix & List It Program"
```

### Workflow 3: SMS Follow-Up
```
IF contact has tag "calc-situation-financial"
THEN send SMS "We can help stop foreclosure. Call us: (702) XXX-XXXX"
```

---

## Troubleshooting

### "I don't see the tags in GHL"

**Check these:**

1. **Test the calculator yourself**
   - Go to https://rescuehomeoffers.com
   - Complete the calculator
   - Use a real email you can check
   - Look for the contact in GHL

2. **Check GHL API key**
   - Make sure the API key in Netlify environment variables is correct
   - Check that the API key has permission to create contacts and add tags

3. **Check browser console**
   - Open DevTools (F12)
   - Complete the calculator
   - Look for errors in the Console tab
   - You should see: "Successfully submitted to GHL: [contact-id]"

4. **Check GHL contact**
   - The contact might be created but tags might be in a different section
   - Some GHL accounts show tags under "Custom Fields" instead of "Tags"

---

## Code Reference

The tags are defined in `/client/src/lib/ghl.ts`:

```typescript
export const GHL_TAGS = {
  SOURCE: {
    OFFER_CALCULATOR: "offer-calculator",
  },
  CALCULATOR: {
    SITUATION_FINANCIAL: "calc-situation-financial",
    SITUATION_PROPERTY: "calc-situation-property",
    
    TIMELINE_0_60: "calc-timeline-0-60-days",
    TIMELINE_60_120: "calc-timeline-60-120-days",
    TIMELINE_120_PLUS: "calc-timeline-120-plus-days",
    
    PRIORITY_SPEED: "calc-priority-speed",
    PRIORITY_VALUE: "calc-priority-value",
    PRIORITY_FLEXIBILITY: "calc-priority-flexibility",
  },
}
```

The tags are sent in `/client/src/components/Calculator.tsx` (lines 91-113):

```typescript
const getGHLTags = () => {
  const tags = [GHL_TAGS.SOURCE.OFFER_CALCULATOR];
  
  // Add situation tag
  if (situation === "financial") tags.push(GHL_TAGS.CALCULATOR.SITUATION_FINANCIAL);
  if (situation === "repairs") tags.push(GHL_TAGS.CALCULATOR.SITUATION_PROPERTY);
  if (situation === "both") {
    tags.push(GHL_TAGS.CALCULATOR.SITUATION_FINANCIAL);
    tags.push(GHL_TAGS.CALCULATOR.SITUATION_PROPERTY);
  }
  
  // Add timeline tag
  if (timeline === "0-60") tags.push(GHL_TAGS.CALCULATOR.TIMELINE_0_60);
  if (timeline === "60-90") tags.push(GHL_TAGS.CALCULATOR.TIMELINE_60_120);
  if (timeline === "90+") tags.push(GHL_TAGS.CALCULATOR.TIMELINE_120_PLUS);
  
  // Add priority tag
  if (priority === "speed") tags.push(GHL_TAGS.CALCULATOR.PRIORITY_SPEED);
  if (priority === "value") tags.push(GHL_TAGS.CALCULATOR.PRIORITY_VALUE);
  if (priority === "flexibility") tags.push(GHL_TAGS.CALCULATOR.PRIORITY_FLEXIBILITY);
  
  return tags;
};
```

---

## Summary

✅ **All 3 calculator answers are tracked as separate tags**  
✅ **Tags are automatically sent to GoHighLevel**  
✅ **You can filter and segment contacts by any tag**  
✅ **You can build workflows based on tags**  

**The data IS being captured! Check your GHL contacts to see the tags.**
