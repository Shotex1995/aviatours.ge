"use client";

import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    setMounted(true);
    const tick = () => {
      const now = new Date();
      const end = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
      const diff = Math.max(0, end.getTime() - now.getTime());
      setTimeLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (!mounted) return null;

  const units = [
    { val: timeLeft.d, label: "დღე" },
    { val: timeLeft.h, label: "საათი" },
    { val: timeLeft.m, label: "წუთი" },
    { val: timeLeft.s, label: "წამი" },
  ];

  return (
    <div className="mt-4">
      <p className="mb-2 text-sm font-semibold text-orange-300">შეთავაზება მთავრდება:</p>
      <div className="inline-flex gap-3">
        {units.map((u) => (
          <div key={u.label} className="flex flex-col items-center rounded-lg bg-white/10 px-3 py-2 backdrop-blur-sm">
            <span className="text-2xl font-extrabold text-white">{String(u.val).padStart(2, "0")}</span>
            <span className="text-[10px] text-white/60">{u.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
