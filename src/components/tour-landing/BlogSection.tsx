import type { BlogPlace } from "@/data/tour-landing.types";

export default function BlogSection({ blogPlaces, heading, subheading }: { blogPlaces: BlogPlace[]; heading: string; subheading: string }) {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <span className="mb-2 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-bold text-blue-600">სასარგებლო</span>
          <h2 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">{heading}</h2>
          <p className="text-gray-500">{subheading}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {blogPlaces.map((place, i) => (
            <div key={i} className="flex gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-5 transition-all hover:border-orange-200 hover:bg-orange-50/30">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-600">{i + 1}</div>
              <div>
                <h3 className="mb-1 font-bold text-gray-900">{place.title}</h3>
                <p className="text-sm text-gray-500">{place.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
