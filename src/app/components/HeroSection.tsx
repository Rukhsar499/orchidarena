"use client";

// import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="bg-[#F3F8F9] relative w-full h-screen overflow-hidden">
            {/* Background Video */}
            <video
                className="px-6 py-4 absolute top-0 left-0 w-full h-full object-cover"
                src="/assets/video/New-video.mp4"
                autoPlay
                loop
                muted
                playsInline
            />



            {/* Animated Text */}
            {/* <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-4xl md:text-6xl font-bold"
                >
                    Welcome to Arena
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-4 text-lg md:text-2xl"
                >
                    Host your events with style & energy ⚡
                </motion.p>
            </div> */}
        </section>
    );
}
