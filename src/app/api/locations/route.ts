import { NextResponse } from "next/server";

export async function GET() {
  const locations = [
    { id: 1, name: "Indoor Ground" },
    { id: 2, name: "Outdoor Ground" },
    { id: 3, name: "Banquet Hall" },
  ];

  return NextResponse.json({ status: true, data: locations });
}