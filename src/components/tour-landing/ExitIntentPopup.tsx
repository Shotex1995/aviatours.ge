"use client";

import { useState, useEffect } from "react";
import type { ExitIntentData } from "@/data/tour-landing.types";

export default function ExitIntentPopup({ exitIntent }: { exitIntent: ExitIntentData }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("exit_shown")) return;
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShow(true);
        sessionStorage.setItem("exit_shown", "1");
        document.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    let lastScroll = 0;
    const handleScroll = () => {
      const y = window.scrollY;
      const half = document.documentElement.scrollHeight / 2;
      if (y > half && y < lastScroll - 100) {
        setShow(true);
        sessionStorage.setItem("exit_shown", "1");
        window.removeEventListener("scroll", handleScroll);
      }
      lastScroll = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!show) return null;

  const msg = encodeURIComponent(exitIntent.whatsappMessage);

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
        <button onClick={() => setShow(false)} className="absolute right-4 top-4 text-gray-300 hover:text-gray-500" aria-label="დახურვა">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" /></svg>
        </button>
        <div className="mb-4 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-3xl">🌐</div>
        </div>
        <h3 className="mb-2 text-center text-2xl font-extrabold text-gray-900">მოიცადეთ!</h3>
        <p className="mb-6 text-center text-gray-500">დაჯავშნეთ {exitIntent.tourName} ტური და მიიღეთ <span className="font-bold text-orange-600">{exitIntent.internetOffer} სამოგზაურო ინტერნეტი</span> სრულიად უფასოდ!</p>
        <div className="mb-6 rounded-xl bg-blue-50 p-4 text-center">
          <span className="text-2xl font-extrabold tracking-widest text-blue-600">{exitIntent.internetOffer} INTERNET</span>
          <p className="mt-1 text-sm text-blue-500">საჩუქრად ყველა მგზავრისთვის</p>
        </div>
        <a href={`https://wa.me/995558302303?text=${msg}`} target="_blank" rel="noopener noreferrer" className="block w-full rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 py-4 text-center text-lg font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:from-orange-600 hover:to-orange-700 active:scale-95">მინდა ინტერნეტი!</a>
        <button onClick={() => setShow(false)} className="mt-3 w-full text-center text-sm text-gray-400 hover:text-gray-600">არა, მადლობა</button>
      </div>
    </div>
  );
}
