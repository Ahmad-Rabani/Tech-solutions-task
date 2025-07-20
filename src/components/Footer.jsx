import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email.trim()) {
      // Handle subscription logic here
      console.log('Subscribed with email:', email);
      setEmail('');
    }
  };

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row lg:justify-between xl:gap-96 lg:gap-8 gap-8">
          
          {/* Left Side - Logo and Newsletter Section */}
          <div className="lg:flex-shrink-0">
            <h2 className="text-2xl font-bold mb-4">Logo</h2>
            <p className="text-gray-300 mb-6">It's time to shine again!</p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="flex-1 px-3 py-2 bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-white text-sm"
                />
                <button
                  onClick={handleSubscribe}
                  className="px-4 sm:px-6 py-2 bg-white text-black font-medium hover:bg-gray-200 transition-colors text-sm whitespace-nowrap"
                >
                  SUBSCRIBE
                </button>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Right Side - Navigation Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:flex-shrink-0">
            
            {/* Categories Column */}
            <div>
              <nav className="space-y-4">
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                  SKIN
                </a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                  HAIR
                </a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                  MAKE-UP
                </a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                  PERFUMES
                </a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                  COSMETICS
                </a>
              </nav>
            </div>

            {/* About Column */}
            <div>
              <nav className="space-y-4 text-[#ADADAD]">
                <a href="#" className="block  hover:text-white transition-colors">
                  ABOUT US
                </a>
                <a href="#" className="block  hover:text-white transition-colors">
                  TERMS OF SERVICE
                </a>
                <a href="#" className="block  hover:text-white transition-colors">
                  ADVERTISE
                </a>
              </nav>
            </div>

            {/* Legal Column */}
            <div>
              <nav className="space-y-4 text-[#ADADAD]">
                <a href="#" className="block  hover:text-white transition-colors">
                  PRIVACY POLICY
                </a>
                <a href="#" className="block  hover:text-white transition-colors">
                  EDITORIAL POLICY
                </a>
                <a href="#" className="block  hover:text-white transition-colors">
                  CONTACT
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2023 Relume. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookies Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;