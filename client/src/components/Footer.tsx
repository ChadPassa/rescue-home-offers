import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-black text-lg mb-4">SOLUTIONS</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/solutions"><a className="hover:text-yellow-400">Cash Offers</a></Link></li>
              <li><Link href="/solutions"><a className="hover:text-yellow-400">Fix & List</a></Link></li>
              <li><Link href="/solutions"><a className="hover:text-yellow-400">Creative Financing</a></Link></li>
              <li><Link href="/solutions"><a className="hover:text-yellow-400">All Solutions</a></Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-lg mb-4">RESOURCES</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/faq"><a className="hover:text-yellow-400">Q&A</a></Link></li>
              <li><a href="#" className="hover:text-yellow-400">The Cash Offer Lie</a></li>
              <li><a href="/#stories" className="hover:text-yellow-400">Success Stories</a></li>
              <li><Link href="/blog"><a className="hover:text-yellow-400">Blog</a></Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-lg mb-4">COMPANY</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about"><a className="hover:text-yellow-400">About Us</a></Link></li>
              <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
              <li><a href="#" className="hover:text-yellow-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-yellow-400">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-lg mb-4">CONTACT</h4>
            <p className="text-sm text-gray-400 mb-2">Phone: (775) 618-2423</p>
            <p className="text-sm text-gray-400 mb-2">Email: deals@rescuehomeoffers.com</p>
            <p className="text-sm text-gray-400">Serving homeowners nationwide since 2004</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>© 2025 Rescue Home Offers. All rights reserved. | We rescue distressed homeowners and distressed homes.</p>
        </div>
      </div>
    </footer>
  );
}
