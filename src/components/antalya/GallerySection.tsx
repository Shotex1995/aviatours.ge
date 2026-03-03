"use client";

import Image from "next/image";
import { useState } from "react";
import { galleryImages } from "@/data/antalya";
import Lightbox from "@/components/ui/Lightbox";

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section className="border-t border-gray-200 bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">ფოტო გალერეა</h2>
          <p className="text-gray-500">ანტალიის საუკეთესო კადრები — დააკლიკე გასადიდებლად</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((img, i) => (
            <button key={i} onClick={() => setLightboxIndex(i)} className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl">
              <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all group-hover:bg-black/20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-10 w-10 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length)}
          onNext={() => setLightboxIndex((lightboxIndex + 1) % galleryImages.length)}
        />
      )}
    </section>
  );
}
