"use client";

import GeneralInformation from "@/components/faq/GeneralInformation";
import BookingFees from "@/components/faq/BookingFees";
import EventsTournaments from "@/components/faq/EventsTournaments";
import FacilitiesAmenities from "@/components/faq/FacilitiesAmenities";

const page = () => {
  return (
    <div className="pt-50">
      <div className="bg-[#F3F8F9]">
        <div className="container mx-auto px-4 py-16">
          <h2 className="md:text-[50px] text-[40px] uppercase font-bold text-center md:mb-10 mb-8">
            FAQs
          </h2>
          <div>
            <h3 className="md:text-[40px] text-[30px] font-semibold uppercase text-center md:mb-8 mb-6">
              General Information
            </h3>
            <GeneralInformation />
          </div>
          <div className="mt-20">
            <h3 className="md:text-[40px] text-[30px] font-semibold uppercase text-center md:mb-8 mb-6">
              Booking & Fees
            </h3>
            <BookingFees />
          </div>
          <div className="mt-20">
            <h3 className="md:text-[40px] text-[30px] font-semibold uppercase text-center md:mb-8 mb-6">
              Events & Tournaments
            </h3>
            <EventsTournaments />
          </div>
          <div className="mt-20">
            <h3 className="md:text-[40px] text-[30px] font-semibold uppercase text-center md:mb-8 mb-6">
              Facilities & Amenities
            </h3>
            <FacilitiesAmenities />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
