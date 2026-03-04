import type { IncludedItem } from "@/data/tour-landing.types";

export default function IncludedSection({ includedItems }: { includedItems: IncludedItem[] }) {
  return (
    <section className="border-y border-gray-200 bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">რა შედის ტურში?</h2>
          <p className="text-gray-500">ფასი მოცემულია ერთ პერსონაზე, ორადგილიან ნომერში</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {includedItems.map((item, i) => (
            <div key={i} className="flex flex-col items-center rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center transition-all hover:border-orange-200 hover:bg-orange-50">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path d={item.d} /></svg>
              </div>
              <p className="text-sm font-semibold text-gray-800">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
