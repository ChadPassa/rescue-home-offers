import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle2, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SingleMotherStory() {
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
            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-red-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              The Single Mother Behind on Payments
            </h1>
            <p className="text-2xl text-gray-700 font-bold">
              How we saved a family from foreclosure and helped them find stable housing
            </p>
          </div>

          {/* The Situation */}
          <Card className="mb-8 bg-gray-50 border border-gray-200 rounded-3xl">
            <CardContent className="p-8">
              <h2 className="text-3xl font-black text-gray-900 mb-4">THE SITUATION</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Sarah (name changed for privacy) was a single mother of two young children when her world fell apart. Her husband's addiction led to job loss, mounting debt, and eventually, abandonment. She was left alone to manage a mortgage she could no longer afford.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                By the time she reached out to us, she was <strong>four months behind on her mortgage payments</strong>. The foreclosure notice had already arrived. She was facing the very real possibility of losing her home and having nowhere to go with her children.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                To make matters worse, her credit had been destroyed by the late payments and her husband's debts. Traditional lenders wouldn't help her. Real estate agents told her she needed to "clean up" the house before listing—work she couldn't afford to do.
              </p>
            </CardContent>
          </Card>

          {/* The Rescue */}
          <Card className="mb-8 bg-white border-2 border-[#c9a961] rounded-3xl">
            <CardContent className="p-8">
              <h2 className="text-3xl font-black text-gray-900 mb-4">THE RESCUE</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We stepped in with a comprehensive solution that addressed not just the house, but Sarah's entire situation:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#4a5f4a] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-black text-lg text-gray-900">Immediate Cash Offer</p>
                    <p className="text-gray-700">We made a cash offer that covered her back payments and preserved the equity she had built up over 8 years of ownership.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#4a5f4a] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-black text-lg text-gray-900">Stopped the Foreclosure</p>
                    <p className="text-gray-700">We closed in 14 days, stopping the foreclosure process and preventing further damage to her credit.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#4a5f4a] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-black text-lg text-gray-900">Found Her a Rental</p>
                    <p className="text-gray-700">When Sarah couldn't find a landlord willing to rent to her due to her credit issues, we didn't walk away. We called landlords directly, explained her situation, and vouched for her character.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#4a5f4a] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-black text-lg text-gray-900">Pre-Paid 6 Months of Rent</p>
                    <p className="text-gray-700">To give the landlord confidence and give Sarah breathing room, we pre-paid 6 months of rent from her home sale proceeds. This gave her time to stabilize financially without the immediate pressure of monthly rent.</p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                This wasn't just a transaction. This was a <strong>rescue</strong>. We didn't just buy her house—we helped her family find stability in the middle of a crisis.
              </p>
            </CardContent>
          </Card>

          {/* The Outcome */}
          <Card className="mb-12 bg-gray-50 border border-gray-200 rounded-3xl">
            <CardContent className="p-8">
              <h2 className="text-3xl font-black text-gray-900 mb-4">THE OUTCOME</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-6 bg-white rounded-2xl shadow-md">
                  <p className="text-4xl font-black text-[#c9a961] mb-2">$18,500</p>
                  <p className="text-sm font-bold text-gray-700">Equity Preserved</p>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-md">
                  <p className="text-4xl font-black text-[#c9a961] mb-2">14 Days</p>
                  <p className="text-sm font-bold text-gray-700">From Offer to Close</p>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-md">
                  <p className="text-4xl font-black text-[#c9a961] mb-2">6 Months</p>
                  <p className="text-sm font-bold text-gray-700">Rent Pre-Paid</p>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Today, Sarah and her children are stable. She has a safe place to live, her credit is slowly recovering, and she has cash in the bank to rebuild her life. She avoided foreclosure, bankruptcy, and homelessness.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>This is what we mean when we say "we rescue homeowners."</strong> We don't just buy houses. We solve problems. We help families. We create solutions that go beyond the transaction.
              </p>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] text-white p-12 rounded-3xl text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Facing a Similar Situation?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              We've helped hundreds of homeowners in crisis. Let us show you what's possible.
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

