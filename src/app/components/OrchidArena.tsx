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
                <div className="absolute -bottom-10 -right-2 bg-[#1f1f0f] md:py-8 md:p-10 max-w-[340px] h-[210px]">
                    <h2 className="text-white mb-0 font-semibold text-[34px] ">THE BEST TURFS IN <br /> THE HEART OF THE CITY</h2>
                </div>
            </div>

            {/* Right Content */}
            <div className="w-full md:w-1/2 flex flex-col gap-6">
                <h2 className="text-3xl md:text-[55px] font-semibold">
                    WELCOME TO ORCHID <br /> ARENA
                </h2>
                <p className="text-[18px] text-[#656565]">
                    Located in the heart of the city, our state-of-the-art multi-sports arena is your ultimate destination for recreation, competition, and celebration. Whether you’re here to play, train, or unwind, we’ve got something for everyone.
                </p>
                <p className="text-[18px] text-[#656565]">
                    Step onto our professionally maintained pickleball courts, or enjoy the thrill of the game on our floodlit football and cricket turf, perfect for both day and night matches. With top-quality facilities and ample space, our venue is ideal for hosting tournaments, leagues, and private parties of all kinds.
                </p>
                <p className="text-[18px] text-[#656565]">
                    From serious sportspersons to casual players and event organizers, our arena offers a vibrant, dynamic environment that brings people together through sport and celebration.
                </p>
                <p className="text-[18px] text-[#656565]">Game on. Lights on. Let the action begin.</p>

                <button
                    type="submit"
                    className="font-['DM_Sans'] flex items-center mt-4 justify-center gap-2 px-10 py-3 bg-[#2eac6d] text-white font-semibold  hover:bg-green-700 transition w-fit"
                >
                    <span>Book Now</span>
                </button>
            </div>
        </section>
    );
};

export default OrchidArena;
