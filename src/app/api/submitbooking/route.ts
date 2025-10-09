import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const bookingData = await req.json();

    const response = await fetch("https://psmapi.thenoncoders.in/api/v1/submit_order_request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
       "X-Api-Key": `${process.env.PSM_API_KEY}`,
      },
      body: JSON.stringify(bookingData),
    });

    const result = await response.json();
    console.log("External API Response:", result);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { status: false, message: "Server error while submitting booking." },
      { status: 500 }
    );
  }
}
