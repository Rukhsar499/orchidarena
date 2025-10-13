"use client";
import Image from "next/image";

import { motion } from "framer-motion";

const facilities = [
    {
    title: "Mail",
    desc: "psmmanagementservicespvtltd@gmail.com",
    icon: (
        <a href="mailto:psmmanagementservicespvtltd@gmail.com">
            <Image
                src="/assets/img/email.png"
                alt="Mail"
                className="transition duration-300 group-hover:brightness-0"
                width={60}
                height={60}
            />
        </a>
    ),
},
    {
        title: "Phone",
        desc: "+91 9147766682",
        icon: (
             <a href="tel:+91 9147766682">
            <Image
                src="/assets/img/telephone-call.png"
                alt="Cricket"
                className="transition duration-300 group-hover:brightness-0"
                width={60}
                height={60}
            />
        </a>
        ),
    },
    {
        title: "Address",
        desc: "Plot No IIF/11, Unit No. ESNTB0202, Ecospace Business Park, Rajarhat, New Town, South Twenty Four Parganas, West Bengal, 700156",
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
        <section className="bg-[#F3F8F9] md:py-30 py-25  mx-auto">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
                {facilities.map((item, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="group flex flex-col md:text-left cursor-pointer  md:border-0 border-b-1 border-[#0000005b] md:pb-0 pb-4"
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
