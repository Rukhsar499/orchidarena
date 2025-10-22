import { Metadata } from "next";


export const metadata: Metadata = {
  title: "PSM Turf FAQs – Your Questions, Answered",
  description: "Find answers to common questions about PSM Turf bookings, locations, payments, turf usage, and safety. Everything you need to play your best game.",
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      
      {children}
      
    </>
  );
}
