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
          <span className="text-xs font-semibold text-[#c9a961] bg-[#c9a961]/10 px-3 py-1 rounded-full">Real Estate</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mt-4">Why 70% of Homes Are Sitting Unsold: The Stale Listing Crisis</h1>
          <p className="text-gray-500 mt-4">December 18, 2025</p>
        </div>
      </section>

      {/* Content Section */}
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-3xl prose prose-lg prose-gray">
          <p>You’re not crazy. The market *is* weird right now.</p>
          <p>You see the headlines: “Las Vegas Home Prices Hit All-Time High!” [2]. You hear realtors saying it’s a great time to sell. So you list your property, expecting a quick sale and a nice profit.</p>
          <p>Then… crickets.</p>
          <p>Days turn into weeks. Weeks turn into months. Your listing goes from “new” to “stale,” and you’re left wondering what the hell is going on.</p>
          <p>If this sounds familiar, you’re not alone. <strong>A staggering 70% of U.S. home listings were considered “stale” in September</strong>, meaning they sat on the market for 60 days or more without going under contract [1]. In Las Vegas, the average home is now sitting for 72 days.</p>
          <p>What gives?</p>
          <h2>The Great Disconnect: High Prices, No Buyers</h2>
          <p>Here’s the deal: while the median home price in Southern Nevada just hit a record $488,995, actual *sales* are down 6.6% from last year [2]. Inventory is up over 26%, meaning there are more homes for sale, but fewer people buying them.</p>
          <p>Buyers are getting sidelined by a perfect storm of high prices, high mortgage rates, and general economic uncertainty. They’re hesitant to pull the trigger, and who can blame them?</p>
          <p>This leaves a lot of sellers in a tough spot. In September alone, 85,000 sellers across the country pulled their homes off the market—the highest number in eight years [1]. The typical delisted home was on the market for 100 days before the seller gave up.</p>
          <h2>The Problem with the Traditional Approach</h2>
          <p>So what’s the solution? Most real estate agents will give you two options:</p>
          <p>1.  <strong>Lower the price.</strong></p>
          <p>2.  <strong>Wait it out.</strong></p>
          <p>And if you’re one of the 47% of sellers who bought in the last five years, lowering the price might mean taking a loss [1]. Waiting it out isn’t always an option, especially if you’re dealing with foreclosure, divorce, probate, or a job relocation.</p>
          <p>The traditional real estate model is broken. It’s a one-size-fits-all approach that doesn’t work for everyone, especially in a market like this.</p>
          <h2>Your Price, Our Terms. Your Terms, Our Price.</h2>
          <p>At Rescue Home Offers, we do things differently. We’re not here to give you a lowball cash offer or stick a sign in your yard and hope for the best. We’re here to give you options.</p>
          <p>We’re Gen X. We get stuff done. With over 20 years of experience in the Las Vegas market, we’ve seen it all. We specialize in creative real estate solutions for homeowners in distressed situations.</p>
          <p>Whether you’re facing foreclosure, dealing with a damaged property, or just need to sell fast, we can help. We offer 11+ different solutions, including:</p>
          <ul>
            <li>  <strong>Cash offers</strong></li>
            <li>  <strong>Fix-and-flip partnerships</strong></li>
            <li>  <strong>Subject-to agreements</strong></li>
            <li>  <strong>Seller financing</strong></li>
            <li>  <strong>Traditional listings</strong></li>
          </ul>
          <p>We’ll sit down with you, review your situation, and show you ALL your options. No pressure. No BS. Just a clear path forward.</p>
          <p>Don’t let your home become another stale listing statistic. If you’re ready for a second opinion, we’re ready to help.</p>
          <h3>References</h3>
          <p>[1] Redfin. (2025, November 25). <em>Delistings Jump 28%</em>. <a href="https://www.redfin.com/news/delistings-jump-sellers-pull-homes-off-market/" className="text-[#c9a961] hover:underline" target="_blank" rel="noopener noreferrer">Source</a></p>
          <p>[2] Las Vegas Review-Journal. (2025, December). <em>Home prices hit record high in Southern Nevada again</em>. <a href="https://www.reviewjournal.com/business/housing/home-prices-hit-record-high-in-southern-nevada-again-3592899/" className="text-[#c9a961] hover:underline" target="_blank" rel="noopener noreferrer">Source</a></p>

          {/* Related Articles */}
          <div className="mt-12 p-6 bg-gray-50 rounded-2xl not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h3>
            <ul className="space-y-3">
              <li><Link to="/blog/las-vegas-housing-market-2025-what-every-seller-needs-to-know-right-now" className="text-[#c9a961] hover:underline">Las Vegas Housing Market 2025: What Every Seller Needs to Know Right Now</Link></li>
              <li><Link to="/blog/is-your-home-overpriced-how-to-know-when-to-adjust" className="text-[#c9a961] hover:underline">Is Your Home Overpriced? How to Know When to Adjust</Link></li>
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
