// components/OrchidArena.tsx
import Image from "next/image";
import React from "react";
import Link from "next/link";


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
                <div className="absolute -bottom-10 -right-2 bg-[#1f1f0f] md:py-8 md:p-10 px-6 py-4 max-w-[340px] md:h-[210px] h-[130px]">
                    <h2 className="text-white mb-0 font-semibold md:text-[34px] text-[22px]">PSM Turf –
                        <br />Let the  games  begin!</h2>
                </div>
            </div>

            {/* Right Content */}
            <div className="w-full md:w-1/2 flex flex-col gap-6">
                <h2 className="text-3xl md:text-[55px] font-semibold">
                    WELCOME TO PSM Turf
                </h2>
                <p className="text-[18px] text-[#656565]">
                    Our cutting-edge football turf is in multiple locations across West Bengal. It is the perfect place for celebration, competition, and leisure. We have something for you if you're just here to play football. Enter our well-kept football field or experience the excitement of a game on our floodlit field, which is ideal for both day and night games. Our turf is perfect for holding leagues and tournaments of all kinds because it has excellent facilities and lots of room. We cater to serious athletes to recreational players of all ability levels. Our arena provides a lively, dynamic setting that unites people via lovely game of football. Go for it. The lights are on. Now let&apos;s get started.

                </p>


                 <Link href="/booking"><button
                    type="submit"
                    className="font-['DM_Sans'] flex items-center mt-4 justify-center gap-2 px-10 py-3 bg-[#2eac6d] text-white font-semibold  hover:bg-green-700 transition w-fit"
                >
                    <span>Book Now</span>
                </button></Link>
            </div>
        </section>
    );
};

export default OrchidArena;
