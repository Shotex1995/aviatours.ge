"use client";

import { useState } from "react";
import { calculateTotalPrice, departureDates, georgianMonths, BUDGET_BASE_PRICE, PREMIUM_BASE_PRICE } from "@/data/antalya";

export default function PriceCalculator() {
  const [tier, setTier] = useState<"budget" | "premium">("budget");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [dateIndex, setDateIndex] = useState(0);

  const filtered = departureDates.filter((d) => d.tier === tier);
  const selected = filtered[dateIndex] ?? filtered[0];
  const basePrice = selected?.price ?? (tier === "budget" ? BUDGET_BASE_PRICE : PREMIUM_BASE_PRICE);
  const total = basePrice * adults + Math.round(basePrice * 0.5) * children;

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return `${d.getDate()} ${georgianMonths[d.getMonth()]}`;
  };

  const whatsappMsg = encodeURIComponent(
    `გამარჯობა! მინდა ანტალიის ${tier === "premium" ? "პრემიუმ" : "ბიუჯეტური"} ტურის დაჯავშნა.\nთარიღი: ${selected ? formatDate(selected.date) : "—"}\nზრდასრული: ${adults}, ბავშვი: ${children}\nჯამი: ${total.toLocaleString()}₾`
  );

  return (
    <section className="border-y border-gray-200 bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">გამოთვალე ფასი</h2>
          <p className="text-gray-500">აირჩიე პაკეტი, თარიღი და მგზავრთა რაოდენობა</p>
        </div>

        <div className="space-y-6 rounded-2xl border border-gray-200 bg-gray-50 p-6">
          {/* Tier toggle */}
          <div className="flex gap-2 rounded-xl bg-gray-200 p-1">
            {(["budget", "premium"] as const).map((t) => (
              <button
                key={t}
                onClick={() => { setTier(t); setDateIndex(0); }}
                className={`flex-1 rounded-lg py-2.5 text-sm font-bold transition-all ${tier === t ? "bg-white text-orange-600 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
              >
                {t === "budget" ? "ბიუჯეტური" : "პრემიუმი"}
              </button>
            ))}
          </div>

          {/* Date select */}
          <div>
            <label className="mb-1 block text-sm font-semibold text-gray-700">გამგზავრების თარიღი</label>
            <select
              value={dateIndex}
              onChange={(e) => setDateIndex(Number(e.target.value))}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20"
            >
              {filtered.map((d, i) => (
                <option key={i} value={i}>{formatDate(d.date)} — {d.price.toLocaleString()}₾ ({d.seatsLeft} ადგილი)</option>
              ))}
            </select>
          </div>

          {/* People */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-semibold text-gray-700">ზრდასრული</label>
              <div className="flex items-center gap-3">
                <button onClick={() => setAdults(Math.max(1, adults - 1))} className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 text-lg font-bold text-gray-600 transition-colors hover:bg-gray-100">-</button>
                <span className="w-8 text-center text-lg font-bold">{adults}</span>
                <button onClick={() => setAdults(Math.min(6, adults + 1))} className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 text-lg font-bold text-gray-600 transition-colors hover:bg-gray-100">+</button>
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-gray-700">ბავშვი (2-12)</label>
              <div className="flex items-center gap-3">
                <button onClick={() => setChildren(Math.max(0, children - 1))} className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 text-lg font-bold text-gray-600 transition-colors hover:bg-gray-100">-</button>
                <span className="w-8 text-center text-lg font-bold">{children}</span>
                <button onClick={() => setChildren(Math.min(4, children + 1))} className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 text-lg font-bold text-gray-600 transition-colors hover:bg-gray-100">+</button>
              </div>
            </div>
          </div>

          {/* Total */}
          <div className="rounded-xl bg-orange-50 p-4 text-center">
            <p className="text-sm text-gray-500">ჯამური ფასი</p>
            <p className="text-4xl font-extrabold text-orange-600">{total.toLocaleString()}<span className="text-xl">₾</span></p>
            <p className="text-xs text-gray-400">{adults} ზრდასრული{children > 0 ? ` + ${children} ბავშვი` : ""}</p>
          </div>

          <a
            href={`https://wa.me/995558302303?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 py-4 text-center text-lg font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:from-orange-600 hover:to-orange-700 active:scale-95"
          >
            დაჯავშნე — {total.toLocaleString()}₾
          </a>
        </div>
      </div>
    </section>
  );
}
