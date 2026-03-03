"use client";

import Image from "next/image";
import { useRef } from "react";
import { hotels } from "@/data/antalya";

export default function HotelCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.8;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">სასტუმროები</h2>
            <p className="text-gray-500">სადაც განთავსდებით ანტალიაში</p>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button onClick={() => scroll("left")} className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition-colors hover:bg-gray-100" aria-label="წინა">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" /></svg>
            </button>
            <button onClick={() => scroll("right")} className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition-colors hover:bg-gray-100" aria-label="შემდეგი">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" /></svg>
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 scrollbar-hide" style={{ scrollbarWidth: "none" }}>
          {hotels.map((hotel, i) => (
            <div key={i} className="w-72 shrink-0 snap-start rounded-2xl border border-gray-200 bg-white shadow-sm sm:w-80">
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
                <Image src={hotel.imageUrl} alt={hotel.name} fill className="object-cover" sizes="320px" />
              </div>
              <div className="p-5">
                <div className="mb-2 flex items-center gap-2">
                  <h3 className="font-bold text-gray-900">{hotel.name}</h3>
                  <div className="flex gap-0.5">
                    {Array.from({ length: hotel.stars }).map((_, j) => (
                      <svg key={j} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-yellow-400">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {hotel.features.map((f) => (
                    <span key={f} className="rounded-full bg-orange-50 px-2.5 py-0.5 text-xs font-medium text-orange-600">{f}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
