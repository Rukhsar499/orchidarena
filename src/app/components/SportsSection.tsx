"use client";

import { useState } from "react";
import Image from "next/image";

interface Sport {
  name: string;
  image: string;
  description: string;
}

const sports: Sport[] = [
  {
    name: "Cricket",
    image: "/assets/img/crich.jpg",
    description:
      "International-Standard Turf designed for both professional and amateur cricket with a premium playing surface. State-of-the-Art Floodlighting: Enjoy day/night matches with top-tier floodlighting that ensures perfect visibility.",
  },
  {
    name: "Football",
    image: "/assets/img/crich.jpg",
    description:
      "Premium football turf designed for both casual and competitive play. Equipped with floodlights and high-quality grass to ensure excellent ball control and performance.",
  },
  {
    name: "Pickleball",
    image: "/assets/img/crich.jpg",
    description:
      "Top-notch pickleball courts with cushioned surfaces and pro-level nets. Perfect for friendly matches, training, or tournaments.",
  },
  {
    name: "Events",
    image: "/assets/img/crich.jpg",
    description:
      "Multi-purpose arena for corporate events, parties, and social gatherings. Flexible setup with seating, sound, and lighting support.",
  },
];

export default function SportsSection() {
  const [activeSport, setActiveSport] = useState<Sport>(sports[0]);

  return (
    <section className="w-full py-30 bg-gray-50 mb-20">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col lg:flex-row gap-10">
        {/* Left Image + Black Overlay */}
        <div className="relative w-full lg:w-1/2 h-[650px] flex justify-start">
          <Image
            src={activeSport.image}
            alt={activeSport.name}
            width={400} // kam width
            height={650} // zyada height
            className="w-[440px] h-full object-cover"
          />

          {/* Black Overlay */}
          <div className="absolute -bottom-30 right-2 bg-black/90 text-white p-6 md:p-10 max-w-[490px] h-[350px] flex items-center">
            <p className="text-sm md:text-base leading-relaxed">
              {activeSport.description}
            </p>
          </div>
        </div>

        {/* Right Side Sports List */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start p-4 space-y-6 px-10">
          <p className="text-[18px] text-[#656565]">
            Experience world-class sports and event facilities designed for
            excellence — from international-standard turfs to high-performance
            courts and multi-purpose arenas. Whether you’re here to play,
            compete, or celebrate, we’ve created a space where every moment
            counts.
          </p>

          <div className="space-y-4 mt-9">
            {sports.map((sport) => (
              <button
                key={sport.name}
                onMouseEnter={() => setActiveSport(sport)}
                onClick={() => setActiveSport(sport)}
                className={`block md:text-[47px] mb-0 font-semibold transition cric ${
                  activeSport.name === sport.name
                    ? "text-black"
                    : "text-gray-400 hover:text-black"
                }`}
              >
                {sport.name.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
