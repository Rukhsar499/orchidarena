"use client";

import Image from "next/image";

export default function TurfGallery() {
  return (
    <section className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Large Image */}
        <div className="relative group overflow-hidden rounded-lg">
          <Image
            src="/assets/img/pickle.jpg" // replace with your image
            alt="Main Turf"
            width={800}
            height={600}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Right Side Grid (3 Images) */}
        <div className="grid grid-cols-2 grid-rows-2">
          {/* Top Right Large Image */}
          <div className="col-span-2 relative group overflow-hidden rounded-lg">
            <Image
              src="/assets/img/score.jpg" // replace with your image
              alt="Football Action"
              width={600}
              height={400}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
           
            
          </div>

          {/* Bottom Two Small Images */}
          <div className="relative group overflow-hidden rounded-lg">
            <Image
              src="/assets/img/wicket.jpg" // replace with your image
              alt="Cricket Turf"
              width={300}
              height={200}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="relative group overflow-hidden rounded-lg">
            <Image
              src="/assets/img/playground.jpg" // replace with your image
              alt="Evening Turf"
              width={300}
              height={200}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
