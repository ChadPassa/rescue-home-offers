import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle2, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NeighborhoodStory() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Story Content */}
      <section className="py-20">
        <div className="container max-w-4xl">
          {/* Back Button */}
          <Link href="/#stories">
            <Button variant="outline" className="mb-8 border-2 border-gray-300 text-gray-700 hover:bg-gray-100 font-bold rounded-xl">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Success Stories
            </Button>
          </Link>

          {/* Story Header */}
          <div className="mb-12">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              How We Transform Neighborhoods
            </h1>
            <p className="text-2xl text-gray-700 font-bold">
              Why investors are good for your community—and how you can help us help you
            </p>
          </div>

          {/* The Reality */}
          <Card className="mb-8 bg-gray-50 border border-gray-200 rounded-3xl">
            <CardContent className="p-8">
              <h2 className="text-3xl font-black text-gray-900 mb-4">THE REALITY</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Let's be honest: nobody likes construction noise. Nobody wants to see a dumpster on their street. And when an investor buys a fixer-upper in your neighborhood, it's easy to think, "Great, here comes the chaos."
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                But here's what most homeowners don't realize: <strong>that renovation is money in YOUR pocket.</strong>
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every home we renovate pushes equity into the entire neighborhood. When we flip a property for $10K, $20K, or even $50K above the previous sale price, <strong>every neighbor's home value goes up.</strong> That's not theory—that's how real estate comps work.
              </p>
            </CardContent>
          </Card>

          {/* The Math */}
          <Card className="mb-8 bg-white border-2 border-[#c9a961] rounded-3xl">
            <CardContent className="p-8">
              <h2 className="text-3xl font-black text-gray-900 mb-4">THE MATH</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Here's a real example from a Henderson neighborhood we worked in:
              </p>
              
              <div className="bg-gray-50 p-6 rounded-2xl mb-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm font-bold text-gray-600 mb-2">BEFORE OUR RENOVATION</p>
                    <p className="text-3xl font-black text-gray-900 mb-1">$385K</p>
                    <p className="text-sm text-gray-700">Average home value on the street</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-600 mb-2">AFTER OUR RENOVATION</p>
                    <p className="text-3xl font-black text-[#c9a961] mb-1">$412K</p>
                    <p className="text-sm text-gray-700">New average home value</p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We bought a distressed property for $340K, put $65K into renovations, and sold it for $435K. That sale became the new comp for the neighborhood.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                <strong>Result:</strong> The 18 homes on that street all saw their values increase by an average of $27,000. That's over $486,000 in total equity created for the neighborhood—just from one renovation.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Investors don't destroy communities. <strong>We rebuild them.</strong>
              </p>
            </CardContent>
          </Card>

          {/* How You Can Help */}
          <Card className="mb-12 bg-gray-50 border border-gray-200 rounded-3xl">
            <CardContent className="p-8">
              <h2 className="text-3xl font-black text-gray-900 mb-4">HOW YOU CAN HELP (AND HELP YOURSELF)</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                See a house being renovated on your street? Here's how you can support the process—and maximize your own home value:
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#4a5f4a] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-black text-lg text-gray-900">Be Patient with the Noise</p>
                    <p className="text-gray-700">Yes, construction is loud. Yes, there will be dumpsters and trucks. But it's temporary—usually 60-90 days. And when it's done, your home is worth more.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#4a5f4a] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-black text-lg text-gray-900">Keep Your Yard Looking Good</p>
                    <p className="text-gray-700">Curb appeal helps everyone. When buyers tour the renovated house, they're also looking at the neighborhood. A well-maintained street helps that house sell faster and for more money—which benefits you.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#4a5f4a] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-black text-lg text-gray-900">Welcome the New Neighbors</p>
                    <p className="text-gray-700">When the house sells, introduce yourself to the new owners. A friendly neighborhood is a valuable neighborhood.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#4a5f4a] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-black text-lg text-gray-900">Spread the Word</p>
                    <p className="text-gray-700">If you know someone who's struggling with a distressed property, refer them to us. The more we can help clean up neglected homes in the area, the better for everyone.</p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>When we succeed, you succeed.</strong> It's that simple.
              </p>
            </CardContent>
          </Card>

          {/* The Bigger Picture */}
          <Card className="mb-12 bg-white border-2 border-[#c9a961] rounded-3xl">
            <CardContent className="p-8">
              <h2 className="text-3xl font-black text-gray-900 mb-4">THE BIGGER PICTURE</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                There's a narrative out there that investors are "ruining neighborhoods" or "taking advantage of homeowners." That's not what we do. Here's the truth:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-[#c9a961] font-black text-xl">•</span>
                  <p className="text-gray-700">We buy homes that nobody else wants to deal with—distressed, neglected, or burdened by financial problems.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#c9a961] font-black text-xl">•</span>
                  <p className="text-gray-700">We invest our own money to renovate them and bring them back to life.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#c9a961] font-black text-xl">•</span>
                  <p className="text-gray-700">We sell them to families who want to live in a beautiful, updated home.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#c9a961] font-black text-xl">•</span>
                  <p className="text-gray-700">In the process, we push up property values for the entire neighborhood.</p>
                </li>
              </ul>

              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>This is community revitalization.</strong> We're not destroying neighborhoods—we're rebuilding them, one house at a time. And when you support that process, you're investing in your own future.
              </p>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] text-white p-12 rounded-3xl text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Have a Distressed Property in Your Neighborhood?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let us help transform it—and boost your home value in the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button size="lg" className="bg-[#c9a961] hover:bg-[#b8954f] text-white font-black text-lg px-10 rounded-2xl">
                  GET MY INSTANT OFFER
                </Button>
              </Link>
              <Link href="/#contact">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-black text-lg px-10 rounded-2xl">
                  SCHEDULE FREE CONSULTATION
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
