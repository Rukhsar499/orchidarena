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

  // Convert date from YYYY-MM-DD to DD-MM-YYYY
  const [year, month, day] = date.split('-'); 
  const formattedDate = `${day}-${month}-${year}`; // 'DD-MM-YYYY'

  console.log("Fetching slots with:", subcatid, formattedDate);

  try {
    const res = await fetch(
      `https://psmapi.thenoncoders.in/api/v1/get_availableslots?subcatid=${encodeURIComponent(subcatid)}&bdate=${encodeURIComponent(formattedDate)}`,

      {
        headers: {
          "X-Api-Key": process.env.PSM_API_KEY as string,
        },
      }
    );

    const data = await res.json();

    const slotNames = (data.data || []).map((slot: any) => slot.slot_name);

    return NextResponse.json({
      status: true,
      data: slotNames,
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
