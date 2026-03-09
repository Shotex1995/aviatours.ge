"use client";

import { useEffect, useState } from "react";

const INITIAL_SEATS = 21;
const MIN_SEATS = 2;
const STORAGE_KEY = "aviatours_seats";

function getSeatsData(): Record<string, number> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function getSeats(slug: string): number {
  const data = getSeatsData();
  if (data[slug] === undefined) {
    const decrease = Math.floor(Math.random() * 2) + 1;
    data[slug] = INITIAL_SEATS - decrease;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return data[slug];
  }

  const lastVisitKey = `${STORAGE_KEY}_last_${slug}`;
  const lastVisit = localStorage.getItem(lastVisitKey);
  const now = Date.now();

  if (lastVisit && now - Number(lastVisit) < 30_000) {
    return data[slug];
  }

  localStorage.setItem(lastVisitKey, String(now));
  const decrease = Math.floor(Math.random() * 2) + 1;
  data[slug] = Math.max(MIN_SEATS, data[slug] - decrease);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  return data[slug];
}

export default function SeatsLeftBadge({ slug }: { slug: string }) {
  const [seats, setSeats] = useState<number | null>(null);

  useEffect(() => {
    setSeats(getSeats(slug));
  }, [slug]);

  return (
    <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-red-500/90 px-4 py-1.5 text-sm font-bold text-white backdrop-blur-sm">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
      </span>
      {seats !== null
        ? `დარჩა მხოლოდ ${seats} ადგილი ამ ფასად!`
        : "შეზღუდული ადგილები ამ ფასად!"}
    </span>
  );
}
