import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Contact PSM Turf – Connect With Us",
  description: "Reach out to PSM Turf for bookings, support, or general inquiries. We’re here to assist football enthusiasts across West Bengal at every step.",
};


export default function ConatctLayout({
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
