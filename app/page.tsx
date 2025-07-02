import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Award, Target, Eye, Heart } from "lucide-react";
import EventTracker from "@/components/event-tracker";
import EventCard from "@/components/event-card";
import FaqAccordion from "@/components/faq-accordion";
import EcosystemSection from "@/components/ecosystem-section";
import AchievementCard from "@/components/achievement-card";
import ProgramCard from "@/components/program-card";
import ProjectShowcase from "@/components/project-showcase";
import TestimonialsSection from "@/components/testimonials-section";
import MetricsSection from "@/components/metrics-section";
import FeaturedEventBanner from "@/components/featured-event-banner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const features = [
    {
      icon: Target,
      title: "Strategic Research",
      description:
        "Conducting cutting-edge research that addresses real-world challenges and drives sustainable development.",
    },
    {
      icon: Users,
      title: "Collaborative Networks",
      description:
        "Building partnerships with institutions, governments, and communities to amplify research impact.",
    },
    {
      icon: Award,
      title: "Innovation Excellence",
      description:
        "Fostering innovation through interdisciplinary approaches and emerging technology integration.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Featured Event Banner */}
      <FeaturedEventBanner />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-lime-50/30 to-yellow-50/50"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 display-text">
              Advancing Research for{" "}
              <span className="text-green-600">Sustainable Development</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              RIKESD is a leading research institute dedicated to generating
              knowledge, fostering innovation, and building partnerships that
              drive sustainable development across Africa and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
              >
                Explore Our Research
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 bg-transparent"
              >
                Join Our Network
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Stats Section */}
      <MetricsSection />

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 display-text">
              Our Core Focus Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We drive impact through strategic research, collaborative
              partnerships, and innovative solutions that address the most
              pressing challenges of our time.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-green-100"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                    <feature.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-green-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900 display-text">
                    Our Mission
                  </h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To advance knowledge and foster sustainable development
                  through innovative research, strategic partnerships, and
                  evidence-based solutions that address critical challenges
                  facing communities across Africa and the global South.
                </p>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <Eye className="h-8 w-8 text-green-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900 display-text">
                    Our Vision
                  </h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be a leading research institute that transforms communities
                  through knowledge creation, innovation, and sustainable
                  development practices that create lasting positive impact.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center">
                <Heart className="h-24 w-24 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-content-alt">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold">
                <span className="green-gradient-text">
                  A Lifetime of Impact
                </span>
                <br />
                Starts Here
              </h2>
              <p className="mb-8 text-xl text-gray-600">
                Whether you just have a research idea, are developing a
                prototype, or already have an innovation with early adoption, we
                can help. Since 2015, our highly-structured programs have given
                researchers clarity on their next steps, critical feedback on
                their innovations, and a global network to support their growth.
              </p>
              <Link
                href="#programs"
                className="px-6 py-3 text-white transition-colors bg-green-500 rounded-md hover:bg-green-600"
              >
                Explore Our Programs
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <AchievementCard
                value={500}
                label="Research Projects"
                suffix="+"
              />
              <AchievementCard
                value={15}
                label="Research Funding"
                prefix="$"
                suffix="M+"
              />
              <AchievementCard
                value={25}
                label="Partner Countries"
                suffix="+"
              />
              <AchievementCard value={100} label="Publications" suffix="+" />
              <AchievementCard
                value={1200}
                label="Mentors & Advisors"
                suffix="+"
              />
              <AchievementCard
                value={50}
                label="Estimated Impact Value"
                prefix="$"
                suffix="M"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Pathways Section */}
      <section id="programs" className="py-20 bg-content">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">Our Research Pathways</h2>
            <p className="text-xl text-gray-600">
              We provide structured support at every stage of the research and
              innovation journey
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <ProgramCard
              title="RIKESD Core Program"
              description="It all starts with our renowned Core Program, which guides researchers at the idea and pre-development stages to reach the milestones needed for funding and sustained growth."
              icon="core-program"
              showArrow={true}
            />
            <ProgramCard
              title="Innovation Lab"
              description="After completing the Core Program, researchers get access to a series of additional resources and advisory programs to guide them towards their next major innovation milestones."
              icon="innovation-lab"
              showArrow={true}
            />
            <ProgramCard
              title="Enterprise Network"
              description="When ready, researchers get featured at events and connected to a diverse pool of investors and industry partners actively participating in funding and commercialization opportunities."
              icon="enterprise-network"
            />
          </div>
        </div>
      </section>

      {/* Floating Event Tracker */}
      <EventTracker />

      {/* Project Showcase Section */}
      <ProjectShowcase />

      {/* Ecosystem Section */}
      <EcosystemSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Events Section */}
      <section id="events" className="py-20 bg-content">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold">
                Join a{" "}
                <span className="green-gradient-text">Free Research</span> Event
              </h2>
              <p className="mb-8 text-xl text-gray-600">
                We exist to help researchers and innovators, so we run nearly
                100 free events per year where you can meet local experts,
                network with investors, learn from advisors, and connect with
                collaborators. Our flagship S2B (School to Business) sessions
                happen every first Saturday of the month, bridging the gap
                between academic research and business applications.
              </p>
              <div className="relative h-[300px] rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="RIKESD event"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-lg font-medium">
                    100% free events to get direction for your research
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <EventCard
                title="S2B#43: AroFarmer Project BetaDay - Stakeholder Engagement"
                date="Jul 5, 2025"
                time="09:30am WAT"
                featured={true}
              />
              <EventCard
                title="S2B Monthly Session - School to Business"
                date="First Saturday Monthly"
                time="09:30am WAT"
                featured={false}
              />
              <EventCard
                title="Scaling Research Through Partnerships in Nigeria"
                date="Jul 12, 2025"
                time="05:00pm WAT"
              />
              <EventCard
                title="RIKESD Online Information Session"
                date="Various Times"
                time="Various Times"
              />
              <EventCard
                title="Researcher Networking: Find a Collaboration Partner"
                date="Jul 19, 2025"
                time="01:00pm WAT"
              />
              <div className="pt-4">
                <Link
                  href="/events"
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

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-content">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">Why Choose RIKESD</h2>
            <p className="text-xl text-gray-600">
              We provide comprehensive support to researchers and innovators at
              every stage of their journey.
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
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Knowledge Resources
              </h3>
              <p className="text-gray-600">
                Access to cutting-edge research, methodologies, and best
                practices in your field.
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
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Funding Opportunities
              </h3>
              <p className="text-gray-600">
                Connect with investors and funding sources specifically
                interested in research-based innovations.
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
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Expert Community
              </h3>
              <p className="text-gray-600">
                Join a network of researchers, innovators, and industry experts
                to collaborate and share insights.
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
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Global Recognition
              </h3>
              <p className="text-gray-600">
                Showcase your work on an international platform and gain
                visibility for your innovations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-content-alt">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">
              Frequently Asked{" "}
              <span className="green-gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about RIKESD programs and
              opportunities.
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
      <section id="contact" className="py-20 bg-content">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold">
                Have questions about research, innovation, or development?
              </h2>
              <p className="mb-8 text-xl text-gray-600">
                Our team is available 24/7 to assist you with any inquiries
                related to our programs, partnerships, or how you can get
                involved.
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
                    <h3 className="text-lg font-medium text-gray-900">
                      Our Location
                    </h3>
                    <p className="mt-1 text-gray-600">
                      123 Logan Street, Abuja, Nigeria
                    </p>
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
                    <p className="mt-1 text-gray-600">
                      +2348066301780, +2347065174560
                    </p>
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
                    <p className="mt-1 text-gray-600">contact@rikesd.org</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-8 bg-content-alt rounded-xl">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-green-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Let's Chat!
                </h3>
                <p className="text-gray-600 mb-6">
                  Get instant answers to your questions. Chat with our team on
                  WhatsApp for quick support and information about our programs.
                </p>
              </div>
              <a
                href="https://wa.me/2348066301780?text=Hello%20RIKESD%20team!%20I%20would%20like%20to%20know%20more%20about%20your%20programs."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
