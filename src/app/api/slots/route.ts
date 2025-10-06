import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const subcatid = searchParams.get("subcatid");
  const date = searchParams.get("date");

  if (!subcatid || !date) {
    return NextResponse.json({
      status: false,
      data: [],
      message: "Missing subcatid or date",
    });
  }

  try {
    const res = await fetch(
      `https://psmapi.thenoncoders.in/api/v1/get_availableslots?subcatid=${encodeURIComponent(
        subcatid
      )}&date=${encodeURIComponent(date)}`,
      {
        headers: {
          "X-Api-Key": process.env.PSM_API_KEY as string,
        },
      }
    );

    const data = await res.json();

    // expected structure from your Postman example
    const mappedSlots = (data.data || []).map((slot: any) => ({
      slot_id: slot.slot_id,
      slot_name: slot.slot_name,
      slot_rate: slot.slot_rate,
    }));

    return NextResponse.json({
      status: true,
      data: mappedSlots,
    });
  } catch (err) {
    console.error("Error fetching slots:", err);
    return NextResponse.json({
      status: false,
      data: [],
      message: "Failed to fetch slots",
    });
  }
}
