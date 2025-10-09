"use client";

import { useEffect, useState } from "react";

interface BookingData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  date: string;
  selectedSlots: string[];
  total: number;
}

export default function CartPage() {
  const [booking, setBooking] = useState<BookingData | null>(null);

  useEffect(() => {
    const data = localStorage.getItem("psm_booking");
    if (data) setBooking(JSON.parse(data));
  }, []);

  const handleFinalSubmit = async () => {
    if (!booking) return;

    try {
      const response = await fetch("/api/submitbooking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(booking),
      });

      const result = await response.json();
      console.log("Final Submit API Result:", result);

      if (result.status) {
        alert("Booking submitted successfully!");
        localStorage.removeItem("psm_booking");
        window.location.href = "/"; // or thank-you page
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
        {/* Left - Product Info */}
        <div className="lg:col-span-2 border border-gray-300 rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">COURT BOOKING</h3>
          <p className="text-gray-700 mb-2">
            <strong>FirstName:</strong> {booking.firstName}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>lastName:</strong> {booking.lastName}
          </p>
           <p className="text-gray-700 mb-2">
            <strong>Email:</strong> {booking.email}
          </p>
           <p className="text-gray-700 mb-2">
            <strong>Phone:</strong> {booking.phone}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Booking Date:</strong>{" "}
            {new Date(booking.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Location:</strong> {booking.location}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Slots Selected:</strong> {booking.selectedSlots.length}
          </p>

          <ul className="list-disc list-inside mt-4 text-gray-800">
            {booking.selectedSlots.map((slot, index) => (
              <li key={index} className="mb-2">
                {slot}
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center mt-6 border-t pt-4">
            <p className="text-lg font-semibold">Total</p>
            <p className="text-lg font-semibold">₹{booking.total.toFixed(2)}</p>
          </div>
        </div>

        {/* Right - Cart Totals */}
        <div className="border border-gray-300 rounded-lg p-6 bg-gray-50">
          <h3 className="text-xl font-semibold mb-4">CART TOTALS</h3>
          <table className="w-full mb-6">
            <tbody>
              <tr>
                <td className="py-2 font-medium">Subtotal</td>
                <td className="py-2 text-right">₹{booking.total.toFixed(2)}</td>
              </tr>
              <tr>
                <td className="py-2 font-medium">Total</td>
                <td className="py-2 text-right">₹{booking.total.toFixed(2)}</td>
              </tr>
              <tr>
                <td className="py-2 font-medium">Actual Price</td>
                <td className="py-2 text-right">₹{booking.total.toFixed(2)}</td>
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
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}
