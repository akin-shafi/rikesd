import Image from "next/image"
import Link from "next/link"
import { FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"
import EventTracker from "@/components/event-tracker"
import EventCard from "@/components/event-card"
import FaqAccordion from "@/components/faq-accordion"
import Header from "@/components/header"
import PartnerLogo from "@/components/partner-logo"
import EcosystemSection from "@/components/ecosystem-section"
import AchievementCard from "@/components/achievement-card"
import ProgramCard from "@/components/program-card"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 -z-10 w-full h-full">
          <div className="absolute top-0 right-0 w-full h-full bg-[#f8f9fa] opacity-50">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=800')] bg-repeat opacity-5"></div>
          </div>
        </div>

        <div className="container px-4 mx-auto">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h1 className="mb-6 text-5xl font-bold leading-tight">
                <span className="green-gradient-text">Empowering</span> communities
              </h1>
              <h2 className="mb-8 text-4xl font-bold text-gray-900">through Research, Innovation, and Enterprise</h2>
              <p className="mb-8 text-xl text-gray-600">
                RIKESD is a Pan-African led organization that is leading the transformation of communities through
                Research, Innovation, Knowledge, Enterprise and Sustainable Development.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#contact"
                  className="px-6 py-3 text-white transition-colors bg-green-500 rounded-md hover:bg-green-600"
                >
                  Get Involved
                </Link>
                <Link
                  href="#about"
                  className="px-6 py-3 transition-colors border border-green-500 rounded-md green-gradient-text hover:bg-green-50"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="/placeholder.svg?height=1000&width=1000"
                alt="RIKESD team collaboration"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold">
                <span className="green-gradient-text">A Lifetime of Impact</span>
                <br />
                Starts Here
              </h2>
              <p className="mb-8 text-xl text-gray-600">
                Whether you just have a research idea, are developing a prototype, or already have an innovation with
                early adoption, we can help. Since 2015, our highly-structured programs have given researchers clarity
                on their next steps, critical feedback on their innovations, and a global network to support their
                growth.
              </p>
              <Link
                href="#programs"
                className="px-6 py-3 text-white transition-colors bg-green-500 rounded-md hover:bg-green-600"
              >
                Explore Our Programs
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <AchievementCard value={500} label="Research Projects" suffix="+" />
              <AchievementCard value={15} label="Research Funding" prefix="$" suffix="M+" />
              <AchievementCard value={25} label="Partner Countries" suffix="+" />
              <AchievementCard value={100} label="Publications" suffix="+" />
              <AchievementCard value={1200} label="Mentors & Advisors" suffix="+" />
              <AchievementCard value={50} label="Estimated Impact Value" prefix="$" suffix="M" />
            </div>
          </div>
        </div>
      </section>

      {/* Program Pathways Section */}
      <section id="programs" className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">Our Research Pathways</h2>
            <p className="text-xl text-gray-600">
              We provide structured support at every stage of the research and innovation journey
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <ProgramCard
              title="RIKESD Core Program"
              description="It all starts with our renowned Core Program, which guides researchers at the idea and pre-development stages to reach the milestones needed for funding and sustained growth."
              icon="/placeholder.svg?height=40&width=40"
              showArrow={true}
            />
            <ProgramCard
              title="Innovation Lab"
              description="After completing the Core Program, researchers get access to a series of additional resources and advisory programs to guide them towards their next major innovation milestones."
              icon="/placeholder.svg?height=40&width=40"
              showArrow={true}
            />
            <ProgramCard
              title="Enterprise Network"
              description="When ready, researchers get featured at events and connected to a diverse pool of investors and industry partners actively participating in funding and commercialization opportunities."
              icon="/placeholder.svg?height=40&width=40"
            />
          </div>
        </div>
      </section>

      {/* Floating Event Tracker */}
      <EventTracker />

      {/* Events Section */}
      <section id="events" className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold">
                Join a <span className="green-gradient-text">Free Research</span> Event
              </h2>
              <p className="mb-8 text-xl text-gray-600">
                We exist to help researchers and innovators, so we run nearly 100 free events per year where you can
                meet local experts, network with investors, learn from advisors, and connect with collaborators.
              </p>
              <div className="relative h-[300px] rounded-xl overflow-hidden">
                <Image src="/placeholder.svg?height=600&width=800" alt="RIKESD event" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-lg font-medium">100% free events to get direction for your research</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <EventCard
                title="Scaling Research Through Partnerships in Nigeria"
                date="Apr 17, 2025"
                time="05:00pm +01"
                featured={true}
              />
              <EventCard title="RIKESD Online Information Session" date="Various Times" time="Various Times" />
              <EventCard
                title="Researcher Networking: Find a Collaboration Partner"
                date="Apr 17, 2025"
                time="01:00pm +01"
              />
              <EventCard
                title="RIKESD Alumni Panel: Meet Portfolio Projects and Ask Questions"
                date="Apr 24, 2025"
                time="01:00pm +01"
              />
              <div className="pt-4">
                <Link
                  href="#more-events"
                  className="flex items-center justify-center w-full gap-2 px-6 py-3 green-gradient-text transition-colors border border-green-500 rounded-md hover:bg-green-50"
                >
                  <span>See more events</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section id="partnerships" className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">Perks</h2>
            <p className="text-xl text-gray-600">
              Over $2M in discounts and freebies from AWS, Google, Microsoft, IBM, and more.
            </p>
          </div>

          <div className="relative">
            <div className="flex items-center justify-center">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
                <PartnerLogo name="AWS" />
                <PartnerLogo name="Google Cloud" />
                <PartnerLogo name="Microsoft" />
                <PartnerLogo name="IBM" />
                <PartnerLogo name="Oracle" />
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link
                href="#perks"
                className="px-6 py-3 text-white transition-colors bg-green-500 rounded-md hover:bg-green-600"
              >
                See our perks package
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Section - Replaced with new component */}
      <EcosystemSection />

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">Why Choose RIKESD</h2>
            <p className="text-xl text-gray-600">
              We provide comprehensive support to researchers and innovators at every stage of their journey.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 transition-all bg-white border border-gray-200 rounded-xl hover:shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-green-100 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="green-gradient-text"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Knowledge Resources</h3>
              <p className="text-gray-600">
                Access to cutting-edge research, methodologies, and best practices in your field.
              </p>
            </div>

            <div className="p-6 transition-all bg-white border border-gray-200 rounded-xl hover:shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-green-100 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="green-gradient-text"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 8v8"></path>
                  <path d="M8 12h8"></path>
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Funding Opportunities</h3>
              <p className="text-gray-600">
                Connect with investors and funding sources specifically interested in research-based innovations.
              </p>
            </div>

            <div className="p-6 transition-all bg-white border border-gray-200 rounded-xl hover:shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-green-100 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="green-gradient-text"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Expert Community</h3>
              <p className="text-gray-600">
                Join a network of researchers, innovators, and industry experts to collaborate and share insights.
              </p>
            </div>

            <div className="p-6 transition-all bg-white border border-gray-200 rounded-xl hover:shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-green-100 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="green-gradient-text"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Global Recognition</h3>
              <p className="text-gray-600">
                Showcase your work on an international platform and gain visibility for your innovations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">
              Frequently Asked <span className="green-gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about RIKESD programs and opportunities.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FaqAccordion
              questions={[
                {
                  question: "Which program should I apply to?",
                  answer:
                    "The best program for you depends on your research stage and goals. Our Core Program is ideal for early-stage researchers, while our Accelerator is designed for those ready to scale their innovations. Contact us for a personalized recommendation.",
                },
                {
                  question: "How much does it cost?",
                  answer:
                    "RIKESD offers various programs with different cost structures. Many of our events and resources are free, while our structured programs have fees that vary by location and program type. Scholarships and financial assistance are available for qualified applicants.",
                },
                {
                  question: "Is there an equity component?",
                  answer:
                    "Some of our acceleration programs may include an optional equity component, but many of our programs and resources are available without any equity requirement. We're transparent about any equity arrangements before you commit to a program.",
                },
                {
                  question: "Where can I see the agreements?",
                  answer:
                    "All program agreements are provided during the application process. You can request sample agreements by contacting our team at info@rikesd.org.",
                },
                {
                  question: "Can I talk to someone about the program?",
                  answer:
                    "We offer regular information sessions and one-on-one consultations. You can schedule a call with our team by visiting the Contact page or emailing info@rikesd.org.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold">Have questions about research, innovation, or development?</h2>
              <p className="mb-8 text-xl text-gray-600">
                Our team is available 24/7 to assist you with any inquiries related to our programs, partnerships, or
                how you can get involved.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-green-100 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="green-gradient-text"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Our Location</h3>
                    <p className="mt-1 text-gray-600">123 Logan Street, Abuja, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-green-100 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="green-gradient-text"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                    <p className="mt-1 text-gray-600">+234 703 XXX XXXX, +234 708 XXX XXXX</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-green-100 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="green-gradient-text"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="mt-1 text-gray-600">info@rikesd.org</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
              <h3 className="mb-6 text-xl font-semibold text-gray-900">I would like to discuss:</h3>
              <form>
                <div className="grid gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select a topic</option>
                      <option value="Research Collaboration">Research Collaboration</option>
                      <option value="Funding Opportunities">Funding Opportunities</option>
                      <option value="Expert Community">Expert Community</option>
                      <option value="Knowledge Marketplace">Knowledge Marketplace</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-3 font-medium text-white transition-colors bg-green-500 rounded-md hover:bg-green-600"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="p-8 bg-green-500 rounded-2xl md:p-12">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
                  Stay updated with our latest insights
                </h2>
                <p className="text-green-50">
                  Subscribe to our newsletter to receive updates on research opportunities, events, and innovation
                  trends.
                </p>
              </div>
              <div className="flex items-center">
                <form className="flex w-full max-w-md gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 text-gray-900 bg-white border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 font-medium text-white transition-colors bg-gray-800 rounded-md hover:bg-gray-900"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-200">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center mb-6">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="RIKESD Logo"
                  width={40}
                  height={40}
                  className="mr-3"
                />
                <span className="text-xl font-bold text-gray-900">RIKESD</span>
              </div>
              <p className="mb-6 text-gray-600">
                RIKESD is the world's most proven network to turn research into impactful solutions, and innovations
                into global enterprises. Since 2015, our structured programs have helped over 500 researchers and
                innovators make an impact.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-gray-900">
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-900">
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-900">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-900">
                  <FaYoutube className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-lg font-medium text-gray-900">About Us</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="text-gray-600 hover:green-gradient-text">
                    Company
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:green-gradient-text">
                    Core Program
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:green-gradient-text">
                    Global Locations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:green-gradient-text">
                    Research Events
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:green-gradient-text">
                    Press
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-lg font-medium text-gray-900">Support</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="text-gray-600 hover:green-gradient-text">
                    Apply to a Cohort
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:green-gradient-text">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:green-gradient-text">
                    Agreements
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:green-gradient-text">
                    Research Resources
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:green-gradient-text">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-lg font-medium text-gray-900">Innovation</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="text-gray-600 hover:green-gradient-text">
                    Launch an RIKESD Chapter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:green-gradient-text">
                    Launch a Research Fund
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:green-gradient-text">
                    Partner with RIKESD
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:green-gradient-text">
                    Economic Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:green-gradient-text">
                    Corporate Partnerships
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 mt-12 border-t border-gray-200">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-gray-600">© Copyright 2023 RIKESD Inc. All rights reserved.</p>
              <div className="flex gap-6">
                <Link href="#" className="text-sm text-gray-600 hover:green-gradient-text">
                  Terms of Use
                </Link>
                <Link href="#" className="text-sm text-gray-600 hover:green-gradient-text">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-sm text-gray-600 hover:green-gradient-text">
                  Code of Conduct
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
