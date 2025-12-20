import { Link } from 'wouter';
import { useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const blogPosts = [
  // CLUSTER 3: Market Ready (NEW - December 20, 2025)
  {
    id: 'why-market-ready-is-the-only-way-to-sell-in-todays-las-vegas-market',
    title: 'Why "Market Ready" Is the Only Way to Sell in Today\'s Las Vegas Market',
    excerpt: 'In a buyer\'s market with rising inventory, being "market ready" isn\'t about getting more money—it\'s about getting your house sold at all.',
    date: 'December 20, 2025',
    category: 'Market Ready',
    isPillar: true
  },
  {
    id: 'concessions-cost-more-than-repairs-the-math-every-las-vegas-seller-needs-to-see',
    title: 'Concessions Cost More Than Repairs: The Math Every Las Vegas Seller Needs to See',
    excerpt: 'Thinking of offering a credit instead of doing repairs? The math shows that seller concessions often cost you far more than the actual fix.',
    date: 'December 20, 2025',
    category: 'Market Ready'
  },
  {
    id: 'what-buyers-actually-see-when-they-walk-into-your-home',
    title: 'What Buyers Actually See When They Walk Into Your Home (And Why It Costs You Money)',
    excerpt: 'You see a functioning home. Buyers see a project list. Understand the psychology of buyer perception and how small issues lead to huge price reductions.',
    date: 'December 20, 2025',
    category: 'Buyer Psychology'
  },
  {
    id: 'your-house-might-smell-how-odors-kill-home-sales-las-vegas',
    title: 'Your House Might Smell (And You Don\'t Even Know It): How Odors Kill Home Sales',
    excerpt: 'You\'re probably nose-blind to your home\'s odors, but buyers aren\'t. Learn how pet smells, smoke, and mustiness can kill a home sale.',
    date: 'December 20, 2025',
    category: 'Home Presentation'
  },
  {
    id: 'which-home-updates-pay-off-when-selling-las-vegas',
    title: 'The $15,000 That Saves You $50,000: Which Updates Actually Pay Off When Selling',
    excerpt: 'Not all home updates are created equal. Learn which high-ROI, low-cost updates can save you from massive price reductions in a buyer\'s market.',
    date: 'December 20, 2025',
    category: 'Home Updates'
  },
  {
    id: 'cant-afford-to-make-home-market-ready-options-las-vegas',
    title: 'Can\'t Afford to Make Your Home Market Ready? Here Are Your Real Options',
    excerpt: 'You know your home needs work to sell, but you don\'t have the cash. Don\'t despair. You have options beyond a traditional listing.',
    date: 'December 20, 2025',
    category: 'Selling Options'
  },
  {
    id: 'holding-costs-unsold-home-las-vegas',
    title: 'Every Month Your House Sits Unsold Costs You $____: The Holding Cost Reality',
    excerpt: 'The price you see is not the price you get. Learn about the hidden holding costs that eat away at your profit every month your house sits on the market.',
    date: 'December 20, 2025',
    category: 'Financial Reality'
  },
  {
    id: 'las-vegas-homes-55-days-on-market-what-it-means',
    title: 'Las Vegas Homes Now Sit 55 Days on Market—Here\'s What That Means for Your Sale',
    excerpt: 'The average days on market in Las Vegas has jumped to 55. In a slower market with more inventory, learn what you need to do to stand out.',
    date: 'December 20, 2025',
    category: 'Market Data'
  },
  {
    id: 'someone-will-buy-it-as-is-lies-sellers-tell-themselves',
    title: '"Someone Will Buy It As-Is" and Other Lies Sellers Tell Themselves',
    excerpt: 'Thinking a buyer will see the "potential" in your fixer-upper? The data says otherwise. Only 28% of buyers even consider a home that needs work.',
    date: 'December 20, 2025',
    category: 'Seller Myths'
  },
  {
    id: 'when-making-home-market-ready-isnt-worth-it-las-vegas',
    title: 'When Making Your Home Market Ready Isn\'t Worth It (And What to Do Instead)',
    excerpt: 'Sometimes, the cost and time of renovations don\'t make financial sense. Learn when to skip the updates and pursue an alternative selling strategy.',
    date: 'December 20, 2025',
    category: 'Strategic Decisions'
  },
  // CLUSTER 2: Market Conditions & Stale Listings
  {
    id: 'las-vegas-housing-market-2025-what-every-seller-needs-to-know-right-now',
    title: 'Las Vegas Housing Market 2025: What Every Seller Needs to Know Right Now',
    excerpt: 'The Las Vegas housing market is more complicated than the news makes it seem. With a record number of stale listings, sellers need to understand what\'s really going on.',
    date: 'December 18, 2025',
    category: 'Market Conditions',
    isPillar: true
  },
  {
    id: 'why-70-percent-of-homes-are-sitting-unsold-the-stale-listing-crisis',
    title: 'Why 70% of Homes Are Sitting Unsold: The Stale Listing Crisis',
    excerpt: 'A staggering 70% of U.S. home listings were considered "stale" in September. In Las Vegas, the average home is now sitting for 72 days.',
    date: 'December 18, 2025',
    category: 'Stale Listings'
  },
  {
    id: 'is-your-home-overpriced-how-to-know-when-to-adjust',
    title: 'Is Your Home Overpriced? How to Know When to Adjust',
    excerpt: 'Is your Las Vegas home sitting on the market while your neighbors are selling? With 70% of listings going stale, it\'s time for a reality check.',
    date: 'December 18, 2025',
    category: 'Pricing Strategy'
  },
  {
    id: 'when-your-listing-goes-stale-why-your-home-isnt-selling-and-your-other-options',
    title: 'When Your Listing Goes Stale: Your Other Options',
    excerpt: 'You put your home on the market expecting a quick sale. Now it\'s been 60+ days with crickets. Here are your options beyond waiting and hoping.',
    date: 'December 18, 2025',
    category: 'Selling Options'
  },
  {
    id: 'hidden-costs-stale-listing',
    title: 'The Hidden Costs of a Stale Listing (What Your Agent Won\'t Tell You)',
    excerpt: 'Your home has been on the market for months, and your agent\'s only solution is to drop the price. But the true costs go far beyond a price reduction.',
    date: 'December 18, 2025',
    category: 'Market Insights'
  },
  // CLUSTER 1: Sell House Fast Las Vegas
  {
    id: 'sell-house-fast-las-vegas-the-ultimate-guide-to-all-your-options',
    title: 'Sell House Fast Las Vegas: The Ultimate Guide to All Your Options',
    excerpt: 'You have more options than you think. You\'re not stuck with a lowball cash offer or a traditional listing that could take months. We show you all 11+ options.',
    date: 'December 18, 2025',
    category: 'Selling Your Home',
    isPillar: true
  },
  {
    id: 'how-to-stop-foreclosure-in-las-vegas-a-step-by-step-guide',
    title: 'How to Stop Foreclosure in Las Vegas: A Step-by-Step Guide',
    excerpt: 'Facing foreclosure? You have options. Learn the step-by-step process to stop foreclosure and save your credit.',
    date: 'December 18, 2025',
    category: 'Foreclosure'
  },
  {
    id: 'cash-home-buyers-in-las-vegas-are-they-legit',
    title: 'Cash Home Buyers in Las Vegas: Are They Legit?',
    excerpt: 'The "We Buy Houses" industry is full of predators. Learn how to spot the legit buyers from the scammers.',
    date: 'December 18, 2025',
    category: 'Cash Offers'
  },
  {
    id: 'selling-an-inherited-property-in-las-vegas-the-complete-guide',
    title: 'Selling an Inherited Property in Las Vegas: The Complete Guide',
    excerpt: 'Inherited a property you don\'t want? Learn how to sell it quickly without the hassle of probate.',
    date: 'December 18, 2025',
    category: 'Inherited Property'
  },
  {
    id: 'creative-real-estate-solutions-beyond-the-cash-offer',
    title: 'Creative Real Estate Solutions: Beyond the Cash Offer',
    excerpt: 'Cash offers aren\'t your only option. Discover creative solutions like subject-to, seller financing, and fix-and-flip partnerships.',
    date: 'December 18, 2025',
    category: 'Creative Solutions'
  }
];

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white border-b py-12">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">The Second Opinion Blog</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Honest, transparent insights about selling your home. No BS, no fluff—just the truth about cash offers, traditional listings, and everything in between.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className={`bg-white border rounded-2xl p-6 hover:shadow-lg transition-shadow ${post.isPillar ? 'border-[#c9a961] border-2' : 'border-gray-200'}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold text-[#c9a961]">{post.category}</span>
                  {post.isPillar && <span className="text-xs bg-[#c9a961] text-white px-2 py-0.5 rounded-full">Featured</span>}
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="text-sm text-gray-500">{post.date}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-12 border-t">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready for Your Second Opinion?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Get a free, no-obligation cash offer or schedule a consultation to explore all your options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#calculator" className="bg-[#c9a961] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#b8860b] transition-colors inline-block">
              Get Your Offer Now
            </a>
            <a href="/#contact" className="bg-white text-gray-900 border-2 border-gray-300 px-6 py-3 rounded-lg font-semibold hover:border-[#c9a961] transition-colors">
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
