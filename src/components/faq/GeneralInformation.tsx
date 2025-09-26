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
    title: "What sports can be played at Orchid Arena?",
    content:
      "Orchid Arena caters to cricket, football, and pickleball. It features multiple turfs, including Turf 1, Turf 2, and a New Turf, accommodating various formats like 5-a-side and 7-a-side games.",
  },
  {
    id: "address",
    title: "What are the operating hours?",
    content:
      "The facility is open daily in two shifts: from 6:00 AM to 10:00 AM in the morning, and from 4:00 PM to 12:00 midnight in the evening, providing ample time slots for early morning or late-night matches.",
  },
  {
    id: "other",
    title: "What is the surface type of the turfs?",
    content:
      "The arena boasts FIFA-certified and FIH Multi-sport TigerTurf, ensuring a high-quality playing surface suitable for football, cricket, and pickleball.",
  },
];

const GeneralInformation = () => {
  return (
    <Accordion type="single" collapsible className="md:w-[80%] w-full mx-auto" defaultValue="personal">
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

export default GeneralInformation;
