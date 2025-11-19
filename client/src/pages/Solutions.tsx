import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useFlowClosePro } from "@/hooks/useFlowClosePro";

// Extend Window interface for TypeScript
declare global {
  interface Window {
    initIlistForm?: () => void;
  }
}

export default function Solutions() {
  // Load FlowClosePro script
  const { isLoaded, error } = useFlowClosePro();
  
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);
  
  // Initialize FlowClosePro widgets after component mounts
  useEffect(() => {
    if (isLoaded && window.initIlistForm) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        window.initIlistForm?.();
      }, 100);
    }
  }, [isLoaded]);
  const solutions = [
    {
      id: "cash-offer",
      category: "Speed & Certainty",
      title: "Cash Offer",
      tagline: "Get cash in 7-14 days",
      description: "A straightforward cash purchase where we buy your home directly, as-is, with no repairs needed.",
      whatItIs: "We make you an all-cash offer to purchase your home in its current condition. You get an instant offer online, we close in as little as 7-14 days, and you walk away with cash. No showings, no open houses, no agent fees.",
      whyPowerful: [
        "Speed: Close in days, not months",
        "Certainty: No buyer financing falling through",
        "Convenience: No repairs, cleaning, or staging",
        "Simplicity: One offer, one buyer, one closing"
      ],
      bestFor: [
        "Homeowners facing foreclosure with limited time",
        "Properties in poor condition that won't pass traditional financing",
        "Sellers who value speed and certainty over maximum price",
        "Anyone who wants to avoid the hassle of showings"
      ]
    },
    {
      id: "premier-offer",
      category: "Speed & Certainty",
      title: "Premier Offer",
      tagline: "Top-tier cash for better properties",
      description: "Our highest cash offer tier for properties in better condition or desirable locations.",
      whatItIs: "This is our premium cash offer designed for homes that don't need much work and are in strong markets. You still get the speed and certainty of cash, but at a higher price point that's competitive with traditional sales.",
      whyPowerful: [
        "Better price than standard cash offers",
        "Still fast - close in 2-3 weeks",
        "No repairs or showings required",
        "Competitive with traditional sale prices in some cases"
      ],
      bestFor: [
        "Homes in good condition in strong markets",
        "Sellers who want cash but don't want to leave money on the table",
        "Properties that could sell traditionally but seller values speed"
      ]
    },
    {
      id: "fix-it-list-it",
      category: "Maximize Value",
      title: "Fix It & List It",
      tagline: "We renovate, you profit",
      description: "A true partnership where we renovate your home at no out-of-pocket cost, then list for top dollar.",
      whatItIs: "We partner with you to renovate your home, leveraging your existing mortgage rather than our capital. We bring the renovation expertise and marketing; you bring the house. Once market-ready, we list it for top dollar and split profits based on our agreement.",
      whyPowerful: [
        "Zero out-of-pocket costs for renovations",
        "Maximize sale price by getting home market-ready",
        "We handle everything - contractors, management, marketing",
        "You benefit from the upside - profit split, not flat offer",
        "Leverage your existing mortgage - no new financing"
      ],
      bestFor: [
        "Homeowners with equity who want top dollar but can't afford renovations",
        "Properties with strong market potential that just need work",
        "Sellers who want to maximize returns without renovation hassle"
      ]
    },
    {
      id: "cash-plus",
      category: "Maximize Value",
      title: "Cash+ Offer",
      tagline: "Get advance for repairs, sell for more",
      description: "We give you upfront cash to make repairs before listing, increasing your sale price.",
      whatItIs: "We provide an upfront cash advance for necessary repairs to your home before listing it traditionally. This increases the sale price, and we recoup our investment (plus a fee) at closing. You get more money than a straight cash offer.",
      whyPowerful: [
        "Unlock hidden value by making strategic repairs",
        "No out-of-pocket costs - we front the money",
        "Sell for more than you would as-is",
        "We guide the process - tell you what repairs give best ROI"
      ],
      bestFor: [
        "Homes that need minor to moderate repairs",
        "Sellers with equity who want more than cash offer but don't have repair funds",
        "Properties in good markets where repairs significantly increase value"
      ]
    },
    {
      id: "traditional-listing",
      category: "Maximize Value",
      title: "Traditional Listing",
      tagline: "Full-service MLS listing for top dollar",
      description: "We list your home on the MLS with full-service representation and professional marketing.",
      whatItIs: "The conventional path to selling. We list your property on the Multiple Listing Service with professional photos, marketing, showings, negotiations, and transaction management. Maximum exposure to get the highest possible price.",
      whyPowerful: [
        "Maximum exposure - listed on MLS, Zillow, Realtor.com",
        "Highest sale price - open market competition",
        "Professional representation - we negotiate on your behalf",
        "Full service - we handle everything from photos to closing"
      ],
      bestFor: [
        "Homes in great condition in strong markets",
        "Sellers who have time (60-90 days) and want top dollar",
        "Properties that will attract multiple offers"
      ]
    },
    {
      id: "sell-leaseback",
      category: "Flexibility",
      title: "Sell and Leaseback",
      tagline: "Get cash now, move later",
      description: "We buy your home for cash, then you rent it back from us while you transition.",
      whatItIs: "We purchase your home for cash, and then you rent it back from us for a period of time (typically 6-12 months). This gives you immediate cash to solve your financial problem while allowing you to stay in your home and transition on your timeline.",
      whyPowerful: [
        "Get cash now to pay off debts, avoid foreclosure",
        "Stay in your home - no immediate move required",
        "Flexible timeline - rent as long as you need",
        "Reduce stress - solve financial crisis without uprooting family"
      ],
      bestFor: [
        "Homeowners facing foreclosure who need cash but aren't ready to move",
        "Families with kids in school who need time to transition",
        "Sellers who need liquidity but want to stay in the area"
      ]
    },
    {
      id: "cash-flex",
      category: "Flexibility",
      title: "Cash Flex",
      tagline: "Cash offer with flexible closing",
      description: "A cash offer where YOU choose the closing date - 7 days or 90 days, your call.",
      whatItIs: "A cash offer with a flexible closing timeline. You choose when you want to close—whether that's 7 days or 90 days. This gives you the certainty of a cash offer with the flexibility to move on your schedule.",
      whyPowerful: [
        "Certainty of cash - no financing contingencies",
        "Flexibility of timing - close when YOU'RE ready",
        "No pressure - take the time you need to move",
        "Plan ahead - coordinate with next home purchase or relocation"
      ],
      bestFor: [
        "Sellers who want cash but need time to find their next home",
        "Homeowners coordinating a move with job relocation",
        "Anyone who values both certainty and flexibility"
      ]
    },
    {
      id: "advantage-plus",
      category: "Flexibility",
      title: "Advantage+",
      tagline: "Buy your next home before selling",
      description: "We help you buy your next home BEFORE you sell your current one.",
      whatItIs: "We provide the down payment or bridge financing so you can make a competitive offer on your dream home without a home sale contingency. Once you move, we help you sell your old home.",
      whyPowerful: [
        "Buy without contingencies - stronger offer, better chance",
        "No rushed move - take your time transitioning",
        "Avoid temporary housing - move directly old to new",
        "Competitive advantage - contingent offers often lose"
      ],
      bestFor: [
        "Homeowners who found their dream home but haven't sold yet",
        "Sellers in competitive markets where contingent offers don't win",
        "Families who want to avoid moving twice"
      ]
    },
    {
      id: "freedom-lock",
      category: "Flexibility",
      title: "Freedom Lock",
      tagline: "List traditionally with backup cash offer",
      description: "List your home on the market, but we provide a backup cash offer if it falls through.",
      whatItIs: "You list your home traditionally, but we provide a backup cash offer that kicks in if your traditional sale falls through. This gives you security of a guaranteed buyer while still pursuing top dollar on the open market.",
      whyPowerful: [
        "Best of both worlds - pursue top dollar with safety net",
        "No risk - if traditional sale works, great; if not, we buy",
        "Peace of mind - no fear of deals falling through",
        "Flexibility - you control the timeline"
      ],
      bestFor: [
        "Sellers who want to try traditional market but need certainty",
        "Homes in uncertain markets where deals often fall through",
        "Anyone with a deadline who can't risk a failed sale"
      ]
    },
    {
      id: "fsbo-support",
      category: "DIY Solutions",
      title: "FSBO Support",
      tagline: "Tools to sell yourself",
      description: "We provide contracts, marketing materials, and guidance so you can sell yourself.",
      whatItIs: "Not every homeowner needs an agent or investor. Our FSBO Support Program gives you everything to sell on your own: professional contracts, marketing materials, and expert advice. You keep 100% control and equity.",
      whyPowerful: [
        "Save on commissions - keep more equity",
        "Full control - you decide everything",
        "Professional tools - contracts, templates, guidance",
        "Expert support - we're here if you have questions"
      ],
      bestFor: [
        "Savvy homeowners comfortable managing their own sale",
        "Sellers with a buyer already lined up",
        "Anyone who wants to save money and has time to DIY"
      ]
    },
    {
      id: "flat-fee-mls",
      category: "DIY Solutions",
      title: "Flat Fee MLS",
      tagline: "Maximum exposure, minimal cost",
      description: "We list your property on the MLS for a flat fee, not a percentage commission.",
      whatItIs: "We list your property on the MLS for a flat fee, giving you maximum exposure without high commission costs. You get professional photos and can manage showings yourself or have us help.",
      whyPowerful: [
        "MLS exposure - seen by all agents and buyers",
        "Low cost - flat fee instead of 5-6% commission",
        "Flexibility - choose your level of involvement",
        "Professional presentation - photos and listing optimization"
      ],
      bestFor: [
        "Experienced sellers or investors who know transactions",
        "Homeowners who want MLS exposure without full-service cost",
        "Properties in strong markets that will sell themselves",
        "Note: Not always ideal for typical homeowners needing guidance"
      ]
    }
  ];

  const categories = [
    { name: "Speed & Certainty", description: "Close fast, move on with your life" },
    { name: "Maximize Value", description: "Get top dollar for your home" },
    { name: "Flexibility", description: "Solutions that work on your timeline" },
    { name: "DIY Solutions", description: "For experienced sellers who want control" }
  ];
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Your Second Opinion: A Stack of Solutions
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
            Most homeowners think they have 2-3 options. We'll show you 11+. Because the best solution 
            isn't one-size-fits-all—it's the one that fits YOUR situation.
          </p>
        </div>
      </section>

      {/* Solutions by Category */}
      {categories.map((category) => (
        <section key={category.name} className="py-16 border-b">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black mb-4">{category.name}</h2>
              <p className="text-xl text-gray-600">{category.description}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions
                .filter((s) => s.category === category.name)
                .map((solution) => (
                  <Card key={solution.id} className="hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-2xl">{solution.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-yellow-600">
                        {solution.tagline}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-6">{solution.description}</p>
                      
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="font-bold text-sm uppercase text-gray-500 mb-2">What It Is:</h4>
                          <p className="text-sm text-gray-700">{solution.whatItIs}</p>
                        </div>

                        <div>
                          <h4 className="font-bold text-sm uppercase text-gray-500 mb-2">Why It's Powerful:</h4>
                          <ul className="space-y-1">
                            {solution.whyPowerful.map((item, i) => (
                              <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                                <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-bold text-sm uppercase text-gray-500 mb-2">Best For:</h4>
                          <ul className="space-y-1">
                            {solution.bestFor.map((item, i) => (
                              <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                                <ArrowRight className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* FlowClosePro Address Widget */}
                      <div className="bg-gray-50 p-4 rounded-lg border-2 border-yellow-500 mb-4">
                        <div className="text-sm font-semibold text-gray-700 mb-2">Enter your property address:</div>
                        <div className="ilist-content" data-solution={solution.id}></div>
                      </div>

                      <Button 
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
                        onClick={(e) => {
                          const card = e.currentTarget.closest('.bg-white');
                          const widget = card?.querySelector('.ilist-content');
                          if (widget) {
                            // Try multiple selectors to find the FlowClosePro submit button
                            let flowCloseProButton = widget.querySelector('button[type="submit"]') as HTMLButtonElement;
                            if (!flowCloseProButton) {
                              flowCloseProButton = widget.querySelector('button') as HTMLButtonElement;
                            }
                            if (flowCloseProButton && flowCloseProButton.onclick) {
                              flowCloseProButton.click();
                            } else {
                              alert('Please enter your property address above');
                            }
                          }
                        }}
                      >
                        Get This Offer
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>
      ))}

      {/* FlowClosePro Widget Section */}
      <section className="bg-white py-16">
        <div className="container max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-black mb-4">GET YOUR INSTANT OFFER</h2>
            <p className="text-xl text-gray-600">Enter your property address to get started</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg border-2 border-[#c9a961]">
            <div className="text-sm font-semibold text-gray-700 mb-3">Property Address:</div>
            <div className="ilist-content mb-4"></div>
            <Button 
              className="w-full bg-[#c9a961] hover:bg-[#b8954f] text-white font-bold text-lg py-6"
              onClick={(e) => {
                const section = e.currentTarget.closest('section');
                const widget = section?.querySelector('.ilist-content');
                if (widget) {
                  // Try multiple selectors to find the FlowClosePro submit button
                  let flowCloseProButton = widget.querySelector('button[type="submit"]') as HTMLButtonElement;
                  if (!flowCloseProButton) {
                    flowCloseProButton = widget.querySelector('button') as HTMLButtonElement;
                  }
                  if (flowCloseProButton && flowCloseProButton.onclick) {
                    flowCloseProButton.click();
                  } else {
                    alert('Please enter your property address above');
                  }
                }
              }}
            >
              GET OFFER
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready for Your Second Opinion?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            We don't know much about your real estate situation better than 99% of homeowners. 
            The only thing standing between you and a solution is taking the first step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/#calculator">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8">
                GET MY INSTANT OFFER
              </Button>
            </Link>
            <Link to="/#contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black font-bold text-lg px-8">
                SCHEDULE FREE CONSULTATION
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

