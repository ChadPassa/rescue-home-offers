import { Link } from 'wouter';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const blogPosts = [
  {
    id: 'calculate-fair-cash-offer',
    title: 'How to Calculate a Fair Cash Offer - A Complete Breakdown',
    excerpt: 'Learn the exact formula investors use to calculate cash offers, including ARV, repair costs, holding costs, and profit margins. Full transparency.',
    date: 'October 19, 2025',
    category: 'Education'
  },
  {
    id: 'when-cash-offer-bad-deal',
    title: 'When a Cash Offer is a BAD Deal for You',
    excerpt: 'Not every homeowner should take a cash offer. Learn when listing traditionally is the better choice and how to know the difference.',
    date: 'October 19, 2025',
    category: 'Education'
  },
  {
    id: 'hidden-costs-stale-listings',
    title: 'The Hidden Costs of Stale Listings - What Your Agent Won\'t Tell You',
    excerpt: '48% of listings sit unsold for 60+ days. Learn the real cost of a stale listing and why it might be worse than taking a cash offer.',
    date: 'October 19, 2025',
    category: 'Market Insights'
  },
  {
    id: 'creative-solutions-selling-home',
    title: '11+ Creative Solutions for Selling Your Home',
    excerpt: 'Beyond cash offers and traditional listings, discover 11+ creative ways to sell your home that most sellers don\'t know exist.',
    date: 'October 19, 2025',
    category: 'Solutions'
  },
  {
    id: 'truth-about-investors',
    title: 'The Truth About Real Estate Investors - Market Makers, Not Manipulators',
    excerpt: 'Investors purchased 27% of homes in Q1 2025. Are we taking over the market, or are we solving a critical problem? The data might surprise you.',
    date: 'October 19, 2025',
    category: 'Industry Insights'
  }
];

export default function Blog() {
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
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-xs font-semibold text-[#c9a961] mb-2">{post.category}</div>
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
              Get Instant Offer
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

