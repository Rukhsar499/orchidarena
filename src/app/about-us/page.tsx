'use client';
import Image from "next/image";
import OrchidArena from "../components/OrchidArena"
// import CounterSection from "../components/CounterSection"
// import TestimonialSlider from "../components/TestimonialSlider"
// import FeatureSection from "../components/FeatureSection"
// import VideoSection from "../components/VideoSection"


export default function Home() {
  return (
    <>
      <section className="banner relative w-full h-[400px] md:h-[300px] mb-5">
        {/* Desktop Banner */}
        <div className="hidden md:block relative w-full h-full">
          <Image
            src="/assets/img/desktop-banner.png"
            alt="Event"
            fill
            className="object-cover w-full h-full"
            priority
          />
          <h1 className="text-[#fff] text-5xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            About Us
          </h1>
        </div>

        {/* Mobile Banner */}
        <div className="block md:hidden relative w-full h-full">
          <Image
            src="/assets/img/mob-banner.jpg"
            alt="Event"
            fill
            className="object-cover w-full h-full"
            priority
          />
          <h1 className="text-[#fff] text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            About Us
          </h1>
        </div>
      </section>
      <OrchidArena />
      {/* <CounterSection/>
      <FeatureSection/>
      <TestimonialSlider/>
      <VideoSection/> */}
    </>
  );
}
