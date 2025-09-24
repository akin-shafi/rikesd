import { useState } from "react";
import { Tab, Disclosure } from "@headlessui/react";
import { rewardSystemData } from "../data/rewardSystemData";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function RewardSystemPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "operations@rikesd.org" && password === "confidential") {
      setAuthenticated(true);
      setError("");
    } else {
      setError("Invalid email or password");
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Login to Access Reward System Policy
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-green-800 mb-8 text-center">
        RikeSD Reward System Policy
      </h1>

      {/* Document Information - Accordion */}
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-green-900 bg-green-100 rounded-lg hover:bg-green-200 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
              Document Information
              <span>{open ? "-" : "+"}</span>
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-700">
              <ul>
                <li>
                  <strong>Policy Title:</strong>{" "}
                  {rewardSystemData.documentInfo.policyTitle}
                </li>
                <li>
                  <strong>Version:</strong>{" "}
                  {rewardSystemData.documentInfo.version}
                </li>
                <li>
                  <strong>Effective Date:</strong>{" "}
                  {rewardSystemData.documentInfo.effectiveDate}
                </li>
                <li>
                  <strong>Approved By:</strong>{" "}
                  {rewardSystemData.documentInfo.approvedBy}
                </li>
                <li>
                  <strong>Review Frequency:</strong>{" "}
                  {rewardSystemData.documentInfo.reviewFrequency}
                </li>
                <li>
                  <strong>Contact:</strong>{" "}
                  {rewardSystemData.documentInfo.contact}
                </li>
              </ul>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* Tabs for Main Sections */}
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-green-900/20 p-1 mt-6">
          {[
            "Introduction",
            "Objectives",
            "Scope",
            "Equity",
            "Incentives",
            "Review",
            "Implementation",
            "Compliance",
            "Appendix",
          ].map((tab) => (
            <Tab
              key={tab}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-green-700",
                  selected
                    ? "bg-white shadow"
                    : "text-green-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel className="rounded-xl bg-white p-3">
            <p>{rewardSystemData.introduction.content}</p>
            <h3 className="font-semibold mt-4">Key Projects:</h3>
            <ul className="list-disc pl-5">
              {rewardSystemData.introduction.projects.map((project: any) => (
                <li key={project.name}>
                  <strong>{project.name}:</strong> {project.description}
                </li>
              ))}
            </ul>
          </Tab.Panel>
          <Tab.Panel className="rounded-xl bg-white p-3">
            <ul className="list-disc pl-5">
              {rewardSystemData.objectives.map((obj: string, index: number) => (
                <li key={index}>{obj}</li>
              ))}
            </ul>
          </Tab.Panel>
          <Tab.Panel className="rounded-xl bg-white p-3">
            <h3 className="font-semibold">Applies To:</h3>
            <ul className="list-disc pl-5">
              {rewardSystemData.scope.appliesTo.map(
                (item: string, index: number) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
            <p className="mt-4">
              <strong>Exclusions:</strong> {rewardSystemData.scope.exclusions}
            </p>
          </Tab.Panel>
          <Tab.Panel className="rounded-xl bg-white p-3">
            <p>{rewardSystemData.equity.framework}</p>
            {/* Accordions for Subsections */}
            <div className="mt-4">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-green-900 bg-green-100 rounded-lg hover:bg-green-200">
                      Board of Directors
                      <span>{open ? "-" : "+"}</span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-700">
                      <ul>
                        <li>
                          <strong>Base Equity:</strong>{" "}
                          {rewardSystemData.equity.board.base}
                        </li>
                        <li>
                          <strong>Performance-Based Equity:</strong>{" "}
                          {rewardSystemData.equity.board.performance}
                        </li>
                        <li>
                          <strong>Cap:</strong>{" "}
                          {rewardSystemData.equity.board.cap}
                        </li>
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="mt-2 flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-green-900 bg-green-100 rounded-lg hover:bg-green-200">
                    EMT Members
                    <span>{open ? "-" : "+"}</span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-700">
                    <ul>
                      <li>
                        <strong>Base Equity:</strong>{" "}
                        {rewardSystemData.equity.emt.base}
                      </li>
                      <li>
                        <strong>Project Champion Bonus:</strong>{" "}
                        {rewardSystemData.equity.emt.projectChampion}
                      </li>
                      <li>
                        <strong>Performance-Based Equity:</strong>{" "}
                        {rewardSystemData.equity.emt.performance}
                      </li>
                      <li>
                        <strong>Cap:</strong> {rewardSystemData.equity.emt.cap}
                      </li>
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <p className="mt-4">
              <strong>Equity Conversion for Vendors:</strong>{" "}
              {rewardSystemData.equity.conversion}
            </p>
            <h3 className="font-semibold mt-4">Equity Vesting Schedules</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Group
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Equity Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Vesting Period
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Schedule Details
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Cliff Period
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Acceleration Triggers
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {rewardSystemData.equity.vesting.table.map(
                    (row: any, index: number) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {row.group}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {row.type}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {row.period}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {row.details}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {row.cliff}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {row.triggers}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              <strong>Forfeiture:</strong> {rewardSystemData.equity.forfeiture}
            </p>
            <p>
              <strong>Tax Considerations:</strong> {rewardSystemData.equity.tax}
            </p>
          </Tab.Panel>
          <Tab.Panel className="rounded-xl bg-white p-3">
            {/* Similar structure with accordions for Board and EMT */}
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="mt-4 flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-green-900 bg-green-100 rounded-lg hover:bg-green-200">
                    Board of Directors
                    <span>{open ? "-" : "+"}</span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-700">
                    <ul>
                      <li>
                        <strong>Honorariums:</strong>{" "}
                        {rewardSystemData.incentives.board.honorariums}
                      </li>
                      <li>
                        <strong>Milestone Criteria:</strong>{" "}
                        {rewardSystemData.incentives.board.milestone}
                      </li>
                      <li>
                        <strong>Recognition:</strong>{" "}
                        {rewardSystemData.incentives.board.recognition}
                      </li>
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="mt-2 flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-green-900 bg-green-100 rounded-lg hover:bg-green-200">
                    EMT Members
                    <span>{open ? "-" : "+"}</span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-700">
                    <ul>
                      <li>
                        <strong>Milestone Bonuses:</strong>{" "}
                        {rewardSystemData.incentives.emt.bonuses}
                      </li>
                      <li>
                        <strong>Project-Specific Criteria:</strong>
                      </li>
                      <ul className="list-disc pl-5">
                        <li>
                          <strong>Skillnovate:</strong>{" "}
                          {
                            rewardSystemData.incentives.emt.projectCriteria
                              .skillnovate
                          }
                        </li>
                        <li>
                          <strong>KEIA:</strong>{" "}
                          {rewardSystemData.incentives.emt.projectCriteria.keia}
                        </li>
                        <li>
                          <strong>Rike Marketplace:</strong>{" "}
                          {
                            rewardSystemData.incentives.emt.projectCriteria
                              .rikeMarketplace
                          }
                        </li>
                        <li>
                          <strong>AroFarmer:</strong>{" "}
                          {
                            rewardSystemData.incentives.emt.projectCriteria
                              .arofarmer
                          }
                        </li>
                        <li>
                          <strong>Patch Africa:</strong>{" "}
                          {
                            rewardSystemData.incentives.emt.projectCriteria
                              .patchAfrica
                          }
                        </li>
                      </ul>
                      <li>
                        <strong>Professional Development:</strong>{" "}
                        {rewardSystemData.incentives.emt.development}
                      </li>
                      <li>
                        <strong>Recognition:</strong>{" "}
                        {rewardSystemData.incentives.emt.recognition}
                      </li>
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <p className="mt-4">
              <strong>Incentive Disbursement:</strong>{" "}
              {rewardSystemData.incentives.disbursement}
            </p>
          </Tab.Panel>
          <Tab.Panel className="rounded-xl bg-white p-3">
            <ul className="list-disc pl-5">
              <li>
                <strong>Reward Committee:</strong>{" "}
                {rewardSystemData.review.committee}
              </li>
              <li>
                <strong>Annual Review:</strong> {rewardSystemData.review.annual}
              </li>
              <li>
                <strong>Quarterly Feedback:</strong>{" "}
                {rewardSystemData.review.quarterly}
              </li>
              <li>
                <strong>Dispute Resolution:</strong>{" "}
                {rewardSystemData.review.dispute}
              </li>
              <li>
                <strong>Documentation:</strong>{" "}
                {rewardSystemData.review.documentation}
              </li>
            </ul>
          </Tab.Panel>
          <Tab.Panel className="rounded-xl bg-white p-3">
            <ol className="list-decimal pl-5">
              {rewardSystemData.implementation.map(
                (step: string, index: number) => (
                  <li key={index}>{step}</li>
                )
              )}
            </ol>
          </Tab.Panel>
          <Tab.Panel className="rounded-xl bg-white p-3">
            <p>{rewardSystemData.compliance}</p>
          </Tab.Panel>
          <Tab.Panel className="rounded-xl bg-white p-3">
            <h3 className="font-semibold">Glossary</h3>
            <ul className="list-disc pl-5">
              {rewardSystemData.appendix.glossary.map(
                (item: any, index: number) => (
                  <li key={index}>
                    <strong>{item.term}:</strong> {item.def}
                  </li>
                )
              )}
            </ul>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

      <footer className="mt-8 text-center text-gray-600">
        <p>{rewardSystemData.signed}</p>
      </footer>
    </div>
  );
}
