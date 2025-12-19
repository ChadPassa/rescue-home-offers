import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from 'wouter';

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white border-b py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-4">
            <Link to="/blog" className="text-[#c9a961] hover:underline">← Back to Blog</Link>
          </div>
          <span className="text-xs font-semibold text-[#c9a961] bg-[#c9a961]/10 px-3 py-1 rounded-full">Stale Listings</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mt-4">When Your Listing Goes Stale: Why Your Home Isn't Selling (and Your Other Options)</h1>
          <p className="text-gray-500 mt-4">By England Hart • December 18, 2025</p>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container mx-auto px-4 max-w-4xl py-8">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img 
            src="/images/blog/listing-goes-stale.jpg" 
            alt="Weathered FOR SALE sign with PRICE REDUCED - stale listing"
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-3xl prose prose-lg prose-gray">
          <p>So, you put your home on the market. You saw the headlines about record-high prices in Las Vegas and thought, 'This will be easy.'" Now, it's been 30, 60, maybe even 90+ days, and all you've heard are crickets. The sign in the yard is starting to feel like a permanent fixture.</p>
          <p>Listen, we get it. You're here because the traditional listing route isn't working. You're frustrated, maybe a little panicked, and you're wondering what went wrong in a so-called "seller's market." Let's cut through the noise.</p>
          <h2>The Las Vegas Market Paradox: High Prices, Stale Listings</h2>
          <p>It’s true that Las Vegas home prices hit another all-time high in November 2025, sitting at a median of $488,995 [2]. But here’s the part the headlines don’t tell you: the number of homes for sale has shot up by over 26% compared to last year, while actual sales have dropped by nearly 7% [2].</p>
          <p>What does that mean for you? More competition. A lot more.</p>
          <p>Nationally, a staggering <strong>70% of home listings are now considered "stale,"</strong> meaning they've been on the market for 60 days or more without going under contract [1]. In Las Vegas, the average time on market has stretched to 72 days. If your property has been sitting longer than that, you're not alone. You're part of a growing majority.</p>
          <h2>Why Isn't Your House Selling? It's Not Just You.</h2>
          <p>When a home doesn't sell, most agents give you one of two reasons: it's the price or the condition. They're not wrong, but they're not telling you the whole story.</p>
          <p>1.  <strong>The Market is More Balanced Than You Think:</strong> With a 26% surge in inventory, buyers can afford to be picky. They have options. A year ago, they might have overlooked that dated kitchen or the roof that's seen better days. Today, they'll just move on to the next listing.</p>
          <p>2.  <strong>Sellers Are Hitting a Wall:</strong> You're not the only one feeling stuck. In September alone, 85,000 sellers across the country pulled their homes off the market—the highest rate in a decade [1]. The typical delisted home sat for 100 days before the seller gave up [1]. Simply re-listing at a lower price is a common tactic, but it’s often a race to the bottom that you don't have to run.</p>
          <p>3.  <strong>Your Home Needs Work:</strong> Is your property a "distressed home"? This doesn't just mean foreclosure. It can be a property with major repair needs, structural issues, or a hoarder situation. In a competitive market, these homes are the first to be ignored by traditional buyers and their lenders.</p>
          <h2>Stop Waiting. Start Looking at Your Other Options.</h2>
          <p>If your listing is stale, doing the same thing and hoping for a different result is a losing strategy. It’s time for a second opinion.</p>
          <p>At Rescue Home Offers, we specialize in situations where the traditional market fails. We're not here to lowball you; we're here to show you all the options the other guys don't talk about. We've been solving complex real estate problems in Las Vegas for over 20 years, and trust us—we've seen worse.</p>
          <p>Here are a few of the paths we can explore:</p>
          <ul>
            <li>  <strong>Cash Offer:</strong> No showings, no repairs, no waiting for bank approvals. Just a fair cash offer and a closing date you choose. This is the fastest way to get out from under the stress.</li>
            <li>  <strong>Fix-and-Flip Partnership (Novation):</strong> If your home needs work you can't afford, we can partner with you. We handle the renovations to maximize the sale price, and we both win.</li>
            <li>  <strong>Creative Financing (Subject-To/Seller Financing):</strong> These are powerful tools if you have little-to-no equity or are behind on payments. We can often take over your payments or create a private mortgage, providing you with debt relief and a clean exit.</li>
          </ul>
          <p>No home should go to the courthouse steps. Your situation is unique, and you deserve to see every possible solution—not just the two that make a real estate agent the most commission.</p>
          <p>If you're tired of waiting for an offer that may never come, it's time to talk. We'll give you a direct, no-BS assessment and show you the 11+ different solutions we can offer. No pressure. No fluff. Just a clear path forward.</p>
          <p>---</p>
          <h3>References</h3>
          <p>[1] Redfin. (2025, November 25). <em>Delistings Jump 28% as 70% of Listings Go Stale</em>. <a href="https://www.redfin.com/news/delistings-jump-sellers-pull-homes-off-market/" className="text-[#c9a961] hover:underline" target="_blank" rel="noopener noreferrer">Source</a></p>
          <p>[2] Las Vegas Review-Journal. (2025, December). <em>Home prices hit record high in Southern Nevada again</em>. <a href="https://www.reviewjournal.com/business/housing/home-prices-hit-record-high-in-southern-nevada-again-3592899/" className="text-[#c9a961] hover:underline" target="_blank" rel="noopener noreferrer">Source</a></p>

          {/* Related Articles */}
          <div className="mt-12 p-6 bg-gray-50 rounded-2xl not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h3>
            <ul className="space-y-3">
              <li><Link to="/blog/las-vegas-housing-market-2025-what-every-seller-needs-to-know-right-now" className="text-[#c9a961] hover:underline">Las Vegas Housing Market 2025: What Every Seller Needs to Know Right Now</Link></li>
              <li><Link to="/blog/why-70-percent-of-homes-are-sitting-unsold-the-stale-listing-crisis" className="text-[#c9a961] hover:underline">Why 70% of Homes Are Sitting Unsold: The Stale Listing Crisis</Link></li>
              <li><Link to="/blog/is-your-home-overpriced-how-to-know-when-to-adjust" className="text-[#c9a961] hover:underline">Is Your Home Overpriced? How to Know When to Adjust</Link></li>
              <li><Link to="/blog/hidden-costs-stale-listing" className="text-[#c9a961] hover:underline">The Hidden Costs of a Stale Listing (What Your Agent Won't Tell You)</Link></li>
              <li><Link to="/blog/sell-house-fast-las-vegas-the-ultimate-guide-to-all-your-options" className="text-[#c9a961] hover:underline">Sell House Fast Las Vegas: The Ultimate Guide</Link></li>
              <li><Link to="/blog/how-to-stop-foreclosure-in-las-vegas-a-step-by-step-guide" className="text-[#c9a961] hover:underline">How to Stop Foreclosure in Las Vegas</Link></li>
              <li><Link to="/blog/cash-home-buyers-in-las-vegas-are-they-legit" className="text-[#c9a961] hover:underline">Cash Home Buyers in Las Vegas: Are They Legit?</Link></li>
              <li><Link to="/blog/selling-an-inherited-property-in-las-vegas-the-complete-guide" className="text-[#c9a961] hover:underline">Selling an Inherited Property in Las Vegas</Link></li>
              <li><Link to="/blog/creative-real-estate-solutions-beyond-the-cash-offer" className="text-[#c9a961] hover:underline">Creative Real Estate Solutions: Beyond the Cash Offer</Link></li>
            </ul>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="bg-gray-50 py-12 border-t">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready for Your Second Opinion?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Get a free, no-obligation cash offer or schedule a consultation to explore all your options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#calculator" className="bg-[#c9a961] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#b8860b] transition-colors inline-block text-lg">
              Get Your Offer Now →
            </a>
            <a href="/#contact" className="bg-white text-gray-900 border-2 border-gray-300 px-6 py-4 rounded-lg font-semibold hover:border-[#c9a961] transition-colors">
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
