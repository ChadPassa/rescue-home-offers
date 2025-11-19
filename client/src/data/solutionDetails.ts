export interface SolutionDetail {
  name: string;
  bestFor: string[];
  howItWorks: string;
  benefits: string[];
}

export const solutionDetails: Record<string, SolutionDetail> = {
  "Cash Offer": {
    name: "Cash Offer",
    bestFor: [
      "Homeowners facing foreclosure",
      "Properties needing major repairs",
      "Sellers who need to close in 7-14 days",
      "Anyone who wants certainty over maximum price"
    ],
    howItWorks: "We make you a cash offer based on your home's current condition. No repairs needed. You choose the closing date (as fast as 7 days). We handle all closing costs.",
    benefits: [
      "Close in as little as 7-14 days",
      "Sell as-is - no repairs or cleaning",
      "No realtor commissions",
      "We pay all closing costs",
      "Guaranteed sale - no buyer financing fall-through"
    ]
  },
  "Premier Offer": {
    name: "Premier Offer",
    bestFor: [
      "Homes in good to excellent condition",
      "Properties in desirable neighborhoods",
      "Sellers who want top-tier cash pricing",
      "Homeowners who need to close quickly but want maximum cash value"
    ],
    howItWorks: "Our Premier Offer is our highest cash offer tier, reserved for properties in better condition or prime locations. We evaluate your home's condition, location, and market demand to provide a premium cash offer. Close in as little as 7-14 days with no repairs needed.",
    benefits: [
      "Highest cash offer tier",
      "Close in 7-14 days",
      "No repairs or staging required",
      "No realtor commissions",
      "Certainty and speed combined with premium pricing"
    ]
  },
  "Subject-To Agreement": {
    name: "Subject-To Agreement",
    bestFor: [
      "Homeowners behind on mortgage payments",
      "Sellers with little to no equity",
      "Anyone facing foreclosure",
      "Properties with low interest rates worth preserving"
    ],
    howItWorks: "We take over your existing mortgage payments (keeping your low interest rate). You transfer the deed to us. We bring your loan current and make all future payments. Your credit improves as payments are made on time.",
    benefits: [
      "Stop foreclosure immediately",
      "Preserve your credit score",
      "No cash out of pocket needed",
      "Keep your low interest rate working",
      "Walk away debt-free"
    ]
  },
  "Sell & Leaseback": {
    name: "Sell & Leaseback",
    bestFor: [
      "Homeowners who need cash now but want to stay in their home",
      "Sellers going through divorce who need time to transition",
      "Anyone who needs flexibility on move-out date",
      "Families with kids in school who don't want to disrupt the year"
    ],
    howItWorks: "We buy your home for cash. You become a tenant and rent it back from us. You choose how long you want to stay (typically 6-12 months). When you're ready, you move out on your terms.",
    benefits: [
      "Get cash now, move later",
      "No disruption to your family",
      "Flexible lease terms",
      "Time to find your next home",
      "Avoid rushed moving decisions"
    ]
  },
  "Cash+ Offer": {
    name: "Cash+ Offer",
    bestFor: [
      "Homes that need cosmetic updates",
      "Sellers who want more than a standard cash offer",
      "Properties in good neighborhoods",
      "Homeowners with some time flexibility (60-90 days)"
    ],
    howItWorks: "We advance you cash for repairs and renovations. Our team manages all the work. Once complete, we list it with a top agent. You get a higher sale price minus renovation costs and our fee.",
    benefits: [
      "Get more than a cash offer",
      "No out-of-pocket costs for repairs",
      "We manage all contractors",
      "Sell for retail price",
      "Close in 60-90 days"
    ]
  },
  "Fix It & List It": {
    name: "Fix It & List It",
    bestFor: [
      "Homes needing significant renovations",
      "Sellers who want top dollar but can't afford repairs",
      "Properties in hot markets",
      "Homeowners with 90+ days timeline"
    ],
    howItWorks: "We pay for and manage all renovations (no cost to you). When complete, we list it with a top realtor. You get top dollar for your fully renovated home. We deduct renovation costs and our fee from the sale proceeds.",
    benefits: [
      "Zero out-of-pocket costs",
      "Get top retail price",
      "Professional renovations",
      "We handle everything",
      "Maximize your profit"
    ]
  },
  "Traditional Listing": {
    name: "Traditional Listing",
    bestFor: [
      "Homes in excellent condition",
      "Sellers who want maximum market value",
      "Properties in high-demand areas",
      "Homeowners with 90+ days timeline"
    ],
    howItWorks: "We list your home on the MLS with a top local agent. Professional photos, marketing, and showings. You get full retail price. Standard realtor commission applies.",
    benefits: [
      "Maximum market exposure",
      "Top dollar for your home",
      "Professional marketing",
      "Experienced agent representation",
      "Traditional sale process"
    ]
  },
  "Novation Partnership": {
    name: "Novation Partnership",
    bestFor: [
      "Sellers with unique properties",
      "Homeowners wanting creative solutions",
      "Properties with development potential",
      "Sellers open to profit-sharing arrangements"
    ],
    howItWorks: "We partner with you to maximize your property's value. We handle renovations, permitting, and development. You share in the upside profit. Timeline varies based on project scope.",
    benefits: [
      "Share in profit upside",
      "No renovation costs to you",
      "Creative deal structuring",
      "Potential for higher returns",
      "Partnership approach"
    ]
  }
};

