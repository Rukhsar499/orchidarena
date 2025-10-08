import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Booking Online - PSM",
  description: "Booking Online - PSM - Truf",
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
