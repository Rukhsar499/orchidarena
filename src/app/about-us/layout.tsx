import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "About PSM Turf – Your Football Destination in West Bengal",
  description: "Learn about PSM Turf, our passion for football, and our mission to provide safe, high-quality turf across West Bengal for players of all ages.",
};


export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
          {children}
        </>
    )
}
