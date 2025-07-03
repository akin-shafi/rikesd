"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 mr-2 bg-emerald-600 rounded-md"></div>
              <span className="text-xl font-bold text-gray-900">RIKESD</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="/"
              className="text-sm font-medium text-gray-900 hover:text-emerald-600"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-gray-600 hover:text-emerald-600"
            >
              About Us
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-emerald-600"
            >
              Global Leaders
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-emerald-600"
            >
              Opportunities
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-gray-600 hover:text-emerald-600"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="px-4 py-2 text-sm font-medium text-white transition-colors bg-emerald-600 rounded-md hover:bg-emerald-700"
            >
              Join Our Expert Community
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-b border-gray-200">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="block px-3 py-2 text-base font-medium text-gray-600 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-600 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Global Leaders
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-600 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Opportunities
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 text-base font-medium text-gray-600 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 text-base font-medium text-white bg-emerald-600 rounded-md hover:bg-emerald-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Our Expert Community
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
