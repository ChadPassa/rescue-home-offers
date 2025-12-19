import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { scrollToCalculator } from "@/lib/scrollToCalculator";


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo in Header - Horizontal Text Format */}
        <Link href="/">
          <a className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-2xl md:text-3xl font-black text-[#c9a961]">RESCUE</span>
              <span className="text-2xl md:text-3xl font-black text-black">HOME OFFERS</span>
            </div>
            <div className="text-xs md:text-sm font-bold text-black/70 tracking-wide text-center">HOME OF THE SECOND OPINION</div>
          </a>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="/#solutions" className="text-sm font-bold text-gray-700 hover:text-[#c9a961] transition-colors cursor-pointer">SOLUTIONS</a>
          <a href="/#how-it-works" className="text-sm font-bold text-gray-700 hover:text-[#c9a961] transition-colors cursor-pointer">HOW IT WORKS</a>
          <a href="/#stories" className="text-sm font-bold text-gray-700 hover:text-[#c9a961] transition-colors cursor-pointer">SUCCESS STORIES</a>
          <Link href="/blog"><a className="text-sm font-bold text-gray-700 hover:text-[#c9a961] transition-colors">BLOG</a></Link>
          <Link href="/faq"><a className="text-sm font-bold text-gray-700 hover:text-[#c9a961] transition-colors">Q&A</a></Link>
          <Link href="/about"><a className="text-sm font-bold text-gray-700 hover:text-[#c9a961] transition-colors">ABOUT</a></Link>
          <Button onClick={scrollToCalculator} size="lg" className="bg-[#c9a961] hover:bg-[#b8954f] text-white font-black text-base px-8 rounded-full shadow-md">
            GET MY OFFER
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-700 hover:text-[#c9a961] transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="container py-4 flex flex-col gap-4">
            <a 
              href="/#solutions" 
              className="text-base font-bold text-gray-700 hover:text-[#c9a961] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              SOLUTIONS
            </a>
            <a 
              href="/#how-it-works" 
              className="text-base font-bold text-gray-700 hover:text-[#c9a961] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              HOW IT WORKS
            </a>
            <a 
              href="/#stories" 
              className="text-base font-bold text-gray-700 hover:text-[#c9a961] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              SUCCESS STORIES
            </a>
            <Link href="/blog">
              <a 
                className="text-base font-bold text-gray-700 hover:text-[#c9a961] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                BLOG
              </a>
            </Link>
            <Link href="/faq">
              <a 
                className="text-base font-bold text-gray-700 hover:text-[#c9a961] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Q&A
              </a>
            </Link>
            <Link href="/about">
              <a 
                className="text-base font-bold text-gray-700 hover:text-[#c9a961] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT
              </a>
            </Link>
            <Button 
              onClick={() => {
                scrollToCalculator();
                setMobileMenuOpen(false);
              }} 
              size="lg" 
              className="bg-[#c9a961] hover:bg-[#b8954f] text-white font-black text-base px-8 py-3 rounded-full shadow-md w-full"
            >
              GET MY OFFER
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
