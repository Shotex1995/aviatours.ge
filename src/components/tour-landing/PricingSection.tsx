import type { PricingData } from "@/data/tour-landing.types";

const checkIcon = (color: string) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`h-5 w-5 shrink-0 ${color}`}>
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
  </svg>
);

export default function PricingSection({ pricing }: { pricing: PricingData }) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">ტურის ფასები</h2>
          <p className="text-gray-500">ფასი დამოკიდებულია სეზონსა და სასტუმროს კატეგორიაზე</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border-2 border-gray-200 bg-white p-8 text-center">
            <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-gray-400">ბიუჯეტური</p>
            <p className="text-sm text-gray-400 line-through">{pricing.budgetOldPrice}</p>
            <p className="mb-1 text-5xl font-extrabold text-gray-900">{pricing.budgetPrice.toLocaleString()}<span className="text-2xl text-gray-400">₾</span></p>
            <p className="mb-6 text-sm text-gray-400">ერთ პერსონაზე</p>
            <ul className="mb-8 space-y-3 text-left text-sm text-gray-600">
              {pricing.budgetFeatures.map((t) => (
                <li key={t} className="flex items-center gap-2">{checkIcon("text-green-500")}{t}</li>
              ))}
            </ul>
            <a href={pricing.bookingUrl} target="_blank" rel="noopener noreferrer" className="block w-full rounded-xl border-2 border-orange-500 py-3 text-center font-bold text-orange-500 transition-all hover:bg-orange-500 hover:text-white">დაჯავშნა</a>
          </div>
          <div className="relative rounded-2xl border-2 border-orange-500 bg-white p-8 text-center shadow-xl shadow-orange-500/10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-4 py-1 text-xs font-bold text-white">პოპულარული</div>
            <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-orange-500">პრემიუმი</p>
            <p className="text-sm text-gray-400 line-through">{pricing.premiumOldPrice}</p>
            <p className="mb-1 text-5xl font-extrabold text-gray-900">{pricing.premiumPrice.toLocaleString()}<span className="text-2xl text-gray-400">₾</span></p>
            <p className="mb-6 text-sm text-gray-400">ერთ პერსონაზე</p>
            <ul className="mb-8 space-y-3 text-left text-sm text-gray-600">
              {pricing.premiumFeatures.map((t) => (
                <li key={t} className="flex items-center gap-2">{checkIcon("text-orange-500")}{t}</li>
              ))}
            </ul>
            <a href={pricing.bookingUrl} target="_blank" rel="noopener noreferrer" className="block w-full rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 py-3 text-center font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:from-orange-600 hover:to-orange-700 active:scale-95">დაჯავშნა</a>
          </div>
        </div>
      </div>
    </section>
  );
}
