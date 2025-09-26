"use client";

import { useState } from "react";
import Image from "next/image";

interface AccordionItem {
    id: number;
    title: string;
    content: string;
}

const accordionData: AccordionItem[] = [
    {
        id: 1,
        title: "Football Training",
        content:
            "Our football training programs are designed to improve skills, teamwork, and overall performance on the field.",
    },
    {
        id: 2,
        title: "Fitness Programs",
        content:
            "Customized fitness routines to help athletes stay in shape and reach their peak performance.",
    },
    {
        id: 3,
        title: "Tournaments",
        content:
            "We organize exciting football tournaments to boost competitive spirit and sportsmanship.",
    },
];

export default function FeatureSection() {
    const [openId, setOpenId] = useState<number>(1); // default open first

    return (
        <section className="  bg-[#F3F8F9]">
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left side */}
            <div>
                {/* Accordion */}
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-[55px] font-semibold">
                        We are proud to be the best at what we do
                    </h2>

                    {accordionData.map((item) => (
                        <div
                            key={item.id}
                            className="overflow-hidden"
                        >
                            <button
                                onClick={() =>
                                    setOpenId(openId === item.id ? -1 : item.id)
                                }
                                className="flex justify-between items-center w-full px-5 py-2 border-b-1  transition"
                            >
                                <div className="flex items-center gap-3">
                                    {/* Football Icon (replace src with your football image path) */}
                                    <Image
                                        src="/assets/img/football.png"
                                        alt="Football"
                                        width={20}
                                        height={20}
                                    />
                                    <span className="font-semibold text-gray-800 text-[20px]">
                                        {item.title}
                                    </span>
                                </div>
                                <span className="text-gray-500 text-xl">
                                    {openId === item.id ? "−" : "+"}
                                </span>
                            </button>
                            {openId === item.id && (
                                <div className="px-5 py-4 text-gray-600 text-sm">
                                    {item.content}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Two side by side boxes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                    <div className="bg-[#91BE4D]  shadow-md p-6 hover:shadow-lg transition md:py-15">
                        <h2 className="text-[21px] font-semibold text-[#fff] mb-0">
                            People
                        </h2>
                        <h2 className="md:text-[60px] text-[#fff] font-semibold mt-0 mb-0">2000+</h2>
                        <p className="text-[#fff] text-sm">
                            Regular players enjoying sports and recreation at Orchid Arena.
                        </p>
                    </div>

                    <div className="bg-[#272702]  shadow-md p-6 hover:shadow-lg transition md:py-15">
                        <h2 className="text-[21px] font-semibold text-[#fff] mb-0">
                           events hosted
                        </h2>
                        <h2 className="md:text-[60px] text-[#fff] font-semibold mt-0 mb-0">100+</h2>
                        <p className="text-[#fff] text-sm">
                            Tournaments, Corporate Events & Social Events hosted.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right side image */}
            <div className="flex justify-center md:justify-end">
                <Image
                    src="/assets/img/badminton.jpg"
                    alt="Football Training"
                    width={550}
                    height={400}
                    className="object-cover shadow-md"
                />
            </div>
            </div>
        </section>
    );
}
