import Image from "next/image";
import type { AboutData } from "@/data/tour-landing.types";

export default function AboutSection({ about }: { about: AboutData }) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-orange-500">{about.tagline}</span>
            <h2 className="mb-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">{about.heading}</h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-600">
              {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {about.images[0] && (
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image src={about.images[0].src} alt={about.images[0].alt} fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
              </div>
            )}
            <div className="space-y-3">
              {about.images.slice(1, 3).map((img, i) => (
                <div key={i} className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
