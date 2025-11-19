import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { solutionDetails } from "@/data/solutionDetails";
import { solutionScores } from "@/data/solutionScoring";
import { ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";
import { useFlowClosePro } from "@/hooks/useFlowClosePro";

// Declare FlowClosePro global function
declare global {
  interface Window {
    initIlistForm?: () => void;
  }
}

interface CalculatorProps {
  onComplete?: (results: CalculatorResults) => void;
}

interface CalculatorResults {
  situation: string;
  timeline: string;
  priority: string;
  recommendations: string[];
  action?: string;
  solution?: string;
}

export default function Calculator({ onComplete }: CalculatorProps) {
  // Load FlowClosePro script
  const { isLoaded, error } = useFlowClosePro();
  
  const [step, setStep] = useState(0);
  const [situation, setSituation] = useState("");
  const [timeline, setTimeline] = useState("");
  const [priority, setPriority] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [expandedSolution, setExpandedSolution] = useState<string | null>(null);

  // Initialize FlowClosePro widgets after results are shown
  useEffect(() => {
    if (showResults) {
      // Wait a bit for the DOM to update and React to render the .ilist-content divs
      setTimeout(() => {
        // Call FlowClosePro's initIlistForm() function directly
        if (typeof window.initIlistForm === 'function') {
          window.initIlistForm();
          console.log('FlowClosePro initIlistForm() called');
        } else {
          console.warn('FlowClosePro initIlistForm() not found');
        }
      }, 500);
    }
  }, [showResults]);

  const getRecommendations = () => {
    // Calculate scores for each solution based on user answers
    const scoredSolutions = solutionScores.map(solution => {
      let totalScore = 0;
      
      // Add score for situation (Q1)
      totalScore += solution.scores[situation as keyof typeof solution.scores] || 0;
      
      // Add score for timeline (Q2)
      totalScore += solution.scores[timeline as keyof typeof solution.scores] || 0;
      
      // Add score for priority (Q3)
      totalScore += solution.scores[priority as keyof typeof solution.scores] || 0;
      
      return {
        ...solution,
        totalScore
      };
    });

    // Sort by score and get top 3
    const topSolutions = scoredSolutions
      .sort((a, b) => b.totalScore - a.totalScore)
      .slice(0, 3);

    // Return solution names
    return topSolutions.map(s => s.name);
  };

  const handleComplete = () => {
    const recommendations = getRecommendations();
    setShowResults(true);
    if (onComplete) {
      onComplete({ situation, timeline, priority, recommendations });
    }
  };

  const resetCalculator = () => {
    setStep(0);
    setSituation("");
    setTimeline("");
    setPriority("");
    setShowResults(false);
  };

  if (showResults) {
    const recommendations = getRecommendations();
    
    return (
      <div className="bg-white rounded-lg p-8 shadow-2xl max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold mb-4">YOUR PERSONALIZED SECOND OPINION</h3>
          <p className="text-lg text-gray-700">
            Based on your answers, here are your <strong className="text-yellow-600">TOP 3 RECOMMENDED SOLUTIONS:</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {recommendations.map((rec, index) => {
            const details = solutionDetails[rec];
            const isExpanded = expandedSolution === rec;
            
            return (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border-2 border-yellow-500">
                <div className="text-yellow-600 font-bold text-xl mb-2">#{index + 1} RECOMMENDED</div>
                <h4 className="text-xl font-bold mb-4">{rec}</h4>
                
                {/* FlowClosePro Address Widget */}
                <div className="mb-4 bg-white p-4 rounded-lg border-2 border-[#c9a961]">
                  <div className="text-sm font-semibold text-gray-700 mb-2">Enter your property address:</div>
                  <div className="ilist-content" data-solution={rec}></div>
                </div>
                
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-[#c9a961] hover:bg-[#b8954f] text-white font-bold"
                    onClick={(e) => {
                      // Find the FlowClosePro widget for this solution
                      const widget = e.currentTarget.closest('.bg-gray-50')?.querySelector('.ilist-content');
                      if (widget) {
                        // Find the FlowClosePro submit button (it's hidden until address is selected)
                        const flowCloseProButton = widget.querySelector('button[type="submit"]') as HTMLButtonElement;
                        if (flowCloseProButton) {
                          // Click the FlowClosePro button to trigger its onclick handler
                          flowCloseProButton.click();
                        } else {
                          // If no button yet, alert user to enter address
                          alert('Please enter your property address above');
                        }
                      }
                    }}
                  >
                    GET OFFER
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full border-2 border-[#c9a961] text-[#c9a961] hover:bg-[#c9a961] hover:text-white font-bold flex items-center justify-center gap-2"
                    onClick={() => {
                      const newExpanded = isExpanded ? null : rec;
                      setExpandedSolution(newExpanded);
                      
                      // If expanding, initialize FlowClosePro for the accordion content
                      if (newExpanded) {
                        setTimeout(() => {
                          if (typeof window.initIlistForm === 'function') {
                            window.initIlistForm();
                            console.log('FlowClosePro initIlistForm() called for accordion');
                          }
                        }, 100);
                      }
                    }}
                  >
                    LEARN MORE {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </Button>
                </div>
                
                {/* Accordion Content */}
                {isExpanded && details && (
                  <div className="mt-4 pt-4 border-t-2 border-yellow-200 space-y-4 animate-in slide-in-from-top">
                    <div>
                      <h5 className="font-bold text-sm mb-2">WHO IS THIS BEST FOR?</h5>
                      <ul className="space-y-1">
                        {details.bestFor.map((item, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-bold text-sm mb-2">HOW IT WORKS</h5>
                      <p className="text-sm text-gray-700">{details.howItWorks}</p>
                    </div>
                    
                    <div>
                      <h5 className="font-bold text-sm mb-2">BENEFITS</h5>
                      <ul className="space-y-1">
                        {details.benefits.map((benefit, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* FlowClosePro Address Widget in Accordion */}
                    <div className="bg-white p-4 rounded-lg border-2 border-[#c9a961] mt-4">
                      <div className="text-sm font-semibold text-gray-700 mb-2">Enter your property address:</div>
                      <div className="ilist-content" data-solution={`${rec}-accordion`}></div>
                    </div>
                    
                    <Button 
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold mt-4"
                      onClick={(e) => {
                        // Find the FlowClosePro widget in this accordion
                        const accordionContent = e.currentTarget.closest('.animate-in');
                        const widget = accordionContent?.querySelector('.ilist-content');
                        if (widget) {
                          // Find the FlowClosePro submit button
                          const flowCloseProButton = widget.querySelector('button[type="submit"]') as HTMLButtonElement;
                          if (flowCloseProButton) {
                            // Click the FlowClosePro button to trigger its onclick handler
                            flowCloseProButton.click();
                          } else {
                            alert('Please enter your property address above');
                          }
                        }
                      }}
                    >
                      GET OFFER →
                    </Button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="bg-gray-100 p-6 rounded-lg text-center mb-6">
          <p className="text-lg text-gray-700 mb-4">
            <strong>But wait—there's more.</strong>
          </p>
          <p className="text-gray-700 mb-4">
            These are just the TOP 3 for your situation. We have 11+ total solutions.
          </p>
          <Button 
            className="bg-gray-900 hover:bg-gray-800 text-white"
            onClick={() => window.location.href = '/solutions'}
          >
            SHOW ME ALL SOLUTIONS →
          </Button>
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            onClick={resetCalculator}
            className="text-gray-600"
          >
            ← START OVER
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-8 shadow-2xl max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-gray-500">
            Question {step + 1} of 3
          </span>
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`h-2 w-12 rounded-full ${
                  i <= step ? "bg-yellow-500" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {step === 0 && (
        <div>
          <h3 className="text-2xl font-bold mb-6">
            WHAT BEST DESCRIBES YOUR SITUATION?
          </h3>
          <p className="text-gray-600 mb-6">Choose the one that fits you best:</p>
          
          <div className="space-y-4">
            <button
              onClick={() => {
                setSituation("financial");
                setStep(1);
              }}
              className="w-full text-left p-6 border-2 border-gray-200 rounded-lg hover:border-yellow-500 hover:bg-yellow-50 transition"
            >
              <div className="font-bold text-lg mb-2">
                I'm facing a financial challenge
              </div>
              <div className="text-gray-600 text-sm">
                (foreclosure, divorce, job loss, etc.) → You're a DISTRESSED HOMEOWNER
              </div>
            </button>

            <button
              onClick={() => {
                setSituation("repairs");
                setStep(1);
              }}
              className="w-full text-left p-6 border-2 border-gray-200 rounded-lg hover:border-yellow-500 hover:bg-yellow-50 transition"
            >
              <div className="font-bold text-lg mb-2">
                My home needs major repairs
              </div>
              <div className="text-gray-600 text-sm">
                (not market-ready) → You have a DISTRESSED HOME
              </div>
            </button>

            <button
              onClick={() => {
                setSituation("both");
                setStep(1);
              }}
              className="w-full text-left p-6 border-2 border-gray-200 rounded-lg hover:border-yellow-500 hover:bg-yellow-50 transition"
            >
              <div className="font-bold text-lg mb-2">
                Both - I need to sell fast AND my home needs work
              </div>
              <div className="text-gray-600 text-sm">
                → DOUBLE DISTRESS (we've got you covered)
              </div>
            </button>

            <button
              onClick={() => {
                setSituation("neither");
                setStep(1);
              }}
              className="w-full text-left p-6 border-2 border-gray-200 rounded-lg hover:border-yellow-500 hover:bg-yellow-50 transition"
            >
              <div className="font-bold text-lg mb-2">
                Neither - My home is fine, I just want the best deal
              </div>
              <div className="text-gray-600 text-sm">
                → STRATEGIC SELLER
              </div>
            </button>
          </div>
        </div>
      )}

      {step === 1 && (
        <div>
          <h3 className="text-2xl font-bold mb-6">
            HOW QUICKLY DO YOU NEED TO SELL?
          </h3>
          
          <div className="space-y-4">
            <button
              onClick={() => {
                setTimeline("0-60");
                setStep(2);
              }}
              className="w-full text-left p-6 border-2 border-gray-200 rounded-lg hover:border-yellow-500 hover:bg-yellow-50 transition"
            >
              <div className="font-bold text-lg mb-2">
                0-60 DAYS - I need to move FAST
              </div>
              <div className="text-gray-600 text-sm">
                (Foreclosure, urgent relocation, immediate cash need)
              </div>
            </button>

            <button
              onClick={() => {
                setTimeline("60-90");
                setStep(2);
              }}
              className="w-full text-left p-6 border-2 border-gray-200 rounded-lg hover:border-yellow-500 hover:bg-yellow-50 transition"
            >
              <div className="font-bold text-lg mb-2">
                60-90 DAYS - I have some flexibility
              </div>
              <div className="text-gray-600 text-sm">
                (Want to explore options, not in crisis mode)
              </div>
            </button>

            <button
              onClick={() => {
                setTimeline("90+");
                setStep(2);
              }}
              className="w-full text-left p-6 border-2 border-gray-200 rounded-lg hover:border-yellow-500 hover:bg-yellow-50 transition"
            >
              <div className="font-bold text-lg mb-2">
                90+ DAYS - I want to maximize my profit
              </div>
              <div className="text-gray-600 text-sm">
                (Time to renovate, list traditionally, get top dollar)
              </div>
            </button>
          </div>

          <div className="mt-6">
            <Button 
              variant="outline" 
              onClick={() => setStep(0)}
              className="text-gray-600"
            >
              ← BACK
            </Button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3 className="text-2xl font-bold mb-6">
            WHAT MATTERS MOST TO YOU?
          </h3>
          <p className="text-gray-600 mb-6">Rank your top priority:</p>
          
          <div className="space-y-4">
            <button
              onClick={() => {
                setPriority("speed");
                handleComplete();
              }}
              className="w-full text-left p-6 border-2 border-gray-200 rounded-lg hover:border-yellow-500 hover:bg-yellow-50 transition"
            >
              <div className="font-bold text-lg mb-2">
                SPEED & CERTAINTY
              </div>
              <div className="text-gray-600 text-sm">
                Close fast, no hassle, guaranteed sale
              </div>
            </button>

            <button
              onClick={() => {
                setPriority("value");
                handleComplete();
              }}
              className="w-full text-left p-6 border-2 border-gray-200 rounded-lg hover:border-yellow-500 hover:bg-yellow-50 transition"
            >
              <div className="font-bold text-lg mb-2">
                MAXIMUM VALUE
              </div>
              <div className="text-gray-600 text-sm">
                Get every dollar possible, even if it takes longer
              </div>
            </button>

            <button
              onClick={() => {
                setPriority("repairs");
                handleComplete();
              }}
              className="w-full text-left p-6 border-2 border-gray-200 rounded-lg hover:border-yellow-500 hover:bg-yellow-50 transition"
            >
              <div className="font-bold text-lg mb-2">
                AVOID REPAIRS
              </div>
              <div className="text-gray-600 text-sm">
                Sell as-is, don't spend a dime on fixes
              </div>
            </button>

            <button
              onClick={() => {
                setPriority("flexibility");
                handleComplete();
              }}
              className="w-full text-left p-6 border-2 border-gray-200 rounded-lg hover:border-yellow-500 hover:bg-yellow-50 transition"
            >
              <div className="font-bold text-lg mb-2">
                FLEXIBILITY
              </div>
              <div className="text-gray-600 text-sm">
                Stay in the home longer or buy my next home first
              </div>
            </button>
          </div>

          <div className="mt-6">
            <Button 
              variant="outline" 
              onClick={() => setStep(1)}
              className="text-gray-600"
            >
              ← BACK
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

