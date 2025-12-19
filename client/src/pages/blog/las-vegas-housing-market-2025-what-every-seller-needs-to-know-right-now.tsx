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
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mt-4">Las Vegas Housing Market 2025: What Every Seller Needs to Know Right Now</h1>
          <p className="text-gray-500 mt-4">By England Hart • December 18, 2025</p>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container mx-auto px-4 max-w-4xl py-8">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img 
            src="/images/blog/las-vegas-housing-market-2025.jpg" 
            alt="Las Vegas skyline with residential neighborhoods at sunset"
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-3xl prose prose-lg prose-gray">
          <p>Listen, we get it. You're here because you have a problem. The headlines are screaming that Las Vegas home prices are at an all-time high, but your house has been sitting on the market for months with no serious offers. You're not alone. The market is more complicated than the news makes it seem, and if you're a seller right now, you need to understand what's really going on.</p>
          <h2>The Great Las Vegas Market Paradox</h2>
          <p>Here's the deal: the median home price in Las Vegas just hit a record $488,995 in November 2025. On the surface, that sounds great for sellers. But here's the catch - sales are down 6.6% from last year, and the number of homes on the market is up a whopping 26.3%. The average home is now sitting on the market for 72 days.</p>
          <p>What does this mean? It means we have a surplus of homes for sale and not enough buyers. Nationally, a staggering 70% of home listings are considered "stale," meaning they've been on the market for 60 days or more without going under contract. Sellers are getting discouraged and pulling their homes off the market at the highest rate in a decade. This is artificially propping up prices, creating a confusing and frustrating situation for anyone trying to sell.</p>
          <h2>Why Your Home Isn't Selling (and What to Do About It)</h2>
          <p>If your home is one of the thousands sitting on the market in Las Vegas, you're likely facing one of these problems:</p>
          <ul>
            <li>  <strong>You're getting lowball offers:</strong> With more inventory to choose from, buyers are feeling less pressure to pay top dollar.</li>
            <li>  <strong>Your home needs repairs:</strong> In a competitive market, homes that need work get overlooked.</li>
            <li>  <strong>You're in a distressed situation:</strong> Facing foreclosure, divorce, or probate adds another layer of stress to an already difficult process.</li>
          </ul>
          <p>Here's the hard truth: a traditional listing isn't the only answer, and in this market, it might not be the best one. You need options. That's where we come in.</p>
          <h2>Your Price, Our Terms. Your Terms, Our Price.</h2>
          <p>At Rescue Home Offers, we're not here to give you the same old song and dance. We're a team of seasoned Las Vegas real estate pros who have been navigating this market for over 20 years. We've seen it all, and we're here to give you a second opinion.</p>
          <p>We don't just offer you a lowball cash offer or a traditional listing. We have over 11 different solutions for homeowners, including:</p>
          <ul>
            <li>  <strong>Fix-and-flip partnerships:</strong> If your home needs work, we can partner with you to fix it up and sell it for top dollar.</li>
            <li>  <strong>Cash offers:</strong> If you need to sell fast, we can give you a fair cash offer and close on your timeline.</li>
            <li>  <strong>Creative financing solutions:</strong> We can work with you on subject-to agreements, seller financing, and other creative solutions that most real estate agents and investors don't even know exist.</li>
          </ul>
          <p>No home should go to the courthouse steps. You have options. Don't let a stale listing and a confusing market dictate your future. If you're ready to see all your options and get a fair assessment of your situation, give us a call. We're here to help you find the right solution, not just the one that makes us the most money.</p>

          {/* Related Articles */}
          <div className="mt-12 p-6 bg-gray-50 rounded-2xl not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h3>
            <ul className="space-y-3">
              <li><Link to="/blog/why-70-percent-of-homes-are-sitting-unsold-the-stale-listing-crisis" className="text-[#c9a961] hover:underline">Why 70% of Homes Are Sitting Unsold: The Stale Listing Crisis</Link></li>
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
