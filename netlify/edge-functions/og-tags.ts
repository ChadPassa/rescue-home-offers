import type { Context } from "https://edge.netlify.com";

// Blog metadata for OG tags
const blogMetadata: Record<string, { title: string; description: string; image: string }> = {
  // Cluster 1: Sell House Fast
  "sell-house-fast-las-vegas-the-ultimate-guide-to-all-your-options": {
    title: "Sell House Fast Las Vegas: The Ultimate Guide to All Your Options",
    description: "Need to sell your Las Vegas house fast? Compare all your options: traditional listing, cash buyers, creative solutions. Find the best fit for your situation.",
    image: "/images/blog/sell-house-fast-las-vegas-the-ultimate-guide-to-all-your-options.jpg"
  },
  "how-to-stop-foreclosure-in-las-vegas-a-step-by-step-guide": {
    title: "How to Stop Foreclosure in Las Vegas: A Step-by-Step Guide",
    description: "Facing foreclosure in Las Vegas? Learn your options step-by-step, from loan modification to selling fast. Time-sensitive strategies that work.",
    image: "/images/blog/how-to-stop-foreclosure-in-las-vegas-a-step-by-step-guide.jpg"
  },
  "cash-home-buyers-in-las-vegas-are-they-legit": {
    title: "Cash Home Buyers in Las Vegas: Are They Legit?",
    description: "Learn how to identify legitimate cash home buyers in Las Vegas and avoid scams. Red flags, green flags, and what to expect from a real cash offer.",
    image: "/images/blog/cash-home-buyers-in-las-vegas-are-they-legit.jpg"
  },
  "selling-an-inherited-property-in-las-vegas-the-complete-guide": {
    title: "Selling an Inherited Property in Las Vegas: The Complete Guide",
    description: "Inherited a Las Vegas property? Learn the complete process from probate to sale, including tax implications and your selling options.",
    image: "/images/blog/selling-an-inherited-property-in-las-vegas-the-complete-guide.jpg"
  },
  "creative-real-estate-solutions-beyond-the-cash-offer": {
    title: "Creative Real Estate Solutions: Beyond the Cash Offer",
    description: "Explore creative real estate solutions beyond traditional sales and cash offers. Subject-to, seller financing, novation, and more explained.",
    image: "/images/blog/creative-real-estate-solutions-beyond-the-cash-offer.jpg"
  },
  // Cluster 2: Stale Listings
  "why-70-percent-of-homes-are-sitting-unsold-the-stale-listing-crisis": {
    title: "Why 70% of Homes Are Sitting Unsold: The Stale Listing Crisis",
    description: "70% of Las Vegas listings are sitting unsold. Understand the stale listing crisis and what sellers can do to avoid becoming a statistic.",
    image: "/images/blog/why-70-percent-of-homes-are-sitting-unsold-the-stale-listing-crisis.jpg"
  },
  "las-vegas-housing-market-2025-what-every-seller-needs-to-know-right-now": {
    title: "Las Vegas Housing Market 2025: What Every Seller Needs to Know Right Now",
    description: "The latest Las Vegas housing market data for 2025. Inventory, days on market, prices, and what it means for sellers trying to sell now.",
    image: "/images/blog/las-vegas-housing-market-2025-what-every-seller-needs-to-know-right-now.jpg"
  },
  "hidden-costs-stale-listing": {
    title: "The Hidden Costs of a Stale Listing",
    description: "Discover the true hidden costs of a stale listing in Las Vegas - from holding costs to price reductions and the psychological toll on sellers.",
    image: "/images/blog/hidden-costs-stale-listing.jpg"
  },
  "is-your-home-overpriced-how-to-know-when-to-adjust": {
    title: "Is Your Home Overpriced? How to Know When to Adjust",
    description: "Signs your Las Vegas home is overpriced and what to do about it. Days on market, showing feedback, and when to adjust your price.",
    image: "/images/blog/is-your-home-overpriced-how-to-know-when-to-adjust.jpg"
  },
  "when-your-listing-goes-stale-why-your-home-isnt-selling-and-your-other-options": {
    title: "When Your Listing Goes Stale: Why Your Home Isn't Selling and Your Other Options",
    description: "Your listing has gone stale. Learn why homes stop getting showings and what options you have beyond another price reduction.",
    image: "/images/blog/when-your-listing-goes-stale-why-your-home-isnt-selling-and-your-other-options.jpg"
  },
  // Cluster 3: Market Ready
  "why-market-ready-is-the-only-way-to-sell-in-todays-las-vegas-market": {
    title: "Why 'Market Ready' Is the Only Way to Sell in Today's Las Vegas Market",
    description: "In a buyer's market, turnkey homes sell. Everything else sits. Learn why market-ready is essential and what it means for Las Vegas sellers.",
    image: "/images/blog/why-market-ready-is-the-only-way-to-sell-in-todays-las-vegas-market.jpg"
  },
  "concessions-cost-more-than-repairs-the-math-every-las-vegas-seller-needs-to-see": {
    title: "Concessions Cost More Than Repairs: The Math Every Las Vegas Seller Needs to See",
    description: "Learn why seller concessions often cost more than actual repairs. The 'Uncertainty Tax' explained with real numbers for Las Vegas home sellers.",
    image: "/images/blog/concessions-cost-more-than-repairs-the-math-every-las-vegas-seller-needs-to-see.jpg"
  },
  "what-buyers-actually-see-when-they-walk-into-your-home": {
    title: "What Buyers Actually See When They Walk Into Your Home",
    description: "Understand buyer psychology and what they really see during a home tour. First impressions, red flags, and how to present your Las Vegas home.",
    image: "/images/blog/what-buyers-actually-see-when-they-walk-into-your-home.jpg"
  },
  "your-house-might-smell-how-odors-kill-home-sales-las-vegas": {
    title: "Your House Might Smell (And You Don't Know It): How Odors Kill Home Sales",
    description: "You're nose-blind to your own home. Learn how odors kill home sales and what to do about pet smells, smoke, and other deal-breakers.",
    image: "/images/blog/your-house-might-smell-how-odors-kill-home-sales-las-vegas.jpg"
  },
  "which-home-updates-pay-off-when-selling-las-vegas": {
    title: "The $15,000 That Saves You $50,000: Which Home Updates Actually Pay Off",
    description: "Not all home updates are worth it. Learn which improvements have the best ROI for Las Vegas sellers and which to skip.",
    image: "/images/blog/which-home-updates-pay-off-when-selling-las-vegas.jpg"
  },
  "cant-afford-to-make-home-market-ready-options-las-vegas": {
    title: "Can't Afford to Make Your Home Market Ready? Here Are Your Real Options",
    description: "No cash for repairs? Learn your real options for selling a Las Vegas home that needs work, from cash buyers to creative partnerships.",
    image: "/images/blog/cant-afford-to-make-home-market-ready-options-las-vegas.jpg"
  },
  "holding-costs-unsold-home-las-vegas": {
    title: "Every Month Your House Sits Unsold Costs You $____",
    description: "Calculate the real holding costs of an unsold Las Vegas home. Mortgage, taxes, insurance, utilities - see what each month is costing you.",
    image: "/images/blog/holding-costs-unsold-home-las-vegas.jpg"
  },
  "las-vegas-homes-55-days-on-market-what-it-means": {
    title: "Las Vegas Homes Now Sit 55 Days on Market: What It Means for Sellers",
    description: "Las Vegas homes now average 55 days on market, up from 39. What this means for sellers and how to position your home to sell faster.",
    image: "/images/blog/las-vegas-homes-55-days-on-market-what-it-means.jpg"
  },
  "someone-will-buy-it-as-is-lies-sellers-tell-themselves": {
    title: '"Someone Will Buy It As-Is" and Other Lies Sellers Tell Themselves',
    description: "The fixer-upper myth debunked. Why 62% of buyers want move-in ready homes and what it means for sellers hoping to sell as-is.",
    image: "/images/blog/someone-will-buy-it-as-is-lies-sellers-tell-themselves.jpg"
  },
  "when-making-home-market-ready-isnt-worth-it-las-vegas": {
    title: "When Making Your Home Market Ready Isn't Worth It (And What to Do Instead)",
    description: "Sometimes renovation isn't the answer. Learn when market-ready isn't worth it and what alternatives Las Vegas sellers have.",
    image: "/images/blog/when-making-home-market-ready-isnt-worth-it-las-vegas.jpg"
  }
};

// Social media bot user agents
const socialBots = [
  "facebookexternalhit",
  "Facebot",
  "Twitterbot",
  "LinkedInBot",
  "Pinterest",
  "Slackbot",
  "WhatsApp",
  "TelegramBot",
  "Discordbot"
];

function isSocialBot(userAgent: string): boolean {
  return socialBots.some(bot => userAgent.toLowerCase().includes(bot.toLowerCase()));
}

export default async function handler(request: Request, context: Context) {
  const url = new URL(request.url);
  const userAgent = request.headers.get("user-agent") || "";
  
  // Only intercept blog pages for social bots
  if (!url.pathname.startsWith("/blog/") || !isSocialBot(userAgent)) {
    return context.next();
  }
  
  // Extract the blog slug from the URL
  const slug = url.pathname.replace("/blog/", "").replace(/\/$/, "");
  
  // Get metadata for this blog post
  const meta = blogMetadata[slug];
  
  if (!meta) {
    return context.next();
  }
  
  const baseUrl = "https://rescuehomeoffers.com";
  const fullImageUrl = `${baseUrl}${meta.image}`;
  const fullUrl = `${baseUrl}/blog/${slug}`;
  
  // Return a simple HTML page with OG tags for the bot
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${meta.title} | Rescue Home Offers</title>
  <meta name="description" content="${meta.description}">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="${fullUrl}">
  <meta property="og:title" content="${meta.title}">
  <meta property="og:description" content="${meta.description}">
  <meta property="og:image" content="${fullImageUrl}">
  <meta property="og:site_name" content="Rescue Home Offers">
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="${fullUrl}">
  <meta name="twitter:title" content="${meta.title}">
  <meta name="twitter:description" content="${meta.description}">
  <meta name="twitter:image" content="${fullImageUrl}">
</head>
<body>
  <h1>${meta.title}</h1>
  <p>${meta.description}</p>
  <a href="${fullUrl}">Read more at Rescue Home Offers</a>
</body>
</html>`;

  return new Response(html, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  });
}

export const config = {
  path: "/blog/*"
};
