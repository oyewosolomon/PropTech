import React from 'react';
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
          <svg width="64px" height="64px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <style>{`
                .cls-2 { animation: rotate 4s linear infinite; transform-origin: center; }
                .cls-3 { animation: pulse 2s ease infinite; }
            
                @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
              `}</style>
              
              <g id="Layer_2">
                <rect className="cls-1" height="20" width="20"/>
                <path className="cls-2" d="M17.88,18H6.81a.73.73,0,0,1-.73-.73V6.57A.73.73,0,0,1,6.4,6l5.53-3.83a.74.74,0,0,1,.83,0L18.29,6a.73.73,0,0,1,.32.6V17.29A.73.73,0,0,1,17.88,18Z"/>
                <circle className="cls-3" cx="5.86" cy="6.89" r="5"/>
                <path className="cls-4" d="M10.86,6.89A4.93,4.93,0,0,0,9.68,3.7L6.4,6a.73.73,0,0,0-.32.6v5.3A5,5,0,0,0,10.86,6.89Z"/>
              </g>
            </svg>
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-blue-600">PropTech</span>
              <span className="text-white">Solutions</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Revolutionizing commercial real estate management with predictive maintenance, tenant management, and energy optimization tools.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Case Studies</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and exclusive offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} PropTech Solutions. All rights reserved.
            </div>
            <div className="flex space-x-6 md:justify-end">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;