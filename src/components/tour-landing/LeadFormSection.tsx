"use client";

import { useState } from "react";
import type { LeadFormData } from "@/data/tour-landing.types";

export default function LeadFormSection({ leadForm }: { leadForm: LeadFormData }) {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;
    const message = encodeURIComponent(`${leadForm.whatsappMessage}\nსახელი: ${name || "—"}\nტელ: ${phone}`);
    window.open(`https://wa.me/995558302303?text=${message}`, "_blank");
    setSent(true);
  };

  return (
    <section id="lead-form" className="scroll-mt-20 border-y border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">გაინტერესებთ? დაგვიკავშირდით!</h2>
        <p className="mb-8 text-gray-500">შეავსეთ ფორმა და WhatsApp-ით მოგწერთ ჩვენი კონსულტანტი საუკეთესო შეთავაზებით.</p>
        {sent ? (
          <div className="rounded-2xl bg-green-50 p-8">
            <div className="mb-3 flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-12 w-12 text-green-500">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-lg font-bold text-green-800">მადლობა! WhatsApp-ში გადამისამართდით.</p>
            <button onClick={() => setSent(false)} className="mt-4 text-sm text-green-600 underline">ხელახლა გაგზავნა</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-3">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="თქვენი სახელი" className="w-full rounded-xl border border-gray-300 bg-white px-5 py-3.5 text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20" />
            <div className="flex flex-col gap-3 sm:flex-row">
              <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="ტელეფონის ნომერი *" className="flex-1 rounded-xl border border-gray-300 bg-white px-5 py-3.5 text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20" />
              <button type="submit" className="rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:from-orange-600 hover:to-orange-700 active:scale-95">გაგზავნა</button>
            </div>
            <p className="text-xs text-gray-400">პერსონალურ მონაცემებს არ ვუზიარებთ მესამე მხარეებს</p>
          </form>
        )}
      </div>
    </section>
  );
}
