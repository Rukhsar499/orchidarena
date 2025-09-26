"use client";
import { motion } from "framer-motion";



export default function VideoSection() {
 

  return (
    <section
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/img/b-host.jpg')" }}
    >
      {/* Overlay dark effect */}
      <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute bottom-40 left-25 leading-tight tracking-tight z-10 flex flex-col items-start justify-center  text-left text-white px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-4xl md:text-[120px] font-semibold mb-0"
                >
                    Perfect Turf For Your
                </motion.h2>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-4xl md:text-[120px] font-semibold mb-0"
                >
                    Tournament
                </motion.h2>
            </div>
   </section>
  );
}
