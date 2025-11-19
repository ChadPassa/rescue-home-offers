import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Shield, Heart, TrendingUp, Users, Award, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            WE'VE BEEN RESCUING HOMEOWNERS SINCE 2004
          </h1>
          <p className="text-2xl text-gray-300 mb-8">
            Real people. Real solutions. Real results.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-5xl font-black text-yellow-500">20+</div>
              <div className="text-lg text-gray-300">Years in Business</div>
            </div>
            <div>
              <div className="text-5xl font-black text-yellow-500">1000s</div>
              <div className="text-lg text-gray-300">Homes Rescued</div>
            </div>
            <div>
              <div className="text-5xl font-black text-yellow-500">11+</div>
              <div className="text-lg text-gray-300">Solution Options</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">OUR STORY</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              Listen, we get it. You're here because you have a problem. We're not trying to convince you of that—you already know. <strong>We're here to help you solve it.</strong>
            </p>
            <p className="text-xl text-gray-700 mb-6">
              Since 2004, we've been in the trenches of real estate. We've seen every situation imaginable: foreclosures, divorces, probate nightmares, inherited properties, distressed homes, tired landlords. <strong>We've seen it all, and we've solved it all.</strong>
            </p>
            <p className="text-xl text-gray-700 mb-6">
              But here's what frustrated us: homeowners were getting ONE option. Maybe two if they were lucky. A lowball cash offer from an investor. Or a traditional listing that takes months and requires tens of thousands in repairs.
            </p>
            <p className="text-xl text-gray-700 mb-6">
              <strong>That's not enough.</strong> Every situation is different. Every homeowner has different priorities. So we built something different: <strong>a full stack of solutions.</strong>
            </p>
            <p className="text-xl text-gray-700 mb-6">
              Cash offers. Creative financing. Renovation partnerships. Leaseback programs. Traditional listings. FSBO support. <strong>We have 11+ ways to solve your problem.</strong> That's why we're the <strong className="text-yellow-600">Home of the Second Opinion.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-gray-100">
        <div className="container max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">OUR MISSION</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-black mb-4">RESCUE HOMEOWNERS</h3>
              <p className="text-gray-700">
                No home should go to the courthouse steps. We find solutions that save equity, protect credit, and give families a fresh start.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-black mb-4">TRANSFORM NEIGHBORHOODS</h3>
              <p className="text-gray-700">
                Investors don't just buy homes—they renovate communities. Every property we flip pushes equity into every home on that street.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-black mb-4">OPERATE WITH INTEGRITY</h3>
              <p className="text-gray-700">
                We're transparent about pricing, honest about trade-offs, and committed to finding the solution that works best for YOU.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">HOW WE OPERATE</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl">
              <CheckCircle2 className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-black mb-2">NO BS, JUST SOLUTIONS</h3>
                <p className="text-lg text-gray-700">
                  We're Gen X. We get stuff done. No fluff, no hype, no pressure. Just straight talk and real solutions.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl">
              <CheckCircle2 className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-black mb-2">FAIR PRICING, TRANSPARENT TERMS</h3>
                <p className="text-lg text-gray-700">
                  "If it's your terms, it's our price. If it's your price, it's our terms." Every deal has trade-offs. We're honest about them.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl">
              <CheckCircle2 className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-black mb-2">YOU CHOOSE, WE EXECUTE</h3>
                <p className="text-lg text-gray-700">
                  We show you all the options. You pick what matters most—speed, value, or flexibility. Then we make it happen.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl">
              <CheckCircle2 className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-black mb-2">NO PROBLEM TOO BIG</h3>
                <p className="text-lg text-gray-700">
                  Foreclosure? Probate? Hoarder house? Foundation issues? Divorce? We've handled it all. Trust us—we've seen worse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            READY FOR YOUR SECOND OPINION?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get your instant offer and see all your options. No pressure. No commitment. Just answers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#calculator">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-black text-lg px-10">
                GET MY INSTANT OFFER
              </Button>
            </Link>
            <Link href="/faq">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black font-black text-lg px-10">
                BROWSE FAQ
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

