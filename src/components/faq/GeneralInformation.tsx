"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

interface AccordionInfo {
  id: string;
  title: string;
  content: string; // keep it string
}

// Example data
const accordionData: AccordionInfo[] = [
  {
    id: "personal",
    title: "Q1. When can I play at PSM Turf?",
    content:
      "The turf is open from 6 AM to 9 PM every day. Whether you love a bright start or a late-night game under the floodlights, we've got you covered! Book your time slot online and get playing!",
  },
  {
    id: "address",
    title: "Q2. Where are PSM Turfs located?",
    content:
      "You can find PSM Turfs in many convenient locations on the following - Newtown, Khiddirpore, Bally, Ranaghat, Raiganj, Siliguri and Fulbari. All the turfs have the same football experience and have been maintained for safety, comfort, and the utmost enjoyment of playing.",
  },
  {
    id: "other",
    title: "Q3. What sports can I play at PSM Turf?",
    content:
      "Currently, PSM Turf is solely for football. All pitches are appropriately maintained to give players the best surface to achieve smooth passes, clean tackles, and unforgettable goals.",
  },
  {
    id: "four",
    title: "Q4. How can I book my slot at PSM Turf?",
    content:
      "It’s easy and simple to book your game! You can select your location and at least two time slots, pay online, fully or partially, and you will have a confirmed schedule. Just make sure the remaining balance is clear before stepping onto the turf.",
  },
  {
    id: "five",
    title: "Q5. What is the surface of the turf?",
    content:
      "All PSM pitches consist of premium quality artificial turf, developed to imitate the feel of natural grass. It is for maximised ball control, mitigated risk of injury, and a dependable and consistent playing surface.",
  },
  {
    id: "six",
    title: "Q6. What are the rates, and how long are the slots?",
    content:
      "Each slot is 30 minutes minimum. The rate varies by location and turf size (small and large) for any of the parcels. Check the booking page to review the current tariff for your chosen location.",
  },
  {
    id: "seven",
    title: "Q7. Can I cancel or rebook my booking?",
    content:
      "Yes, you can cancel or reschedule your booking, but cancellations should happen at least 24 hours before the start time you have reserved or risk losing your deposit, and your booking may not be refundable or may incur a booking fee after that window.",
  },
  {
    id: "eight",
    title: "Q8. Do you offer tournaments/special matches?",
    content:
      "Yes, we do! PSM Turf can host private tournaments, corporate matches, and friendly leagues. Reach out to our management team in advance so we can help reserve multiple bookings.",
  },
];

const GeneralInformation = () => {
  return (
    <Accordion type="single" collapsible className="md:w-[80%] w-full mx-auto" defaultValue="personal">
      {accordionData.map((item) => (
        <AccordionItem
          key={item.id}
          value={item.id}
          className="border-b last:border-b-0 hover:bg-transparent transition-colors duration-200 my-6"
        >
          <AccordionTrigger className="text-left md:text-[28px] text-[20px] uppercase font-semibold text-[#000] px-4 py-3">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="px-4 py-4 font-[DM_Sans] font-normal text-[#656565] text-[16px] leading-relaxed">
            <p>{item.content}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default GeneralInformation;
