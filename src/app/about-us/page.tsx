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
      <section className="banner">
        <Image
          src="/assets/img/desktop-banner.jpg"
          alt="Event"
          className="w-full md:block hidden"
          width={400}
          height={400}
        />
         <Image
          src="/assets/img/mob-banner.jpg"
          alt="Event"
          className="w-full md:hidden block"
          width={400}
          height={400}
        />
      </section>
      <OrchidArena />
      {/* <CounterSection/>
      <FeatureSection/>
      <TestimonialSlider/>
      <VideoSection/> */}
    </>
  );
}
