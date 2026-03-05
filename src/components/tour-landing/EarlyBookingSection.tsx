import type { EarlyBookingData } from "@/data/tour-landing.types";

export default function EarlyBookingSection({ earlyBooking }: { earlyBooking: EarlyBookingData }) {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-amber-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <span className="mb-2 inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-bold text-orange-600">დაზოგე 30%-მდე</span>
          <h2 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">წინასწარი ჯავშნის უპირატესობები</h2>
          <p className="text-gray-500">რატომ ჯობს ტურის წინასწარ დაჯავშნა?</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {earlyBooking.benefits.map((item, i) => (
            <div key={i} className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-2xl">{item.emoji}</div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href={earlyBooking.bookingUrl} className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-10 py-4 text-lg font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-600 hover:shadow-xl active:scale-95">{earlyBooking.ctaText}</a>
        </div>
      </div>
    </section>
  );
}
