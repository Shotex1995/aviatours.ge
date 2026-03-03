"use client";

import { useRef, useEffect, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  direction?: "up" | "left" | "right";
  delay?: number;
}

export default function ScrollReveal({ children, direction = "up", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("revealed"), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const cls =
    direction === "left"
      ? "scroll-reveal-left"
      : direction === "right"
        ? "scroll-reveal-right"
        : "scroll-reveal";

  return (
    <div ref={ref} className={cls}>
      {children}
    </div>
  );
}
