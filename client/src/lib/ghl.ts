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

interface SubmitToGHLParams {
  email: string;
  address?: string;
  phone?: string;
  name?: string;
  tags: string[];
  contactId?: string;
}

export async function submitToGHL({
  email,
  address,
  phone,
  name,
  tags,
  contactId,
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

