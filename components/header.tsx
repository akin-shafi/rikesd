"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    if (pathname !== "/") {
      // If not on home page, navigate to home first
      window.location.href = `/#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleNavigation = (href: string, sectionId?: string) => {
    if (sectionId) {
      scrollToSection(sectionId);
    } else {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto max-w-7xl">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-dark.png?height=150&width=150"
            alt="RIKESD Logo"
            width={150}
            height={150}
            className="mr-2"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("programs")}
            className="text-gray-600 hover:text-green-600 transition-colors font-medium"
          >
            Programs
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-gray-600 hover:text-green-600 transition-colors font-medium"
          >
            Projects
          </button>
          <Link
            href="/events"
            className="text-gray-600 hover:text-green-600 transition-colors font-medium"
          >
            Events
          </Link>
          <Link
            href="/teams"
            className="text-gray-600 hover:text-green-600 transition-colors font-medium"
          >
            Team
          </Link>
          <Link
            href="/partners"
            className="text-gray-600 hover:text-green-600 transition-colors font-medium"
          >
            Partners
          </Link>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-600 hover:text-green-600 transition-colors font-medium"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-white md:hidden">
          <nav className="flex flex-col space-y-4 p-6">
            <button
              onClick={() => handleNavigation("/", "programs")}
              className="text-left text-lg font-medium text-gray-600 hover:text-green-600 transition-colors py-2"
            >
              Programs
            </button>
            <button
              onClick={() => handleNavigation("/", "projects")}
              className="text-left text-lg font-medium text-gray-600 hover:text-green-600 transition-colors py-2"
            >
              Projects
            </button>
            <Link
              href="/events"
              onClick={() => handleNavigation("/events")}
              className="text-lg font-medium text-gray-600 hover:text-green-600 transition-colors py-2"
            >
              Events
            </Link>
            <Link
              href="/teams"
              onClick={() => handleNavigation("/teams")}
              className="text-lg font-medium text-gray-600 hover:text-green-600 transition-colors py-2"
            >
              Team
            </Link>
            <Link
              href="/partners"
              onClick={() => handleNavigation("/partners")}
              className="text-lg font-medium text-gray-600 hover:text-green-600 transition-colors py-2"
            >
              Partners
            </Link>
            <button
              onClick={() => handleNavigation("/", "contact")}
              className="text-left text-lg font-medium text-gray-600 hover:text-green-600 transition-colors py-2"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
