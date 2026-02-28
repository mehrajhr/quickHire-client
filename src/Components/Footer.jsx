import React from 'react';
import { HiBriefcase } from 'react-icons/hi';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaDribbble, 
  FaLinkedinIn, 
  FaTwitter 
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#18191C] text-[#9199A3] pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          
          {/* Brand & Mission */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-white text-2xl font-bold">
              <div className="bg-[#4F46E5] p-1.5 rounded-lg text-white">
                <HiBriefcase size={24} />
              </div>
              <span>Quick<span className="text-[#4F46E5]">Hire</span></span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Great platform for the job seeker that passionate about startups. Find your dream job easier.
            </p>
          </div>

          {/* Column 1: About */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">About</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Companies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Advice</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Help Docs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Updates</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold text-lg">Get job notifications</h4>
            <p className="text-sm">The latest job news, articles, sent to your inbox weekly.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-white px-4 py-3 text-gray-800 outline-none w-full sm:flex-1"
              />
              <button className="bg-[#4F46E5] hover:bg-[#3f37c9] text-white px-3 py-3 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs">2026 @ QuickHire. All rights reserved.</p>
          
          {/* Social Icons */}
          <div className="flex gap-4">
            {[FaFacebookF, FaInstagram, FaDribbble, FaLinkedinIn, FaTwitter].map((Icon, index) => (
              <a 
                key={index} 
                href="#" 
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#4F46E5] transition-all"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;