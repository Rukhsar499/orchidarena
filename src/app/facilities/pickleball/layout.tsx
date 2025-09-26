import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pickleball",
  description: "Pickleball",
};

export default function PickleballLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      
      {children}
      
    </>
  );
}
