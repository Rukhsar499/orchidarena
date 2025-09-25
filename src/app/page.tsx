import Image from "next/image";
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import Facilities from "./components/Facilities"
import OrchidArena from "./components/OrchidArena"
import Footer from "./components/Footer"
import ContactForm from "./components/ContactForm"


export default function Home() {
  return (
 <>
 <Header/>
 <HeroSection/>
 <Facilities/>
 <OrchidArena/>
 <ContactForm/>
 <Footer/>
 </>
  );
}
