"use client";

import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function PaymentSuccessPage() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 px-6">
      <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-8 text-center border border-green-100">
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-20 h-20 text-green-500" />
        </div>

        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          Payment Successful 🎉
        </h2>
        <p className="text-gray-600 mb-2">
          Thank you for completing your booking in Psm Turf.  
          
        </p>
        <p className="text-gray-600 mb-6">
          
          <b>Enjoy Your Match.</b>
        </p>

       

        <Link
          href="/booking"
          className="inline-block mt-4 bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-all"
        >
          Back to Booking
        </Link>
      </div>
    </section>
  );
}
