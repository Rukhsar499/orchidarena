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
      <section className="banner relative w-full h-[400px] md:h-[300px] mb[50px]">
        {/* Desktop Banner */}
        <div className="hidden md:block relative w-full h-full">
          <Image
            src="/assets/img/desktop-banner.jpg"
            alt="Event"
            fill
            className="object-cover w-full h-full"
            priority
          />
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
