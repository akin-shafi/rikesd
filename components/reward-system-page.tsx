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
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { rewardSystemData } from "@/data/rewardSystemData";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const sections = [
  { id: "introduction", name: "Introduction", icon: DocumentTextIcon },
  { id: "objectives", name: "Objectives", icon: CheckCircleIcon },
  { id: "scope", name: "Scope", icon: GlobeAltIcon },
  { id: "equity", name: "Equity Framework", icon: CurrencyDollarIcon },
  { id: "incentives", name: "Incentives", icon: UserGroupIcon },
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
    if (email === "operations@rikesd.org" && password === "classified") {
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

      case "equity":
        return (
          <div className="prose prose-slate max-w-none space-y-8">
            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl p-6 border border-emerald-200">
              <p className="text-lg text-slate-700 leading-relaxed">
                {rewardSystemData.equity.framework}
              </p>
            </div>

            {/* Board and EMT Equity Details */}
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <UserGroupIcon className="w-5 h-5 mr-2 text-blue-600" />
                  Board of Directors
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="font-medium text-slate-600">
                      Base Equity:
                    </span>
                    <span className="text-slate-900">
                      {rewardSystemData.equity.board.base}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="font-medium text-slate-600">
                      Performance-Based:
                    </span>
                    <span className="text-slate-900">
                      {rewardSystemData.equity.board.performance}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-slate-600">Cap:</span>
                    <span className="text-slate-900 font-semibold">
                      {rewardSystemData.equity.board.cap}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <CogIcon className="w-5 h-5 mr-2 text-emerald-600" />
                  EMT Members
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="font-medium text-slate-600">
                      Base Equity:
                    </span>
                    <span className="text-slate-900">
                      {rewardSystemData.equity.emt.base}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="font-medium text-slate-600">
                      Project Champion:
                    </span>
                    <span className="text-slate-900">
                      {rewardSystemData.equity.emt.projectChampion}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="font-medium text-slate-600">
                      Performance-Based:
                    </span>
                    <span className="text-slate-900">
                      {rewardSystemData.equity.emt.performance}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-slate-600">Cap:</span>
                    <span className="text-slate-900 font-semibold">
                      {rewardSystemData.equity.emt.cap}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Equity Conversion */}
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-900 mb-3">
                Equity Conversion for Vendors
              </h3>
              <p className="text-slate-700">
                {rewardSystemData.equity.conversion}
              </p>
            </div>

            {/* Vesting Schedule Table */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="px-6 py-4 bg-slate-50 border-b border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900">
                  Equity Vesting Schedules
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Group
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Equity Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Vesting Period
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Schedule Details
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Cliff Period
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Acceleration Triggers
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    {rewardSystemData.equity.vesting.table.map(
                      (row: any, index: number) => (
                        <tr key={index} className="hover:bg-slate-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                            {row.group}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700">
                            {row.type}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700">
                            {row.period}
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-700">
                            {row.details}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700">
                            {row.cliff}
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-700">
                            {row.triggers}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Additional Equity Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <h3 className="text-lg font-semibold text-red-900 mb-3">
                  Forfeiture Policy
                </h3>
                <p className="text-slate-700">
                  {rewardSystemData.equity.forfeiture}
                </p>
              </div>
              <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                <h3 className="text-lg font-semibold text-yellow-900 mb-3">
                  Tax Considerations
                </h3>
                <p className="text-slate-700">{rewardSystemData.equity.tax}</p>
              </div>
            </div>
          </div>
        );

      case "incentives":
        return (
          <div className="prose prose-slate max-w-none space-y-8">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Board Incentives */}
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <UserGroupIcon className="w-5 h-5 mr-2 text-blue-600" />
                  Board of Directors
                </h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      Honorariums
                    </h4>
                    <p className="text-slate-700 text-sm">
                      {rewardSystemData.incentives.board.honorariums}
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      Milestone Criteria
                    </h4>
                    <p className="text-slate-700 text-sm">
                      {rewardSystemData.incentives.board.milestone}
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      Recognition
                    </h4>
                    <p className="text-slate-700 text-sm">
                      {rewardSystemData.incentives.board.recognition}
                    </p>
                  </div>
                </div>
              </div>

              {/* EMT Incentives */}
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <CogIcon className="w-5 h-5 mr-2 text-emerald-600" />
                  EMT Members
                </h3>
                <div className="space-y-4">
                  <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
                    <h4 className="font-semibold text-emerald-900 mb-2">
                      Milestone Bonuses
                    </h4>
                    <p className="text-slate-700 text-sm">
                      {rewardSystemData.incentives.emt.bonuses}
                    </p>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
                    <h4 className="font-semibold text-emerald-900 mb-2">
                      Professional Development
                    </h4>
                    <p className="text-slate-700 text-sm">
                      {rewardSystemData.incentives.emt.development}
                    </p>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
                    <h4 className="font-semibold text-emerald-900 mb-2">
                      Recognition
                    </h4>
                    <p className="text-slate-700 text-sm">
                      {rewardSystemData.incentives.emt.recognition}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project-Specific Criteria */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="px-6 py-4 bg-slate-50 border-b border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900">
                  Project-Specific Criteria
                </h3>
              </div>
              <div className="p-6 space-y-4">
                {Object.entries(
                  rewardSystemData.incentives.emt.projectCriteria
                ).map(([project, criteria]) => (
                  <div
                    key={project}
                    className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg p-4 border border-slate-200"
                  >
                    <h4 className="font-semibold text-slate-900 mb-2 capitalize">
                      {project.replace(/([A-Z])/g, " $1").trim()}
                    </h4>
                    <p className="text-slate-700 text-sm">
                      {criteria as string}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Disbursement Info */}
            <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
              <h3 className="text-lg font-semibold text-indigo-900 mb-3">
                Incentive Disbursement
              </h3>
              <p className="text-slate-700">
                {rewardSystemData.incentives.disbursement}
              </p>
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
      {/* Header */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8 ">
          {/* Desktop Sidebar Navigation - Fixed height with scroll */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <div className="h-full flex flex-col space-y-6">
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
