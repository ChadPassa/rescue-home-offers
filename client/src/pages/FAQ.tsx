import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Question {
  id: string;
  question: string;
  answer: string;
  category: string;
  relatedQuestions: string[];
}

const faqData: Question[] = [
  // Understanding Your Situation
  {
    id: "distressed-homeowner-vs-home",
    question: "What's the difference between a distressed homeowner and a distressed home?",
    answer: `Listen, we get it. You're here because something isn't working. But before we can help you find the right solution, we need to understand what kind of problem you're facing.

**A distressed homeowner** is about your personal circumstances. Maybe you're facing foreclosure, going through a divorce, dealing with probate, or you're a tired landlord who just wants out. Your house might be in perfect condition, but *you* are in a situation that requires speed, certainty, or flexibility.

**A distressed home** is about the physical condition of the property. The house needs work—maybe a new roof, foundation repairs, or major cosmetic updates. You don't have the time, money, or desire to manage renovations. Your personal situation might be stable, but the *house* is in distress.

Sometimes, you're both. And that's okay. We have solutions for every scenario. The key is identifying which category you fall into (or if you're dealing with both) so we can match you with the right path forward.

**Best For:** Anyone trying to understand their situation and explore their options.`,
    category: "Understanding Your Situation",
    relatedQuestions: ["what-solutions-do-you-offer", "how-do-i-know-which-solution", "facing-foreclosure-options"]
  },
  {
    id: "what-solutions-do-you-offer",
    question: "What solutions do you actually offer?",
    answer: `We're called the Home of the Second Opinion for a reason. Most homeowners think they have two options: accept a lowball cash offer or list with an agent and hope for the best. But there's a whole stack of solutions most people never hear about.

Here's the short list:
- **Cash Offers** (instant, as-is, close in days)
- **Premier Offers** (premium cash with zero program fees)
- **Fix It & List It** (we renovate, you get top dollar)
- **Cash+ Programs** (get cash upfront plus market upside)
- **Sell and Leaseback** (sell now, stay as tenant)
- **Trade Up / Equity Advance** (buy your next home first)
- **Freedom Lock / Backup+** (guaranteed offer while listing traditionally)
- **Novation Agreements** (true partnership to maximize value)
- **Subject-To Financing** (we take over your mortgage)
- **Seller Financing** (you become the bank)
- **FSBO Support** (DIY with professional tools)
- **Flat Fee MLS** (maximum exposure for experienced sellers)

And that's just the beginning. The right solution depends on your situation, your timeline, and your goals. That's why we start with a conversation, not a contract.

**Best For:** Anyone who wants to understand the full range of options available.`,
    category: "Understanding Your Situation",
    relatedQuestions: ["how-do-i-know-which-solution", "cash-offer-vs-listing", "what-is-novation"]
  },
  {
    id: "how-do-i-know-which-solution",
    question: "How do I know which solution is right for me?",
    answer: `Great question. The answer depends on three things: your situation, your timeline, and your goals.

**If you need speed and certainty:** Cash offers, Premier offers, or Subject-To agreements are your best bet. You close fast, you know exactly what you're getting, and you move on.

**If you want to maximize value:** Fix It & List It, Cash+ programs, or Novation agreements let you capture the full market potential of your home without the hassle or upfront cost of renovations.

**If you need flexibility:** Sell and Leaseback, Trade Up, or Freedom Lock programs give you breathing room to transition on your terms.

**If you're experienced and want control:** FSBO Support or Flat Fee MLS listings put you in the driver's seat with professional backup.

The truth is, we can't tell you which solution is right without understanding your specific situation. That's why we offer a free consultation. No pressure, no obligation—just an honest conversation about what makes sense for you.

**Best For:** Anyone trying to narrow down their options based on their unique needs.`,
    category: "Understanding Your Situation",
    relatedQuestions: ["what-solutions-do-you-offer", "get-instant-offer", "schedule-consultation"]
  },

  // Foreclosure & Financial Distress
  {
    id: "facing-foreclosure-options",
    question: "I'm facing foreclosure. What are my options?",
    answer: `First, take a breath. You're not the first person to face foreclosure, and you won't be the last. But here's the truth: **no home should go to the courthouse steps.** In 2024, 322,103 properties faced foreclosure—but 75% of those could have been prevented with the right solution.

Here's what you need to know:

**Option 1: Sell for cash immediately.** We can close in as little as 7 days, pay off your mortgage, and stop the foreclosure. You walk away with your credit intact and any remaining equity in your pocket.

**Option 2: Subject-To agreement.** We take over your mortgage payments, stop the foreclosure, and you move on without the debt. This can work even if you have little to no equity.

**Option 3: Short sale assistance.** If you owe more than the home is worth, we can negotiate with your lender to accept less than the full balance. It's not ideal, but it's better than foreclosure.

**Option 4: Novation or Fix It & List It.** If you have equity and time (even a little), we can partner with you to renovate and sell for top dollar, maximizing what you walk away with.

The key is acting now. The closer you get to the auction date, the fewer options you have. But if you reach out today, we can help you find a path forward.

**Best For:** Homeowners facing foreclosure who need immediate, actionable solutions.`,
    category: "Foreclosure & Financial Distress",
    relatedQuestions: ["what-is-subject-to", "how-fast-can-you-close", "will-foreclosure-ruin-credit"]
  },
  {
    id: "will-foreclosure-ruin-credit",
    question: "Will foreclosure ruin my credit forever?",
    answer: `No, but it will hurt—and it's avoidable.

A foreclosure stays on your credit report for **7 years** and can drop your credit score by **200-300 points**. It also makes it much harder to buy another home, rent an apartment, or even get approved for certain jobs.

But here's the thing: **you don't have to let it get that far.** If you sell your home before the foreclosure completes, you protect your credit. Even if you're already behind on payments, a cash sale or Subject-To agreement can stop the process and minimize the damage.

And here's something most people don't know: we've helped homeowners not only avoid foreclosure but also transition into rentals or even set them up to buy again in the future. We have a network of thousands of investors and landlords. If your credit is damaged, we can help you land on your feet.

**Best For:** Homeowners worried about the long-term impact of foreclosure on their financial future.`,
    category: "Foreclosure & Financial Distress",
    relatedQuestions: ["facing-foreclosure-options", "can-you-help-me-find-rental", "how-soon-can-i-buy-again"]
  },
  {
    id: "behind-on-payments-too-late",
    question: "I'm behind on my mortgage payments. Is it too late to sell?",
    answer: `Nope. Not even close.

As long as the foreclosure hasn't been finalized at the courthouse steps, you have options. We've closed deals with homeowners who were weeks away from auction. The key is acting now.

Here's what happens when you reach out:
1. We assess your situation and timeline
2. We present you with options (cash offer, Subject-To, short sale, etc.)
3. You choose the path that works best for you
4. We move fast to stop the foreclosure and protect your equity

Even if you think it's too late, it probably isn't. But the longer you wait, the fewer options you'll have. So if you're reading this and you're behind on payments, don't wait another day. Get your instant offer or schedule a consultation now.

**Best For:** Homeowners who are behind on payments and worried they've run out of time.`,
    category: "Foreclosure & Financial Distress",
    relatedQuestions: ["facing-foreclosure-options", "how-fast-can-you-close", "what-is-subject-to"]
  },

  // Cash Offers Explained
  {
    id: "how-do-cash-offers-work",
    question: "How do cash offers work?",
    answer: `Cash offers are simple: we buy your house as-is, with our own funds, and close fast. No repairs, no showings, no waiting for a buyer's financing to fall through. You get certainty and speed.

**Here's how it works:**
1. You provide your property address
2. We analyze the property and market data
3. We present you with a cash offer (usually within 24-48 hours)
4. If you accept, we schedule a closing date (as fast as 7 days or on your timeline)
5. You walk away with cash in hand

**Why It's Powerful:**
- Speed: Close in days, not months
- Certainty: No financing contingencies or deal falling through
- Convenience: No repairs, no staging, no showings
- Simplicity: We handle all the paperwork and closing costs

**Best For:**
- Homeowners who need to sell fast (foreclosure, relocation, etc.)
- Properties that need significant repairs
- Sellers who value certainty over maximum price

The trade-off? You won't get top dollar. Cash offers are typically 70-85% of market value, depending on condition and market. But if speed and certainty matter more than squeezing out every last dollar, a cash offer might be your best move.

**Best For:** Homeowners who need speed, certainty, and simplicity.`,
    category: "Cash Offers Explained",
    relatedQuestions: ["are-cash-offers-lowball", "cash-offer-vs-listing", "how-fast-can-you-close"]
  },
  {
    id: "are-cash-offers-lowball",
    question: "Are cash offers always lowball offers?",
    answer: `Not always—but they're usually lower than market value, and here's why.

When we make a cash offer, we're taking on all the risk, all the carrying costs, and all the renovation expenses. We're also providing you with speed and certainty. That convenience has a cost.

**Here's the math:**
- Market value: $300,000
- Repairs needed: $30,000
- Closing costs, holding costs, agent fees: $25,000
- Our profit margin: $20,000
- **Cash offer: ~$225,000 (75% of market value)**

Is that a "lowball" offer? Depends on your perspective. If you need to sell in 7 days, avoid foreclosure, or don't have the time/money for repairs, it might be the best option available. If you have time and your house is in great shape, listing traditionally will probably net you more.

The key is understanding the trade-off: **speed and certainty vs. maximum price.** Neither is right or wrong—it depends on your situation.

And here's the thing: we'll tell you if a cash offer isn't your best option. That's what the Second Opinion is all about.

**Best For:** Homeowners trying to understand if a cash offer makes sense for their situation.`,
    category: "Cash Offers Explained",
    relatedQuestions: ["how-do-cash-offers-work", "cash-offer-vs-listing", "what-solutions-do-you-offer"]
  },
  {
    id: "cash-offer-vs-listing",
    question: "Should I take a cash offer or list with an agent?",
    answer: `Depends. What matters more to you: speed or price?

**Cash Offer:**
- Close in 7-30 days
- Sell as-is (no repairs)
- No showings, no staging
- Certainty (no deals falling through)
- Lower price (70-85% of market value)

**Listing with an Agent:**
- Takes 60-90+ days (sometimes longer)
- Requires repairs and staging
- Showings and open houses
- Risk of deals falling through
- Higher price (closer to market value)

If you're facing foreclosure, relocating for a job, or dealing with a property that needs major work, a cash offer is probably your best bet. If you have time, your house is in good shape, and you want to maximize your proceeds, listing traditionally makes sense.

But here's the kicker: **you don't have to choose just one.** Our Freedom Lock and Backup+ programs let you list your home traditionally while locking in a guaranteed cash offer as a safety net. Best of both worlds.

**Best For:** Homeowners weighing the trade-offs between speed and price.`,
    category: "Cash Offers Explained",
    relatedQuestions: ["how-do-cash-offers-work", "what-is-freedom-lock", "what-solutions-do-you-offer"]
  },

  // Creative Solutions
  {
    id: "what-is-novation",
    question: "What is a Novation Agreement?",
    answer: `A Novation Agreement is a true partnership between you and us to maximize the value of your home without you spending a dime out of pocket.

**What It Is:**
- We partner with you to renovate your home at no cost to you
- We leverage your existing mortgage (not our capital)
- We bring: renovations, marketing, and expertise
- You bring: the house and existing financing
- We get it market-ready, list it for top dollar
- Profits are split based on the agreement

**Why It's Powerful:**
- You get maximum value without spending money on repairs
- We don't tie up our capital in acquisition
- It's a win-win partnership, not a buyout
- You participate in the upside of the market

**Best For:**
- Homeowners with equity who want top dollar but can't afford renovations
- Properties that need work but have strong market potential
- Sellers who want to maximize returns without the hassle

Think of it like this: you're not selling your house to us. You're partnering with us to unlock its full potential. We do the heavy lifting, you get the reward.

**Best For:** Homeowners with equity who want to maximize value without upfront costs.`,
    category: "Creative Solutions",
    relatedQuestions: ["what-is-fix-it-list-it", "what-is-subject-to", "what-solutions-do-you-offer"]
  },
  {
    id: "what-is-subject-to",
    question: "What is a Subject-To agreement?",
    answer: `A Subject-To agreement is when we take over your existing mortgage payments without formally assuming the loan. The mortgage stays in your name, but we make the payments and take ownership of the property.

**What It Is:**
- We take over your monthly mortgage payments
- The loan stays in your name (for now)
- You deed the property to us
- We handle all payments, taxes, and insurance
- You walk away without the debt burden

**Why It's Powerful:**
- Stops foreclosure immediately
- No need to qualify for a new loan
- Works even if you have little to no equity
- Protects your credit (payments are made on time)
- You move on without the stress

**Best For:**
- Homeowners facing foreclosure with little equity
- Sellers who are behind on payments and need immediate relief
- Properties where a traditional sale isn't feasible

**Important Note:** This is a creative solution that requires trust and transparency. We've been doing this since 2004, and we do it ethically. But it's not for everyone. If you have significant equity, a cash offer or Novation might be a better fit.

**Best For:** Homeowners facing foreclosure or financial distress with limited equity.`,
    category: "Creative Solutions",
    relatedQuestions: ["facing-foreclosure-options", "what-is-seller-financing", "how-fast-can-you-close"]
  },
  {
    id: "what-is-seller-financing",
    question: "What is Seller Financing?",
    answer: `Seller Financing is when you act as the bank. Instead of us paying you cash upfront, we make monthly payments to you over time, with interest.

**What It Is:**
- You sell us the property
- We make a down payment
- We pay you monthly (like a mortgage)
- You earn interest on the balance
- We eventually pay off the full amount or refinance

**Why It's Powerful:**
- You get a steady income stream
- You earn interest (often higher than savings accounts)
- Tax benefits (spread capital gains over time)
- We can close without traditional financing

**Best For:**
- Sellers who don't need all the cash upfront
- Homeowners looking for passive income
- Properties that don't qualify for traditional financing
- Sellers in a strong tax position who want to defer gains

This is a win-win: you get a reliable income stream, and we get flexible financing. It's not common, but when it works, it works beautifully.

**Best For:** Sellers who want passive income and don't need immediate cash.`,
    category: "Creative Solutions",
    relatedQuestions: ["what-is-subject-to", "what-is-novation", "what-solutions-do-you-offer"]
  },
  {
    id: "what-is-fix-it-list-it",
    question: "What is Fix It & List It?",
    answer: `Fix It & List It is when we front the cost of renovations, get your home market-ready, and list it for top dollar. You pay us back at closing from the proceeds.

**What It Is:**
- We assess what repairs/updates will maximize value
- We front the renovation costs (you pay $0 upfront)
- We manage the contractors and project
- We list the property and market it professionally
- You pay us back from the sale proceeds
- You keep the rest

**Why It's Powerful:**
- No out-of-pocket costs for repairs
- Professional project management (we handle everything)
- Maximize your home's value
- You participate in the upside

**Best For:**
- Homeowners with equity who want top dollar
- Properties that need work but have strong market potential
- Sellers who don't have the time, money, or desire to manage renovations

Think of it as a partnership: we invest in your home, you get the maximum return. It's similar to a Novation, but with a slightly different structure.

**Best For:** Homeowners who want to maximize value without managing renovations.`,
    category: "Creative Solutions",
    relatedQuestions: ["what-is-novation", "what-is-cash-plus", "what-solutions-do-you-offer"]
  },
  {
    id: "what-is-freedom-lock",
    question: "What is Freedom Lock / Backup+?",
    answer: `Freedom Lock (also called Backup+) is a safety net. You list your home traditionally to try for top dollar, but we lock in a guaranteed cash offer as backup. For a small flat fee, you get the best of both worlds.

**What It Is:**
- You pay a small flat fee (typically $1,000-$2,000)
- We provide a guaranteed cash offer valid for 90-150 days
- You list your home on the open market
- If it sells traditionally, great—you get top dollar
- If it doesn't sell, we buy it at the guaranteed price

**Why It's Powerful:**
- Removes the home-sale contingency (makes your offer on a new home stronger)
- Gives you peace of mind (you know you have a buyer)
- Lets you try for top dollar without the risk

**Best For:**
- Homeowners who want to buy their next home first
- Sellers who want to test the market without risk
- Anyone who values certainty but still wants to maximize price

It's like insurance for your home sale. You hope you don't need it, but if you do, it's there.

**Best For:** Sellers who want to list traditionally but need a guaranteed backup plan.`,
    category: "Creative Solutions",
    relatedQuestions: ["what-is-trade-up", "cash-offer-vs-listing", "what-solutions-do-you-offer"]
  },
  {
    id: "what-is-trade-up",
    question: "What is Trade Up / Equity Advance?",
    answer: `Trade Up (also called Equity Advance) lets you buy your next home before selling your current one. We provide a guaranteed backup offer on your current home and unlock your equity for the down payment on your new home.

**What It Is:**
- We provide a guaranteed cash offer on your current home
- You use that equity for a down payment on your new home
- You make a non-contingent offer (much stronger in competitive markets)
- Your current home stays on the market
- If it sells traditionally, great—you get top dollar
- If it doesn't, we buy it at the guaranteed price

**Why It's Powerful:**
- Buy your next home without waiting to sell your current one
- Make non-contingent offers (win bidding wars)
- Access your equity immediately
- No stress about timing

**Best For:**
- Homeowners who want to move up or relocate
- Buyers in competitive markets who need a strong offer
- Sellers who don't want to be forced into a temporary rental

This is a game-changer if you're trying to buy and sell at the same time. It removes the stress and gives you the flexibility to move on your terms.

**Best For:** Homeowners who want to buy their next home before selling their current one.`,
    category: "Creative Solutions",
    relatedQuestions: ["what-is-freedom-lock", "what-is-sell-leaseback", "what-solutions-do-you-offer"]
  },
  {
    id: "what-is-sell-leaseback",
    question: "What is Sell and Leaseback?",
    answer: `Sell and Leaseback is when you sell your home to us, access your equity immediately, and then stay in the home as a tenant while you transition to your next chapter.

**What It Is:**
- We buy your home for cash
- You get your equity immediately
- You lease the home back from us (stay as a tenant)
- You have time to find your next place or stabilize your situation
- No rush, no stress

**Why It's Powerful:**
- Access your equity without moving immediately
- Time to find the right next home (no rushed decisions)
- Avoid the stress of moving twice
- Flexibility to transition on your terms

**Best For:**
- Homeowners who need cash now but aren't ready to move
- Sellers going through life transitions (divorce, job change, etc.)
- Anyone who wants to avoid the stress of a rushed move

Think of it as hitting the pause button. You get the financial relief of selling, but you don't have to disrupt your life immediately.

**Best For:** Homeowners who need cash now but want time to transition.`,
    category: "Creative Solutions",
    relatedQuestions: ["what-is-trade-up", "how-do-cash-offers-work", "what-solutions-do-you-offer"]
  },

  // Process & Timeline
  {
    id: "how-fast-can-you-close",
    question: "How fast can you close?",
    answer: `As fast as 7 days. Seriously.

If you need to close immediately—maybe you're facing foreclosure, relocating for a job, or dealing with an emergency—we can move fast. We have the capital ready, we handle all the paperwork, and we work with title companies who can expedite the process.

That said, we can also close on your timeline. If you need 30 days, 60 days, or even longer, we can accommodate that. The key is that you're in control of the timeline.

**Typical timelines:**
- **Cash offers:** 7-30 days
- **Subject-To agreements:** 10-21 days
- **Fix It & List It / Novation:** 60-120 days (depends on renovations and market)
- **Traditional listing support:** 60-90+ days

The bottom line: if you need speed, we can deliver. If you need time, we can give you that too.

**Best For:** Homeowners who need to close fast or want flexibility on timing.`,
    category: "Process & Timeline",
    relatedQuestions: ["how-do-cash-offers-work", "facing-foreclosure-options", "what-is-subject-to"]
  },
  {
    id: "get-instant-offer",
    question: "How do I get an instant offer?",
    answer: `Easy. Enter your property address in the form at the top of this page, and you'll receive a preliminary cash offer within moments.

This is a data-driven estimate based on comparable sales, market trends, and property data. It's not a binding contract—it's a starting point so you can see what an instant cash sale could look like.

From there, you can:
1. Accept the preliminary offer and schedule a property inspection
2. Schedule a free consultation to explore other options
3. Download our free ebook to learn more about all your solutions

No obligation. No pressure. Just information to help you make the best decision for your situation.

**Best For:** Anyone who wants to see what a cash offer looks like without any commitment.`,
    category: "Process & Timeline",
    relatedQuestions: ["how-do-cash-offers-work", "schedule-consultation", "what-solutions-do-you-offer"]
  },
  {
    id: "schedule-consultation",
    question: "What happens during a consultation?",
    answer: `A consultation is a conversation, not a sales pitch. We listen to your story, understand your goals, and present you with options tailored to your situation.

**Here's what happens:**
1. We ask about your situation (timeline, goals, challenges)
2. We assess your property and equity position
3. We present you with a customized menu of solutions
4. We answer your questions honestly and transparently
5. You decide what makes sense for you (no pressure)

The consultation is free, confidential, and obligation-free. We're not here to convince you of anything—you already know you have a problem. We're here to help you solve it.

**Best For:** Anyone who wants personalized guidance on their specific situation.`,
    category: "Process & Timeline",
    relatedQuestions: ["what-solutions-do-you-offer", "how-do-i-know-which-solution", "get-instant-offer"]
  },

  // Trust & Credibility
  {
    id: "why-should-i-trust-you",
    question: "Why should I trust you?",
    answer: `Fair question. You shouldn't trust anyone blindly, especially when it comes to your home and your financial future.

Here's why we're different:

**We've been doing this since 2004.** That's over 18 years of experience, thousands of transactions, and countless homeowners rescued. We've seen every situation, and we've solved every problem.

**We're transparent.** We'll tell you if a cash offer isn't your best option. We'll show you the full menu of solutions and help you choose the right one for your situation. We're not here to take advantage of you—we're here to help you.

**We have real success stories.** We've helped single mothers avoid foreclosure and find new homes. We've guided injured workers into real estate investing. We've transformed neighborhoods and handed equity to entire communities. These aren't just transactions—they're rescues.

**We work ethically.** We follow Fair Housing laws, we comply with all regulations, and we treat every homeowner with respect and dignity. Our reputation is everything, and we protect it fiercely.

At the end of the day, trust is earned. We invite you to read our success stories, check our reviews, and schedule a consultation. You'll see that we're the real deal.

**Best For:** Anyone who wants to understand our credibility and track record.`,
    category: "Trust & Credibility",
    relatedQuestions: ["what-solutions-do-you-offer", "schedule-consultation", "success-stories"]
  },
  {
    id: "can-you-help-me-find-rental",
    question: "Can you help me find a rental after I sell?",
    answer: `Yes. Absolutely.

We have a network of thousands of investors and landlords across the country. If your credit is damaged or you're having trouble getting approved for a rental, we can help.

We've negotiated with landlords to accept prepaid rent from closing proceeds. We've connected homeowners with investor-owned properties that have more flexible approval criteria. We've even helped sellers transition into rent-to-own situations.

Selling your home is just the first step. We want to make sure you land on your feet. That's what a rescue looks like.

**Best For:** Homeowners worried about where they'll live after selling.`,
    category: "Trust & Credibility",
    relatedQuestions: ["will-foreclosure-ruin-credit", "facing-foreclosure-options", "what-is-sell-leaseback"]
  },
  {
    id: "how-soon-can-i-buy-again",
    question: "If I sell now, how soon can I buy another home?",
    answer: `Depends on how you sell and your financial situation afterward.

**If you sell before foreclosure:** You can typically buy again in 2-3 years, sometimes sooner if your credit and income are strong.

**If you go through foreclosure:** You'll need to wait 3-7 years, depending on the loan type and your circumstances.

**If you do a short sale:** Typically 2-4 years before you can buy again.

The key is protecting your credit and stabilizing your income. If you sell now (before foreclosure), you keep your options open. And here's the thing: we can help you plan for that. We've guided homeowners through the process of selling, stabilizing, and buying again. It's not the end of your homeownership journey—it's just a chapter.

**Best For:** Homeowners worried about their future ability to buy a home.`,
    category: "Trust & Credibility",
    relatedQuestions: ["will-foreclosure-ruin-credit", "facing-foreclosure-options", "can-you-help-me-find-rental"]
  }
];

const categories = Array.from(new Set(faqData.map(q => q.category)));

const EbookCTA = () => (
  <div className="bg-gray-100 p-8 my-12 rounded-lg text-center">
    <h2 className="text-2xl font-bold text-gray-900 mb-2">Get the Full Story</h2>
    <p className="text-gray-700 mb-4">Download our free ebook, "The Cash Offer Lie," to discover the truth about cash offers and all your selling options.</p>
    <a href="/The-Cash-Offer-Lie.pdf" download="The-Cash-Offer-Lie.pdf" className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300">Download The Cash Offer Lie</a>
  </div>
);

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set());

  const toggleQuestion = (id: string) => {
    const newExpanded = new Set(expandedQuestions);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedQuestions(newExpanded);
  };

  const filteredQuestions = faqData.filter(q => {
    const matchesSearch = searchTerm === "" || 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || q.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent/20 to-background border-b py-12">
        <div className="container max-w-4xl text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Questions & Answers</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Listen, we get it. You're here because you have questions. We're here to answer them—honestly, directly, and without the BS.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-14 text-base"
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b bg-muted/30">
        <div className="container py-6">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
            >
              All Questions
            </Button>
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <EbookCTA />

      {/* Q&A List */}
      <section className="py-12">
        <div className="container max-w-4xl space-y-1">
          {filteredQuestions.length === 0 && (
            <Card>
              <CardContent className="p-12 text-center">
                <p className="text-muted-foreground">No questions found. Try a different search term or category.</p>
              </CardContent>
            </Card>
          )}
          
          {filteredQuestions.map(q => {
            const isExpanded = expandedQuestions.has(q.id);
            const relatedQs = faqData.filter(rq => q.relatedQuestions.includes(rq.id));
            
            return (
              <Card key={q.id} className="border-2">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleQuestion(q.id)}
                    className="w-full p-4 text-left flex items-start justify-between gap-4 hover:bg-accent/10 transition-colors"
                  >
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">{q.category}</p>
                      <h3 className="text-lg font-semibold">{q.question}</h3>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-1" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-1" />
                    )}
                  </button>
                  
                  {isExpanded && (
                    <div className="px-4 pb-4 space-y-4 border-t">
                      <div className="pt-6 prose prose-sm max-w-none">
                        {q.answer.split('\n\n').map((paragraph, idx) => (
                          <p key={idx} className="text-foreground/90 leading-relaxed whitespace-pre-wrap">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                      
                      {relatedQs.length > 0 && (
                        <div className="pt-6 border-t space-y-3">
                          <p className="text-sm font-semibold text-muted-foreground">Related Questions:</p>
                          <div className="space-y-2">
                            {relatedQs.map(rq => (
                              <button
                                key={rq.id}
                                onClick={() => {
                                  toggleQuestion(q.id);
                                  setTimeout(() => {
                                    toggleQuestion(rq.id);
                                    document.getElementById(rq.id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                  }, 300);
                                }}
                                className="flex items-center gap-2 text-sm text-primary hover:underline"
                              >
                                <ArrowRight className="h-4 w-4" />
                                {rq.question}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div className="pt-6 border-t">
                        <p className="text-sm text-muted-foreground mb-4">Ready to explore your options?</p>
                        <div className="flex flex-wrap gap-3">
                          <a href="/#calculator"><Button size="sm">Get My Instant Offer</Button></a>
                          <a href="/#contact"><Button size="sm" variant="outline">Schedule Free Consultation</Button></a>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent/20 border-t">
        <div className="container max-w-3xl text-center space-y-6">
          <h2 className="text-3xl font-bold">Still Have Questions?</h2>
          <p className="text-lg text-muted-foreground">
            We're here to help. No pressure, no obligation—just honest answers from people who've been doing this since 2004.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact"><Button size="lg">Schedule Free Consultation</Button></a>
            <Button size="lg" variant="outline">Download The Cash Offer Lie</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

