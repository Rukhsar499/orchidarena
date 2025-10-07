import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Booking Policy',
    description: 'Booking Policy of PSM Trurf',
  }


export default function BookingLayout({
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