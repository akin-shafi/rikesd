"use client";
import { useState } from "react";
import type React from "react";

import {
  ChevronDownIcon,
  ChevronRightIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ClipboardDocumentListIcon,
  CogIcon,
  CheckCircleIcon,
  BookOpenIcon,
  GlobeAltIcon, // Import GlobeAltIcon
} from "@heroicons/react/24/outline";
import { rewardSystemData } from "../data/reward-system-data";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const sections = [
  { id: "introduction", name: "Introduction", icon: DocumentTextIcon },
  { id: "objectives", name: "Objectives", icon: CheckCircleIcon },
  { id: "scope", name: "Scope", icon: GlobeAltIcon },
  {
    id: "compensation",
    name: "Compensation Framework",
    icon: CurrencyDollarIcon,
  },
  { id: "review", name: "Review Process", icon: ClipboardDocumentListIcon },
  { id: "implementation", name: "Implementation", icon: CogIcon },
  { id: "compliance", name: "Compliance", icon: ShieldCheckIcon },
  { id: "appendix", name: "Appendix", icon: BookOpenIcon },
];

export default function RewardSystemPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [activeSection, setActiveSection] = useState("introduction");
  const [expandedAccordions, setExpandedAccordions] = useState<
    Record<string, boolean>
  >({});
  const [showDocInfo, setShowDocInfo] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "operations@rikesd.org" && password === "confidential") {
      setAuthenticated(true);
      setError("");
    } else {
      setError("Invalid email or password");
    }
  };

  const toggleAccordion = (key: string) => {
    setExpandedAccordions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    // Scroll the main content area to top
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.scrollTop = 0;
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 w-full max-w-md">
          <div className="text-center mb-6">
            <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <ShieldCheckIcon className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Secure Access Required
            </h2>
            <p className="text-slate-600 text-sm">
              Please authenticate to access the RikeSD Reward System Policy
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                placeholder="Enter your password"
                required
              />
            </div>
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors font-medium"
            >
              Access Policy Document
            </button>
          </form>
        </div>
      </div>
    );
  }

  const renderContent = (sectionId: string) => {
    switch (sectionId) {
      case "introduction":
        return (
          <div className="prose prose-slate max-w-none">
            <p className="text-lg leading-relaxed text-slate-700 mb-6">
              {rewardSystemData.introduction.content}
            </p>
            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
              <h3 className="text-lg font-semibold text-emerald-900 mb-4 flex items-center">
                <CogIcon className="w-5 h-5 mr-2" />
                Key Projects
              </h3>
              <div className="grid gap-4">
                {rewardSystemData.introduction.projects.map(
                  (project: any, index: number) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg p-4 border border-emerald-100"
                    >
                      <h4 className="font-semibold text-slate-900 mb-1">
                        {project.name}
                      </h4>
                      <p className="text-slate-600 text-sm">
                        {project.description}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        );

      case "objectives":
        return (
          <div className="prose prose-slate max-w-none">
            <div className="grid gap-4">
              {rewardSystemData.objectives.map((obj: string, index: number) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-slate-50 rounded-lg border border-slate-200"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-emerald-600 text-sm font-semibold">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">{obj}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case "scope":
        return (
          <div className="prose prose-slate max-w-none space-y-6">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">
                Policy Coverage
              </h3>
              <div className="space-y-3">
                {rewardSystemData.scope.appliesTo.map(
                  (item: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircleIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <p className="text-slate-700">{item}</p>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
              <h3 className="text-lg font-semibold text-amber-900 mb-3">
                Exclusions
              </h3>
              <p className="text-slate-700">
                {rewardSystemData.scope.exclusions}
              </p>
            </div>
          </div>
        );

      case "compensation":
        return (
          <div className="prose prose-slate max-w-none space-y-8">
            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl p-6 border border-emerald-200">
              <p className="text-lg text-slate-700 leading-relaxed">
                {rewardSystemData.boardCompensation.framework}
              </p>
            </div>

            {/* Board Compensation */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                <UserGroupIcon className="w-5 h-5 mr-2 text-blue-600" />
                Board of Directors Compensation
              </h3>

              <div className="space-y-6">
                {/* Board Sitting Allowances */}
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <h4 className="font-semibold text-blue-900 mb-3">
                    Board Sitting Allowances
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center py-2 border-b border-blue-100">
                      <span className="font-medium text-slate-600">
                        Regular Meetings:
                      </span>
                      <span className="text-slate-900">
                        {
                          rewardSystemData.boardCompensation.sittingAllowances
                            .regularMeetings
                        }
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-blue-100">
                      <span className="font-medium text-slate-600">
                        Special Meetings:
                      </span>
                      <span className="text-slate-900">
                        {
                          rewardSystemData.boardCompensation.sittingAllowances
                            .specialMeetings
                        }
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium text-slate-600">
                        Committee Work:
                      </span>
                      <span className="text-slate-900">
                        {
                          rewardSystemData.boardCompensation.sittingAllowances
                            .committeeWork
                        }
                      </span>
                    </div>
                  </div>
                </div>

                {/* Board Fees */}
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <h4 className="font-semibold text-blue-900 mb-3">
                    Board Fees (Annual Retainer)
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center py-2 border-b border-blue-100">
                      <span className="font-medium text-slate-600">
                        Chairperson:
                      </span>
                      <span className="text-slate-900">
                        {
                          rewardSystemData.boardCompensation.boardFees
                            .chairperson
                        }
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-blue-100">
                      <span className="font-medium text-slate-600">
                        Vice Chairperson:
                      </span>
                      <span className="text-slate-900">
                        {
                          rewardSystemData.boardCompensation.boardFees
                            .viceChairperson
                        }
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-blue-100">
                      <span className="font-medium text-slate-600">
                        Treasurer:
                      </span>
                      <span className="text-slate-900">
                        {rewardSystemData.boardCompensation.boardFees.treasurer}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-blue-100">
                      <span className="font-medium text-slate-600">
                        Secretary:
                      </span>
                      <span className="text-slate-900">
                        {rewardSystemData.boardCompensation.boardFees.secretary}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium text-slate-600">
                        General Members:
                      </span>
                      <span className="text-slate-900">
                        {rewardSystemData.boardCompensation.boardFees.members}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Performance Bonus */}
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    Performance Bonus
                  </h4>
                  <p className="text-slate-700 text-sm mb-3">
                    {rewardSystemData.boardCompensation.performanceBonus.amount}
                  </p>
                  <div className="space-y-1">
                    <p className="font-medium text-slate-700 text-sm">
                      Criteria:
                    </p>
                    {rewardSystemData.boardCompensation.performanceBonus.criteria.map(
                      (criterion: string, index: number) => (
                        <div key={index} className="flex items-start space-x-2">
                          <CheckCircleIcon className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600 text-sm">
                            {criterion}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Recognition & Disbursement */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      Recognition
                    </h4>
                    <p className="text-slate-700 text-sm">
                      {rewardSystemData.boardCompensation.recognition}
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      Disbursement
                    </h4>
                    <p className="text-slate-700 text-sm">
                      {rewardSystemData.boardCompensation.disbursement}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* EMT Compensation */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                <CogIcon className="w-5 h-5 mr-2 text-emerald-600" />
                EMT Compensation
              </h3>

              <div className="space-y-6">
                {/* Framework */}
                <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
                  <p className="text-slate-700">
                    {rewardSystemData.emtCompensation.framework}
                  </p>
                </div>

                {/* Project Milestone Compensation */}
                <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
                  <h4 className="font-semibold text-emerald-900 mb-3">
                    Project Milestone Compensation
                  </h4>
                  <p className="text-slate-700 text-sm mb-2">
                    {
                      rewardSystemData.emtCompensation
                        .projectMilestoneCompensation.structure
                    }
                  </p>
                  <div className="space-y-1 text-sm">
                    <p className="text-slate-700">
                      <span className="font-medium">Payment Range:</span>{" "}
                      {
                        rewardSystemData.emtCompensation
                          .projectMilestoneCompensation.paymentRange
                      }
                    </p>
                    <p className="text-slate-700">
                      <span className="font-medium">
                        Project Champion Bonus:
                      </span>{" "}
                      {
                        rewardSystemData.emtCompensation
                          .projectMilestoneCompensation.projectChampionBonus
                      }
                    </p>
                  </div>
                </div>

                {/* Milestones by Project */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-900">
                    Milestones by Project
                  </h4>

                  {/* Skillnovate */}
                  <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                    <h5 className="font-semibold text-purple-900 mb-3">
                      Skillnovate
                    </h5>
                    <div className="space-y-2">
                      {rewardSystemData.emtCompensation.milestonesByProject.skillnovate.map(
                        (milestone: any, index: number) => (
                          <div
                            key={index}
                            className="bg-white rounded p-3 border border-purple-100"
                          >
                            <div className="flex justify-between items-start">
                              <span className="font-medium text-slate-700 text-sm">
                                {milestone.milestone}
                              </span>
                              <span className="text-purple-700 font-semibold text-sm">
                                {milestone.compensation}
                              </span>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* KEIA */}
                  <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100">
                    <h5 className="font-semibold text-indigo-900 mb-3">KEIA</h5>
                    <div className="space-y-2">
                      {rewardSystemData.emtCompensation.milestonesByProject.keia.map(
                        (milestone: any, index: number) => (
                          <div
                            key={index}
                            className="bg-white rounded p-3 border border-indigo-100"
                          >
                            <div className="flex justify-between items-start">
                              <span className="font-medium text-slate-700 text-sm">
                                {milestone.milestone}
                              </span>
                              <span className="text-indigo-700 font-semibold text-sm">
                                {milestone.compensation}
                              </span>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Rike Marketplace */}
                  <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-100">
                    <h5 className="font-semibold text-cyan-900 mb-3">
                      Rike Marketplace
                    </h5>
                    <div className="space-y-2">
                      {rewardSystemData.emtCompensation.milestonesByProject.rikeMarketplace.map(
                        (milestone: any, index: number) => (
                          <div
                            key={index}
                            className="bg-white rounded p-3 border border-cyan-100"
                          >
                            <div className="flex justify-between items-start">
                              <span className="font-medium text-slate-700 text-sm">
                                {milestone.milestone}
                              </span>
                              <span className="text-cyan-700 font-semibold text-sm">
                                {milestone.compensation}
                              </span>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* AroFarmer */}
                  <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                    <h5 className="font-semibold text-green-900 mb-3">
                      AroFarmer
                    </h5>
                    <div className="space-y-2">
                      {rewardSystemData.emtCompensation.milestonesByProject.arofarmer.map(
                        (milestone: any, index: number) => (
                          <div
                            key={index}
                            className="bg-white rounded p-3 border border-green-100"
                          >
                            <div className="flex justify-between items-start">
                              <span className="font-medium text-slate-700 text-sm">
                                {milestone.milestone}
                              </span>
                              <span className="text-green-700 font-semibold text-sm">
                                {milestone.compensation}
                              </span>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Patch Africa */}
                  <div className="bg-teal-50 rounded-lg p-4 border border-teal-100">
                    <h5 className="font-semibold text-teal-900 mb-3">
                      Patch Africa
                    </h5>
                    <div className="space-y-2">
                      {rewardSystemData.emtCompensation.milestonesByProject.patchAfrica.map(
                        (milestone: any, index: number) => (
                          <div
                            key={index}
                            className="bg-white rounded p-3 border border-teal-100"
                          >
                            <div className="flex justify-between items-start">
                              <span className="font-medium text-slate-700 text-sm">
                                {milestone.milestone}
                              </span>
                              <span className="text-teal-700 font-semibold text-sm">
                                {milestone.compensation}
                              </span>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Performance Bonuses */}
                <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
                  <h4 className="font-semibold text-emerald-900 mb-3">
                    Performance Bonuses
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-slate-700 text-sm mb-2">
                        <span className="font-medium">Annual:</span>{" "}
                        {
                          rewardSystemData.emtCompensation.performanceBonuses
                            .annual
                        }
                      </p>
                      <div className="space-y-1">
                        <p className="font-medium text-slate-700 text-sm">
                          Criteria:
                        </p>
                        {rewardSystemData.emtCompensation.performanceBonuses.criteria.map(
                          (criterion: string, index: number) => (
                            <div
                              key={index}
                              className="flex items-start space-x-2"
                            >
                              <CheckCircleIcon className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-600 text-sm">
                                {criterion}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                    <div className="pt-2 border-t border-emerald-200">
                      <p className="text-slate-700 text-sm">
                        <span className="font-medium">Quarterly:</span>{" "}
                        {
                          rewardSystemData.emtCompensation.performanceBonuses
                            .quarterly
                        }
                      </p>
                    </div>
                  </div>
                </div>

                {/* Professional Development */}
                <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
                  <h4 className="font-semibold text-emerald-900 mb-3">
                    Professional Development
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-slate-700">
                      <span className="font-medium">Training:</span>{" "}
                      {
                        rewardSystemData.emtCompensation.professionalDevelopment
                          .training
                      }
                    </p>
                    <p className="text-slate-700">
                      <span className="font-medium">Conferences:</span>{" "}
                      {
                        rewardSystemData.emtCompensation.professionalDevelopment
                          .conferences
                      }
                    </p>
                    <p className="text-slate-700">
                      <span className="font-medium">Mentorship:</span>{" "}
                      {
                        rewardSystemData.emtCompensation.professionalDevelopment
                          .mentorship
                      }
                    </p>
                  </div>
                </div>

                {/* Recognition */}
                <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
                  <h4 className="font-semibold text-emerald-900 mb-3">
                    Recognition
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-slate-700">
                      <span className="font-medium">Awards:</span>{" "}
                      {rewardSystemData.emtCompensation.recognition.awards}
                    </p>
                    <p className="text-slate-700">
                      <span className="font-medium">Certificates:</span>{" "}
                      {
                        rewardSystemData.emtCompensation.recognition
                          .certificates
                      }
                    </p>
                    <p className="text-slate-700">
                      <span className="font-medium">Publicity:</span>{" "}
                      {rewardSystemData.emtCompensation.recognition.publicity}
                    </p>
                  </div>
                </div>

                {/* Disbursement */}
                <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
                  <h4 className="font-semibold text-emerald-900 mb-2">
                    Disbursement
                  </h4>
                  <p className="text-slate-700 text-sm">
                    {rewardSystemData.emtCompensation.disbursement}
                  </p>
                </div>
              </div>
            </div>

            {/* Vendor Services */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                <CurrencyDollarIcon className="w-5 h-5 mr-2 text-amber-600" />
                Vendor Services Compensation
              </h3>

              <div className="space-y-6">
                <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                  <p className="text-slate-700 mb-4">
                    {rewardSystemData.vendorServices.framework}
                  </p>
                </div>

                {/* Payment Structure */}
                <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                  <h4 className="font-semibold text-amber-900 mb-3">
                    Payment Structure
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-slate-700">
                      <span className="font-medium">Standard:</span>{" "}
                      {
                        rewardSystemData.vendorServices.paymentStructure
                          .standard
                      }
                    </p>
                    <p className="text-slate-700">
                      <span className="font-medium">Milestone Payments:</span>{" "}
                      {
                        rewardSystemData.vendorServices.paymentStructure
                          .milestonePayments
                      }
                    </p>
                    <p className="text-slate-700">
                      <span className="font-medium">Example:</span>{" "}
                      {rewardSystemData.vendorServices.paymentStructure.example}
                    </p>
                  </div>
                </div>

                {/* Performance Incentives */}
                <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                  <h4 className="font-semibold text-amber-900 mb-3">
                    Performance Incentives
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-slate-700">
                      <span className="font-medium">Early Completion:</span>{" "}
                      {
                        rewardSystemData.vendorServices.performanceIncentives
                          .earlyCompletion
                      }
                    </p>
                    <p className="text-slate-700">
                      <span className="font-medium">Quality Excellence:</span>{" "}
                      {
                        rewardSystemData.vendorServices.performanceIncentives
                          .qualityExcellence
                      }
                    </p>
                    <p className="text-slate-700">
                      <span className="font-medium">Innovation Bonus:</span>{" "}
                      {
                        rewardSystemData.vendorServices.performanceIncentives
                          .innovationBonus
                      }
                    </p>
                  </div>
                </div>

                {/* Tech Partnership */}
                <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                  <h4 className="font-semibold text-amber-900 mb-3">
                    Tech Partnership
                  </h4>
                  <p className="text-slate-700 text-sm mb-3">
                    {
                      rewardSystemData.vendorServices.techPartnership
                        .description
                    }
                  </p>
                  <div className="space-y-1">
                    <p className="font-medium text-slate-700 text-sm">
                      Benefits:
                    </p>
                    {rewardSystemData.vendorServices.techPartnership.benefits.map(
                      (benefit: string, index: number) => (
                        <div key={index} className="flex items-start space-x-2">
                          <CheckCircleIcon className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600 text-sm">
                            {benefit}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "review":
        return (
          <div className="prose prose-slate max-w-none">
            <div className="grid gap-6">
              {[
                {
                  key: "committee",
                  title: "Reward Committee",
                  content: rewardSystemData.review.committee,
                  color: "blue",
                },
                {
                  key: "annual",
                  title: "Annual Review",
                  content: rewardSystemData.review.annual,
                  color: "emerald",
                },
                {
                  key: "quarterly",
                  title: "Quarterly Feedback",
                  content: rewardSystemData.review.quarterly,
                  color: "purple",
                },
                {
                  key: "dispute",
                  title: "Dispute Resolution",
                  content: rewardSystemData.review.dispute,
                  color: "amber",
                },
                {
                  key: "documentation",
                  title: "Documentation",
                  content: rewardSystemData.review.documentation,
                  color: "slate",
                },
              ].map((item) => (
                <div
                  key={item.key}
                  className={`bg-${item.color}-50 rounded-xl p-6 border border-${item.color}-200`}
                >
                  <h3
                    className={`text-lg font-semibold text-${item.color}-900 mb-3`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case "implementation":
        return (
          <div className="prose prose-slate max-w-none">
            <div className="space-y-4">
              {rewardSystemData.implementation.map(
                (step: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-600 text-sm font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-700 leading-relaxed">{step}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        );

      case "compliance":
        return (
          <div className="prose prose-slate max-w-none">
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <div className="flex items-start space-x-3">
                <ShieldCheckIcon className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-red-900 mb-3">
                    Compliance Requirements
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    {rewardSystemData.compliance}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case "appendix":
        return (
          <div className="prose prose-slate max-w-none">
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="px-6 py-4 bg-slate-50 border-b border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900">
                  Glossary
                </h3>
              </div>
              <div className="p-6 space-y-4">
                {rewardSystemData.appendix.glossary.map(
                  (item: any, index: number) => (
                    <div
                      key={index}
                      className="border-b border-slate-100 pb-4 last:border-b-0 last:pb-0"
                    >
                      <dt className="font-semibold text-slate-900 mb-1">
                        {item.term}
                      </dt>
                      <dd className="text-slate-700">{item.def}</dd>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div>
    

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
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
                  {Object.entries(rewardSystemData.documentInfo).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between items-start"
                      >
                        <span className="font-medium text-slate-600 capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}:
                        </span>
                        <span className="text-slate-900 text-right max-w-48">
                          {value}
                        </span>
                      </div>
                    )
                  )}
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
                  {sections.map((section) => {
                    const Icon = section.icon;
                    return (
                      <button
                        key={section.id}
                        onClick={() => handleSectionChange(section.id)}
                        className={classNames(
                          "w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200",
                          activeSection === section.id
                            ? "bg-emerald-100 text-emerald-900 border border-emerald-200 shadow-sm"
                            : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                        )}
                      >
                        <Icon
                          className={classNames(
                            "w-5 h-5 flex-shrink-0",
                            activeSection === section.id
                              ? "text-emerald-600"
                              : "text-slate-400"
                          )}
                        />
                        <span className="font-medium">{section.name}</span>
                      </button>
                    );
                  })}
                </div>
              </nav>
            </div>
          </aside>

          {/* Mobile Accordion Navigation */}
          <div className="lg:hidden space-y-4">
            {/* Document Info Accordion */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <button
                onClick={() => setShowDocInfo(!showDocInfo)}
                className="w-full flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-200 hover:bg-slate-100 transition-colors"
              >
                <h3 className="font-semibold text-slate-900">
                  Document Information
                </h3>
                {showDocInfo ? (
                  <ChevronDownIcon className="w-5 h-5 text-slate-500" />
                ) : (
                  <ChevronRightIcon className="w-5 h-5 text-slate-500" />
                )}
              </button>
              {showDocInfo && (
                <div className="p-6 space-y-3 text-sm">
                  {Object.entries(rewardSystemData.documentInfo).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between items-start"
                      >
                        <span className="font-medium text-slate-600 capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}:
                        </span>
                        <span className="text-slate-900 text-right max-w-48">
                          {value}
                        </span>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>

            {/* Section Accordions */}
            {sections.map((section) => {
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
                        {section.name}
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
                      <div className="pt-6">{renderContent(section.id)}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop Main Content - Fixed height with scroll */}
          <main
            id="main-content"
            className="hidden lg:block flex-1 min-w-0 overflow-y-auto"
          >
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm h-full">
              <div className="px-8 py-6 border-b border-slate-200 flex-shrink-0">
                {(() => {
                  const currentSection = sections.find(
                    (s) => s.id === activeSection
                  );
                  const Icon = currentSection?.icon || DocumentTextIcon;
                  return (
                    <div className="flex items-center space-x-3">
                      <Icon className="w-6 h-6 text-emerald-600" />
                      <h2 className="text-2xl font-bold text-slate-900">
                        {currentSection?.name}
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

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-50 rounded-lg border border-emerald-200">
              <CheckCircleIcon className="w-5 h-5 text-emerald-600" />
              <p className="text-emerald-800 font-medium">
                {rewardSystemData.signed}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
