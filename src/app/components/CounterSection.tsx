"use client";

import { useEffect, useState } from "react";

interface CounterItem {
  number: number;
  label: string;
}

const counters: CounterItem[] = [
  { number: 200000, label: "Area SQ FT" },
  { number: 2, label: "FLOOD LIT TURFS" },
  { number: 2, label: "PICKLEBALL COURTS" },
  { number: 100, label: "+" },
];

const CounterSection = () => {
  const [counts, setCounts] = useState<number[]>(counters.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((val, i) => {
          if (val < counters[i].number) {
            const increment = Math.ceil(counters[i].number / 100); // speed
            return Math.min(val + increment, counters[i].number);
          }
          return val;
        })
      );
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative py-20 bg-gray-100 flex justify-around flex-wrap">
      {counters.map((item, index) => (
        <div key={index} className="relative w-48 h-48 flex flex-col items-center justify-center m-4">
          {/* Background Text */}
          <span className="absolute text-gray-300 text-6xl md:text-7xl font-bold select-none pointer-events-none">
            {item.number.toLocaleString()}
          </span>
          {/* Animated Number */}
          <span className="text-3xl md:text-4xl font-bold z-10">{counts[index].toLocaleString()}</span>
          <span className="mt-2 text-center text-sm md:text-base z-10">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CounterSection;