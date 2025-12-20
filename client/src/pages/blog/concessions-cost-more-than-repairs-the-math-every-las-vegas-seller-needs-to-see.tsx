import BlogPost from "@/components/BlogPost";
import { Link } from 'wouter';

export default function ConcessionsMath() {
  return (
    <BlogPost
      title="Concessions Cost More Than Repairs: The Math Every Las Vegas Seller Needs to See"
      description="Learn why seller concessions often cost more than actual repairs. The 'Uncertainty Tax' explained with real numbers for Las Vegas home sellers."
      image="/images/blog/concessions-cost-more-than-repairs-the-math-every-las-vegas-seller-needs-to-see.jpg"
      slug="concessions-cost-more-than-repairs-the-math-every-las-vegas-seller-needs-to-see"
      category="Market Ready"
      date="December 20, 2025"
    >
      <p className="text-lg leading-relaxed mb-6">
        When a buyer points out your home's worn-out carpet or dated kitchen, it's tempting to think, "I'll just give them a credit for it." On the surface, offering a seller concession seems like an easy way to avoid the hassle of repairs. But this seemingly simple solution is often a costly financial mistake.
      </p>
      <p className="text-lg leading-relaxed mb-6">
        The hard truth is that concessions almost always cost you more than the actual repairs would have. Welcome to the "Uncertainty Tax"—the premium a buyer bakes into their offer to compensate for the headache, time, and unknown risks of taking on your home's projects.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">The Numbers Don't Lie: A Real-World Example</h2>
      <p className="text-lg leading-relaxed mb-6">
        Let's break it down. Say your home needs new carpet and a fresh coat of paint. You get a quote, and the total cost comes to $15,000. Instead of doing the work, you decide to offer a $15,000 credit at closing.
      </p>
      <p className="text-lg leading-relaxed mb-6">
        Here's what happens in the buyer's mind:
      </p>
      <ol className="list-decimal pl-6 mb-6 space-y-3">
        <li className="text-lg leading-relaxed"><strong>They Overestimate the Cost:</strong> They haven't gotten quotes. They imagine the worst-case scenario. Your $15,000 job becomes a $25,000 problem in their head.</li>
        <li className="text-lg leading-relaxed"><strong>They Factor in the Hassle:</strong> They don't want to live in a construction zone, manage contractors, or pick out materials. This "hassle factor" is worth real money to them—let's say another $10,000.</li>
        <li className="text-lg leading-relaxed"><strong>They Price in the Unknown:</strong> What if, when they pull up the old carpet, they find floor damage? What if the paint reveals wall issues? This is the Uncertainty Tax. They might add another $15,000 to their mental calculation just to be safe.</li>
      </ol>
      <p className="text-lg leading-relaxed mb-6">
        Suddenly, your $15,000 repair job has turned into a $50,000 problem in the buyer's negotiation strategy. They won't just ask for the $15,000 credit; they'll make a lower offer that reflects their perceived total cost. Instead of getting your asking price minus a $15,000 concession, you might get an offer that's $50,000 lower to begin with.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">The Las Vegas Market Confirms It</h2>
      <p className="text-lg leading-relaxed mb-6">
        This isn't just theory. In the Las Vegas market, a staggering 51.9% of home sales now involve seller concessions, up from 47.9% just a year ago. As inventory rises, buyers have the leverage, and they are using it to negotiate hard on homes that aren't perfect. As we discuss in our main guide, this is a key reason <Link to="/blog/why-market-ready-is-the-only-way-to-sell-in-todays-las-vegas-market" className="text-[#c9a961] hover:underline">why being market ready is so critical</Link>.
      </p>
      <p className="text-lg leading-relaxed mb-6">
        When a buyer walks into a home and immediately sees a project list, their offer will reflect that. They aren't just subtracting the cost of repairs; they are subtracting the cost of their own time, effort, and risk. To understand more about their mindset, it's worth reading about <Link to="/blog/what-buyers-actually-see-when-they-walk-into-your-home" className="text-[#c9a961] hover:underline">what buyers actually see when they tour a home</Link>.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Don't Pay the Uncertainty Tax</h2>
      <p className="text-lg leading-relaxed mb-6">
        By completing the repairs before you list, you remove the uncertainty. You present a finished product, leaving the buyer no room to negotiate on condition. You control the cost of the repairs, rather than letting a buyer's inflated estimate dictate your home's value.
      </p>
      <p className="text-lg leading-relaxed mb-6">
        Before you decide to just "offer a credit," do the math. That simple decision could be the difference between a successful sale and leaving tens of thousands of dollars on the table. It's one of the most significant <Link to="/blog/hidden-costs-stale-listing" className="text-[#c9a961] hover:underline">hidden costs of a stale listing</Link>.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Confused about whether to repair or offer a concession?</h3>
        <p className="text-lg text-gray-700 mb-4">Let's run the numbers for your specific property. Get your Second Opinion, and we'll help you figure out the most profitable path forward.</p>
        <a href="/#calculator" className="inline-block bg-[#c9a961] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#b8860b] transition-colors">Get Your Second Opinion</a>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">Related Articles</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><Link to="/blog/why-market-ready-is-the-only-way-to-sell-in-todays-las-vegas-market" className="text-[#c9a961] hover:underline">Why "Market Ready" Is the Only Way to Sell in Today's Las Vegas Market</Link></li>
        <li><Link to="/blog/what-buyers-actually-see-when-they-walk-into-your-home" className="text-[#c9a961] hover:underline">What Buyers Actually See When They Walk Into Your Home</Link></li>
        <li><Link to="/blog/which-home-updates-pay-off-when-selling-las-vegas" className="text-[#c9a961] hover:underline">The $15,000 That Saves You $50,000: Which Updates Actually Pay Off</Link></li>
      </ul>
    </BlogPost>
  );
}
