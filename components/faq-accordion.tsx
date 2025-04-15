"use client"

import { useState } from "react"

interface FaqItem {
  question: string
  answer: string
}

interface FaqAccordionProps {
  questions: FaqItem[]
}

export default function FaqAccordion({ questions }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {questions.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            className="flex items-center justify-between w-full px-6 py-4 text-left bg-white"
            onClick={() => toggleQuestion(index)}
          >
            <span className="text-lg font-medium text-gray-900">{item.question}</span>
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
              className={`w-5 h-5 transition-transform ${openIndex === index ? "transform rotate-180" : ""}`}
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          {openIndex === index && (
            <div className="px-6 py-4 bg-gray-50">
              <p className="text-gray-600">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
