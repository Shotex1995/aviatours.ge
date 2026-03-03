"use client";

import { useState, useEffect } from "react";

function getTargetDate(): Date {
  const now = new Date();
  const end = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
  return end;
}

function calcRemaining(target: Date) {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

export default function CountdownTimer() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = getTargetDate();
    setTime(calcRemaining(target));
    setMounted(true);
    const id = setInterval(() => setTime(calcRemaining(target)), 1000);
    return () => clearInterval(id);
  }, []);

  if (!mounted) return null;

  const items = [
    { value: time.days, label: "დღე" },
    { value: time.hours, label: "საათი" },
    { value: time.minutes, label: "წუთი" },
    { value: time.seconds, label: "წამი" },
  ];

  return (
    <div className="flex items-center justify-center gap-2">
      <span className="text-sm font-semibold text-white/70">შეთავაზება მთავრდება:</span>
      {items.map((item) => (
        <div key={item.label} className="flex flex-col items-center rounded-lg bg-white/10 px-3 py-1.5 backdrop-blur-sm">
          <span className="text-lg font-bold text-white">{String(item.value).padStart(2, "0")}</span>
          <span className="text-[10px] text-white/60">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
