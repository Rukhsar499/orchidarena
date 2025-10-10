'use client';

import { useEffect, useState } from "react";

interface BookingData {
  full_name: string;               
  contact_no: string;             
  email_id: string;               
  location_id: number;             
  booking_date: string;            
  bookedslotrate_ids: string;      
  total_amount: number;            
  promo_code: string;              
  discount_amount: number;         
}
export default function CartPage() {
  const [booking, setBooking] = useState<BookingData | null>(null);

  // Load booking from localStorage safely
  useEffect(() => {
    const data = localStorage.getItem("psm_booking");
    if (data) {
      try {
        setBooking(JSON.parse(data));
      } catch (err) {
        console.error("Failed to parse booking JSON:", err);
      }
    }
  }, []);
  function formatDateForAPI(dateStr: string) {
    const [year, month, day] = dateStr.split("-");
    return `${day}-${month}-${year}`; // DD-MM-YYYY
  }

  const handleFinalSubmit = async () => {
    if (!booking) return;

    // Map booking to API payload structure
    const bookedSlotIds = booking.selectedSlots?.map((slot) => slot.slot_rate_id) ?? [];
const bookedSlotIdsStr = bookedSlotIds.join(","); // "1,2,3"

  const payload = {
  full_name: booking.full_name,
  contact_no: booking.contact_no,
  email_id: booking.email_id,
  location_id: booking.location_id,
  booking_date: formatDateForAPI(booking.booking_date),
  bookedslotrate_ids: booking.selectedSlots?.map(s => s.slot_rate_id).join(",") || "",
  total_amount: booking.selectedSlots?.reduce((sum, s) => sum + s.slot_rate, 0) || 0,
  promo_code: booking.promo_code || "",
  discount_amount: booking.discount_amount || 0,
};

    // Pretty-print payload in console
    console.log("Payload being sent:\n", JSON.stringify(payload, null, 2));

    try {
      const response = await fetch("/api/submitbooking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      console.log("External API Response:\n", JSON.stringify(result, null, 2));

      if (result.status) {
        alert("Booking submitted successfully!");
        localStorage.removeItem("psm_booking");
        window.location.href = "/"; // or redirect to a thank-you page
      } else {
        alert(result.message || "Booking submission failed.");
      }
    } catch (error) {
      console.error("Final Submit Error:", error);
      alert("Error connecting to server.");
    }
  };

  if (!booking) {
    return <p className="text-center py-20 text-gray-500">No booking found.</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6">Cart Summary</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left - Booking Info */}
        <div className="lg:col-span-2 border border-gray-300 rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">COURT BOOKING</h3>
          <p className="text-gray-700 mb-2"><strong>Full Name:</strong> {booking.full_name ?? "-"}</p>
          <p className="text-gray-700 mb-2"><strong>Email:</strong> {booking.email_id ?? "-"}</p>
          <p className="text-gray-700 mb-2"><strong>Phone:</strong> {booking.contact_no ?? "-"}</p>
          <p className="text-gray-700 mb-2">
            <strong>Booking Date:</strong>{" "}
            {booking.booking_date
              ? new Date(booking.booking_date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
              : "-"}
          </p>
          <p className="text-gray-700 mb-2"><strong>Location:</strong> {booking.location_id ?? "-"}</p>

          <p className="text-gray-700 mb-2">
            <strong>Slots Selected:</strong> {booking.selectedSlots?.length ?? 0}
          </p>

          <ul className="list-disc list-inside mt-4 text-gray-800">
  {booking.selectedSlots && booking.selectedSlots.length > 0 ? (
    booking.selectedSlots.map((slot, index) => (
      <li key={index}>{slot.slot_name}</li>
    ))
  ) : (
    <li>No slots selected</li>
  )}
</ul>

          <div className="flex justify-between items-center mt-6 border-t pt-4">
            <p className="text-lg font-semibold">Total</p>
            <p className="text-lg font-semibold">₹{booking.total_amount?.toFixed(2) ?? "0.00"}</p>
          </div>
        </div>

        {/* Right - Cart Totals */}
        <div className="border border-gray-300 rounded-lg p-6 bg-gray-50">
          <h3 className="text-xl font-semibold mb-4">CART TOTALS</h3>
          <table className="w-full mb-6">
            <tbody>
              <tr>
                <td className="py-2 font-medium">Subtotal</td>
                <td className="py-2 text-right">₹{booking.total_amount?.toFixed(2) ?? "0.00"}</td>
              </tr>
              <tr>
                <td className="py-2 font-medium">Total</td>
                <td className="py-2 text-right">₹{booking.total_amount?.toFixed(2) ?? "0.00"}</td>
              </tr>
              <tr>
                <td className="py-2 font-medium">Actual Price</td>
                <td className="py-2 text-right">₹{booking.total_amount?.toFixed(2) ?? "0.00"}</td>
              </tr>
              <tr>
                <td className="py-2 font-medium">Pending Price</td>
                <td className="py-2 text-right">₹0.00</td>
              </tr>
            </tbody>
          </table>

          <button
            className="w-full py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition"
            onClick={handleFinalSubmit}
          >
            PAY NOW
          </button>
        </div>
      </div>
    </div>
  );
}
