"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const BookingFees = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="md:w-[80%] w-full mx-auto"
      defaultValue="1"
    >
      <AccordionItem
        value="1"
        className="border-b last:border-b-0 hover:bg-gray-50 transition-colors duration-200"
      >
        <AccordionTrigger className="text-left md:text-[28px] text-[20px] uppercase font-semibold text-[#000] px-4 py-3">
          How can I book a turf at Orchid Arena?
        </AccordionTrigger>
        <AccordionContent className="px-4 py-4 font-[DM_Sans] font-normal text-[#656565] text-[16px] leading-relaxed">
          <p className="mb-2">
            Bookings can be made directly through our website’s booking page.
            Each game—whether it’s football, cricket, or pickleball—has
            dedicated courts and specific time slots. Select the sport and time
            slots you prefer, then click “Proceed to Book.” Fill in your details
            and click “Request Booking.”
          </p>
          <p className="mb-2">
            You will then be redirected to the Cart Page, where you can review
            all the details. Once everything looks correct, click “Proceed to
            Checkout.” On the Checkout Page, fill in your information to create
            your profile and double-check that all game charges are accurate.
            Finally, click “Place Order.”
          </p>
          <p>
            After successful payment, you will receive a confirmation email from
            us. Your selected ground will then be ready and reserved for your
            game!
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="2"
        className="border-b last:border-b-0 hover:bg-gray-50 transition-colors duration-200"
      >
        <AccordionTrigger className="text-left md:text-[28px] text-[20px] uppercase font-semibold text-[#000] px-4 py-3">
          What are the rental fees?
        </AccordionTrigger>
        <AccordionContent className="px-4 py-4 font-[DM_Sans] font-normal text-[#656565] text-[16px] leading-relaxed">
          <p className="mb-2">
            Each game has different types of grounds available:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span>Football:</span> There are small and large grounds.
              <ol className="list-decimal list-inside space-y-1 ml-4">
                <li>Small ground: ₹1,000</li>
                <li>Large ground: ₹1,500</li>
              </ol>
            </li>
            <li>
              <span>Pickleball:</span> All courts are the same, and can be
              booked for ₹600.
            </li>
            <li>
              <span>Cricket:</span> All grounds are the same, and the booking
              fee is ₹1,000.
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default BookingFees;
