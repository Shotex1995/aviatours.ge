import type { AirlineInfo } from "@/data/tour-landing.types";

export default function AirlineLogos({ airlines }: { airlines: AirlineInfo[] }) {
  return (
    <section className="border-b border-gray-200 bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-gray-400">ჩვენი ავიაპარტნიორები</p>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {airlines.map((airline) => (
            <div key={airline.abbr} className="flex h-12 items-center gap-2 rounded-lg border border-gray-100 px-5 py-2 grayscale transition-all hover:grayscale-0 hover:border-orange-200">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-gray-100 text-xs font-bold text-gray-500">{airline.abbr}</div>
              <span className="text-sm font-semibold text-gray-600">{airline.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
