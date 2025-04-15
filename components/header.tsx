"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container px-4 mx-auto">
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
              {/* <span
                className={`text-xl font-bold ${
                  isScrolled ? "text-gray-900" : "text-gray-900"
                }`}
              >
                RIKESD
              </span> */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-1">
            <NavItem
              href="#research"
              label="Research"
              isScrolled={isScrolled}
            />
            <NavItem
              href="#investors"
              label="Investors"
              isScrolled={isScrolled}
            />
            <NavItem href="#events" label="Events" isScrolled={isScrolled} />
            <NavItem href="#reviews" label="Reviews" isScrolled={isScrolled} />
            <NavItem href="#alumni" label="Alumni" isScrolled={isScrolled} />
            <NavItem
              href="#resources"
              label="Resources"
              isScrolled={isScrolled}
            />
            <NavItem
              href="#partnerships"
              label="Partnerships"
              isScrolled={isScrolled}
            />
            <NavItem href="#about" label="About" isScrolled={isScrolled} />
          </nav>

          {/* Location & CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <div
              className={`flex items-center ${
                isScrolled ? "text-gray-700" : "text-gray-900"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span className="text-sm font-medium">Abuja</span>
            </div>
            <Link
              href="#apply"
              className="px-4 py-2 text-sm font-medium text-white transition-colors bg-green-500  rounded-lg hover:bg-green-600"
            >
              Apply
            </Link>
            <Link
              href="#signin"
              className="px-4 py-2 text-sm font-medium transition-colors border border-green-500  rounded-lg text-green-500 hover:bg-green-50"
            >
              Sign in
            </Link>
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
              <FiMenu className="w-6 h-6" />
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
          <h2 className="text-xl font-medium text-gray-900">Main Menu</h2>
          <button
            type="button"
            className="p-2 text-gray-500 rounded-md hover:text-gray-900 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>

        <nav className="px-4 py-2">
          <MobileNavItem
            href="#research"
            label="Research"
            onClick={() => setIsMenuOpen(false)}
          />
          <MobileNavItem
            href="#investors"
            label="Investors"
            onClick={() => setIsMenuOpen(false)}
          />
          <MobileNavItem
            href="#events"
            label="Events"
            onClick={() => setIsMenuOpen(false)}
          />
          <MobileNavItem
            href="#reviews"
            label="Reviews"
            onClick={() => setIsMenuOpen(false)}
          />
          <MobileNavItem
            href="#alumni"
            label="Alumni"
            onClick={() => setIsMenuOpen(false)}
          />
          <MobileNavItem
            href="#resources"
            label="Resources"
            onClick={() => setIsMenuOpen(false)}
          />
          <MobileNavItem
            href="#partnerships"
            label="Partnerships"
            onClick={() => setIsMenuOpen(false)}
          />
          <MobileNavItem
            href="#about"
            label="About"
            onClick={() => setIsMenuOpen(false)}
          />

          <div className="pt-4 mt-4 border-t border-gray-200">
            <div className="flex items-center mb-4 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span className="text-sm font-medium">Lagos</span>
            </div>
            <Link
              href="#apply"
              className="block w-full px-4 py-2 mb-3 text-sm font-medium text-center text-white bg-green-500 rounded-md hover:bg-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Apply
            </Link>
            <Link
              href="#signin"
              className="block w-full px-4 py-2 text-sm font-medium text-center border border-green-500 rounded-md text-green-500 hover:bg-green-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign in
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

interface NavItemProps {
  href: string;
  label: string;
  isScrolled: boolean;
}

function NavItem({ href, label, isScrolled }: NavItemProps) {
  return (
    <Link
      href={href}
      className={`px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 flex items-center ${
        isScrolled
          ? "text-gray-700 hover:text-gray-900"
          : "text-gray-900 hover:text-gray-900"
      }`}
    >
      {label}
      <FiChevronDown className="ml-1 w-4 h-4" />
    </Link>
  );
}

interface MobileNavItemProps {
  href: string;
  label: string;
  onClick: () => void;
}

function MobileNavItem({ href, label, onClick }: MobileNavItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-1 border-b border-gray-100">
      <div className="flex items-center justify-between">
        <Link
          href={href}
          className="block py-3 text-base font-medium text-gray-900"
          onClick={onClick}
        >
          {label}
        </Link>
        <button
          type="button"
          className="p-1 text-gray-500 rounded hover:bg-gray-100"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <FiChevronDown
            className={`w-5 h-5 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
      {isOpen && (
        <div className="pl-4 pb-2">
          <Link
            href="#"
            className="block py-2 text-sm text-gray-600 hover:text-green-500"
            onClick={onClick}
          >
            Submenu Item 1
          </Link>
          <Link
            href="#"
            className="block py-2 text-sm text-gray-600 hover:text-green-500"
            onClick={onClick}
          >
            Submenu Item 2
          </Link>
          <Link
            href="#"
            className="block py-2 text-sm text-gray-600 hover:text-green-500"
            onClick={onClick}
          >
            Submenu Item 3
          </Link>
        </div>
      )}
    </div>
  );
}
