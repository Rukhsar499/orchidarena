import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Host An Event - Narayana",
  description: "Sports Narayana Website",
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
