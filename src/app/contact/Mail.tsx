"use client";
import Image from "next/image";

import { motion } from "framer-motion";

const facilities = [
    {
        title: "Mail",
        desc: "psm@gmail.com",
        icon: (
            <Image
                src="/assets/img/email.png"
                alt="Cricket"
                className="transition duration-300 group-hover:brightness-0"
                width={60}
                height={60}
            />
        ),
    },
    {
        title: "Phone",
        desc: "1234567890",
        icon: (
            <Image
                src="/assets/img/telephone-call.png"
                alt="Cricket"
                className="transition duration-300 group-hover:brightness-0"
                width={60}
                height={60}
            />
        ),
    },
    {
        title: "Address",
        desc: "Narayana Street kolkata 700039",
        icon: (
           <Image
                src="/assets/img/location.png"
                alt="Cricket"
                className="transition duration-300 group-hover:brightness-0"
                width={60}
                height={60}
            />
        ),
    },
    
];

export default function Facilities() {
    return (
        <section className="bg-[#F3F8F9] md:py-30 py-8 mx-auto">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-2">
                {facilities.map((item, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="group flex flex-col text-left cursor-pointer"
                    >
                        <div className="text-green-600">{item.icon}</div>
                        <h3 className="mt-4 text-[24px] font-semibold">{item.title}</h3>
                        <p className="text-gray-600 mt-2 text-[16px]">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
