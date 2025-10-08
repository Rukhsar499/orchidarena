import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Cart - PSM - Turf",
  description: "Cart for booking turf",
};


export default function CartLayout({
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
