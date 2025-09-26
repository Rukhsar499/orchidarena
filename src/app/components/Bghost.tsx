"use client";




export default function VideoSection() {
 

  return (
    <section
      className="relative relative w-full h-screen overflow-hidden flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/img/b-host.jpg')" }}
    >
      {/* Overlay dark effect */}
      <div className="absolute inset-0 bg-black/50"></div>
   </section>
  );
}
