import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from 'react';
import { Link } from 'wouter';

export default function StaleListing70Percent() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-gradient-to-b from-gray-50 to-white border-b py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-4">
            <Link to="/blog" className="text-[#c9a961] hover:underline">← Back to Blog</Link>
          </div>
          <span className="text-xs font-semibold text-[#c9a961] bg-[#c9a961]/10 px-3 py-1 rounded-full">Stale Listings</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mt-4">Why 70% of Homes Are Sitting Unsold: The Stale Listing Crisis</h1>
          <p className="text-gray-500 mt-4">By England Hart • December 18, 2025</p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl py-8">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img 
            src="/images/blog/why-70-percent-of-homes-are-sitting-unsold-the-stale-listing-crisis.jpg" 
            alt="Stale Listing Crisis - 70% of Homes Unsold"
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>
      </div>

      <article className="py-12">
        <div className="container mx-auto px-4 max-w-3xl prose prose-lg prose-gray">
          <p>Here's a stat that should make every home seller sit up and pay attention: in many markets across the country, nearly 70% of homes listed for sale are sitting unsold. Delistings have jumped 64% from a year ago. Sellers are pulling their homes off the market at the highest rate in years.</p>

          <p>What's going on? And more importantly, what does it mean for you if you're trying to sell your home in the <Link to="/blog/las-vegas-housing-market-2025-what-every-seller-needs-to-know-right-now" className="text-[#c9a961] hover:underline">Las Vegas market</Link>?</p>

          <h2>The Perfect Storm</h2>

          <p>Several factors have combined to create this stale listing crisis:</p>

          <ul>
            <li><strong>Elevated Interest Rates:</strong> Mortgage rates are still significantly higher than they were a few years ago. This has priced many buyers out of the market.</li>
            <li><strong>Overpriced Listings:</strong> Many sellers are still pricing their homes based on the 2021-2022 market. If your home is <Link to="/blog/is-your-home-overpriced-how-to-know-when-to-adjust" className="text-[#c9a961] hover:underline">overpriced</Link>, it's going to sit.</li>
            <li><strong>Increased Inventory:</strong> There are more homes on the market than there have been in years.</li>
            <li><strong>Economic Uncertainty:</strong> Buyers are hesitant to make big financial commitments.</li>
          </ul>

          <h2>The Stigma of a Stale Listing</h2>

          <p>When a home sits on the market for too long, it becomes stigmatized. Buyers start to wonder what's wrong with it. Agents stop showing it. And the <Link to="/blog/hidden-costs-stale-listing" className="text-[#c9a961] hover:underline">hidden costs</Link> keep piling up.</p>

          <h2>Your Options When Your Listing Goes Stale</h2>

          <p>If your home has been on the market for more than 30 days without serious interest, here are your options:</p>

          <ul>
            <li><strong>Price Reduction:</strong> The most obvious solution, but not always the best one.</li>
            <li><strong>Cash Sale:</strong> <Link to="/blog/sell-house-fast-las-vegas-the-ultimate-guide-to-all-your-options" className="text-[#c9a961] hover:underline">Sell to a cash buyer</Link> and move on. Work with <Link to="/blog/cash-home-buyers-in-las-vegas-are-they-legit" className="text-[#c9a961] hover:underline">legitimate cash buyers</Link>.</li>
            <li><strong>Creative Solutions:</strong> <Link to="/blog/creative-real-estate-solutions-beyond-the-cash-offer" className="text-[#c9a961] hover:underline">Creative real estate solutions</Link> can attract buyers who can't get traditional financing.</li>
          </ul>

          <p>If you're dealing with <Link to="/blog/how-to-stop-foreclosure-in-las-vegas-a-step-by-step-guide" className="text-[#c9a961] hover:underline">foreclosure</Link> or an <Link to="/blog/selling-an-inherited-property-in-las-vegas-the-complete-guide" className="text-[#c9a961] hover:underline">inherited property</Link>, the urgency is even greater. Learn more about <Link to="/blog/when-your-listing-goes-stale-why-your-home-isnt-selling-and-your-other-options" className="text-[#c9a961] hover:underline">why your home isn't selling</Link>.</p>

          <div className="mt-12 p-6 bg-gray-50 rounded-2xl not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h3>
            <ul className="space-y-3">
              <li><Link to="/blog/sell-house-fast-las-vegas-the-ultimate-guide-to-all-your-options" className="text-[#c9a961] hover:underline">Sell House Fast Las Vegas: The Ultimate Guide</Link></li>
              <li><Link to="/blog/how-to-stop-foreclosure-in-las-vegas-a-step-by-step-guide" className="text-[#c9a961] hover:underline">How to Stop Foreclosure in Las Vegas</Link></li>
              <li><Link to="/blog/cash-home-buyers-in-las-vegas-are-they-legit" className="text-[#c9a961] hover:underline">Cash Home Buyers in Las Vegas: Are They Legit?</Link></li>
              <li><Link to="/blog/selling-an-inherited-property-in-las-vegas-the-complete-guide" className="text-[#c9a961] hover:underline">Selling an Inherited Property in Las Vegas</Link></li>
              <li><Link to="/blog/creative-real-estate-solutions-beyond-the-cash-offer" className="text-[#c9a961] hover:underline">Creative Real Estate Solutions</Link></li>
              <li><Link to="/blog/las-vegas-housing-market-2025-what-every-seller-needs-to-know-right-now" className="text-[#c9a961] hover:underline">Las Vegas Housing Market 2025</Link></li>
              <li><Link to="/blog/hidden-costs-stale-listing" className="text-[#c9a961] hover:underline">The Hidden Costs of a Stale Listing</Link></li>
              <li><Link to="/blog/is-your-home-overpriced-how-to-know-when-to-adjust" className="text-[#c9a961] hover:underline">Is Your Home Overpriced?</Link></li>
              <li><Link to="/blog/when-your-listing-goes-stale-why-your-home-isnt-selling-and-your-other-options" className="text-[#c9a961] hover:underline">When Your Listing Goes Stale</Link></li>
            </ul>
          </div>
        </div>
      </article>

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
