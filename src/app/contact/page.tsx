'use client';
import Mail from "../contact/Mail"
import ContactForm from "../components/ContactForm"
import Image from "next/image";

export default function Host() {
    return (
        <>
         <section className="banner relative w-full h-[400px] md:h-[300px]">
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
                         Contact Us
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
                         Contact Us
                       </h1>
                     </div>
                   </section>
              <ContactForm />
            <Mail />
            <section className="map md:mb-[100px] mb-[50px]">
              <iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9147.816564036888!2d88.36216300000001!3d22.504043!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027125f0b85a61%3A0xe9d5ef4252915a51!2sDigital%20Wolf!5e1!3m2!1sen!2sin!4v1758882951439!5m2!1sen!2sin"
  width="100%"
  height="500"
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
            </section>
           
        </>
    );
}
