// components/OrchidArena.tsx
import Image from "next/image";
import React from "react";


const OrchidArena: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 my-24 flex flex-col md:flex-row items-center gap-12">
      {/* Left Image */}
      <div className="relative w-full md:w-1/2">
       <Image
        src="/assets/img/5634265.jpg"
        alt="A soccer arena"
        width={500} // Set appropriate width and height
        height={300}
      />
        <div className="absolute bottom-4 left-4 bg-[#1f1f0f] p-4 md:p-6 text-white font-bold text-sm md:text-lg">
          THE BEST TURFS IN <br /> THE HEART OF THE CITY
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <h2 className="text-3xl md:text-[55px] font-semibold">
          WELCOME TO ORCHID <br /> ARENA
        </h2>
        <p className="text-gray-700">
          Located in the heart of the city, our state-of-the-art multi-sports arena is your ultimate destination for recreation, competition, and celebration. Whether you’re here to play, train, or unwind, we’ve got something for everyone.
        </p>
        <p className="text-gray-700">
          Step onto our professionally maintained pickleball courts, or enjoy the thrill of the game on our floodlit football and cricket turf, perfect for both day and night matches. With top-quality facilities and ample space, our venue is ideal for hosting tournaments, leagues, and private parties of all kinds.
        </p>
        <p className="text-gray-700">
          From serious sportspersons to casual players and event organizers, our arena offers a vibrant, dynamic environment that brings people together through sport and celebration.
        </p>
        <p className="text-gray-700">Game on. Lights on. Let the action begin.</p>

        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded">
          BOOK NOW
        </button>
      </div>
    </section>
  );
};

export default OrchidArena;
