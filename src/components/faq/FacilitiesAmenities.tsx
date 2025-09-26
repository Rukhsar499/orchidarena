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
    id: "1",
    title: "What amenities are available at the venue?",
    content:
      "Orchid Arena offers ample parking space and comfortable seating arrangements for spectators. The presence of a nearby lake adds to the scenic beauty of the venue. The arena is also equipped with changing rooms, clean restrooms, drinking water facilities, ensuring a convenient and enjoyable experience for both players and visitors.",
  },
  {
    id: "2",
    title: "Are there provisions for night matches?",
    content:
      "Yes, the facility is equipped with floodlights, allowing for matches to be played during evening and night hours.",
  },
];

const FacilitiesAmenities = () => {
  return (
    <Accordion type="single" collapsible className="md:w-[80%] w-full mx-auto" defaultValue="1">
      {accordionData.map((item) => (
        <AccordionItem
          key={item.id}
          value={item.id}
          className="border-b last:border-b-0 hover:bg-gray-50 transition-colors duration-200"
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

export default FacilitiesAmenities;
