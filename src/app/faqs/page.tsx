"use client";

import GeneralInformation from "@/components/faq/GeneralInformation";
// import BookingFees from "@/components/faq/BookingFees";
// import EventsTournaments from "@/components/faq/EventsTournaments";
// import FacilitiesAmenities from "@/components/faq/FacilitiesAmenities";

const page = () => {
  return (
    <>
     <section className="bg-black">
            <div className="container mx-auto px-4 py-30">
            <h4 className="text-center text-white text-3xl md:text-5xl">FAQ</h4>
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
