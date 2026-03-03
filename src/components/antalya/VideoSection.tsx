"use client";

import Image from "next/image";
import { useState } from "react";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="bg-gray-900 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-extrabold text-white sm:text-4xl">ნახე ანტალია ვიდეოში</h2>
          <p className="text-gray-400">გაიცანი ქალაქი, სანამ გეწვევი</p>
        </div>
        <div className="relative overflow-hidden rounded-2xl shadow-2xl" style={{ paddingBottom: "56.25%" }}>
          {playing ? (
            <iframe
              src="https://www.youtube.com/embed/cHIdIMhDRig?rel=0&autoplay=1"
              title="ანტალია - ტურისტული გიდი"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          ) : (
            <button onClick={() => setPlaying(true)} className="absolute inset-0 group cursor-pointer">
              <Image
                src="https://i.ytimg.com/vi/cHIdIMhDRig/maxresdefault.jpg"
                alt="ანტალია ვიდეო თამბნეილი"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 64rem"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/40">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-600 shadow-2xl transition-transform group-hover:scale-110">
                  <svg viewBox="0 0 24 24" fill="white" className="ml-1 h-8 w-8">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
