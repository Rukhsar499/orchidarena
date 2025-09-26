'use client';
import Image from "next/image";
import React from "react";


const OrchidArena: React.FC = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8 my-24 flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 flex flex-col gap-6">
                <h2 className="text-3xl md:text-[55px] font-semibold">
                    Host Your Event at <br /> Orchid Arena
                </h2>
                <p className="text-[18px] text-[#656565]">
                    At Orchid Arena, we specialize in hosting top-notch outdoor sports tournaments. Whether you’re planning a competitive league or a friendly match, our facility offers the perfect setting for football, cricket, and pickleball events.
                </p>
                <p className="text-[18px] text-[#656565]">
                    With premium turf, dedicated courts, professional lighting, and support staff, we make sure your sports event is seamless, energetic, and memorable.
                </p>
                <div className="flex mb-1">
                    <Image
                        src="/assets/img/football.png"
                        alt="A soccer arena"
                        width={30}
                        height={20}
                        className="mr-3 h-7"
                    />
                    <p className="text-[18px] text-[#656565]">
                        Gaming & eSports Tournaments
                    </p>
                </div>
                <div className="flex mb-1">
                    <Image
                        src="/assets/img/football.png"
                        alt="A soccer arena"
                        width={30}
                        height={20}
                        className="mr-3 h-7"
                    />
                    <p className="text-[18px] text-[#656565]">
                        Gaming & eSports Tournaments
                    </p>
                </div>
                <div className="flex mb-1">
                    <Image
                        src="/assets/img/football.png"
                        alt="A soccer arena"
                        width={30}
                        height={20}
                        className="mr-3 h-7"
                    />
                    <p className="text-[18px] text-[#656565]">
                        Gaming & eSports Tournaments
                    </p>
                </div>
                <button
                    type="submit"
                    className="font-['DM_Sans'] flex items-center mt-4 justify-center gap-2 px-10 py-3 bg-[#2eac6d] text-white font-semibold  hover:bg-green-700 transition w-fit"
                >
                    <span>Book Your Event</span>
                </button>
            </div>
            <div className=" w-full md:w-1/2">
                <Image
                    src="/assets/img/host-arena.jpg"
                    alt="A soccer arena"
                    width={500}
                    height={300}
                />

            </div>
        </section>
    );
};

export default OrchidArena;
