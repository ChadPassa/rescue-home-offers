import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from 'react';
import { Link } from 'wouter';

export default function BuyerPsychology() {
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
          <span className="text-xs font-semibold text-[#c9a961] bg-[#c9a961]/10 px-3 py-1 rounded-full">Market Ready</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mt-4">What Buyers Actually See When They Walk Into Your Home (And Why It Costs You Money)</h1>
          <p className="text-gray-500 mt-4">By England Hart, <em>"your second opinion"</em> • December 20, 2025</p>
        </div>
      </section>
      <div className="container mx-auto px-4 max-w-4xl py-8">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img 
            src="/images/blog/what-buyers-actually-see-when-they-walk-into-your-home.jpg" 
            alt="What Buyers Actually See - Couple critically evaluating a home for sale in Las Vegas Nevada - Rescue Home Offers"
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>
      </div>
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg prose-gray max-w-none text-gray-700 leading-relaxed">
            <p className="text-lg leading-relaxed mb-6">
              As a homeowner, you see your house as a functional, comfortable space. You've gotten used to the scuff on the baseboard, the slightly dripping faucet, and the faint pet odor in the living room. To you, these are minor quirks. To a potential buyer, they are giant, flashing red flags that scream "work," "money," and "risk."
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Understanding the psychology of buyer perception is one of the most critical and overlooked aspects of selling a home. You aren't selling a building; you are selling a dream. And every flaw, no matter how small, shatters that dream and replaces it with a project list.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">The First Impression is Everything</h2>
            <p className="text-lg leading-relaxed mb-6">
              Buyers form an opinion about your home within the first 7-10 seconds of walking in the door. They aren't consciously cataloging every detail. They are getting a "vibe." A home that is clean, bright, and smells fresh feels well-maintained and safe. A home with clutter, dim lighting, or a strange <Link to="/blog/your-house-might-smell-how-odors-kill-home-sales-las-vegas" className="text-[#c9a961] hover:underline">odor</Link> immediately feels like a risk.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Once that negative first impression is set, buyers switch from "dream mode" to "detective mode." They start actively looking for other problems. Every small issue they find reinforces their initial negative feeling and adds another line item to their mental negotiation strategy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">From "Minor Fix" to "Major Problem"</h2>
            <p className="text-lg leading-relaxed mb-6">
              Here's how a buyer's brain translates common household flaws:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-3">
              <li className="text-lg leading-relaxed"><strong>You See:</strong> A small water stain on the ceiling from a long-fixed leak.<br /><strong>They See:</strong> A potential roof leak, hidden mold, and thousands in repairs.</li>
              <li className="text-lg leading-relaxed"><strong>You See:</strong> A cracked tile in the bathroom.<br /><strong>They See:</strong> A full bathroom remodel because matching that one tile is impossible.</li>
              <li className="text-lg leading-relaxed"><strong>You See:</strong> A 15-year-old water heater that works perfectly fine.<br /><strong>They See:</strong> A $2,000 replacement that could fail the day after they move in.</li>
              <li className="text-lg leading-relaxed"><strong>You See:</strong> Worn carpet that just needs a good cleaning.<br /><strong>They See:</strong> A $10,000 flooring replacement project they have to live through.</li>
            </ul>
            <p className="text-lg leading-relaxed mb-6">
              They aren't being dramatic. They are being cautious. They are making the biggest purchase of their lives, and they are looking for reasons to say "no" or to drastically lower their offer. As we explain in our article on <Link to="/blog/concessions-cost-more-than-repairs-the-math-every-las-vegas-seller-needs-to-see" className="text-[#c9a961] hover:underline">the math of concessions</Link>, this perception gap is where sellers lose thousands.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">The Power of a Blank Canvas</h2>
            <p className="text-lg leading-relaxed mb-6">
              This is why the concept of a <Link to="/blog/why-market-ready-is-the-only-way-to-sell-in-todays-las-vegas-market" className="text-[#c9a961] hover:underline">market-ready home</Link> is so powerful. By addressing these small issues before you list, you give buyers a blank canvas. You allow them to see the space, not the projects. You remove the red flags and short-circuit their "detective mode" before it even begins.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              A buyer who can walk in and immediately start placing their own furniture in their mind is a buyer who is emotionally invested. A buyer who walks in and starts a mental checklist of repairs is a buyer who is already thinking about their exit strategy or a lowball offer.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Don't let your familiarity with your home's quirks blind you to how a stranger will see it. This perception gap is a major reason <Link to="/blog/why-70-percent-of-homes-are-sitting-unsold-the-stale-listing-crisis" className="text-[#c9a961] hover:underline">why so many homes are sitting unsold</Link> right now. Before you list, have a brutally honest friend—or a real estate professional—walk through and point out every single flaw. Seeing your home through a buyer's eyes is the first step to a faster, more profitable sale.
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Want an honest, no-fluff assessment of how buyers will see your home?</h3>
              <p className="text-lg text-gray-700 mb-4">That's what our Second Opinion is for. We'll give you a clear, actionable list of what to fix and what to ignore to make your home appeal to today's picky buyers.</p>
              <a href="/#calculator" className="inline-block bg-[#c9a961] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#b8860b] transition-colors">Get Your Second Opinion</a>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">Related Articles</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><Link to="/blog/why-market-ready-is-the-only-way-to-sell-in-todays-las-vegas-market" className="text-[#c9a961] hover:underline">Why "Market Ready" Is the Only Way to Sell in Today's Las Vegas Market</Link></li>
              <li><Link to="/blog/concessions-cost-more-than-repairs-the-math-every-las-vegas-seller-needs-to-see" className="text-[#c9a961] hover:underline">Concessions Cost More Than Repairs: The Math</Link></li>
              <li><Link to="/blog/your-house-might-smell-how-odors-kill-home-sales-las-vegas" className="text-[#c9a961] hover:underline">Your House Might Smell (And You Don't Even Know It)</Link></li>
            </ul>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
