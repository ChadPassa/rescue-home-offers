// GoHighLevel API Integration

export const GHL_TAGS = {
  SOURCE: {
    WEBSITE_LEAD: "website-lead",
    HERO_SECTION: "hero-section",
    CALCULATOR: "calculator",
    OFFER_CALCULATOR: "offer-calculator",
    ADDRESS_MODAL: "address-modal",
  },
  CALCULATOR: {
    // Technical tags
    SITUATION_FINANCIAL: "calc-situation-financial",
    SITUATION_PROPERTY: "calc-situation-property",
    SITUATION_LIFE_EVENT: "calc-situation-life-event",
    SITUATION_LANDLORD: "calc-situation-landlord",
    
    TIMELINE_0_60: "calc-timeline-0-60-days",
    TIMELINE_60_120: "calc-timeline-60-120-days",
    TIMELINE_120_PLUS: "calc-timeline-120-plus-days",
    TIMELINE_FLEXIBLE: "calc-timeline-flexible",
    
    PRIORITY_SPEED: "calc-priority-speed",
    PRIORITY_VALUE: "calc-priority-value",
    PRIORITY_FLEXIBILITY: "calc-priority-flexibility",
    PRIORITY_STAY: "calc-priority-stay",
    
    // Bold main text tags (what the user actually clicked)
    LABEL_FINANCIAL_CHALLENGE: "I'm facing a financial challenge",
    LABEL_NEEDS_REPAIRS: "My home needs major repairs",
    LABEL_BOTH: "Both - I need to sell fast AND my home needs work",
    LABEL_NEITHER: "Neither - My home is fine, I just want the best deal",
    
    LABEL_0_60_DAYS: "0-60 DAYS - I need to move FAST",
    LABEL_60_90_DAYS: "60-90 DAYS - I have some flexibility",
    LABEL_90_PLUS_DAYS: "90+ DAYS - I want to maximize my profit",
    
    LABEL_SPEED_CERTAINTY: "SPEED & CERTAINTY",
    LABEL_MAXIMUM_VALUE: "MAXIMUM VALUE",
    LABEL_AVOID_REPAIRS: "AVOID REPAIRS",
    LABEL_FLEXIBILITY: "FLEXIBILITY",
  },
  SOLUTIONS: {
    CASH_OFFER: "cash-offer",
    SUBJECT_TO: "subject-to-agreement",
    SELLER_FINANCE: "seller-financing",
    LEASE_OPTION: "lease-option",
    SELL_LEASEBACK: "sell-leaseback",
    LOAN_MODIFICATION: "loan-modification",
    SHORT_SALE: "short-sale-negotiation",
    DEED_LIEU: "deed-in-lieu",
    BANKRUPTCY_PROTECTION: "bankruptcy-protection",
    FORBEARANCE: "forbearance-agreement",
    EQUITY_PARTNERSHIP: "equity-partnership",
    REVERSE_MORTGAGE: "reverse-mortgage",
    RENTAL_CONVERSION: "rental-conversion",
  },
};

// GHL Custom Field IDs - Map field names to their GHL IDs
const GHL_CUSTOM_FIELD_IDS: Record<string, string> = {
  "calc_situation": "mh7Pgp850gaa76vZAsMq",
  "calc_timeline": "YlIWwENCKUH0KpDZc7KB",
  "calc_priority": "aJuR7VrT9RZmrZsnKgjh",
  "solution_1_title": "86CvpyXCsOWmqJlQR1kH",
  "solution_1_description": "7KzKE0YzWRcBsWbIv6PO",
  "solution_2_title": "tVUgd6iIUNwV6rZ8UZah",
  "solution_2_description": "jJiPd9R8YwSJ3BxMrEl1",
  "solution_3_title": "vZQneJD7329FFQva0tlq",
  "solution_3_description": "sU7YQfQ4doGzpWr5ZpR8",
};

// Convert custom fields object to GHL API format (array of {id, value})
function convertCustomFieldsToGHLFormat(customFields: Record<string, string>): Array<{id: string; value: string}> {
  const result: Array<{id: string; value: string}> = [];
  
  for (const [fieldName, value] of Object.entries(customFields)) {
    const fieldId = GHL_CUSTOM_FIELD_IDS[fieldName];
    if (fieldId && value) {
      result.push({ id: fieldId, value });
    } else {
      console.warn(`Unknown custom field: ${fieldName} (no ID mapping found)`);
    }
  }
  
  return result;
}

interface SubmitToGHLParams {
  email: string;
  address?: string;
  phone?: string;
  name?: string;
  tags: string[];
  contactId?: string;
  customFields?: Record<string, string>;
}

export async function submitToGHL({
  email,
  address,
  phone,
  name,
  tags,
  contactId,
  customFields,
}: SubmitToGHLParams): Promise<{ contactId: string }> {
  const GHL_API_URL = "https://rest.gohighlevel.com/v1/contacts/";
  const GHL_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2NhdGlvbl9pZCI6InlNQ0dNVzNMSGVjYVR3WDV2VTN2IiwiY29tcGFueV9pZCI6Ikx1RDAySXMyQ1hMOTFGM05FUnJwIiwidmVyc2lvbiI6MSwiaWF0IjoxNzAxOTA0Njc5NjY5LCJzdWIiOiJ1c2VyX2lkIn0.z4OSBS4E8WPRx18FSKXpq6yLfJapeEwkfaCtwGqWE6c";

  try {
    let existingContactId = contactId;
    
    // If no contactId provided, search for existing contact by email
    if (!existingContactId) {
      try {
        const searchResponse = await fetch(`${GHL_API_URL}lookup?email=${encodeURIComponent(email)}`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${GHL_API_KEY}`,
            "Content-Type": "application/json",
          },
        });
        
        if (searchResponse.ok) {
          const searchData = await searchResponse.json();
          if (searchData.contacts && searchData.contacts.length > 0) {
            existingContactId = searchData.contacts[0].id;
            console.log("Found existing contact:", existingContactId);
          }
        }
      } catch (searchError) {
        console.log("No existing contact found, will create new one");
      }
    }
    
    const payload: any = {
      email,
      tags,
    };

    if (address) payload.address1 = address;
    if (phone) payload.phone = phone;
    if (name) payload.name = name;
    
    // Convert custom fields to GHL API format (array of {id, value})
    if (customFields) {
      payload.customField = convertCustomFieldsToGHLFormat(customFields);
      console.log("Custom fields being sent:", payload.customField);
    }

    let response;
    
    if (existingContactId) {
      // Update existing contact (merge tags)
      console.log("Updating existing contact with new tags");
      response = await fetch(`${GHL_API_URL}${existingContactId}`, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${GHL_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    } else {
      // Create new contact
      console.log("Creating new contact");
      response = await fetch(GHL_API_URL, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${GHL_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    }

    if (!response.ok) {
      throw new Error(`GHL API error: ${response.statusText}`);
    }

    const data = await response.json();
    return { contactId: data.contact?.id || existingContactId || "" };
  } catch (error) {
    console.error("Error submitting to GHL:", error);
    throw error;
  }
}


interface SendCalculatorEmailParams {
  contactId: string;
  email: string;
  firstName: string;
  situation: string;
  timeline: string;
  priority: string;
  solutions: Array<{title: string; description: string}>;
}

export async function sendCalculatorEmail({
  contactId,
  email,
  firstName,
  situation,
  timeline,
  priority,
  solutions,
}: SendCalculatorEmailParams): Promise<boolean> {
  const GHL_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2NhdGlvbl9pZCI6InlNQ0dNVzNMSGVjYVR3WDV2VTN2IiwiY29tcGFueV9pZCI6Ikx1RDAySXMyQ1hMOTFGM05FUnJwIiwidmVyc2lvbiI6MSwiaWF0IjoxNzAxOTA0Njc5NjY5LCJzdWIiOiJ1c2VyX2lkIn0.z4OSBS4E8WPRx18FSKXpq6yLfJapeEwkfaCtwGqWE6c";
  const EDITABLE_EMAIL_TEMPLATE_ID = "6939e71f67a244c26d49b2c4"; // Calculator Completion Email - EDITABLE
  
  try {
    // Send email using GHL template (editable in GHL UI)
    // Template ID: 6939e71f67a244c26d49b2c4 - "Calculator Completion Email - EDITABLE"
    const response = await fetch("https://services.leadconnectorhq.com/conversations/messages", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GHL_API_KEY}`,
        "Content-Type": "application/json",
        "Version": "2021-04-15",
      },
      body: JSON.stringify({
        type: "Email",
        contactId,
        templateId: EDITABLE_EMAIL_TEMPLATE_ID,
        subject: `Your Personalized Home Solutions Are Ready, ${firstName}!`,
        emailFrom: "info@rescuehomeoffers.com",
      }),
    });
    
    if (!response.ok) {
      console.error("Failed to send email:", await response.text());
      return false;
    }
    
    console.log("✓ Calculator completion email sent successfully");
    return true;
  } catch (error) {
    console.error("Error sending calculator email:", error);
    return false;
  }
}

// NOTE: Email template is now managed in GHL (Template ID: 6939e71f67a244c26d49b2c4)
// To edit the email, go to GHL > Marketing > Email Templates > "Calculator Completion Email - EDITABLE"
// The template uses custom fields that are automatically populated when the contact is created
