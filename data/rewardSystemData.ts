export const rewardSystemData = {
  documentInfo: {
    policyTitle: "RikeSD Reward System Policy",
    version: "2.0",
    effectiveDate: "January 1, 2026",
    approvedBy: "[To be determined upon final approval – e.g., Board of Directors and EMT]",
    reviewFrequency: "Annually",
    contact: "Reward Committee, RikeSD (info@rikesd.org)",
  },
  introduction: {
    content:
      "RikeSD is a pan-African organization registered as a Limited by Guarantee company (NGO), committed to Research for Impact, Knowledge-based, and Sustainable Development. This Reward System Policy establishes a structured framework to recognize and compensate contributions from the Board of Directors and the Executive Management Team (EMT). As an NGO, RikeSD does not offer equity or dividends but provides fair compensation through Board Sitting Allowances, Board Fees, project milestone compensation, and performance-based bonuses aligned with RikeSD's mission.",
    projects: [
      {
        name: "Skillnovate",
        description: "An upskilling and reskilling platform.",
      },
      {
        name: "KEIA",
        description: "Knowledge Enterprise for Incubation and Acceleration.",
      },
      {
        name: "Rike Marketplace",
        description: "A Knowledge-as-a-Service platform.",
      },
      {
        name: "AroFarmer",
        description: "A tech-driven urban agriculture platform.",
      },
      {
        name: "Patch Africa",
        description: "A Pan-African Circular Hotspot for carbon emission reduction.",
      },
    ],
  },
  objectives: [
    "Promote fairness in recognizing contributions from the Board (strategic oversight by Professors and industry experts) and EMT (operational execution by professionals).",
    "Incentivize high-impact performance tied to RikeSD's projects and overall mission through transparent compensation structures.",
    "Enhance team productivity and retention through clear, measurable rewards and milestone-based compensation.",
    "Support sustainable growth by aligning stakeholder interests with organizational success within NGO compliance frameworks.",
  ],
  scope: {
    appliesTo: [
      "Board of Directors: Professors and industry experts providing strategic guidance, eligible for Board Sitting Allowances and Board Fees.",
      "Executive Management Team (EMT): Professionals responsible for project delivery and operations, eligible for project milestone compensation and performance bonuses.",
    ],
    exclusions:
      "This policy does not cover external contractors unless they are EMT members. All compensation structures comply with Limited by Guarantee company regulations.",
  },
  boardCompensation: {
    framework:
      "Board members receive compensation for their strategic oversight, meeting attendance, and contributions to RikeSD's mission. All compensation is structured to comply with NGO regulations and Limited by Guarantee company requirements.",
    sittingAllowances: {
      regularMeetings: "50,000 NGN per Board meeting attended (minimum 4 meetings annually).",
      specialMeetings: "75,000 NGN per special or emergency Board meeting.",
      committeeWork: "30,000 NGN per committee meeting (Audit, Finance, Governance, etc.).",
    },
    boardFees: {
      annualRetainer: "500,000–1,000,000 NGN annually based on role and responsibilities.",
      chairperson: "1,500,000 NGN annually for Board Chairperson.",
      viceChairperson: "1,000,000 NGN annually for Vice Chairperson.",
      treasurer: "1,200,000 NGN annually for Treasurer (additional financial oversight responsibilities).",
      secretary: "1,000,000 NGN annually for Board Secretary.",
      members: "500,000–750,000 NGN annually for general Board members.",
    },
    performanceBonus: {
      amount: "Up to 500,000 NGN annually for exceptional strategic contributions.",
      criteria: [
        "Securing major partnerships (e.g., university collaborations for Patch Africa)",
        "Obtaining grants exceeding 10 million NGN",
        "Facilitating investor connections or major funding rounds",
        "Strategic guidance leading to successful project launches",
      ],
    },
    recognition:
      "Inclusion in annual reports, public acknowledgment at RikeSD events, and certificates of appreciation.",
    disbursement:
      "Sitting allowances paid monthly; annual retainers paid quarterly; performance bonuses paid annually after review.",
  },
  emtCompensation: {
    framework:
      "EMT members receive competitive compensation through project milestone achievements, performance-based bonuses, and professional development opportunities. This structure recognizes operational excellence and project delivery success.",
    projectMilestoneCompensation: {
      structure: "Milestone-based payments tied to specific, measurable project achievements.",
      paymentRange: "250,000–2,000,000 NGN per major milestone depending on project complexity and impact.",
      projectChampionBonus:
        "Additional 500,000–1,500,000 NGN for EMT members leading specific projects to successful completion.",
    },
    milestonesByProject: {
      skillnovate: [
        { milestone: "Launching certification programs", compensation: "500,000 NGN" },
        { milestone: "Achieving 10,000 active users", compensation: "1,000,000 NGN" },
        { milestone: "80% completion rate in training sessions", compensation: "750,000 NGN" },
        { milestone: "Securing institutional partnerships (5+ universities)", compensation: "1,500,000 NGN" },
      ],
      keia: [
        { milestone: "Incubating 5 startups successfully", compensation: "1,000,000 NGN" },
        { milestone: "Securing investor funding (>2 million NGN per startup)", compensation: "1,500,000 NGN" },
        { milestone: "Marketplace access for 10 products", compensation: "750,000 NGN" },
        { milestone: "Generating 5 million NGN in startup revenue", compensation: "2,000,000 NGN" },
      ],
      rikeMarketplace: [
        { milestone: "Onboarding 100 research outputs", compensation: "500,000 NGN" },
        { milestone: "Generating 1 million NGN in sales", compensation: "1,000,000 NGN" },
        { milestone: "Integrating with AroFarmer Initiative", compensation: "750,000 NGN" },
        { milestone: "Establishing 20+ active vendor partnerships", compensation: "1,200,000 NGN" },
      ],
      arofarmer: [
        { milestone: "Matching 50 landowners with growers", compensation: "750,000 NGN" },
        { milestone: "Transforming 50 urban spaces", compensation: "1,000,000 NGN" },
        { milestone: "Generating 500,000 NGN in community income", compensation: "500,000 NGN" },
        { milestone: "Establishing 10 sustainable urban farms", compensation: "1,500,000 NGN" },
      ],
      patchAfrica: [
        { milestone: "Implementing Waste for Meal Program in 5 communities", compensation: "1,000,000 NGN" },
        { milestone: "Securing carbon credits for 10 universities", compensation: "1,500,000 NGN" },
        { milestone: "Reducing emissions by 20% in pilot areas", compensation: "1,200,000 NGN" },
        { milestone: "Establishing Pan-African partnerships (5+ countries)", compensation: "2,000,000 NGN" },
      ],
    },
    performanceBonuses: {
      annual: "500,000–2,000,000 NGN based on overall performance review.",
      criteria: [
        "Exceptional project delivery and timeline adherence",
        "Innovation and problem-solving contributions",
        "Team leadership and collaboration",
        "Revenue generation or cost savings achieved",
        "Stakeholder satisfaction ratings",
      ],
      quarterly: "100,000–500,000 NGN for outstanding quarterly performance.",
    },
    professionalDevelopment: {
      training: "Access to Skillnovate courses or external certifications (value up to 500,000 NGN annually).",
      conferences: "Sponsorship for relevant industry conferences and workshops (up to 300,000 NGN annually).",
      mentorship: "Participation in leadership development programs.",
    },
    recognition: {
      awards: '"Project Champion" awards at RikeSD annual events.',
      certificates: "Achievement certificates for milestone completions.",
      publicity: "Feature in organizational communications and success stories.",
    },
    disbursement:
      "Milestone compensation paid within 30 days of verified achievement; quarterly bonuses paid at end of each quarter; annual bonuses paid after annual review.",
  },
  vendorServices: {
    framework:
      "For EMT members who also provide vendor services (e.g., software development, consulting), compensation is structured through direct payment and potential performance-based bonuses.",
    paymentStructure: {
      standard: "100% cash payment for services rendered at agreed contract rates.",
      milestonePayments: "Payments tied to project milestones and deliverables.",
      example:
        "For a 19.2 million NGN project: Full payment in installments based on milestone completion (e.g., 30% upfront, 40% at mid-point, 30% at completion).",
    },
    performanceIncentives: {
      earlyCompletion: "Up to 10% bonus for projects completed ahead of schedule without quality compromise.",
      qualityExcellence: "Up to 15% bonus for exceptional quality exceeding specifications.",
      innovationBonus:
        "Additional compensation for innovative solutions that add significant value (negotiated per project).",
    },
    techPartnership: {
      description:
        "Long-term vendor partners may receive preferential rates, priority project assignments, and collaborative opportunities.",
      benefits: [
        "First consideration for new projects",
        "Collaborative input on project design and specifications",
        "Recognition as strategic technology partner",
        "Access to RikeSD resources and networks",
      ],
    },
  },
  review: {
    committee: "Composed of 2 Board members, 2 EMT representatives, and 1 neutral advisor. Meets quarterly.",
    annual:
      "Comprehensive assessment in Q4, including: Evaluation of contributions via self-assessments, peer reviews, and KPI data. Adjustments to compensation amounts, bonus criteria, or milestone definitions based on organizational performance and feedback.",
    quarterly:
      "Review of milestone achievements, performance metrics, and compensation disbursements. Open sessions for stakeholders to suggest improvements.",
    dispute: "Appeals handled by the Committee; final decisions by the Board. All disputes resolved within 30 days.",
    documentation:
      "All reviews recorded and shared transparently with stakeholders. Annual compensation reports published internally.",
  },
  implementation: [
    "Approval: Ratify policy via Board vote (requires 75% approval).",
    "Communication: Distribute to all Board and EMT members with detailed explanations.",
    "Pilot: Test with one project (e.g., KEIA) for 6 months starting Q1 2026.",
    "Training: Conduct workshops on milestone tracking and performance evaluation.",
    "Monitoring: Track effectiveness through surveys, financial reports, and performance metrics.",
    "Amendments: Changes require 75% Board approval and EMT consultation.",
  ],
  compliance:
    "All compensation structures comply with Limited by Guarantee company regulations and Nigerian NGO laws. No equity or dividend distributions are permitted. All payments must be properly documented and reported. Tax obligations are the responsibility of recipients, with RikeSD providing necessary documentation. Conflicts of interest must be disclosed. Violations may result in forfeiture of rewards and potential disciplinary action.",
  appendix: {
    glossary: [
      {
        term: "Board Sitting Allowance",
        def: "Compensation paid to Board members for attending meetings.",
      },
      {
        term: "Board Fees",
        def: "Annual retainer paid to Board members for their ongoing strategic oversight.",
      },
      {
        term: "Milestone",
        def: "Measurable achievement tied to specific project goals (e.g., user growth, funding secured, deliverable completion).",
      },
      {
        term: "Project Champion",
        def: "EMT member leading a specific project to successful completion.",
      },
      {
        term: "Limited by Guarantee",
        def: "A company structure where members guarantee to pay a nominal amount if the company is wound up, typically used for NGOs. No shares or dividends are issued.",
      },
      {
        term: "Performance Bonus",
        def: "Additional compensation awarded for exceptional contributions beyond standard expectations.",
      },
    ],
  },
  signed: "Signed: EMT Member & BOD Date: January 1, 2026",
}
