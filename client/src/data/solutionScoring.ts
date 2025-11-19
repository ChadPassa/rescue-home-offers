// Solution scoring data extracted from standalone calculator
// Each solution has scores for different answer combinations

export interface SolutionScore {
  id: string;
  name: string;
  tagline: string;
  description: string;
  scores: {
    // Question 1: Situation (financial, repairs, both, neither)
    financial?: number;
    repairs?: number;
    both?: number;
    neither?: number;
    // Question 2: Timeline (urgent, flexible, patient)
    urgent?: number;
    flexible?: number;
    patient?: number;
    // Question 3: Priority (speed, value, repairs, flexibility)
    speed?: number;
    value?: number;
    flexibility?: number;
  };
}

export const solutionScores: SolutionScore[] = [
  {
    id: 'cash-offer',
    name: "Cash Offer",
    tagline: "Get cash in 7-14 days",
    description: "A straightforward cash purchase where we buy your home directly, as-is, with no repairs needed.",
    scores: { 
      financial: 10, 
      repairs: 8, 
      both: 10, 
      neither: 6, 
      urgent: 10, 
      flexible: 7, 
      patient: 3, 
      speed: 10, 
      value: 4, 
      flexibility: 6 
    }
  },
  {
    id: 'premier-offer',
    name: "Premier Offer",
    tagline: "Top-tier cash for better properties",
    description: "Our highest cash offer tier for properties in better condition or desirable locations.",
    scores: { 
      financial: 7, 
      repairs: 5, 
      both: 6, 
      neither: 9, 
      urgent: 9, 
      flexible: 8, 
      patient: 5, 
      speed: 9, 
      value: 7, 
      flexibility: 7 
    }
  },
  {
    id: 'fix-list',
    name: "Fix It & List It",
    tagline: "We renovate, you profit",
    description: "A true partnership where we renovate your home at no out-of-pocket cost, then list for top dollar.",
    scores: { 
      financial: 5, 
      repairs: 10, 
      both: 9, 
      neither: 7, 
      urgent: 3, 
      flexible: 7, 
      patient: 10, 
      speed: 3, 
      value: 10, 
      flexibility: 6 
    }
  },
  {
    id: 'cash-plus',
    name: "Cash+ Offer",
    tagline: "Get advance for repairs, sell for more",
    description: "We give you upfront cash to make repairs before listing, increasing your sale price.",
    scores: { 
      financial: 6, 
      repairs: 9, 
      both: 8, 
      neither: 7, 
      urgent: 5, 
      flexible: 8, 
      patient: 9, 
      speed: 5, 
      value: 9, 
      flexibility: 7 
    }
  },
  {
    id: 'traditional',
    name: "Traditional Listing",
    tagline: "Full-service MLS listing for top dollar",
    description: "We list your home on the MLS with full-service representation and professional marketing.",
    scores: { 
      financial: 3, 
      repairs: 4, 
      both: 2, 
      neither: 10, 
      urgent: 2, 
      flexible: 6, 
      patient: 10, 
      speed: 2, 
      value: 10, 
      flexibility: 5 
    }
  },
  {
    id: 'sell-leaseback',
    name: "Sell & Leaseback",
    tagline: "Get cash now, move later",
    description: "We buy your home for cash, then you rent it back from us while you transition.",
    scores: { 
      financial: 9, 
      repairs: 5, 
      both: 8, 
      neither: 6, 
      urgent: 6, 
      flexible: 9, 
      patient: 7, 
      speed: 6, 
      value: 5, 
      flexibility: 10 
    }
  },
  {
    id: 'cash-flex',
    name: "Cash Flex",
    tagline: "Cash offer with flexible closing",
    description: "A cash offer where YOU choose the closing date - 7 days or 90 days, your call.",
    scores: { 
      financial: 8, 
      repairs: 7, 
      both: 8, 
      neither: 7, 
      urgent: 7, 
      flexible: 10, 
      patient: 6, 
      speed: 7, 
      value: 6, 
      flexibility: 10 
    }
  },
  {
    id: 'advantage-plus',
    name: "Advantage+",
    tagline: "Buy your next home before selling",
    description: "We help you buy your next home BEFORE you sell your current one.",
    scores: { 
      financial: 4, 
      repairs: 5, 
      both: 3, 
      neither: 9, 
      urgent: 4, 
      flexible: 8, 
      patient: 9, 
      speed: 5, 
      value: 8, 
      flexibility: 9 
    }
  },
  {
    id: 'freedom-lock',
    name: "Freedom Lock",
    tagline: "List traditionally with backup cash offer",
    description: "List your home on the market, but we provide a backup cash offer if it falls through.",
    scores: { 
      financial: 6, 
      repairs: 6, 
      both: 6, 
      neither: 8, 
      urgent: 5, 
      flexible: 9, 
      patient: 8, 
      speed: 6, 
      value: 9, 
      flexibility: 8 
    }
  },
  {
    id: 'subject-to',
    name: "Subject-To Agreement",
    tagline: "Take over mortgage payments",
    description: "We take over your mortgage payments. Keep your credit intact while moving on.",
    scores: { 
      financial: 10, 
      repairs: 6, 
      both: 9, 
      neither: 3, 
      urgent: 8, 
      flexible: 7, 
      patient: 4, 
      speed: 7, 
      value: 6, 
      flexibility: 9 
    }
  }
];
