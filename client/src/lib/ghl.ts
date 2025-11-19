// GoHighLevel API Integration

export const GHL_TAGS = {
  SOURCE: {
    WEBSITE_LEAD: "website-lead",
    HERO_SECTION: "hero-section",
    CALCULATOR: "calculator",
    ADDRESS_MODAL: "address-modal",
  },
  CALCULATOR: {
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
  const GHL_API_KEY = "YOUR_GHL_API_KEY"; // Replace with actual API key

  try {
    const payload: any = {
      email,
      tags,
    };

    if (address) payload.address1 = address;
    if (phone) payload.phone = phone;
    if (name) payload.name = name;

    let response;
    
    if (contactId) {
      // Update existing contact
      response = await fetch(`${GHL_API_URL}${contactId}`, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${GHL_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    } else {
      // Create new contact
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
    return { contactId: data.contact?.id || contactId || "" };
  } catch (error) {
    console.error("Error submitting to GHL:", error);
    throw error;
  }
}

