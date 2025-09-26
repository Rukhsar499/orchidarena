
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import Facilities from "./components/Facilities"
import OrchidArena from "./components/OrchidArena"
import Footer from "./components/Footer"
import ContactForm from "./components/ContactForm"
import SportsSection from "./components/SportsSection"
import CounterSection from "./components/CounterSection"
import Image from "next/image"




export default function Home() {
  return (
    <>
      <HeroSection />
      <Facilities />
      <OrchidArena />
      <CounterSection />
      <SportsSection />
      <section className="future">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex">
            <div className="w-full lg:w-1/2 h-64">
              <h2 className="text-3xl md:text-[55px] font-semibold">Future Events</h2>
            </div>
            <div className="w-full lg:w-1/2 h-64">
              <p className="text-[18px] text-[#656565]">Get ready for a thrilling lineup at Orchid Arena! From high-energy football clashes and intense cricket tournaments to fast-paced pickleball matches and dynamic corporate games, we have something exciting planned for every sports enthusiast. Stay tuned and mark your calendars — the action is just getting started!

              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-4">
          <div className="flex">
            <div className="w-full lg:w-1/2">
              <div className="w-full lg:w-[48%] h-64 lg:h-auto">
                <Image
                  src="/assets/img/bat.webp" 
                  alt="Event"
                  className="w-full h-full object-cover"
                  width={400}
                  height={400}
                />
              </div>
            </div>
            <div className="w-full lg:w-[48%]">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
