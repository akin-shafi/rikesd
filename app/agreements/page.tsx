import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agreements",
  description: "Partnership and Collaboration Agreements for RIKESD",
};

export default function AgreementsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 display-text">
            Partnership & Collaboration Agreements
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Research Collaboration Agreement
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This agreement governs collaborative research activities between
                RIKESD and partner institutions, researchers, or organizations.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Key Terms:
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Intellectual property rights and ownership</li>
                <li>Data sharing and confidentiality protocols</li>
                <li>Publication and dissemination guidelines</li>
                <li>Resource allocation and cost sharing</li>
                <li>Timeline and milestone requirements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Partnership Agreement
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This agreement establishes formal partnerships with
                organizations, institutions, and stakeholders to advance our
                mission.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Partnership Types:
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  Academic partnerships with universities and research
                  institutions
                </li>
                <li>
                  Industry partnerships for technology transfer and
                  commercialization
                </li>
                <li>
                  Government partnerships for policy development and
                  implementation
                </li>
                <li>NGO partnerships for community development initiatives</li>
                <li>International partnerships for global collaboration</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Funding and Grant Agreements
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These agreements govern the terms and conditions for funding
                provided by or through RIKESD for research and development
                activities.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Funding Categories:
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Research grants for innovative projects</li>
                <li>Seed funding for early-stage ventures</li>
                <li>Capacity building grants for skill development</li>
                <li>Infrastructure development funding</li>
                <li>Conference and event sponsorship</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Mentorship and Advisory Agreements
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These agreements define the relationship between RIKESD
                mentors/advisors and program participants.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Responsibilities:
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Mentor obligations and time commitments</li>
                <li>Mentee expectations and deliverables</li>
                <li>Confidentiality and non-disclosure requirements</li>
                <li>Intellectual property considerations</li>
                <li>Evaluation and feedback mechanisms</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Technology Transfer Agreement
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This agreement governs the transfer of technology, knowledge,
                and innovations developed through RIKESD programs.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Key Components:
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Technology licensing terms and conditions</li>
                <li>Royalty and revenue sharing arrangements</li>
                <li>Commercialization support and guidance</li>
                <li>Market exclusivity and territorial rights</li>
                <li>Performance milestones and reporting requirements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Data Sharing Agreement
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This agreement governs the sharing of research data, datasets,
                and related materials between RIKESD and collaborating parties.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Data Governance:
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Data ownership and usage rights</li>
                <li>Privacy and security requirements</li>
                <li>Data quality and validation standards</li>
                <li>Attribution and citation guidelines</li>
                <li>Compliance with regulatory requirements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Event and Conference Agreements
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These agreements cover participation in, organization of, or
                sponsorship of events, conferences, and workshops.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Event Types:
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Academic conferences and symposiums</li>
                <li>Training workshops and capacity building events</li>
                <li>Innovation showcases and pitch competitions</li>
                <li>Networking events and community gatherings</li>
                <li>Virtual and hybrid event platforms</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Agreement Process
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To initiate any agreement with RIKESD:
              </p>
              <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
                <li>Submit a formal proposal or expression of interest</li>
                <li>Participate in initial discussions and due diligence</li>
                <li>Negotiate terms and conditions</li>
                <li>Execute formal agreement documentation</li>
                <li>Implement agreed-upon activities and deliverables</li>
                <li>Monitor progress and evaluate outcomes</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For inquiries about partnerships and agreements, please contact:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Partnerships Team:</strong> partnerships@rikesd.org
                  <br />
                  <strong>Legal Team:</strong> legal@rikesd.org
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
