import type { MapData } from "@/data/tour-landing.types";

export default function InteractiveMap({ map }: { map: MapData }) {
  return (
    <section className="bg-gray-900 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-extrabold text-white sm:text-4xl">{map.heading}</h2>
          <p className="text-gray-400">{map.subheading}</p>
        </div>
        <div className="overflow-hidden rounded-2xl shadow-2xl">
          <iframe
            src={map.embedUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={map.mapTitle}
          />
        </div>
      </div>
    </section>
  );
}
