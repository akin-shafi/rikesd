import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Shield,
  Eye,
  Lock,
  Database,
  UserCheck,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy - RIKESD",
  description:
    "Privacy Policy for the Research Institute for Knowledge and Sustainable Development (RIKESD). Learn how we collect, use, and protect your personal information.",
  keywords:
    "privacy policy, data protection, RIKESD, personal information, GDPR, data security",
};

export default function PrivacyPage() {
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
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 display-text">
                Privacy Policy
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
                <Eye className="w-5 h-5 text-green-600 mr-2" />
                <h2 className="text-xl font-semibold text-gray-900 m-0">
                  1. Introduction
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                The Research Institute for Knowledge and Sustainable Development
                (RIKESD) is committed to protecting your privacy and personal
                information. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our
                website, participate in our programs, or use our services.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Database className="w-5 h-5 text-green-600 mr-2" />
                <h2 className="text-xl font-semibold text-gray-900 m-0">
                  2. Information We Collect
                </h2>
              </div>

              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Personal Information
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide
                to us, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-6">
                <li>Name, email address, and contact information</li>
                <li>Professional background and research interests</li>
                <li>Educational qualifications and work experience</li>
                <li>Program application and registration information</li>
                <li>Payment information for paid services</li>
                <li>Communication preferences and feedback</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Automatically Collected Information
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you visit our website, we may automatically collect:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>IP address and browser information</li>
                <li>Device type and operating system</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website and search terms used</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            {/* How We Use Information */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <UserCheck className="w-5 h-5 text-green-600 mr-2" />
                <h2 className="text-xl font-semibold text-gray-900 m-0">
                  3. How We Use Your Information
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>To provide and improve our services and programs</li>
                <li>To process applications and registrations</li>
                <li>To communicate with you about our services and events</li>
                <li>To send newsletters and updates (with your consent)</li>
                <li>To process payments and manage accounts</li>
                <li>
                  To conduct research and analysis to improve our offerings
                </li>
                <li>To comply with legal obligations and protect our rights</li>
                <li>To prevent fraud and ensure security</li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Globe className="w-5 h-5 text-green-600 mr-2" />
                <h2 className="text-xl font-semibold text-gray-900 m-0">
                  4. Information Sharing and Disclosure
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to
                third parties. We may share your information in the following
                circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>
                  <strong>With your consent:</strong> When you explicitly agree
                  to share information
                </li>
                <li>
                  <strong>Service providers:</strong> With trusted third parties
                  who assist in our operations
                </li>
                <li>
                  <strong>Program partners:</strong> With partner organizations
                  for collaborative programs
                </li>
                <li>
                  <strong>Legal requirements:</strong> When required by law or
                  to protect our rights
                </li>
                <li>
                  <strong>Business transfers:</strong> In connection with
                  mergers or acquisitions
                </li>
                <li>
                  <strong>Aggregated data:</strong> Non-personal, statistical
                  information for research purposes
                </li>
              </ul>
            </section>

            {/* Data Security */}
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Lock className="w-5 h-5 text-green-600 mr-2" />
                <h2 className="text-xl font-semibold text-gray-900 m-0">
                  5. Data Security
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational security
                measures to protect your personal information against
                unauthorized access, alteration, disclosure, or destruction.
                These measures include:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication procedures</li>
                <li>Staff training on data protection practices</li>
                <li>Secure data storage and backup systems</li>
              </ul>
            </section>

            {/* Cookies and Tracking */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                6. Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar technologies to enhance your
                experience on our website. Cookies help us:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Provide personalized content and recommendations</li>
                <li>Improve website functionality and performance</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                You can control cookie settings through your browser
                preferences. However, disabling cookies may affect some website
                functionality.
              </p>
            </section>

            {/* Your Rights */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                7. Your Rights and Choices
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the following rights regarding your personal
                information:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>
                  <strong>Access:</strong> Request a copy of the personal
                  information we hold about you
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate
                  or incomplete information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal
                  information (subject to legal requirements)
                </li>
                <li>
                  <strong>Portability:</strong> Request transfer of your data to
                  another organization
                </li>
                <li>
                  <strong>Restriction:</strong> Request limitation of processing
                  in certain circumstances
                </li>
                <li>
                  <strong>Objection:</strong> Object to processing based on
                  legitimate interests
                </li>
                <li>
                  <strong>Withdrawal:</strong> Withdraw consent for processing
                  where applicable
                </li>
              </ul>
            </section>

            {/* International Transfers */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                8. International Data Transfers
              </h2>
              <p className="text-gray-700 leading-relaxed">
                As RIKESD operates internationally, your personal information
                may be transferred to and processed in countries other than your
                country of residence. We ensure that such transfers comply with
                applicable data protection laws and implement appropriate
                safeguards to protect your information.
              </p>
            </section>

            {/* Data Retention */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                9. Data Retention
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We retain your personal information only for as long as
                necessary to fulfill the purposes for which it was collected,
                comply with legal obligations, resolve disputes, and enforce our
                agreements. Retention periods vary depending on the type of
                information and the purpose for processing.
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                10. Children's Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are not directed to children under the age of 16.
                We do not knowingly collect personal information from children
                under 16. If we become aware that we have collected personal
                information from a child under 16, we will take steps to delete
                such information promptly.
              </p>
            </section>

            {/* Changes to Privacy Policy */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                11. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or applicable laws. We will notify you
                of significant changes through our website or other appropriate
                means. The updated policy will be effective when posted.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                12. Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or wish to
                exercise your rights, please contact us:
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-gray-700 mb-2">
                  <strong>Data Protection Officer:</strong> privacy@rikesd.org
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
            href="/terms"
            className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-green-200 rounded-lg text-green-600 hover:bg-green-50 transition-colors"
          >
            Terms of Service
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
