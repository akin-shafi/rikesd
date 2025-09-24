export const rewardSystemData = {
  documentInfo: {
    policyTitle: "RikeSD Reward System Policy",
    version: "1.0",
    effectiveDate: "September 24, 2025",
    approvedBy: "[To be determined upon final approval – e.g., Board of Directors and EMT]",
    reviewFrequency: "Annually",
    contact: "Reward Committee, RikeSD (info@rikesd.org)"
  },
  introduction: {
    content: "RikeSD is a pan-African organization committed to Research for Impact, Knowledge-based, and Sustainable Development. This Reward System Policy establishes a structured framework to recognize and incentivize contributions from the Board of Directors and the Executive Management Team (EMT). By aligning rewards with RikeSD's mission, the policy aims to foster motivation, fairness, and long-term collaboration across key projects.",
    projects: [
      { name: "Skillnovate", description: "An upskilling and reskilling platform." },
      { name: "KEIA", description: "Knowledge Enterprise for Incubation and Acceleration." },
      { name: "Rike Marketplace", description: "A Knowledge-as-a-Service platform." },
      { name: "AroFarmer", description: "A tech-driven urban agriculture platform." },
      { name: "Patch Africa", description: "A Pan-African Circular Hotspot for carbon emission reduction." }
    ]
  },
  objectives: [
    "Promote equity and fairness in recognizing contributions from the Board (strategic oversight by Professors and industry experts) and EMT (operational execution by professionals, e.g., software developers).",
    "Incentivize high-impact performance tied to RikeSD's projects and overall mission.",
    "Enhance team productivity and retention through clear, measurable rewards.",
    "Support sustainable growth by aligning stakeholder interests with organizational success."
  ],
  scope: {
    appliesTo: [
      "Board of Directors: Professors and industry experts providing strategic guidance.",
      "Executive Management Team (EMT): Professionals responsible for project delivery and operations."
    ],
    exclusions: "This policy does not cover external contractors unless they are EMT members acting in a vendor capacity (e.g., equity conversion for project costs)."
  },
  equity: {
    framework: "Equity serves as a long-term incentive, reflecting shared ownership in RikeSD's success. Allocations are based on roles, contributions, and project involvement, with caps to maintain balance.",
    board: {
      base: "0.5% per member upon joining.",
      performance: "Up to 0.25% annually for strategic contributions (e.g., securing partnerships or funding).",
      cap: "Total equity per member not to exceed 2%."
    },
    emt: {
      base: "1% per member upon joining.",
      projectChampion: "0.5–1% for leading specific projects, awarded upon milestone achievement.",
      performance: "Up to 0.5% annually for operational outcomes.",
      cap: "Total equity per member not to exceed 5%."
    },
    conversion: "For EMT members who are vendors (e.g., providing software development services), up to 50% of project costs may be converted into an equity bond. Example: For a 19.2 million NGN project, 9.6 million NGN paid in cash, with the remainder converted to equity as a tech partnership stake in projects like KEIA.",
    vesting: {
      table: [
        { group: "Board", type: "Base", period: "2 years", details: "25% at 6 months, then monthly pro-rata", cliff: "6 months", triggers: "Major funding round; project success (e.g., KEIA incubating 10 startups)" },
        { group: "Board", type: "Performance-Based", period: "1 year", details: "Quarterly pro-rata", cliff: "None", triggers: "Board-approved strategic milestones" },
        { group: "EMT", type: "Base", period: "3 years", details: "33% annually", cliff: "1 year", triggers: "Project launch (e.g., AroFarmer transforming 100 urban spaces)" },
        { group: "EMT", type: "Project Champion Bonus", period: "2 years", details: "50% at 1 year, remainder monthly", cliff: "1 year", triggers: "Milestone achievement (e.g., Skillnovate reaching 5,000 users)" },
        { group: "EMT", type: "Performance-Based", period: "1 year", details: "Quarterly pro-rata", cliff: "None", triggers: "Annual performance review" }
      ]
    },
    forfeiture: "Unvested equity is forfeited upon voluntary departure or termination for cause.",
    tax: "Recipients are responsible for any tax implications; RikeSD will provide necessary documentation."
  },
  incentives: {
    board: {
      honorariums: "500,000–1,000,000 NGN annually for key contributions.",
      milestone: "Securing partnerships (e.g., university collaborations for Patch Africa), obtaining grants >5 million NGN, or facilitating investor connections for KEIA.",
      recognition: "Inclusion in annual reports and events."
    },
    emt: {
      bonuses: "250,000–1,000,000 NGN per milestone.",
      projectCriteria: {
        skillnovate: "Launching certification programs; achieving 10,000 active users; 80% completion rate in training sessions.",
        keia: "Incubating 5 startups; securing investor funding (>2 million NGN per startup); marketplace access for 10 products.",
        rikeMarketplace: "Onboarding 100 research outputs; generating 1 million NGN in sales; integrating with AroFarmer Initiative.",
        arofarmer: "Matching 50 landowners with growers; transforming 50 urban spaces; generating 500,000 NGN in community income.",
        patchAfrica: "Implementing Waste for Meal Program in 5 communities; securing carbon credits for 10 universities; reducing emissions by 20% in pilot areas."
      },
      development: "Access to Skillnovate courses or external certifications (value up to 500,000 NGN).",
      recognition: "\"Project Champion\" awards at RikeSD events."
    },
    disbursement: "Bonuses paid quarterly upon milestone verification. Criteria evaluated using KPIs (e.g., user metrics, revenue, impact reports)."
  },
  review: {
    committee: "Composed of 2 Board members, 2 EMT representatives, and 1 neutral advisor. Meets quarterly.",
    annual: "Comprehensive assessment in Q4, including: Evaluation of contributions via self-assessments, peer reviews, and KPI data. Adjustments to equity caps, bonus amounts, or criteria based on organizational performance and feedback.",
    quarterly: "Open sessions for stakeholders to suggest improvements.",
    dispute: "Appeals handled by the Committee; final decisions by the Board.",
    documentation: "All reviews recorded and shared transparently with stakeholders."
  },
  implementation: [
    "Approval: Ratify policy via Board vote.",
    "Communication: Distribute to all Board and EMT members.",
    "Pilot: Test with one project (e.g., KEIA) for 6 months starting Q1 2026.",
    "Monitoring: Track effectiveness through surveys and metrics.",
    "Amendments: Changes require 75% Board approval."
  ],
  compliance: "All rewards must comply with applicable laws (e.g., Nigerian tax regulations). Conflicts of interest must be disclosed. Violations may result in forfeiture of rewards.",
  appendix: {
    glossary: [
      { term: "Equity Bond", def: "Convertible equity tied to project contributions." },
      { term: "Milestone", def: "Measurable achievement (e.g., user growth, funding secured)." },
      { term: "Vesting", def: "Gradual ownership transfer of equity." }
    ]
  },
  signed: "Signed: [Your Name] EMT Member & Software Developer Date: September 24, 2025"
};