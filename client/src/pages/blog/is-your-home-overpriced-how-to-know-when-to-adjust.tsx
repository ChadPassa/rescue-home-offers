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
          <span className="text-xs font-semibold text-[#c9a961] bg-[#c9a961]/10 px-3 py-1 rounded-full">Market Conditions</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mt-4">Is Your Home Overpriced? How to Know When to Adjust</h1>
          <p className="text-gray-500 mt-4">December 18, 2025</p>
        </div>
      </section>

      {/* Content Section */}
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-3xl prose prose-lg prose-gray">
          <h2>Your Price is a Fantasy. The Market's Reality is a Slap in the Face.</h2>
          <p>Listen, we get it. You looked at your neighbor's Zestimate, you saw the headlines about record-high prices in Las Vegas, and you set your asking price. Now, your home has been sitting on the market for 60, 90, maybe even 100 days. The showings have dried up. The only feedback is a deafening silence.</p>
          <p>You're not alone. In the current market, a staggering <strong>70% of U.S. home listings are considered "stale,"</strong> meaning they've been on the market for over 60 days without a single offer [1]. In Las Vegas, the average time on market has ballooned to 72 days, and while prices are at an all-time high, sales are actually down 6.6% from last year [2].</p>
          <p>So, what gives? It's simple: your price is a fantasy, and the market's reality is a slap in the face. Here's how to know when it's time to adjust.</p>
          <h3>The Market Doesn't Care About Your Feelings (or Your Zestimate)</h3>
          <p>That number you have in your head—what you *need* to get, what you *want* to get, what Zillow *told* you you could get—is irrelevant. The only number that matters is what a ready, willing, and able buyer is willing to pay for your home *today*.</p>
          <p>Here are the cold, hard signs that your price is out of touch with reality:</p>
          <ul>
            <li>  <strong>No Showings:</strong> This is the most obvious sign. If you're not getting people in the door, your price is too high. Period.</li>
            <li>  <strong>Negative Feedback:</strong> If the only feedback you're getting from the few showings you've had is about the price, it's time to listen.</li>
            <li>  <strong>Your Neighbors are Selling, You're Not:</strong> If other homes in your neighborhood are going under contract while yours sits, you're the problem, not the market.</li>
            <li>  <strong>You're Chasing the Market Down:</strong> Did you know that 1 in 5 homes that are delisted are re-listed at a lower price to reset the "days on market" clock? [1] Don't be that person. Price it right from the start.</li>
          </ul>
          <h3>The "Wait and See" Approach is a Losing Strategy</h3>
          <p>With inventory up 26.3% in Las Vegas, buyers have more options than ever [2]. They're not going to overpay for your home when they can get a similar one for less. The longer your home sits, the more it becomes stigmatized. Buyers start to wonder, "What's wrong with it?"</p>
          <p>The reality is, you're not just competing with other sellers. You're competing with time. And time is not on your side.</p>
          <h3>It's Not About Lowballing. It's About Options.</h3>
          <p>At Rescue Home Offers, we're not here to lowball you. We're here to give you a second opinion. We're Gen X. We get stuff done. We've been in the Las Vegas real estate trenches for over 20 years, and we've seen it all.</p>
          <p>We'll show you ALL your options—from a traditional listing with a price adjustment, to a fix-and-flip partnership, to a cash offer that can close in as little as 7 days. We're not just investors; we're problem solvers.</p>
          <p>Your price, our terms. Your terms, our price. It's that simple.</p>
          <p>If you're tired of waiting for the market to catch up to your fantasy price, it's time for a reality check. It's time for a second opinion.</p>
          <p><strong>[Get Your Free, No-Obligation Second Opinion Today]</strong></p>
          <p>---</p>
          <h3>References</h3>
          <p>[1] Redfin. (2025, November 25). *Delistings Jump 28% as Sellers Pull Homes Off Market*. https://www.redfin.com/news/delistings-jump-sellers-pull-homes-off-market/</p>
          <p>[2] Las Vegas Review-Journal. (2025, December). *Home prices hit record high in Southern Nevada again*. https://www.reviewjournal.com/business/housing/home-prices-hit-record-high-in-southern-nevada-again-3592899/</p>

          {/* Related Articles */}
          <div className="mt-12 p-6 bg-gray-50 rounded-2xl not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h3>
            <ul className="space-y-3">
              <li><Link to="/blog/las-vegas-housing-market-2025-what-every-seller-needs-to-know-right-now" className="text-[#c9a961] hover:underline">Las Vegas Housing Market 2025: What Every Seller Needs to Know Right Now</Link></li>
              <li><Link to="/blog/why-70-percent-of-homes-are-sitting-unsold-the-stale-listing-crisis" className="text-[#c9a961] hover:underline">Why 70% of Homes Are Sitting Unsold: The Stale Listing Crisis</Link></li>
              <li><Link to="/blog/when-your-listing-goes-stale-why-your-home-isnt-selling-and-your-other-options" className="text-[#c9a961] hover:underline">When Your Listing Goes Stale: Why Your Home Isn't Selling (and Your Other Options)</Link></li>
              <li><Link to="/blog/hidden-costs-stale-listing" className="text-[#c9a961] hover:underline">The Hidden Costs of a Stale Listing (What Your Agent Won't Tell You)</Link></li>
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
