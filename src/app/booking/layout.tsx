import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Book Your Game at PSM Turf – Football Made Easy",
  description: "Reserve your turf at PSM Turf quickly and securely. Select your location, choose slots, make a payment, and get ready to enjoy the perfect football match.",
};


export default function BokingLayout({
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
