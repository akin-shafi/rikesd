"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  questions: FaqItem[];
}

export default function FaqAccordion({ questions }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {questions.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
        >
          <button
            className="flex items-center justify-between w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors"
            onClick={() => toggleQuestion(index)}
          >
            <span className="text-lg font-medium text-gray-900 pr-4">
              {item.question}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                openIndex === index ? "transform rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <p className="text-gray-700 leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
