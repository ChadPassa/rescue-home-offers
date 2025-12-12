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
    if (customFields) payload.customField = customFields;

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

/* REMOVED: buildCalculatorEmailHtml function
   Email template is now editable in GHL UI for easy updates without code changes

function buildCalculatorEmailHtml_DEPRECATED(
  firstName: string,
  situation: string,
  timeline: string,
  priority: string,
  solutions: Array<{title: string; description: string}>
): string {
  // Map answer codes to readable text
  const situationText = {
    financial: "I'm facing a financial challenge",
    repairs: "My home needs major repairs",
    both: "Both - I need to sell fast AND my home needs work",
    neither: "Neither - My home is fine, I just want the best deal",
  }[situation] || situation;
  
  const timelineText = {
    "0-60": "0-60 DAYS - I need to move FAST",
    "60-90": "60-90 DAYS - I have some flexibility",
    "90+": "90+ DAYS - I want to maximize my profit",
  }[timeline] || timeline;
  
  const priorityText = {
    speed: "SPEED & CERTAINTY",
    value: "MAXIMUM VALUE",
    repairs: "AVOID REPAIRS",
    flexibility: "FLEXIBILITY",
  }[priority] || priority;
  
  const solutionsHtml = solutions.map((sol, idx) => `
    <div style="background-color: #f9f9f9; border: 2px solid #c9a961; border-radius: 8px; padding: 20px; margin-bottom: 15px;">
      <div style="color: #c9a961; font-weight: bold; font-size: 16px; margin-bottom: 10px;">#${idx + 1} RECOMMENDED</div>
      <h3 style="margin: 0 0 10px 0; color: #333; font-size: 20px;">${sol.title}</h3>
      <p style="margin: 0; color: #666; font-size: 14px; line-height: 1.6;">${sol.description}</p>
    </div>
  `).join('');
  
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px;">
          
          <!-- Header -->
          <tr>
            <td style="background-color: #c9a961; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px;">RESCUE HOME OFFERS</h1>
              <p style="margin: 10px 0 0 0; color: #ffffff; font-size: 14px;">HOME OF THE SECOND OPINION</p>
            </td>
          </tr>
          
          <!-- Greeting -->
          <tr>
            <td style="padding: 40px 30px 20px 30px;">
              <h2 style="margin: 0 0 20px 0; color: #333; font-size: 24px;">Hi ${firstName}!</h2>
              <p style="margin: 0 0 15px 0; color: #666; font-size: 16px; line-height: 1.6;">
                Thank you for completing our Second Opinion Advantage Calculator. Based on your answers, we've identified the perfect solutions for your situation.
              </p>
            </td>
          </tr>
          
          <!-- Calculator Answers -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <h3 style="margin: 0 0 15px 0; color: #c9a961; font-size: 18px;">Here's What You Told Us:</h3>
              <ul style="margin: 0; padding-left: 20px; color: #666; line-height: 1.8;">
                <li><strong>Your Situation:</strong> ${situationText}</li>
                <li><strong>Your Timeline:</strong> ${timelineText}</li>
                <li><strong>Your Priority:</strong> ${priorityText}</li>
              </ul>
            </td>
          </tr>
          
          <!-- Solutions -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <h3 style="margin: 0 0 20px 0; color: #c9a961; font-size: 18px;">Your Top 3 Recommended Solutions:</h3>
              ${solutionsHtml}
            </td>
          </tr>
          
          <!-- Rescue Promise -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <div style="background-color: #fff9e6; border: 2px solid #c9a961; border-radius: 8px; padding: 20px;">
                <h3 style="margin: 0 0 10px 0; color: #c9a961; font-size: 18px;">The Rescue Promise™</h3>
                <p style="margin: 0 0 10px 0; color: #333; font-size: 16px; font-weight: bold;">"Your price, our terms. Your terms, our price."</p>
                <p style="margin: 0; color: #666; font-size: 14px; line-height: 1.6;">
                  We're committed to treating you fairly and transparently. Every deal has trade-offs, and we'll show you all your options so you can choose what works best for YOU.
                </p>
              </div>
            </td>
          </tr>
          
          <!-- CTA -->
          <tr>
            <td style="padding: 0 30px 40px 30px;">
              <div style="background-color: #4CAF50; border-radius: 8px; padding: 20px; text-align: center;">
                <p style="margin: 0 0 10px 0; color: #ffffff; font-size: 20px; font-weight: bold;">🎉 Your Offers Are On The Way!</p>
                <p style="margin: 0; color: #ffffff; font-size: 14px;">We'll be in touch soon with your personalized offers. Questions? Just reply to this email.</p>
              </div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f9f9f9; padding: 20px 30px; text-align: center; border-radius: 0 0 8px 8px;">
              <p style="margin: 0 0 10px 0; color: #999; font-size: 12px;">
                Rescue Home Offers | Las Vegas, NV<br>
                info@rescuehomeoffers.com | (702) XXX-XXXX
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}
*/
