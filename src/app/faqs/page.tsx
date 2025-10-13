"use client";
import Image from "next/image";

import GeneralInformation from "@/components/faq/GeneralInformation";
// import BookingFees from "@/components/faq/BookingFees";
// import EventsTournaments from "@/components/faq/EventsTournaments";
// import FacilitiesAmenities from "@/components/faq/FacilitiesAmenities";

const page = () => {
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
                 FAQ
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
                 FAQ
               </h1>
             </div>
           </section>

    
    <div className="">
      <div className="bg-[#F3F8F9]">
        <div className="container mx-auto px-4 py-10">
          
          <div>
            <h3 className="md:text-[40px] text-[30px] font-semibold uppercase text-center md:mb-8 mb-6">
              General Information
            </h3>
            <GeneralInformation />
          </div>
          {/* <div className="mt-20">
            <h3 className="md:text-[40px] text-[30px] font-semibold uppercase text-center md:mb-8 mb-6">
              Booking & Fees
            </h3>
            <BookingFees />
          </div> */}
          {/* <div className="mt-20">
            <h3 className="md:text-[40px] text-[30px] font-semibold uppercase text-center md:mb-8 mb-6">
              Events & Tournaments
            </h3>
            <EventsTournaments />
          </div> */}
          {/* <div className="mt-20">
            <h3 className="md:text-[40px] text-[30px] font-semibold uppercase text-center md:mb-8 mb-6">
              Facilities & Amenities
            </h3>
            <FacilitiesAmenities />
          </div> */}
        </div>
      </div>
    </div>
    </>
  );
};

export default page;
