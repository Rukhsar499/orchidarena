"use client";

import { useState } from "react";
import Image from "next/image";

import {  useEffect } from "react";

interface FormData {
  full_name: string;
  email_id: string;
  contact_no: string;
  location_id: string;
  booking_date: string;
  bookedslotrate_ids: string[];
  selectedSlots: Slot[];
  total_amount:number;
  promo_code:string;
  discount_amount:number;
}

interface Location {
  subcategory_id: number;
  subcategory_detail: string;
}

interface Slot {
  slot_rate_id: number;
  slot_name: string;
  slot_rate: number;
  can_book: boolean;
}
export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    full_name: "",
    email_id: "",
    contact_no: "",
    location_id: "",
    booking_date: "",
    bookedslotrate_ids: [],
    selectedSlots: [],
    total_amount:0.00,
    promo_code:"",
    discount_amount:0.00
  });

  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(false);
  const [slots, setSlots] = useState<Slot[]>([]);
  const [slotsLoading, setSlotsLoading] = useState(false);
  const [total, setTotal] = useState(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Fetch locations
  useEffect(() => {
    setLoading(true);
    fetch("/api/locations")
      .then((res) => res.json())
      .then((data) => {
        if (data.status) setLocations(data.data);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  // Fetch slots
  useEffect(() => {
    if (!formData.location_id || !formData.booking_date) {
      setSlots([]);
      return;
    }

    setSlotsLoading(true);
    const selectedLoc = locations.find(
  (loc) => String(loc.subcategory_id) === formData.location_id
);
    const subcatid = selectedLoc?.subcategory_id;

    if (!subcatid) {
      setSlotsLoading(false);
      setSlots([]);
      return;
    }

    const [year, month, day] = formData.booking_date.split("-");
    const formattedDate = `${day}-${month}-${year}`;

    fetch(`/api/slots?subcatid=${subcatid}&date=${formattedDate}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status && Array.isArray(data.data)) setSlots(data.data);
        else setSlots([]);
      })
      .catch(() => setSlots([]))
      .finally(() => setSlotsLoading(false));
  }, [formData.location_id, formData.booking_date, locations]);

  const toggleSlot = (slot: Slot) => {
  let updatedSlots = [...formData.selectedSlots]; // array of Slot objects
  if (updatedSlots.find(s => s.slot_rate_id === slot.slot_rate_id)) {
    updatedSlots = updatedSlots.filter(s => s.slot_rate_id !== slot.slot_rate_id);
    setTotal(prev => prev - slot.slot_rate);
  } else {
    updatedSlots.push(slot);
    setTotal(prev => prev + slot.slot_rate);
  }
  setFormData(prev => ({ ...prev, selectedSlots: updatedSlots }));
};

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const bookingData = {
    full_name: formData.full_name?.trim() || null,
    contact_no: formData.contact_no?.trim() || null,
    email_id: formData.email_id?.trim() || null,
    location_id: formData.location_id ? Number(formData.location_id) : 0,
    booking_date: formData.booking_date || null,
    bookedslotrate_ids:
      formData.selectedSlots.length > 0
        ? formData.selectedSlots.map((s) => s.slot_rate_id)
        : null,
    selectedSlots: formData.selectedSlots.length > 0 ? formData.selectedSlots : null,
    total_amount: total || 0.0,
    promo_code: null,
    discount_amount: 0.0,
  };

  console.log("Booking JSON:", bookingData);
  localStorage.setItem("psm_booking", JSON.stringify(bookingData));
  window.location.href = "/cart";
};
    return (
        <div className="w-full flex flex-col lg:flex-row min-h-[90vh]">
            {/* Left Side Image */}
            <div className="w-full lg:w-1/2 h-64 lg:h-auto order-2 lg:order-1">
                <Image
                    src="/assets/img/bat.jpg"
                    alt="Event"
                    className="w-full h-full object-cover md:pb-0 pb-10"
                    width={400}
                    height={400}
                />
            </div>

            {/* Right Side Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-start md:px-35 bg-white order-1 lg:order-2">
               <form onSubmit={handleSubmit} className="w-full p-5">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            PSM Turf – Let the games begin!
          </h2>

          {/* Basic Info */}
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mb-4">
            <input
              type="text"
              name="full_name"
              placeholder="Full Name"
              value={formData.full_name}
              onChange={handleChange}
              className="border-b border-gray-400 p-3 w-full focus:border-black focus:outline-none"
              required
            />
           
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input
              type="email"
              name="email_id"
              placeholder="Email"
              value={formData.email_id}
              onChange={handleChange}
              className="border-b border-gray-400 p-3 w-full focus:border-black focus:outline-none"
              required
            />
            <input
              type="tel"
              name="contact_no"
              placeholder="Phone"
              value={formData.contact_no}
              onChange={handleChange}
              className="border-b border-gray-400 p-3 w-full focus:border-black focus:outline-none"
              required
              pattern="[6-9][0-9]{9}" // starts with 6-9 and total 10 digits
              title="Phone number must start with 6,7,8,9 and be 10 digits"
            />
          </div>

          {/* Location */}
          <select
            name="location_id"
            value={formData.location_id}
            onChange={handleChange}
            className="border-b border-gray-400 p-3 w-full mb-4 bg-transparent focus:border-black focus:outline-none"
            required
          >
            <option value="">{loading ? "Loading locations..." : "Select Location"}</option>
            {locations.map((loc) => (
              <option key={loc.subcategory_id} value={loc.subcategory_id}>
                {loc.subcategory_detail}
              </option>
            ))}
          </select>

          {/* Date */}
         <input
            type="date"
            name="booking_date"
            value={formData.booking_date}
            onChange={handleChange}
            className="border-b border-gray-400 p-3 w-full mb-4 focus:border-black focus:outline-none cursor-pointer"
            required
            min={new Date().toISOString().split("T")[0]} // blocks past dates
            onClick={(e) => (e.target as HTMLInputElement).showPicker?.()} // makes full field open calendar
          />

          {/* Slots Table */}
          {slotsLoading ? (
            <p className="text-center py-4">Loading available slots...</p>
          ) : slots.length > 0 ? (
            <div className="overflow-y-auto mt-6 h-[400px]">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-[#91be4d] text-white">
                    <th className="py-3 px-4 text-left text-[20px] font-light">Time Slot</th>
                    <th className="py-3 px-4 text-center text-[20px] font-light">Rate</th>
                    <th className="py-3 px-4 text-center text-[20px] font-light">Select</th>
                  </tr>
                </thead>
                <tbody>
                  {slots.map((slot, index) => (
                    <tr
                  key={index}
                  className={`border-t ${
                    formData.selectedSlots?.some(s => s.slot_rate_id === slot.slot_rate_id)
                      ? "bg-green-100"
                      : "bg-white"
                  }`}
                >
                  <td className="py-3 px-4">{slot.slot_name}</td>
                  <td className="py-3 px-4 text-center">₹{slot.slot_rate}</td>
                  <td className="py-3 px-4 text-center">
                    <input
                      type="checkbox"
                      checked={formData.selectedSlots?.some(s => s.slot_rate_id === slot.slot_rate_id) || false}
                      onChange={() => toggleSlot(slot)}
                      className="w-5 h-5 accent-[#91be4d]"
                    />
                  </td>
                </tr>
                  ))}
                </tbody>
              </table>

              {/* Total & Proceed */}
              <div className="flex justify-between items-center mt-6">
                <h3 className="text-lg font-semibold">Total: ₹{total.toFixed(2)}</h3>
                <button
                  type="submit"
                  disabled={formData.selectedSlots.length === 0}
                  className="px-6 py-3 bg-[#91be4d] text-white font-semibold hover:bg-green-700 transition disabled:bg-gray-400"
                >
                  Proceed to Book
                </button>
              </div>
            </div>
          ) : (
            formData.booking_date &&
            formData.location_id && (
              <p className="text-center py-4 text-gray-600">
                No slots available for the selected date and location.
              </p>
            )
          )}
        </form>
            </div>
        </div>
    );
}
