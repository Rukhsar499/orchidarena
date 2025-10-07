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
  time: string;
}

interface Location {
  subcategory_id: number;
  subcategory_detail: string;
}
interface Slot {
  slot_name: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    date: "",
    time: "",
  });

  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(false);
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const [slotsLoading, setSlotsLoading] = useState(false);

  // ✅ Handle input & dropdown changes
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

  // Fetch slots when location or date changes
useEffect(() => {
  if (!formData.location || !formData.date) {
    setTimeSlots([]);
    return;
  }

  setSlotsLoading(true);

  const selectedLoc = locations.find(
    (loc) => loc.subcategory_detail === formData.location
  );
  const subcatid = selectedLoc?.subcategory_id;

  if (!subcatid) {
    setSlotsLoading(false);
    setTimeSlots([]);
    return;
  }

  // Convert date from YYYY-MM-DD → DD-MM-YYYY
  const [year, month, day] = formData.date.split('-');
  const formattedDate = `${day}-${month}-${year}`;
  
  console.log("Fetching slots URL:", `/api/slots?subcatid=${subcatid}&date=${formattedDate}`);
  
  fetch(`/api/slots?subcatid=${subcatid}&date=${formattedDate}`)
    .then((res) => res.json())
    .then((data: { status: boolean; data: Slot[] }) => {
    console.log("data slots:", data);
      if (data.status && data.data?.length > 0) {
        const slotNames = data.data.map((slot) => slot.slot_name);
        setTimeSlots(slotNames);
      } else {
        setTimeSlots([]);
        console.log('No slots available for:', subcatid, formattedDate);
      }
    })
    .catch(() => setTimeSlots([]))
    .finally(() => setSlotsLoading(false));
}, [formData.location, formData.date, locations]);



  // ✅ Handle form submit
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
    <div className="container mx-auto px-4 flex justify-center mb-[50px] md:mb-[100px]">
      <div className="w-full lg:w-1/2 bg-white p-6">
        <form onSubmit={handleSubmit} className="w-full">
          {/* Header */}
          <div className="mb-6">
           
            <h2 className="md:text-[55px] text-[30px] leading-tight font-semibold mt-2 md:leading-[55px]">
              PSM Turf – Let the games begin!
            </h2>
          </div>

          {/* Name */}
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="border-b border-gray-400 p-3 w-full mb-4 focus:border-black focus:outline-none"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="border-b border-gray-400 p-3 w-full mb-4 focus:border-black focus:outline-none"
            required
          />

          {/* Email & Phone */}
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

          {/* Location Dropdown */}
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

          {/* Time Slots */}
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="border-b border-gray-400 p-3 w-full bg-transparent focus:border-black focus:outline-none"
            required
            disabled={!timeSlots.length}
          >
            <option value="">
              {slotsLoading
                ? "Loading slots..."
                : timeSlots.length
                ? "Select Time"
                : "No slots available"}
            </option>
            {timeSlots.map((slot, index) => (
              <option key={index} value={slot}>
                {slot}
              </option>
            ))}
          </select>

          {/* Submit */}
          <button
            type="submit"
            className="flex items-center mt-4 justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-[#91be4d] text-white font-semibold hover:bg-green-700 transition"
          >
            <Image src="/assets/img/send.png" alt="Send" width={20} height={20} />
            <span>Book Now</span>
          </button>
        </form>
      </div>
    </div>
  );
}
