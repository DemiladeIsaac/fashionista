"use client";

import { useState } from "react";

export default function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full mt-2 rounded-md divide-y divide-gray-200">
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => toggleItem(index)}
            aria-expanded={activeIndex === index}
            className="w-full text-left px-4 py-3 flex justify-between items-center focus:outline-none hover:bg-gray-100"
          >
            <span className="font-medium">{item.title}</span>
            <svg
              className={`w-4 h-4 transform transition-transform ${
                activeIndex === index ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {activeIndex === index && (
            <div className="px-4 py-2 text-gray-700 bg-gray-50">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
