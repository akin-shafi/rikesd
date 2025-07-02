"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavigation = (sectionId: string) => {
    setIsMenuOpen(false);

    if (window.location.pathname !== "/") {
      router.push(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container px-6 mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-dark.png?height=150&width=150"
                alt="RIKESD Logo"
                width={150}
                height={150}
                className="mr-2"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-1">
            <button
              onClick={() => handleNavigation("programs")}
              className={`px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-gray-900"
                  : "text-gray-900 hover:text-gray-900"
              }`}
            >
              Programs
            </button>
            <button
              onClick={() => handleNavigation("projects")}
              className={`px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-gray-900"
                  : "text-gray-900 hover:text-gray-900"
              }`}
            >
              Projects
            </button>
            <Link
              href="/events"
              className={`px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-gray-900"
                  : "text-gray-900 hover:text-gray-900"
              }`}
            >
              Events
            </Link>
            <Link
              href="/teams"
              className={`px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-gray-900"
                  : "text-gray-900 hover:text-gray-900"
              }`}
            >
              Teams
            </Link>
            <Link
              href="/partners"
              className={`px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-gray-900"
                  : "text-gray-900 hover:text-gray-900"
              }`}
            >
              Partners
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <button
              onClick={() => handleNavigation("apply")}
              className="px-4 py-2 text-sm font-medium text-white transition-colors bg-green-500 rounded-lg hover:bg-green-600"
            >
              Apply Now
            </button>
            <button
              onClick={() => handleNavigation("contact")}
              className="px-4 py-2 text-sm font-medium transition-colors border border-green-500 rounded-lg text-green-500 hover:bg-green-50"
            >
              Get Started
            </button>
          </div>

          {/* Tablet/Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled
                  ? "text-gray-700 hover:text-gray-900"
                  : "text-gray-900 hover:text-gray-900"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      ></div>

      {/* Mobile Menu Slide-in Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-medium text-gray-900">Menu</h2>
          <button
            type="button"
            className="p-2 text-gray-500 rounded-md hover:text-gray-900 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="px-4 py-2">
          <button
            onClick={() => handleNavigation("programs")}
            className="block w-full py-3 text-left text-base font-medium text-gray-900 hover:text-green-500 transition-colors border-b border-gray-100"
          >
            Programs
          </button>
          <button
            onClick={() => handleNavigation("projects")}
            className="block w-full py-3 text-left text-base font-medium text-gray-900 hover:text-green-500 transition-colors border-b border-gray-100"
          >
            Projects
          </button>
          <Link
            href="/events"
            className="block py-3 text-base font-medium text-gray-900 hover:text-green-500 transition-colors border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Events
          </Link>
          <Link
            href="/teams"
            className="block py-3 text-base font-medium text-gray-900 hover:text-green-500 transition-colors border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Teams
          </Link>
          <Link
            href="/partners"
            className="block py-3 text-base font-medium text-gray-900 hover:text-green-500 transition-colors border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Partners
          </Link>

          <div className="pt-4 mt-4 border-t border-gray-200">
            <button
              onClick={() => handleNavigation("apply")}
              className="block w-full px-4 py-2 mb-3 text-sm font-medium text-center text-white bg-green-500 rounded-md hover:bg-green-600"
            >
              Apply Now
            </button>
            <button
              onClick={() => handleNavigation("contact")}
              className="block w-full px-4 py-2 text-sm font-medium text-center border border-green-500 rounded-md text-green-500 hover:bg-green-50"
            >
              Get Started
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
