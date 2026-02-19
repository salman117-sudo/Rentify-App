import React from "react";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Left: Logo */}
        <Link
          to="/"
          className="flex items-center text-2xl font-bold text-black gap-2"
        >
          <ShoppingBag size={24} />
          Rentify
        </Link>

        {/* Center: Navigation */}
        <nav className="hidden md:flex gap-10 justify-center flex-1 font-bold text-lg">
          <Link to="/" className="text-blue-600 font-medium">
            Home
          </Link>
          <Link to="/explore" className="text-black hover:text-blue-600 font-medium">
            Explore
          </Link>
          <Link to="/about" className="text-black hover:text-blue-600 font-medium">
            About
          </Link>
          <Link to="/list-item" className="text-black hover:text-blue-600 font-medium">
            List  Item
          </Link>
        </nav>

        {/* Right: Buttons */}
        <div className="flex items-center gap-4 font-semibold text-lg">
          <Link to="/login" className="text-black hover:text-blue-600 transition">
            Sign In
          </Link>
          <Link
            to="/register"
            className="bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-2 rounded-lg"
          >
            Get Started
          </Link>
        </div>

      </div>
    </header>
  );
}
