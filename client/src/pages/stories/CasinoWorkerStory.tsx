import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle2, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CasinoWorkerStory() {
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
            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-orange-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              The Disabled Casino Worker
            </h1>
            <p className="text-2xl text-gray-700 font-bold">
              From workplace injury to real estate investor: How we helped build a roadmap to financial independence
            </p>
          </div>

          {/* The Situation */}
          <Card className="mb-8 bg-gray-50 border border-gray-200 rounded-3xl">
            <CardContent className="p-8">
              <h2 className="text-3xl font-black text-gray-900 mb-4">THE SITUATION</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Mike (name changed for privacy) worked as an electrician at a major Las Vegas casino for over 15 years. He was a skilled tradesman, a homeowner, and a provider for his family. Then, in one instant, everything changed.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                <strong>He was electrocuted on the job.</strong> The injury left him with permanent nerve damage and chronic pain. He could no longer work in his trade. His disability payout covered basic living expenses, but it was slowly dwindling as medical bills piled up.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Mike owned his home outright—no mortgage. But maintaining it was becoming impossible. The yard was overgrown. Repairs were piling up. He was watching his savings disappear, knowing he'd never be able to work again. He needed to sell, but he also needed a plan for what came next.
              </p>
            </CardContent>
          </Card>

          {/* The Rescue */}
          <Card className="mb-8 bg-white border-2 border-[#c9a961] rounded-3xl">
            <CardContent className="p-8">
              <h2 className="text-3xl font-black text-gray-900 mb-4">THE RESCUE</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Mike didn't just need to sell his house. He needed a plan for financial independence. So we gave him both:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#4a5f4a] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-black text-lg text-gray-900">Fair Cash Offer</p>
                    <p className="text-gray-700">We bought his home as-is, giving him full market value without requiring him to do any repairs or maintenance he couldn't physically handle.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#4a5f4a] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-black text-lg text-gray-900">Investment Coaching</p>
                    <p className="text-gray-700">Instead of just handing him a check and walking away, we sat down with Mike and showed him how to use his home equity to create passive income through rental properties.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#4a5f4a] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-black text-lg text-gray-900">Deal-Finding Strategy</p>
                    <p className="text-gray-700">We taught him how to identify undervalued properties, how to analyze cash flow, and how to structure deals that would generate monthly income without requiring physical labor.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#4a5f4a] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-black text-lg text-gray-900">Ongoing Support</p>
                    <p className="text-gray-700">We connected him with property managers, contractors, and other investors in our network. We didn't just give him information—we gave him a roadmap and a support system.</p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                This is what we mean by <strong>"The Relationship Starts Here."</strong> We didn't just buy Mike's house. We helped him build a future.
              </p>
            </CardContent>
          </Card>

          {/* The Outcome */}
          <Card className="mb-12 bg-gray-50 border border-gray-200 rounded-3xl">
            <CardContent className="p-8">
              <h2 className="text-3xl font-black text-gray-900 mb-4">THE OUTCOME</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-6 bg-white rounded-2xl shadow-md">
                  <p className="text-4xl font-black text-[#c9a961] mb-2">$285K</p>
                  <p className="text-sm font-bold text-gray-700">Home Sale Proceeds</p>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-md">
                  <p className="text-4xl font-black text-[#c9a961] mb-2">3</p>
                  <p className="text-sm font-bold text-gray-700">Rental Properties Acquired</p>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-md">
                  <p className="text-4xl font-black text-[#c9a961] mb-2">$2,400/mo</p>
                  <p className="text-sm font-bold text-gray-700">Passive Income Generated</p>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Within 6 months of selling his home, Mike had purchased three rental properties using the strategies we taught him. Those properties now generate over $2,400 per month in passive income—more than his disability check.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                He went from watching his savings dwindle to building a portfolio that will support him for the rest of his life. He's no longer dependent on disability payments. He's a real estate investor.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>This is the power of long-term relationships.</strong> We could have just bought his house and moved on. Instead, we gave him the knowledge and connections to build financial independence. That's what sets us apart.
              </p>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] text-white p-12 rounded-3xl text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Want to Build Your Future Too?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              We don't just buy houses. We help you build what comes next.
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

