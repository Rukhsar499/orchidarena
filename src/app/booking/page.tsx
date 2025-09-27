'use client';

import Booking from "../components/Booking"

export default function booking() {
    return (
        <>
            <section className="booking md:[mb-100px] mb-[50px]">
                <div className="container mx-auto px-4 max-w-7xl">
                    <h2 className="text-[30px] leading-tight md:text-[55px] font-semibold text-center mb-4">Online Booking</h2>
                    <p className="text-[18px] text-[#656565] text-center">
                        <b>Reserve Your Slot at PSM Turf</b>
                    </p>
                    <p className="text-[18px] text-[#656565] text-center">
                        While the cheers may not be heard, the spirit of football lives in these lines. PSM Turf welcomes you and your team to create unforgettable moments that could last a lifetime. Booking your slot is simple. Choose your preferred time and secure your spot with just a few clicks.
                    </p>
                    <p className="text-[18px] text-[#656565] text-center">When paying, you can complete the payment online, either in full or partially, to reserve your slot. Just ensure the remaining balance is paid in advance before stepping onto the pitch to start the game.</p>
                    <p className="text-[18px] text-[#656565] text-center">
                        The pitch is prepared, nets are set up, and excitement is high. Just bring your team and step in.

                    </p>
                    <p className="text-[18px] text-[#656565] text-center">
                      <b>
                        PSM Turf – Let the games begin! 
                      </b>
                    </p>
                </div>
            </section>
            <Booking />
        </>
    );
}
