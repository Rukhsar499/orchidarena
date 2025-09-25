"use client";

import { useState } from "react";
import Image from "next/image";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  eventDetails: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventDetails: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // 🔗 Here you can call your API with formData
  };

  return (
    <div className="w-full flex flex-col lg:flex-row min-h-[90vh]">
      {/* Left Side Image */}
      <div className="w-full lg:w-1/2 h-64 lg:h-auto">
        <Image
          src="/assets/img/bat.webp" // 👉 replace with your image
          alt="Event"
          className="w-full h-full object-cover"
          width={400}
          height={400}
        />
      </div>

      {/* Right Side Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg space-y-6"
        >
          <div>
            <p className="text-sm font-medium tracking-wide text-gray-500">
              CONTACT US
            </p>
            <h2 className="text-3xl font-bold mt-2">
              HOSTING AN EVENT <br /> GET IN TOUCH!
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="border p-3 rounded-md w-full focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="border p-3 rounded-md w-full focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border p-3 rounded-md w-full focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="border p-3 rounded-md w-full focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <textarea
            name="eventDetails"
            placeholder="Event Details If Any"
            value={formData.eventDetails}
            onChange={handleChange}
            className="border p-3 rounded-md w-full h-24 focus:ring-2 focus:ring-green-500"
          />

          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition"
          >
            🚀 Get In Touch
          </button>
        </form>
      </div>
    </div>
  );
}