"use client";

import { useState } from "react";


export default function VideoSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className="relative h-[500px] md:h-[600px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/img/Screenshot-1472.jpg')" }}
    >
      {/* Overlay dark effect */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Play button */}
      <button
        onClick={() => setIsOpen(true)}
        className="z-10 w-20 h-20 rounded-full border-2 border-white flex items-center justify-center text-white text-lg font-semibold hover:scale-105 transition"
      >
        PLAY
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl mx-4">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-gray-300"
            >
              ×
            </button>

            {/* Video iframe */}
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1"
                title="Video Player"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-[400px] md:h-[500px] rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
