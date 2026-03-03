"use client";

import { useState } from "react";
import { faqs } from "@/data/antalya";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">ხშირად დასმული კითხვები</h2>
          <p className="text-gray-500">ყველაფერი, რაც ანტალიის ტურის შესახებ უნდა იცოდეთ</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className={`rounded-2xl border transition-all ${isOpen ? "border-orange-200 bg-white shadow-sm" : "border-gray-200 bg-gray-50"}`}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full cursor-pointer items-center justify-between px-6 py-5 text-left font-semibold text-gray-900"
                  aria-expanded={isOpen}
                >
                  {faq.q}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className={`accordion-content ${isOpen ? "open" : ""}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-gray-600">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
