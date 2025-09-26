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
    title: "Are tournaments hosted at Orchid Arena?",
    content:
      "Yes, Orchid Arena regularly hosts various tournaments and leagues. Recent events include the RC Championship 2025 and the Nopany Premier League 3.0, which utilized all grounds for matches.",
  },
  {
    id: "2",
    title: "Can I organize a private tournament or match?",
    content:
      "Absolutely. The facility is available for private bookings, whether for friendly matches or organized tournaments. It’s advisable to coordinate with the management in advance to secure your preferred time slots.",
  },
];

const EventsTournaments = () => {
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

export default EventsTournaments;
