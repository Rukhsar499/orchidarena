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

  const [timeSlots, setTimeSlots] = useState<string[]>([]); // ⏰ Slots from API
  const [loading, setLoading] = useState(false);

  // 👇 Fetch available time slots when location OR date changes
  useEffect(() => {
    if (formData.location && formData.date) {
      setLoading(true);
      fetch(
        `/api/get-slots?location=${formData.location}&date=${formData.date}`
      )
        .then((res) => res.json())
        .then((data) => {
          setTimeSlots(data.slots || []);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [formData.location, formData.date]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // ⏰ Reset time if location/date changes
    if (e.target.name === "location" || e.target.name === "date") {
      setFormData((prev) => ({ ...prev, time: "" }));
      setTimeSlots([]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    // 🔗 Send final data to backend
    fetch("/api/submit-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log("Response:", data))
      .catch((err) => console.error("Error:", err));
  };

  return (
    <div className="container mx-auto px-4 flex justify-center md:[mb-100px] mb-50px">
      <div className="w-full lg:w-1/2 bg-white p-6">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-6">
            <p className="text-sm font-medium tracking-wide text-[#000]">
              CONTACT US
            </p>
            <h2 className="md:text-[55px] text-[30px] leading-tight font-semibold mt-2 md:leading-[55px]">
              PSM Turf – Let the games begin!
            </h2>
          </div>

          {/* First Name */}
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="border-b border-gray-400 p-3 w-full mb-4 focus:border-black focus:outline-none"
            required
          />

          {/* Last Name */}
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

          {/* Location */}
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="border-b border-gray-400 p-3 w-full mb-4 bg-transparent focus:border-black focus:outline-none"
            required
          >
            <option value="" disabled>
              Select Location
            </option>
            <option value="indoor">Indoor Ground</option>
            <option value="outdoor">Outdoor Ground</option>
            <option value="banquet">Banquet Hall</option>
            <option value="other">Other</option>
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

          {/* Time Slots from API */}
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="border-b border-gray-400 p-3 w-full bg-transparent focus:border-black focus:outline-none"
            required
            disabled={!timeSlots.length}
          >
            <option value="" disabled>
              {loading
                ? "Loading slots..."
                : timeSlots.length
                ? "Select Time"
                : "Select Location & Date first"}
            </option>
            {timeSlots.map((slot, index) => (
              <option key={index} value={slot}>
                {slot}
              </option>
            ))}
          </select>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex items-center mt-4 justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-[#91be4d] text-white font-semibold hover:bg-green-700 transition"
          >
            <Image src="/assets/img/send.png" alt="Send" width={20} height={20} />
            <span>Get In Touch</span>
          </button>
        </form>
      </div>
    </div>
  );
}
