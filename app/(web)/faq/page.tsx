import type { Metadata } from "next";
import FaqAccordion from "@/components/faq-accordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Frequently Asked Questions about RIKESD programs, services, and partnerships",
};

const faqData = [
  {
    question: "What is RIKESD and what do you do?",
    answer:
      "RIKESD (Research, Innovation, Knowledge, Enterprise & Sustainable Development) is a Pan-African led organization that transforms communities through research, innovation, knowledge sharing, enterprise development, and sustainable development initiatives. We provide funding, mentorship, and platforms for researchers, innovators, and entrepreneurs across Africa.",
  },
  {
    question: "How can I apply for RIKESD programs?",
    answer:
      "You can apply for our programs by visiting our website and filling out the application form for your desired program. Each program has specific eligibility criteria and application deadlines. We recommend reviewing the program details carefully before applying.",
  },
  {
    question: "What types of funding does RIKESD provide?",
    answer:
      "RIKESD provides various types of funding including research grants, seed funding for startups, capacity building grants, infrastructure development funding, and event sponsorship. Funding amounts and terms vary depending on the program and project scope.",
  },
  {
    question: "Who is eligible to participate in RIKESD programs?",
    answer:
      "Our programs are open to researchers, innovators, entrepreneurs, students, and organizations across Africa and beyond. Specific eligibility criteria vary by program, but we generally look for individuals and organizations committed to creating positive impact through research and innovation.",
  },
  {
    question: "How does the mentorship program work?",
    answer:
      "Our mentorship program connects participants with experienced mentors in their field. Mentors provide guidance on research methodology, business development, funding strategies, and career advancement. The program typically runs for 6-12 months with regular check-ins and milestone reviews.",
  },
  {
    question: "What is the School to Business (S2B) program?",
    answer:
      "The School to Business (S2B) program is designed to bridge the gap between academic research and commercial application. It helps researchers and students transform their ideas into viable businesses through training, mentorship, and funding support.",
  },
  {
    question: "How can my organization partner with RIKESD?",
    answer:
      "Organizations can partner with RIKESD through various collaboration models including research partnerships, funding partnerships, technology transfer agreements, and event partnerships. Contact our partnerships team to discuss opportunities that align with your organization's goals.",
  },
  {
    question: "What support does RIKESD provide for technology transfer?",
    answer:
      "RIKESD provides comprehensive technology transfer support including intellectual property guidance, commercialization strategy development, market analysis, investor connections, and licensing support. We help researchers and innovators bring their technologies to market.",
  },
  {
    question: "How can I attend RIKESD events?",
    answer:
      "Information about upcoming events is available on our events page. You can register for events online, and we offer both in-person and virtual participation options. Some events are free while others may have registration fees.",
  },
  {
    question: "What is the application timeline for programs?",
    answer:
      "Application timelines vary by program. Most programs have quarterly or bi-annual application cycles. We recommend checking our website regularly for application deadlines and program announcements. Early applications are encouraged as some programs have limited spots.",
  },
  {
    question: "Does RIKESD provide international collaboration opportunities?",
    answer:
      "Yes, RIKESD facilitates international collaborations through partnerships with global institutions, exchange programs, joint research initiatives, and international conferences. We believe in the power of global collaboration to address complex challenges.",
  },
  {
    question: "How can I stay updated on RIKESD activities?",
    answer:
      "You can stay updated by subscribing to our newsletter, following us on social media, and regularly visiting our website. We also send program-specific updates to participants and partners.",
  },
  {
    question: "What sectors does RIKESD focus on?",
    answer:
      "RIKESD works across multiple sectors including agriculture, healthcare, education, technology, renewable energy, environmental sustainability, and social innovation. We support projects that have the potential for significant social and economic impact.",
  },
  {
    question: "How does RIKESD measure impact?",
    answer:
      "We measure impact through various metrics including number of researchers supported, startups created, jobs generated, publications produced, patents filed, and communities reached. We conduct regular impact assessments and share results with stakeholders.",
  },
  {
    question: "Can international applicants participate in RIKESD programs?",
    answer:
      "While RIKESD primarily focuses on African researchers and innovators, we welcome international applicants who are working on projects that benefit African communities or involve African partnerships. Each program has specific eligibility requirements.",
  },
];

export default function FaqPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 display-text">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about RIKESD programs, services,
              and partnerships
            </p>
          </div>

          <FaqAccordion questions={faqData} />

          <div className="mt-12 p-6 bg-green-50 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Still have questions?
            </h3>
            <p className="text-gray-700 mb-4">
              If you couldn't find the answer you're looking for, please don't
              hesitate to contact us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:contact@rikesd.org"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors"
              >
                Email Us
              </a>
              <a
                href="tel:+2348066301780"
                className="inline-flex items-center justify-center px-6 py-3 border border-green-500 text-green-500 font-medium rounded-lg hover:bg-green-50 transition-colors"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
