import { NextResponse } from "next/server";

export async function GET() {
  try {
    const catid = 1; // <-- fix catid value

    const res = await fetch(
      `https://psmapi.thenoncoders.in/api/v1/get_subcategory?catid=${encodeURIComponent(catid)}`,
      {
        method: "GET",
        headers: {
          "X-Api-Key": process.env.PSM_API_KEY as string, // your key from .env
        },
      }
    );

    const data: {
      status: boolean;
      data: { subcategory_id: number; subcategory_detail: string }[];
    } = await res.json();

    // Map backend fields to frontend expected fields
    const mappedData = (data.data || []).map((loc) => ({
      subcategory_id: loc.subcategory_id,
      subcategory_detail: loc.subcategory_detail,
    }));

    return NextResponse.json({
      status: true,
      data: mappedData,
    });
  } catch (err) {
    console.error("Error fetching locations:", err);
    return NextResponse.json({
      status: false,
      data: [],
      error: "Failed to fetch locations",
    });
  }
}
