import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Host An Event - Narayana",
  description: "Sports Narayana Website",
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
