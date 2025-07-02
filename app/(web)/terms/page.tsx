import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  FileText,
  Scale,
  Shield,
  Users,
  AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service - RIKESD",
  description:
    "Terms of Service for the Research Institute for Knowledge and Sustainable Development (RIKESD). Learn about our service terms, user responsibilities, and legal agreements.",
  keywords:
    "terms of service, legal, RIKESD, research institute, user agreement, conditions",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
              <FileText className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 display-text">
                Terms of Service
              </h1>
              <p className="text-gray-600">Last updated: January 2, 2025</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-green-100 p-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Scale className="w-5 h-5 text-green-600 mr-2" />
                <h2 className="text-xl font-semibold text-gray-900 m-0">
                  1. Introduction
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Welcome to the Research Institute for Knowledge and Sustainable
                Development (RIKESD). These Terms of Service ("Terms") govern
                your use of our website, services, programs, and resources. By
                accessing or using our services, you agree to be bound by these
                Terms.
              </p>
            </section>

            {/* Service Description */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Users className="w-5 h-5 text-green-600 mr-2" />
                <h2 className="text-xl font-semibold text-gray-900 m-0">
                  2. Service Description
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                RIKESD provides research and development services, educational
                programs, networking opportunities, and resources related to
                sustainable development. Our services include but are not
                limited to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Research programs and initiatives</li>
                <li>Educational workshops and training sessions</li>
                <li>Networking events and conferences</li>
                <li>Partnership facilitation services</li>
                <li>Online resources and publications</li>
                <li>Mentorship and advisory services</li>
              </ul>
            </section>

            {/* User Responsibilities */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Shield className="w-5 h-5 text-green-600 mr-2" />
                <h2 className="text-xl font-semibold text-gray-900 m-0">
                  3. User Responsibilities
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                By using our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>
                  Provide accurate and complete information when registering or
                  participating in programs
                </li>
                <li>
                  Respect intellectual property rights of RIKESD and other users
                </li>
                <li>
                  Maintain confidentiality of any proprietary information shared
                  during programs
                </li>
                <li>
                  Conduct yourself professionally in all interactions with
                  RIKESD staff and other participants
                </li>
                <li>Comply with all applicable laws and regulations</li>
                <li>
                  Not use our services for any unlawful or prohibited purposes
                </li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                4. Intellectual Property
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All content, materials, and resources provided by RIKESD,
                including but not limited to text, graphics, logos, images,
                software, and methodologies, are the property of RIKESD or its
                licensors and are protected by copyright, trademark, and other
                intellectual property laws.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You may not reproduce, distribute, modify, or create derivative
                works from our content without explicit written permission from
                RIKESD.
              </p>
            </section>

            {/* Privacy and Data Protection */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                5. Privacy and Data Protection
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your privacy is important to us. Our collection, use, and
                protection of your personal information is governed by our
                Privacy Policy, which is incorporated into these Terms by
                reference.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using our services, you consent to the collection and use of
                your information as described in our Privacy Policy.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-5 h-5 text-amber-600 mr-2" />
                <h2 className="text-xl font-semibold text-gray-900 m-0">
                  6. Limitation of Liability
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                RIKESD provides its services "as is" without warranties of any
                kind. To the fullest extent permitted by law, RIKESD disclaims
                all warranties, express or implied, including but not limited to
                warranties of merchantability, fitness for a particular purpose,
                and non-infringement.
              </p>
              <p className="text-gray-700 leading-relaxed">
                RIKESD shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages arising from your
                use of our services.
              </p>
            </section>

            {/* Program-Specific Terms */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                7. Program-Specific Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Participation in specific RIKESD programs may be subject to
                additional terms and conditions, which will be provided
                separately and incorporated into these Terms by reference.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Program fees, if applicable, are non-refundable unless otherwise
                specified in the program-specific terms.
              </p>
            </section>

            {/* Termination */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                8. Termination
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                RIKESD reserves the right to terminate or suspend your access to
                our services at any time, with or without cause, and with or
                without notice.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You may terminate your relationship with RIKESD at any time by
                discontinuing use of our services.
              </p>
            </section>

            {/* Governing Law */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                9. Governing Law
              </h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms shall be governed by and construed in accordance
                with the laws of Nigeria. Any disputes arising under these Terms
                shall be subject to the exclusive jurisdiction of the courts of
                Nigeria.
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                10. Changes to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                RIKESD reserves the right to modify these Terms at any time. We
                will notify users of significant changes through our website or
                other appropriate means. Continued use of our services after
                changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                11. Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please
                contact us:
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> legal@rikesd.org
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Phone:</strong> +2348066301780
                </p>
                <p className="text-gray-700">
                  <strong>Address:</strong> 123 Logan Street, Abuja, Nigeria
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Related Links */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link
            href="/privacy"
            className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-green-200 rounded-lg text-green-600 hover:bg-green-50 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/agreements"
            className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-green-200 rounded-lg text-green-600 hover:bg-green-50 transition-colors"
          >
            Partnership Agreements
          </Link>
          <Link
            href="/faq"
            className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-green-200 rounded-lg text-green-600 hover:bg-green-50 transition-colors"
          >
            FAQ
          </Link>
        </div>
      </div>
    </div>
  );
}
