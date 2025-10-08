"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  date: string;
  selectedSlots: string[];
}

interface Location {
  subcategory_id: number;
  subcategory_detail: string;
}

interface Slot {
  slot_name: string;
  slot_rate: number;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    date: "",
    selectedSlots: [],
  });

  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(false);
  const [slots, setSlots] = useState<Slot[]>([]);
  const [slotsLoading, setSlotsLoading] = useState(false);
  const [total, setTotal] = useState(0);

  // ✅ Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Fetch locations on mount
  useEffect(() => {
    setLoading(true);
    fetch("/api/locations")
      .then((res) => res.json())
      .then((data) => {
        if (data.status) setLocations(data.data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  // ✅ Fetch slots when location or date changes
  useEffect(() => {
    if (!formData.location || !formData.date) {
      setSlots([]);
      return;
    }

    setSlotsLoading(true);

    const selectedLoc = locations.find(
      (loc) => loc.subcategory_detail === formData.location
    );
    const subcatid = selectedLoc?.subcategory_id;

    if (!subcatid) {
      setSlotsLoading(false);
      setSlots([]);
      return;
    }

    // Convert date YYYY-MM-DD → DD-MM-YYYY
    const [year, month, day] = formData.date.split("-");
    const formattedDate = `${day}-${month}-${year}`;

    console.log(
      "Fetching slots URL:",
      `/api/slots?subcatid=${subcatid}&date=${formattedDate}`
    );

    fetch(`/api/slots?subcatid=${subcatid}&date=${formattedDate}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Slots API response:", data);
        if (data.status && Array.isArray(data.data)) {
          setSlots(data.data);
        } else {
          setSlots([]);
        }
      })
      .catch(() => setSlots([]))
      .finally(() => setSlotsLoading(false));
  }, [formData.location, formData.date, locations]);

  // ✅ Handle slot selection
  const toggleSlot = (slot: Slot) => {
    let updatedSlots = [...formData.selectedSlots];
    if (updatedSlots.includes(slot.slot_name)) {
      updatedSlots = updatedSlots.filter((s) => s !== slot.slot_name);
      setTotal((prev) => prev - slot.slot_rate);
    } else {
      updatedSlots.push(slot.slot_name);
      setTotal((prev) => prev + slot.slot_rate);
    }
    setFormData((prev) => ({ ...prev, selectedSlots: updatedSlots }));
  };

  // ✅ Handle submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    fetch("/api/submit-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log("Response:", data))
      .catch((err) => console.error("Error:", err));
  };

  // ✅ UI
  return (
    <div className="container mx-auto px-4 flex justify-center mb-[80px]">
      <div className="w-full lg:w-2/3 bg-white p-6 shadow-md rounded-lg">
        <form onSubmit={handleSubmit} className="w-full">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            PSM Turf – Let the games begin!
          </h2>

          {/* Basic Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="border-b border-gray-400 p-3 w-full focus:border-black focus:outline-none"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="border-b border-gray-400 p-3 w-full focus:border-black focus:outline-none"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border-b border-gray-400 p-3 w-full focus:border-black focus:outline-none"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="border-b border-gray-400 p-3 w-full focus:border-black focus:outline-none"
              required
            />
          </div>

          {/* Location */}
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="border-b border-gray-400 p-3 w-full mb-4 bg-transparent focus:border-black focus:outline-none"
            required
          >
            <option value="">
              {loading ? "Loading locations..." : "Select Location"}
            </option>
            {locations.map((loc) => (
              <option key={loc.subcategory_id} value={loc.subcategory_detail}>
                {loc.subcategory_detail}
              </option>
            ))}
          </select>

          {/* Date */}
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border-b border-gray-400 p-3 w-full mb-4 focus:border-black focus:outline-none"
            required
          />

          {/* Slots Table */}
          {slotsLoading ? (
            <p className="text-center py-4">Loading available slots...</p>
          ) : slots.length > 0 ? (
            <div className="overflow-x-auto mt-6">
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
                        formData.selectedSlots.includes(slot.slot_name)
                          ? "bg-green-100"
                          : "bg-white"
                      }`}
                    >
                      <td className="py-3 px-4">{slot.slot_name}</td>
                      <td className="py-3 px-4 text-center">
                        ₹{slot.slot_rate}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <input
                          type="checkbox"
                          checked={formData.selectedSlots.includes(
                            slot.slot_name
                          )}
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
                <h3 className="text-lg font-semibold">
                  Total: ₹{total.toFixed(2)}
                </h3>
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
            formData.date &&
            formData.location && (
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
