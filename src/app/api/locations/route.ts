import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://psmapi.thenoncoders.in/api/v1/get_subcategory?catid=1",
      {
        headers: {
              'X-Api-Key': '8f2c1d73-9b67-4e0e-bc92-1f84f5f0d9a3-Fe3YpM8vQ6rS1xZ0nL4tB9uH7kC2wA5d'
 , // tumhari valid key
        },
      }
    );

    const data = await res.json();

    // Map backend fields to frontend expected fields
    const mappedData = (data.data || []).map((loc: any) => ({
      subcategory_id: loc.subcategory_id,
      subcategory_detail: loc.subcategory_detail, // frontend me name ke liye
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
