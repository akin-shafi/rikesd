"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Users,
  DollarSign,
  User,
  Scale,
  Cpu,
  Calculator,
  MessageSquare,
  UserCheck,
  Package,
  Camera,
  Building,
  Calendar,
  Award,
  Target,
  BookOpen,
  Gavel,
} from "lucide-react";

interface BylawsSection {
  id: string;
  title: string;
  icon: any;
  color: string;
  content: {
    name?: string;
    purpose?: string;
    status?: string;
    boards?: Array<{
      name: string;
      members: string;
      role: string;
      composition: string;
    }>;
    roles?: Array<{
      title: string;
      icon: any;
      duties: string;
    }>;
    terms?: string;
    meetings?: Array<{
      type: string;
      frequency: string;
      format?: string;
      participants?: string;
      purpose: string;
      quorum?: string;
      notice?: string;
    }>;
    officers?: Array<{
      title: string;
      duties: string;
      term: string;
    }>;
    removal?: string;
    principles?: string;
    budgeting?: string;
    audits?: string;
    expenditures?: string;
    fundraising?: string;
    programs?: Array<{
      name: string;
      description: string;
    }>;
    governance?: string;
    laws?: string;
    records?: string;
    dataProtection?: string;
    indemnification?: string;
  };
}

const bylawsSections: BylawsSection[] = [
  {
    id: "overview",
    title: "Organization Overview",
    icon: Building,
    color: "bg-green-50 border-green-200 text-green-800",
    content: {
      name: "RikeSD",
      purpose:
        "RikeSD is a nonprofit organization dedicated to advancing Research for Impact, Knowledge-based, and Sustainable Development across Africa through innovative projects such as Skillnovate, KEIA, Rike Marketplace, AroFarmer, and Pach Africa.",
      status:
        "Nonprofit entity, compliant with the Nigerian Companies and Allied Matters Act, 2020",
    },
  },
  {
    id: "governance",
    title: "Governance Structure",
    icon: Users,
    color: "bg-emerald-50 border-emerald-200 text-emerald-800",
    content: {
      boards: [
        {
          name: "Board of Governors",
          members: "5–9 members",
          role: "Provides overarching strategic direction, approves major policies, and ensures mission alignment",
          composition: "Professors and industry leaders",
        },
        {
          name: "Board of Experts",
          members: "3–7 members",
          role: "Offers specialized expertise in research, technology, and sustainable development",
          composition: "Members with relevant academic or industry credentials",
        },
        {
          name: "Board of Finance",
          members: "3–5 members",
          role: "Oversees financial strategy, budgeting, and audits",
          composition: "Members with financial expertise",
        },
        {
          name: "Board of Advisors",
          members: "5–10 members",
          role: "Provides advisory input on projects and partnerships",
          composition: "Diverse pan-African representation",
        },
      ],
    },
  },
  {
    id: "emt",
    title: "Executive Management Team",
    icon: UserCheck,
    color: "bg-green-50 border-green-200 text-green-800",
    content: {
      roles: [
        {
          title: "Executive Director",
          icon: User,
          duties:
            "Leads operations and reports to the Board of Governors. Manages daily operations, implements Board policies, and coordinates EMT activities.",
        },
        {
          title: "Legal Adviser",
          icon: Scale,
          duties:
            "Ensures compliance with legal and regulatory requirements. Maintains legal documentation and advises on regulatory matters.",
        },
        {
          title: "Technology Lead",
          icon: Cpu,
          duties:
            "Oversees technical development for platforms like Skillnovate and KEIA. Manages technology strategy and implementation.",
        },
        {
          title: "Financial Adviser",
          icon: Calculator,
          duties:
            "Manages financial operations and reporting. Prepares budgets and oversees financial compliance.",
        },
        {
          title: "Communication Lead",
          icon: MessageSquare,
          duties:
            "Handles internal and external communications. Manages stakeholder engagement and organizational messaging.",
        },
        {
          title: "Head of Human Resources",
          icon: UserCheck,
          duties:
            "Manages recruitment, training, and team welfare. Oversees personnel policies and employee development.",
        },
        {
          title: "Product Lead",
          icon: Package,
          duties:
            "Drives project development and execution. Chairs the Program Committee and monitors project progress.",
        },
        {
          title: "Media Lead",
          icon: Camera,
          duties:
            "Manages media relations and public visibility. Handles press relations and brand representation.",
        },
      ],
    },
  },
  {
    id: "operations",
    title: "Board Operations & Meetings",
    icon: Calendar,
    color: "bg-lime-50 border-lime-200 text-lime-800",
    content: {
      terms:
        "Board members serve 3-year terms, renewable once, subject to a majority vote",
      meetings: [
        {
          type: "S2B (Strategy to Business) Session",
          frequency: "First Saturday of each month",
          format: "Virtual",
          participants: "All Boards and EMT",
          purpose: "Align strategy with operations",
        },
        {
          type: "Board Meetings",
          frequency: "Quarterly",
          format: "Virtual or in-person",
          quorum: "50% attendance",
          notice: "7 days for regular meetings, 48 hours for emergency",
          purpose: "Strategic decision making",
        },
        {
          type: "EMT Meetings",
          frequency: "Second Saturday of each month",
          purpose: "Coordinate operations",
          quorum: "50% of EMT members",
        },
        {
          type: "Annual General Meeting",
          frequency: "Annually in Q4",
          purpose: "Review performance and set strategic goals",
          notice: "30 days",
        },
      ],
    },
  },
  {
    id: "officers",
    title: "Officer Roles & Duties",
    icon: Award,
    color: "bg-teal-50 border-teal-200 text-teal-800",
    content: {
      officers: [
        {
          title: "Chairperson (Board of Governors)",
          duties:
            "Facilitates meetings, represents RikeSD externally, and ensures strategic alignment",
          term: "2-year terms, renewable once",
        },
        {
          title: "Executive Director (EMT)",
          duties:
            "Manages daily operations, implements Board policies, and coordinates EMT activities",
          term: "2-year terms, renewable once",
        },
        {
          title: "Treasurer (Board of Finance)",
          duties: "Oversees financial records, budgets, and audits",
          term: "2-year terms, renewable once",
        },
        {
          title: "Secretary (Board of Governors)",
          duties:
            "Maintains records, distributes minutes, and manages communications",
          term: "2-year terms, renewable once",
        },
      ],
      removal:
        "Officers may be removed by a two-thirds vote of their respective Board or EMT for cause",
    },
  },
  {
    id: "financial",
    title: "Financial Management",
    icon: DollarSign,
    color: "bg-emerald-50 border-emerald-200 text-emerald-800",
    content: {
      principles:
        "All funds, including grants, donations, and project revenues (e.g., Rike Marketplace), are used solely for mission-driven activities",
      budgeting:
        "The Board of Finance approves annual budgets, prepared by the Financial Adviser",
      audits:
        "Annual external audits are conducted, with reports submitted to the Board of Governors",
      expenditures:
        "Major expenditures (>5 million NGN) require Board of Governors' approval",
      fundraising:
        "Grants and partnerships (e.g., with universities for Pach Africa) are pursued in alignment with the mission",
    },
  },
  {
    id: "programs",
    title: "Programs & Activities",
    icon: Target,
    color: "bg-teal-50 border-teal-200 text-teal-800",
    content: {
      programs: [
        {
          name: "Skillnovate",
          description: "Upskilling platform with online/physical training",
        },
        {
          name: "KEIA",
          description: "Incubation and acceleration for startups",
        },
        {
          name: "Rike Marketplace",
          description: "Knowledge-as-a-Service for research commercialization",
        },
        {
          name: "AroFarmer",
          description: "Urban agriculture platform",
        },
        {
          name: "Pach Africa",
          description: "Carbon emission reduction and credit access",
        },
      ],
      governance:
        "New programs require Board of Governors' approval. Termination follows impact assessment by the Program Committee",
    },
  },
  {
    id: "compliance",
    title: "Compliance & Legal",
    icon: Gavel,
    color: "bg-green-50 border-green-200 text-green-800",
    content: {
      laws: "RikeSD complies with Nigerian laws (e.g., tax regulations, anti-corruption laws) and international standards",
      records:
        "Minutes, financial reports, and project documentation are maintained for at least 7 years",
      dataProtection:
        "Platforms (e.g., Skillnovate, Rike Marketplace) adhere to data privacy laws (e.g., Nigeria Data Protection Regulation)",
      indemnification:
        "Board and EMT members are indemnified against liabilities for actions taken in good faith, excluding gross negligence or willful misconduct",
    },
  },
];

export default function BylawsPage() {
  const [activeSection, setActiveSection] = useState("overview");

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    // Scroll the main content area to top
    const mainContent = document.getElementById("bylaws-main-content");
    if (mainContent) {
      mainContent.scrollTop = 0;
    }
  };

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 bg-green-600 rounded-xl">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 text-balance">
                RikeSD Bylaws
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                Comprehensive governance framework and organizational structure
              </p>
            </div>
          </div>
          <Badge variant="secondary" className="text-sm">
            Effective September 25, 2025
          </Badge>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 ">
          {/* Desktop Sidebar Navigation - Fixed height with scroll */}
          <div className="hidden lg:block lg:w-80 lg:flex-shrink-0">
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm h-full flex flex-col">
              <CardHeader className="pb-4 flex-shrink-0">
                <CardTitle className="text-lg font-semibold text-gray-900">
                  Document Sections
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 overflow-y-auto flex-1">
                {bylawsSections.map((section) => {
                  const IconComponent = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => handleSectionChange(section.id)}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all duration-200 ${
                        activeSection === section.id
                          ? "bg-green-50 border-green-200 text-green-800 shadow-sm"
                          : "hover:bg-gray-50 text-gray-700"
                      }`}
                    >
                      <IconComponent className="h-5 w-5 flex-shrink-0" />
                      <span className="font-medium text-sm">
                        {section.title}
                      </span>
                    </button>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Mobile Accordion */}
          <div className="lg:hidden">
            <Accordion type="single" collapsible className="space-y-4">
              {bylawsSections.map((section) => {
                const IconComponent = section.icon;
                return (
                  <AccordionItem
                    key={section.id}
                    value={section.id}
                    className="border-0"
                  >
                    <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${section.color}`}>
                            <IconComponent className="h-5 w-5" />
                          </div>
                          <span className="font-semibold text-left">
                            {section.title}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6">
                        <BylawsSectionContent section={section} />
                      </AccordionContent>
                    </Card>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>

          {/* Desktop Content - Fixed height with scroll */}
          <div
            id="bylaws-main-content"
            className="hidden lg:block lg:flex-1 overflow-y-auto"
          >
            <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm h-full">
              <CardContent className="p-8">
                {bylawsSections.map((section) => {
                  if (section.id !== activeSection) return null;
                  const IconComponent = section.icon;
                  return (
                    <div key={section.id}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`p-3 rounded-xl ${section.color}`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">
                          {section.title}
                        </h2>
                      </div>
                      <BylawsSectionContent section={section} />
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

function BylawsSectionContent({ section }: { section: BylawsSection }) {
  switch (section.id) {
    case "overview":
      return (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Organization Name
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content.name}
            </p>
          </div>
          <Separator />
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Purpose & Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content.purpose}
            </p>
          </div>
          <Separator />
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Legal Status
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content.status}
            </p>
          </div>
        </div>
      );

    case "governance":
      return (
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed mb-6">
            RikeSD operates under a multi-board governance structure designed to
            provide comprehensive oversight and expertise across all
            organizational functions.
          </p>
          <div className="grid gap-6">
            {section.content.boards?.map((board, index) => (
              <Card key={index} className="border border-gray-200">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-gray-900">
                      {board.name}
                    </CardTitle>
                    <Badge variant="outline">{board.members}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3 leading-relaxed">
                    {board.role}
                  </p>
                  <div className="text-sm text-gray-600">
                    <strong>Composition:</strong> {board.composition}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      );

    case "emt":
      return (
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed mb-6">
            The Executive Management Team (EMT) is responsible for day-to-day
            operations and implementation of strategic directives from the
            boards.
          </p>
          <div className="grid gap-4">
            {section.content.roles?.map((role, index) => {
              const IconComponent = role.icon;
              return (
                <Card key={index} className="border border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-green-100 rounded-lg flex-shrink-0">
                        <IconComponent className="h-5 w-5 text-green-700" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {role.title}
                        </h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {role.duties}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      );

    case "operations":
      return (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Terms of Service
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {section.content.terms}
            </p>
          </div>
          <Separator />
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Meeting Structure
            </h3>
            <div className="grid gap-4">
              {section.content.meetings?.map((meeting, index) => (
                <Card key={index} className="border border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-green-600" />
                      <h4 className="font-semibold text-gray-900">
                        {meeting.type}
                      </h4>
                    </div>
                    <div className="space-y-1 text-sm text-gray-700">
                      <p>
                        <strong>Frequency:</strong> {meeting.frequency}
                      </p>
                      {meeting.format && (
                        <p>
                          <strong>Format:</strong> {meeting.format}
                        </p>
                      )}
                      {meeting.participants && (
                        <p>
                          <strong>Participants:</strong> {meeting.participants}
                        </p>
                      )}
                      {meeting.quorum && (
                        <p>
                          <strong>Quorum:</strong> {meeting.quorum}
                        </p>
                      )}
                      {meeting.notice && (
                        <p>
                          <strong>Notice Required:</strong> {meeting.notice}
                        </p>
                      )}
                      <p>
                        <strong>Purpose:</strong> {meeting.purpose}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      );

    case "officers":
      return (
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed mb-6">
            Officers are elected by their respective Boards or EMT and serve
            specific terms with defined responsibilities.
          </p>
          <div className="grid gap-4">
            {section.content.officers?.map((officer, index) => (
              <Card key={index} className="border border-gray-200">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-teal-100 rounded-lg flex-shrink-0">
                      <Award className="h-5 w-5 text-teal-700" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {officer.title}
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed mb-2">
                        {officer.duties}
                      </p>
                      <Badge variant="outline" className="text-xs">
                        {officer.term}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Separator />
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-900 mb-2">
              Officer Removal
            </h4>
            <p className="text-green-800 text-sm leading-relaxed">
              {section.content.removal}
            </p>
          </div>
        </div>
      );

    case "financial":
      return (
        <div className="space-y-6">
          <div className="grid gap-4">
            <Card className="border border-emerald-200 bg-emerald-50">
              <CardContent className="p-4">
                <h4 className="font-semibold text-emerald-900 mb-2">
                  Nonprofit Principles
                </h4>
                <p className="text-emerald-800 text-sm leading-relaxed">
                  {section.content.principles}
                </p>
              </CardContent>
            </Card>
            <Card className="border border-gray-200">
              <CardContent className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Budgeting Process
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {section.content.budgeting}
                </p>
              </CardContent>
            </Card>
            <Card className="border border-gray-200">
              <CardContent className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Annual Audits
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {section.content.audits}
                </p>
              </CardContent>
            </Card>
            <Card className="border border-gray-200">
              <CardContent className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Expenditure Approval
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {section.content.expenditures}
                </p>
              </CardContent>
            </Card>
            <Card className="border border-gray-200">
              <CardContent className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Fundraising Strategy
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {section.content.fundraising}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      );

    case "programs":
      return (
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed mb-6">
            RikeSD operates five core programs designed to advance sustainable
            development across Africa through innovation and knowledge sharing.
          </p>
          <div className="grid gap-4">
            {section.content.programs?.map((program, index) => (
              <Card key={index} className="border border-gray-200">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-teal-100 rounded-lg flex-shrink-0">
                      <Target className="h-5 w-5 text-teal-700" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {program.name}
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {program.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Separator />
          <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
            <h4 className="font-semibold text-teal-900 mb-2">
              Program Governance
            </h4>
            <p className="text-teal-800 text-sm leading-relaxed">
              {section.content.governance}
            </p>
          </div>
        </div>
      );

    case "compliance":
      return (
        <div className="space-y-6">
          <div className="grid gap-4">
            <Card className="border border-green-200 bg-green-50">
              <CardContent className="p-4">
                <h4 className="font-semibold text-green-900 mb-2">
                  Legal Compliance
                </h4>
                <p className="text-green-800 text-sm leading-relaxed">
                  {section.content.laws}
                </p>
              </CardContent>
            </Card>
            <Card className="border border-gray-200">
              <CardContent className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Record Keeping
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {section.content.records}
                </p>
              </CardContent>
            </Card>
            <Card className="border border-gray-200">
              <CardContent className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Data Protection
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {section.content.dataProtection}
                </p>
              </CardContent>
            </Card>
            <Card className="border border-gray-200">
              <CardContent className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Indemnification
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {section.content.indemnification}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      );

    default:
      return null;
  }
}
