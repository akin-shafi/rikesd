import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Handshake,
  Users,
  DollarSign,
  Lightbulb,
  FileText,
  Mail,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Partnership Agreements - RIKESD",
  description:
    "Learn about partnership opportunities with RIKESD. Explore our collaboration agreements, research partnerships, and institutional alliances.",
  keywords:
    "partnership agreements, collaboration, research partnerships, RIKESD, institutional partnerships",
};

export default function AgreementsPage() {
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
              <Handshake className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 display-text">
                Partnership Agreements
              </h1>
              <p className="text-gray-600">
                Building collaborative relationships for sustainable development
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-green-100 p-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Partnership Overview
              </h2>
              <p className="text-gray-700 leading-relaxed">
                RIKESD believes in the power of collaboration to drive
                sustainable development and research innovation. We offer
                various partnership models designed to foster meaningful
                relationships with institutions, organizations, and individuals
                who share our commitment to advancing knowledge and creating
                positive impact.
              </p>
            </section>

            {/* Partnership Types */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Types of Partnerships
              </h2>

              {/* Research Collaboration */}
              <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-green-600 mr-3" />
                  <h3 className="text-lg font-medium text-gray-900 m-0">
                    Research Collaboration Partnerships
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Joint research initiatives with academic institutions,
                  research organizations, and think tanks to advance knowledge
                  in sustainable development, innovation, and related fields.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Benefits Include:
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                      <li>Shared research resources and expertise</li>
                      <li>Joint publication opportunities</li>
                      <li>Access to research networks</li>
                      <li>Collaborative funding applications</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Requirements:
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                      <li>Established research track record</li>
                      <li>Alignment with RIKESD's mission</li>
                      <li>Commitment to ethical research practices</li>
                      <li>Data sharing agreements</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Institutional Partnerships */}
              <div className="mb-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center mb-4">
                  <FileText className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-lg font-medium text-gray-900 m-0">
                    Institutional Partnerships
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Strategic alliances with universities, government agencies,
                  NGOs, and international organizations to create lasting
                  institutional relationships and program exchanges.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Partnership Activities:
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                      <li>Student and researcher exchanges</li>
                      <li>Joint program development</li>
                      <li>Shared infrastructure and facilities</li>
                      <li>Capacity building initiatives</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Agreement Terms:
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                      <li>Memorandum of Understanding (MOU)</li>
                      <li>Defined roles and responsibilities</li>
                      <li>Resource sharing protocols</li>
                      <li>Performance evaluation metrics</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Funding Partnerships */}
              <div className="mb-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center mb-4">
                  <DollarSign className="w-6 h-6 text-yellow-600 mr-3" />
                  <h3 className="text-lg font-medium text-gray-900 m-0">
                    Funding and Sponsorship Partnerships
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Financial partnerships with foundations, corporations, and
                  funding agencies to support research projects, programs, and
                  institutional development.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Funding Opportunities:
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                      <li>Research project grants</li>
                      <li>Program sponsorships</li>
                      <li>Infrastructure development</li>
                      <li>Scholarship and fellowship funding</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Partner Benefits:
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                      <li>Brand visibility and recognition</li>
                      <li>Access to research outcomes</li>
                      <li>Networking opportunities</li>
                      <li>Impact reporting and documentation</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Innovation Partnerships */}
              <div className="mb-8 p-6 bg-purple-50 border border-purple-200 rounded-lg">
                <div className="flex items-center mb-4">
                  <Lightbulb className="w-6 h-6 text-purple-600 mr-3" />
                  <h3 className="text-lg font-medium text-gray-900 m-0">
                    Innovation & Technology Transfer Partnerships
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Collaborative agreements focused on innovation development,
                  technology transfer, and commercialization of research
                  outcomes.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Innovation Focus Areas:
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                      <li>Sustainable technology development</li>
                      <li>Digital innovation solutions</li>
                      <li>Social innovation initiatives</li>
                      <li>Entrepreneurship support programs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Collaboration Models:
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                      <li>Joint innovation labs</li>
                      <li>Incubation and acceleration programs</li>
                      <li>Intellectual property sharing</li>
                      <li>Market access facilitation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Partnership Development Process */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Partnership Development Process
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-medium mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">
                      Initial Consultation
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Discuss partnership objectives, alignment with RIKESD's
                      mission, and potential collaboration areas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-medium mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">
                      Proposal Development
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Collaborative development of partnership proposal
                      outlining objectives, activities, and expected outcomes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-medium mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">
                      Due Diligence & Review
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Comprehensive review of partnership terms, legal
                      considerations, and risk assessment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-medium mr-4">
                    4
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">
                      Agreement Finalization
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Formal agreement signing, including terms of
                      collaboration, responsibilities, and success metrics.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-medium mr-4">
                    5
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">
                      Implementation & Monitoring
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Active partnership implementation with regular monitoring,
                      evaluation, and reporting.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Sample Agreement Templates */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Sample Agreement Templates
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We provide standardized agreement templates to streamline the
                partnership development process:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">
                    Research Collaboration Agreement
                  </h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Comprehensive template for joint research initiatives and
                    academic partnerships.
                  </p>
                  <Link
                    href="mailto:operations@rikesd.org?subject=Request for Research Collaboration Agreement Template"
                    className="text-green-600 hover:text-green-700 text-sm font-medium"
                  >
                    Request Template →
                  </Link>
                </div>

                <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">
                    Institutional MOU Template
                  </h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Standard memorandum of understanding for institutional
                    partnerships.
                  </p>
                  <Link
                    href="mailto:operations@rikesd.org?subject=Request for Institutional MOU Template"
                    className="text-green-600 hover:text-green-700 text-sm font-medium"
                  >
                    Request Template →
                  </Link>
                </div>

                <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">
                    Funding Partnership Agreement
                  </h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Template for funding and sponsorship partnership
                    arrangements.
                  </p>
                  <Link
                    href="mailto:operations@rikesd.org?subject=Request for Funding Partnership Agreement Template"
                    className="text-green-600 hover:text-green-700 text-sm font-medium"
                  >
                    Request Template →
                  </Link>
                </div>

                <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">
                    Innovation Partnership Framework
                  </h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Framework agreement for technology transfer and innovation
                    partnerships.
                  </p>
                  <Link
                    href="mailto:operations@rikesd.org?subject=Request for Innovation Partnership Framework"
                    className="text-green-600 hover:text-green-700 text-sm font-medium"
                  >
                    Request Template →
                  </Link>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Partnership Inquiries
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ready to explore partnership opportunities with RIKESD? Our
                partnerships team is here to help you identify the best
                collaboration model for your organization.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center mb-3">
                      <Mail className="w-5 h-5 text-green-600 mr-2" />
                      <span className="font-medium text-gray-900">Email</span>
                    </div>
                    <p className="text-gray-700 mb-1">operations@rikesd.org</p>
                    <p className="text-gray-700 text-sm">
                      For general partnership inquiries
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-3">
                      <Phone className="w-5 h-5 text-green-600 mr-2" />
                      <span className="font-medium text-gray-900">Phone</span>
                    </div>
                    <p className="text-gray-700 mb-1">+2348066301780</p>
                    <p className="text-gray-700 text-sm">
                      Direct line to partnerships team
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-green-200">
                  <p className="text-gray-700 text-sm">
                    <strong>Office Hours:</strong> Monday - Friday, 9:00 AM -
                    5:00 PM WAT
                    <br />
                    <strong>Response Time:</strong> We typically respond to
                    partnership inquiries within 48 hours
                  </p>
                </div>
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
            href="/privacy"
            className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-green-200 rounded-lg text-green-600 hover:bg-green-50 transition-colors"
          >
            Privacy Policy
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
