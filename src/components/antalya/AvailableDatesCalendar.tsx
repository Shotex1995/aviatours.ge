"use client";

import { useState } from "react";
import { departureDates, georgianMonths, georgianDays } from "@/data/antalya";

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(year: number, month: number) {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1; // Monday=0
}

export default function AvailableDatesCalendar() {
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfWeek(year, month);

  const datesInMonth = departureDates.filter((d) => {
    const dt = new Date(d.date);
    return dt.getFullYear() === year && dt.getMonth() === month;
  });

  const dateMap = new Map(datesInMonth.map((d) => [new Date(d.date).getDate(), d]));

  const goBack = () => {
    if (month === 0) { setMonth(11); setYear(year - 1); }
    else setMonth(month - 1);
  };
  const goForward = () => {
    if (month === 11) { setMonth(0); setYear(year + 1); }
    else setMonth(month + 1);
  };

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">გამგზავრების თარიღები</h2>
          <p className="text-gray-500">აირჩიე შენთვის სასურველი თარიღი</p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          {/* Month navigation */}
          <div className="mb-4 flex items-center justify-between">
            <button onClick={goBack} className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" /></svg>
            </button>
            <span className="text-lg font-bold text-gray-900">{georgianMonths[month]} {year}</span>
            <button onClick={goForward} className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" /></svg>
            </button>
          </div>

          {/* Day headers */}
          <div className="mb-2 grid grid-cols-7 text-center text-xs font-semibold text-gray-400">
            {georgianDays.map((d) => <div key={d}>{d}</div>)}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: firstDay }).map((_, i) => <div key={`e-${i}`} />)}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const dep = dateMap.get(day);
              return (
                <div
                  key={day}
                  className={`relative flex h-10 items-center justify-center rounded-lg text-sm transition-colors ${
                    dep
                      ? "cursor-pointer bg-orange-100 font-bold text-orange-700 hover:bg-orange-200"
                      : "text-gray-400"
                  }`}
                  title={dep ? `${dep.price.toLocaleString()}₾ — ${dep.seatsLeft} ადგილი` : undefined}
                >
                  {day}
                  {dep && (
                    <span className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-orange-500" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Legend */}
          {datesInMonth.length > 0 && (
            <div className="mt-4 space-y-2 border-t border-gray-100 pt-4">
              {datesInMonth.map((d, i) => {
                const dt = new Date(d.date);
                return (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span className="font-medium text-gray-700">{dt.getDate()} {georgianMonths[dt.getMonth()]}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-gray-400">{d.seatsLeft} ადგილი</span>
                      <span className="font-bold text-orange-600">{d.price.toLocaleString()}₾</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
