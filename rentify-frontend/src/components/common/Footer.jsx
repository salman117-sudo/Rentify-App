import React from "react";
import { Facebook, Globe, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Left Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                ✓
              </div>
              <span className="text-xl font-bold text-gray-900">
                Rentify
              </span>
            </div>

            <p className="text-gray-500 max-w-sm leading-relaxed mb-6">
              The world's most versatile rental marketplace. Simplifying how you move,
              live, and explore.
            </p>

            <div className="flex gap-4">
              <div className="bg-white p-3 rounded-full shadow-sm cursor-pointer">
                <Facebook size={18} />
              </div>
              <div className="bg-white p-3 rounded-full shadow-sm cursor-pointer">
                <Twitter size={18} />
              </div>
              <div className="bg-white p-3 rounded-full shadow-sm cursor-pointer">
                <Globe size={18} />
              </div>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6 uppercase tracking-wider text-sm">
              Platform
            </h3>
            <ul className="space-y-3 text-gray-500">
              <li>How it works</li>
              <li>List an item</li>
              <li>Insurance</li>
              <li>Trust & Safety</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6 uppercase tracking-wider text-sm">
              Support
            </h3>
            <ul className="space-y-3 text-gray-500">
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Cancellation</li>
              <li>Report a Bug</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6 uppercase tracking-wider text-sm">
              Legal
            </h3>
            <ul className="space-y-3 text-gray-500">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-12"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4">
          <p>© 2024 Rentify Inc. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 cursor-pointer">
              <Globe size={16} />
              <span>English (US)</span>
              <span>English (US)</span>
              <span>English (US)</span>
              <span>English (US)</span>
              <span>English (US)</span>
            </div>
            <div className="cursor-pointer">
              USD
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
