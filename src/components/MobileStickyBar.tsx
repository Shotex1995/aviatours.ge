"use client";

import { useEffect, useState } from "react";

interface MobileStickyBarProps {
  price?: string;
  label?: string;
  href?: string;
}

export default function MobileStickyBar({
  price = "1,550₾",
  label = "დაჯავშნე",
  href = "https://avia.ge/tours/antalya-tour/",
}: MobileStickyBarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200 bg-white/95 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] backdrop-blur-sm lg:hidden">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs text-gray-400">ფასი იწყება</p>
          <p className="text-xl font-extrabold text-gray-900">
            <span className="mr-1 text-sm font-normal text-gray-400 line-through">
              2,200₾
            </span>
            {price}
          </p>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:from-orange-600 hover:to-orange-700 active:scale-95"
        >
          {label}
        </a>
      </div>
    </div>
  );
}
