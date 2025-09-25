"use client";
import Image from "next/image";

import { motion } from "framer-motion";

const facilities = [
    {
        title: "CRICKET",
        desc: "Perfect pitches for tournaments and friendly matches.",
        icon: (
            <Image
                src="/assets/img/cricket1.png"
                alt="Cricket"
                className="transition duration-300 group-hover:brightness-0"
                width={70}
                height={70}
            />
        ),
    },
    {
        title: "FOOTBALL",
        desc: "Turf fields ready for all match types, day or night.",
        icon: (
            <Image
                src="/assets/img/football.png"
                alt="Cricket"
                className="transition duration-300 group-hover:brightness-0"
                width={60}
                height={60}
            />
        ),
    },
    {
        title: "PICKLEBALL",
        desc: "Dedicated courts for competitive and casual play.",
        icon: (
           <Image
                src="/assets/img/training-gear.png"
                alt="Cricket"
                className="transition duration-300 group-hover:brightness-0"
                width={70}
                height={70}
            />
        ),
    },
    {
        title: "EVENTS",
        desc: "Host team games, sports days, and group activities.",
        icon: (
           <Image
                src="/assets/img/red-carpet.png"
                alt="Cricket"
                className="transition duration-300 group-hover:brightness-0"
                width={70}
                height={70}
            />
        ),
    },
];

export default function Facilities() {
    return (
        <section className="bg-[#F3F8F9] py-16">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">
                {facilities.map((item, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="group flex flex-col text-left cursor-pointer"
                    >
                        <div className="text-green-600">{item.icon}</div>
                        <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                        <p className="text-gray-600 mt-2">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
