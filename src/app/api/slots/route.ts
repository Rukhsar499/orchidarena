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

const data: {
      status: boolean;
      data: { slot_rate_id: number; week_day_id:number; week_day:string; slot_id:number; slot_name:string; slot_rate:number }[];
    } = await res.json();

    // Map backend fields to frontend expected fields
    const slotNames = (data.data || []).map((loc) => ({
      slot_rate_id: loc.slot_rate_id,
      week_day_id: loc.week_day_id,
      week_day: loc.week_day,
      slot_id: loc.slot_id,
      slot_name: loc.slot_name,
      slot_rate: loc.slot_rate,
    }));


    /*"slot_rate_id": 196,
            "week_day_id": 7,
            "week_day": "Saturday",
            "slot_id": 1,
            "slot_name": "06:00 AM-07:00 AM",
            "slot_rate": 2300.00*/
    //const data = await res.json();

    //const slotNames = (data.data || []).map((slot: any) => slot.slot_name);

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
