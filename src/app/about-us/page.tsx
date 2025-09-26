import Image from "next/image";
import OrchidArena from "../components/OrchidArena"
import CounterSection from "../components/CounterSection"
import TestimonialSlider from "../components/TestimonialSlider"
import FeatureSection from "../components/FeatureSection"


export default function Home() {
  return (
    <>
     <OrchidArena /> 
      <CounterSection/>
      <TestimonialSlider/>
      <FeatureSection/>
    </>
  );
}
