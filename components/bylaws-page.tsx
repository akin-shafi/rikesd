"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  AlertTriangle,
  Shield,
  UserX,
  ChevronDownIcon,
  ChevronRightIcon,
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
    queryAuthority?: string;
    communicationChannels?: Array<{
      level: string;
      method: string;
      documentation: string;
      timeframe: string;
    }>;
    penalties?: Array<{
      infraction: string;
      examples: string;
      penalty: string;
      authority: string;
    }>;
    appealProcess?: string;
    rehabilitation?: string;
    categories?: Array<{
      category: string;
      violations: string[];
    }>;
    reportingMechanism?: string;
    investigation?: string;
    voluntaryResignation?: {
      process: string;
      requirements: string[];
      benefits: string;
    };
    involuntaryDisengagement?: {
      grounds: Array<{
        reason: string;
        definition: string;
        examples: string;
        process: string;
      }>;
      dueProcess: string;
    };
    transitionProcedures?: {
      immediate: string[];
      ongoing: string[];
    };
    reengagement?: string;
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
        "RikeSD is a nonprofit organization dedicated to advancing Research for Impact, Knowledge-based, and Sustainable Development across Africa through innovative projects such as Skillnovate, KEIA, Rike Marketplace, AroFarmer, and Patch Africa.",
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
        "Grants and partnerships (e.g., with universities for Patch Africa) are pursued in alignment with the mission",
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
          name: "Patch Africa",
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
  {
    id: "query-penalty",
    title: "Query and Penalty",
    icon: AlertTriangle,
    color: "bg-amber-50 border-amber-200 text-amber-800",
    content: {
      queryAuthority:
        "The Executive Director, Board Chairpersons, and designated supervisors have the authority to issue queries for misconduct, non-compliance, or performance issues",
      communicationChannels: [
        {
          level: "Level 1 - Verbal Warning",
          method: "Direct verbal communication",
          documentation: "Informal record kept by supervisor",
          timeframe: "Immediate for minor infractions",
        },
        {
          level: "Level 2 - Written Notice",
          method: "Formal written notice via email or official letter",
          documentation: "Documented in personnel file",
          timeframe: "Within 48 hours of incident",
        },
        {
          level: "Level 3 - Official Query",
          method: "Official letter requiring written response",
          documentation: "Formal documentation with response deadline",
          timeframe: "7-day response period required",
        },
        {
          level: "Level 4 - Final Warning",
          method: "Official letter with disciplinary committee involvement",
          documentation: "Board notification and formal hearing",
          timeframe: "14-day response and hearing period",
        },
      ],
      penalties: [
        {
          infraction: "Minor Policy Violations",
          examples: "Late attendance, minor procedural non-compliance",
          penalty: "Verbal warning, mandatory training, or written reprimand",
          authority: "Direct supervisor or department head",
        },
        {
          infraction: "Moderate Misconduct",
          examples:
            "Repeated policy violations, unprofessional conduct, minor financial irregularities",
          penalty:
            "Written warning, temporary suspension of privileges, mandatory counseling",
          authority: "Executive Director or Board Chairperson",
        },
        {
          infraction: "Serious Violations",
          examples:
            "Breach of confidentiality, significant financial misconduct, harassment",
          penalty:
            "Suspension without pay (1-30 days), demotion, or probationary period",
          authority: "Board of Governors with EMT consultation",
        },
        {
          infraction: "Gross Misconduct",
          examples:
            "Fraud, embezzlement, criminal activity, severe ethical violations",
          penalty:
            "Immediate termination, legal action, forfeiture of benefits",
          authority: "Board of Governors with two-thirds majority vote",
        },
      ],
      appealProcess:
        "All disciplinary actions may be appealed within 14 days to the Board of Governors. Appeals must be submitted in writing with supporting documentation. The Board will review and provide a final decision within 30 days.",
      rehabilitation:
        "RikeSD is committed to rehabilitation and improvement. First-time offenders for minor to moderate infractions may be offered counseling, additional training, or mentorship programs as alternatives to punitive measures.",
    },
  },
  {
    id: "offences",
    title: "Offences and Violations",
    icon: Shield,
    color: "bg-red-50 border-red-200 text-red-800",
    content: {
      categories: [
        {
          category: "Administrative Offences",
          violations: [
            "Chronic absenteeism from meetings without valid excuse",
            "Failure to submit required reports or documentation on time",
            "Non-compliance with organizational policies and procedures",
            "Unauthorized use of organizational resources or property",
            "Failure to maintain confidentiality of sensitive information",
            "Inadequate performance of assigned duties and responsibilities",
          ],
        },
        {
          category: "Financial Offences",
          violations: [
            "Misappropriation or embezzlement of organizational funds",
            "Unauthorized financial transactions or expenditures",
            "Failure to follow proper financial approval procedures",
            "Falsification of financial records or expense reports",
            "Conflict of interest in financial dealings without disclosure",
            "Improper handling of donor funds or grant money",
          ],
        },
        {
          category: "Ethical Violations",
          violations: [
            "Harassment, discrimination, or bullying of colleagues",
            "Breach of professional ethics or code of conduct",
            "Misrepresentation of organizational positions or policies",
            "Engaging in activities that damage organizational reputation",
            "Violation of data protection and privacy regulations",
            "Abuse of authority or position for personal gain",
          ],
        },
        {
          category: "Governance Violations",
          violations: [
            "Failure to declare conflicts of interest",
            "Voting on matters where personal interest exists",
            "Breach of board or committee confidentiality",
            "Undermining board decisions or organizational unity",
            "Failure to fulfill fiduciary duties to the organization",
            "Engaging in activities contrary to organizational mission",
          ],
        },
        {
          category: "Legal and Compliance Violations",
          violations: [
            "Violation of Nigerian laws or international regulations",
            "Non-compliance with tax obligations and reporting requirements",
            "Breach of employment laws or labor regulations",
            "Violation of intellectual property rights",
            "Non-adherence to health and safety regulations",
            "Failure to comply with regulatory body requirements",
          ],
        },
      ],
      reportingMechanism:
        "All suspected offences should be reported to the Executive Director, relevant Board Chairperson, or through the organization's confidential reporting system. Anonymous reporting is encouraged where appropriate.",
      investigation:
        "All reported offences will be investigated by a designated committee comprising members from relevant boards and EMT, ensuring impartiality and thoroughness in the process.",
    },
  },
  {
    id: "disengagement",
    title: "Member Disengagement",
    icon: UserX,
    color: "bg-orange-50 border-orange-200 text-orange-800",
    content: {
      voluntaryResignation: {
        process:
          "Members may voluntarily resign by submitting a written notice to their respective Board Chairperson or the Executive Director at least 30 days in advance.",
        requirements: [
          "Formal resignation letter stating reasons and effective date",
          "Completion of all pending assignments and handover of responsibilities",
          "Return of all organizational property, documents, and access credentials",
          "Settlement of any outstanding financial obligations to the organization",
          "Exit interview with HR or designated representative",
        ],
        benefits:
          "Resigning members in good standing may be eligible for references, alumni network access, and consideration for future re-engagement opportunities.",
      },
      involuntaryDisengagement: {
        grounds: [
          {
            reason: "Incompetency",
            definition:
              "Consistent inability to perform assigned duties despite adequate training and support",
            examples:
              "Repeated failure to meet performance standards, inability to adapt to role requirements, lack of necessary skills or qualifications",
            process:
              "Performance improvement plan (90 days), regular monitoring, final evaluation, and decision by relevant Board",
          },
          {
            reason: "Misconduct",
            definition:
              "Behavior that violates organizational policies, ethics, or professional standards",
            examples:
              "Harassment, fraud, breach of confidentiality, insubordination, violation of code of conduct",
            process:
              "Immediate investigation, disciplinary hearing, opportunity for defense, decision by Board of Governors with two-thirds majority",
          },
          {
            reason: "Nonchalance/Negligence",
            definition:
              "Persistent indifference to duties, responsibilities, or organizational welfare",
            examples:
              "Chronic absenteeism, failure to respond to communications, neglect of assigned tasks, disregard for deadlines",
            process:
              "Written warnings, performance monitoring (60 days), final review, and decision by relevant Board or EMT",
          },
        ],
        dueProcess:
          "All involuntary disengagement procedures must include proper notice, opportunity to respond, right to representation, and appeal process as outlined in the Query and Penalty section.",
      },
      transitionProcedures: {
        immediate: [
          "Revocation of all access credentials and organizational accounts",
          "Collection of organizational property, documents, and confidential materials",
          "Notification to relevant stakeholders and team members",
          "Transfer of ongoing responsibilities to designated successors",
        ],
        ongoing: [
          "Final settlement of compensation, benefits, and outstanding obligations",
          "Completion of exit documentation and legal requirements",
          "Confidentiality and non-disclosure agreement enforcement",
          "Alumni or former member status determination (for voluntary resignations)",
        ],
      },
      reengagement:
        "Former members who left in good standing may be considered for future positions subject to organizational needs, available positions, and standard recruitment processes. A cooling-off period of 12 months applies for involuntary disengagement cases.",
    },
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function BylawsPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const [expandedAccordions, setExpandedAccordions] = useState<
    Record<string, boolean>
  >({});

  const toggleAccordion = (key: string) => {
    setExpandedAccordions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    const mainContent = document.getElementById("bylaws-main-content");
    if (mainContent) {
      mainContent.scrollTop = 0;
    }
  };

  const renderContent = (sectionId: string) => {
    const section = bylawsSections.find((s) => s.id === sectionId);
    if (!section) return null;
    return <BylawsSectionContent section={section} />;
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">
                  RikeSD Bylaws
                </h1>
                <p className="text-sm text-slate-500">
                  Effective September 25, 2025 • Comprehensive governance
                  framework
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8 h-[calc(100vh-6rem)]">
          {/* Desktop Sidebar Navigation - Fixed height with scroll */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <div className="h-full flex flex-col space-y-6">
              {/* Document Info Card */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex-shrink-0">
                <div className="px-6 py-4 bg-slate-50 border-b border-slate-200">
                  <h3 className="font-semibold text-slate-900">
                    Document Information
                  </h3>
                </div>
                <div className="p-6 space-y-3 text-sm">
                  <div className="flex justify-between items-start">
                    <span className="font-medium text-slate-600">Version:</span>
                    <span className="text-slate-900">1.0</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="font-medium text-slate-600">
                      Effective Date:
                    </span>
                    <span className="text-slate-900">September 25, 2025</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="font-medium text-slate-600">Status:</span>
                    <Badge variant="secondary" className="text-xs">
                      Active
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Navigation - Scrollable */}
              <nav className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex-1 flex flex-col">
                <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex-shrink-0">
                  <h3 className="font-semibold text-slate-900">
                    Table of Contents
                  </h3>
                </div>
                <div className="p-2 overflow-y-auto flex-1">
                  {bylawsSections.map((section) => {
                    const Icon = section.icon;
                    return (
                      <button
                        key={section.id}
                        onClick={() => handleSectionChange(section.id)}
                        className={classNames(
                          "w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200",
                          activeSection === section.id
                            ? "bg-green-100 text-green-900 border border-green-200 shadow-sm"
                            : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                        )}
                      >
                        <Icon
                          className={classNames(
                            "w-5 h-5 flex-shrink-0",
                            activeSection === section.id
                              ? "text-green-600"
                              : "text-slate-400"
                          )}
                        />
                        <span className="font-medium text-sm">
                          {section.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </nav>
            </div>
          </aside>

          {/* Mobile Accordion Navigation */}
          <div className="lg:hidden space-y-4">
            {bylawsSections.map((section) => {
              const Icon = section.icon;
              const isExpanded = expandedAccordions[section.id];
              return (
                <div
                  key={section.id}
                  className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(section.id)}
                    className="w-full flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className="w-5 h-5 text-slate-400" />
                      <span className="font-semibold text-slate-900">
                        {section.title}
                      </span>
                    </div>
                    {isExpanded ? (
                      <ChevronDownIcon className="w-5 h-5 text-slate-500" />
                    ) : (
                      <ChevronRightIcon className="w-5 h-5 text-slate-500" />
                    )}
                  </button>
                  {isExpanded && (
                    <div className="px-6 pb-6 border-t border-slate-100">
                      <div className="pt-6">
                        <BylawsSectionContent section={section} />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop Main Content - Fixed height with scroll */}
          <main
            id="bylaws-main-content"
            className="hidden lg:block flex-1 min-w-0 overflow-y-auto"
          >
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm h-full">
              <div className="px-8 py-6 border-b border-slate-200 flex-shrink-0">
                {(() => {
                  const currentSection = bylawsSections.find(
                    (s) => s.id === activeSection
                  );
                  const Icon = currentSection?.icon || BookOpen;
                  return (
                    <div className="flex items-center space-x-3">
                      <Icon className="w-6 h-6 text-green-600" />
                      <h2 className="text-2xl font-bold text-slate-900">
                        {currentSection?.title}
                      </h2>
                    </div>
                  );
                })()}
              </div>
              <div className="px-8 py-8">{renderContent(activeSection)}</div>
            </div>
          </main>
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

    case "query-penalty":
      return (
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed mb-6">
            This section establishes clear procedures for addressing misconduct,
            ensuring transparency, fairness, and due process in all disciplinary
            matters within RikeSD.
          </p>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Query Authority
            </h3>
            <Card className="border border-amber-200 bg-amber-50">
              <CardContent className="p-4">
                <p className="text-amber-800 text-sm leading-relaxed">
                  {section.content.queryAuthority}
                </p>
              </CardContent>
            </Card>
          </div>

          <Separator />

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Communication Channels
            </h3>
            <div className="grid gap-4">
              {section.content.communicationChannels?.map((channel, index) => (
                <Card key={index} className="border border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-amber-100 rounded-lg flex-shrink-0">
                        <MessageSquare className="h-5 w-5 text-amber-700" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {channel.level}
                        </h4>
                        <div className="space-y-1 text-sm text-gray-700">
                          <p>
                            <strong>Method:</strong> {channel.method}
                          </p>
                          <p>
                            <strong>Documentation:</strong>{" "}
                            {channel.documentation}
                          </p>
                          <p>
                            <strong>Timeframe:</strong> {channel.timeframe}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Disciplinary Measures
            </h3>
            <div className="grid gap-4">
              {section.content.penalties?.map((penalty, index) => (
                <Card key={index} className="border border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-red-100 rounded-lg flex-shrink-0">
                        <AlertTriangle className="h-5 w-5 text-red-700" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {penalty.infraction}
                        </h4>
                        <div className="space-y-2 text-sm text-gray-700">
                          <p>
                            <strong>Examples:</strong> {penalty.examples}
                          </p>
                          <p>
                            <strong>Penalty:</strong> {penalty.penalty}
                          </p>
                          <p>
                            <strong>Authority:</strong> {penalty.authority}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Separator />

          <div className="grid gap-4">
            <Card className="border border-blue-200 bg-blue-50">
              <CardContent className="p-4">
                <h4 className="font-semibold text-blue-900 mb-2">
                  Appeal Process
                </h4>
                <p className="text-blue-800 text-sm leading-relaxed">
                  {section.content.appealProcess}
                </p>
              </CardContent>
            </Card>
            <Card className="border border-green-200 bg-green-50">
              <CardContent className="p-4">
                <h4 className="font-semibold text-green-900 mb-2">
                  Rehabilitation & Support
                </h4>
                <p className="text-green-800 text-sm leading-relaxed">
                  {section.content.rehabilitation}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      );

    case "offences":
      return (
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed mb-6">
            This section defines specific offences and violations that may
            warrant disciplinary action, ensuring clear understanding of
            prohibited conduct and maintaining organizational integrity.
          </p>

          <div className="space-y-6">
            {section.content.categories?.map((category, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {category.category}
                </h3>
                <Card className="border border-red-200">
                  <CardContent className="p-4">
                    <ul className="space-y-2">
                      {category.violations.map((violation, vIndex) => (
                        <li
                          key={vIndex}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{violation}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <Separator />

          <div className="grid gap-4">
            <Card className="border border-blue-200 bg-blue-50">
              <CardContent className="p-4">
                <h4 className="font-semibold text-blue-900 mb-2">
                  Reporting Mechanism
                </h4>
                <p className="text-blue-800 text-sm leading-relaxed">
                  {section.content.reportingMechanism}
                </p>
              </CardContent>
            </Card>
            <Card className="border border-green-200 bg-green-50">
              <CardContent className="p-4">
                <h4 className="font-semibold text-green-900 mb-2">
                  Investigation Process
                </h4>
                <p className="text-green-800 text-sm leading-relaxed">
                  {section.content.investigation}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      );

    case "disengagement":
      return (
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed mb-6">
            This section outlines the procedures for both voluntary resignation
            and involuntary disengagement of members, ensuring fair treatment
            and organizational continuity.
          </p>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Voluntary Resignation
            </h3>
            <Card className="border border-green-200 bg-green-50 mb-4">
              <CardContent className="p-4">
                <h4 className="font-semibold text-green-900 mb-2">
                  Resignation Process
                </h4>
                <p className="text-green-800 text-sm leading-relaxed">
                  {section.content.voluntaryResignation?.process}
                </p>
              </CardContent>
            </Card>

            <div className="grid gap-4 mb-4">
              <Card className="border border-gray-200">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Requirements
                  </h4>
                  <ul className="space-y-2">
                    {section.content.voluntaryResignation?.requirements.map(
                      (req, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{req}</span>
                        </li>
                      )
                    )}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border border-blue-200 bg-blue-50">
              <CardContent className="p-4">
                <h4 className="font-semibold text-blue-900 mb-2">
                  Benefits for Good Standing
                </h4>
                <p className="text-blue-800 text-sm leading-relaxed">
                  {section.content.voluntaryResignation?.benefits}
                </p>
              </CardContent>
            </Card>
          </div>

          <Separator />

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Involuntary Disengagement
            </h3>
            <div className="space-y-4">
              {section.content.involuntaryDisengagement?.grounds.map(
                (ground, index) => (
                  <Card key={index} className="border border-orange-200">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-orange-100 rounded-lg flex-shrink-0">
                          <UserX className="h-5 w-5 text-orange-700" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {ground.reason}
                          </h4>
                          <div className="space-y-2 text-sm text-gray-700">
                            <p>
                              <strong>Definition:</strong> {ground.definition}
                            </p>
                            <p>
                              <strong>Examples:</strong> {ground.examples}
                            </p>
                            <p>
                              <strong>Process:</strong> {ground.process}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              )}
            </div>

            <Card className="border border-amber-200 bg-amber-50 mt-4">
              <CardContent className="p-4">
                <h4 className="font-semibold text-amber-900 mb-2">
                  Due Process
                </h4>
                <p className="text-amber-800 text-sm leading-relaxed">
                  {section.content.involuntaryDisengagement?.dueProcess}
                </p>
              </CardContent>
            </Card>
          </div>

          <Separator />

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Transition Procedures
            </h3>
            <div className="grid gap-4">
              <Card className="border border-gray-200">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Immediate Actions
                  </h4>
                  <ul className="space-y-2">
                    {section.content.transitionProcedures?.immediate.map(
                      (action, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{action}</span>
                        </li>
                      )
                    )}
                  </ul>
                </CardContent>
              </Card>
              <Card className="border border-gray-200">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Ongoing Procedures
                  </h4>
                  <ul className="space-y-2">
                    {section.content.transitionProcedures?.ongoing.map(
                      (procedure, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{procedure}</span>
                        </li>
                      )
                    )}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <Separator />

          <Card className="border border-green-200 bg-green-50">
            <CardContent className="p-4">
              <h4 className="font-semibold text-green-900 mb-2">
                Re-engagement Policy
              </h4>
              <p className="text-green-800 text-sm leading-relaxed">
                {section.content.reengagement}
              </p>
            </CardContent>
          </Card>
        </div>
      );

    default:
      return null;
  }
}
