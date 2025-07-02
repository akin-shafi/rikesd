import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/logo-dark.png?height=120&width=120"
                alt="RIKESD Logo"
                width={120}
                height={120}
                className="mr-2"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Advancing research for sustainable development through innovation,
              partnerships, and evidence-based solutions.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com/rikesd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://twitter.com/rikesd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://instagram.com/rikesd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com/company/rikesd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://youtube.com/@rikesd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/teams"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/#programs"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/agreements"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Partnership Agreements
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-gray-400 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  123 Logan Street
                  <br />
                  Abuja, Nigeria
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>+2348066301780</p>
                  <p>+2347065174560</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0" />
                <p className="text-gray-300 text-sm">contact@rikesd.org</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} RIKESD. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Research Institute for Knowledge and Sustainable Development
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
