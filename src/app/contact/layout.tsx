import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Us",
};

export default function ContactUsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      
      {children}
      
    </>
  );
}
