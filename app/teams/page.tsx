import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for RIKESD - Research, Innovation, Knowledge, Enterprise & Sustainable Development",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 display-text">
            Terms of Service
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing and using the RIKESD website and services, you
                accept and agree to be bound by the terms and provision of this
                agreement. If you do not agree to abide by the above, please do
                not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Description of Service
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                RIKESD provides research, innovation, knowledge sharing,
                enterprise development, and sustainable development services
                through our platform. Our services include but are not limited
                to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Research collaboration and funding opportunities</li>
                <li>Innovation labs and incubation programs</li>
                <li>Educational events and workshops</li>
                <li>Partnership facilitation</li>
                <li>Knowledge sharing platforms</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. User Responsibilities
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Users are responsible for:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Providing accurate and complete information</li>
                <li>Maintaining the confidentiality of account credentials</li>
                <li>Complying with all applicable laws and regulations</li>
                <li>Respecting intellectual property rights</li>
                <li>Using services for legitimate purposes only</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Intellectual Property
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All content, materials, and intellectual property on this
                platform remain the property of RIKESD or their respective
                owners. Users may not reproduce, distribute, or create
                derivative works without explicit permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Privacy and Data Protection
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your privacy is important to us. Please review our Privacy
                Policy to understand how we collect, use, and protect your
                personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                RIKESD shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages, including without
                limitation, loss of profits, data, use, goodwill, or other
                intangible losses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Termination
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may terminate or suspend your account and access to our
                services immediately, without prior notice or liability, for any
                reason whatsoever, including without limitation if you breach
                the Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Changes to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to modify or replace these Terms at any
                time. If a revision is material, we will try to provide at least
                30 days notice prior to any new terms taking effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please
                contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> legal@rikesd.org
                  <br />
                  <strong>Phone:</strong> +234 806 630 1780
                  <br />
                  <strong>Address:</strong> 123 Logan Street, Abuja, Nigeria
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
