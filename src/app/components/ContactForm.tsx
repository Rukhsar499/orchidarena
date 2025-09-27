"use client";

import { useState } from "react";
import Image from "next/image";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    location: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        location: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        // 🔗 Call API here with formData
    };

    return (
        <div className="w-full flex flex-col lg:flex-row min-h-[90vh]">
            {/* Left Side Image */}
            <div className="w-full lg:w-1/2 h-64 lg:h-auto">
                <Image
                    src="/assets/img/bat.jpg"
                    alt="Event"
                    className="w-full h-full object-cover md:pb-0 pb-10"
                    width={400}
                    height={400}
                />
            </div>

            {/* Right Side Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-start md:px-35 bg-white">
                <form
                    onSubmit={handleSubmit}
                    className="w-full  space-y-6 p-6"
                >
                    <div>
                        <p className="text-sm font-medium tracking-wide text-[#000]">
                            CONTACT US
                        </p>
                        <h2 className="md:text-[55px] text-[30px] leading-tight font-semibold mt-2 md:leading-[55px]">
                            PSM Turf – Let the games begin!
                           
                        </h2>
                    </div>

                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="border-b border-gray-400 p-3 w-full transition-colors duration-300 focus:border-black focus:outline-none"
                        required
                    />

                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="border-b border-gray-400 p-3 w-full transition-colors duration-300 focus:border-black focus:outline-none"
                        required
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="border-b border-gray-400 p-3 w-full transition-colors duration-300 focus:border-black focus:outline-none"
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="border-b border-gray-400 p-3 w-full transition-colors duration-300 focus:border-black focus:outline-none"
                            required
                        />
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="border-b border-gray-400 p-3 w-full transition-colors duration-300 focus:border-black focus:outline-none"
                            required
                        />
                         <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="border-b border-gray-400 p-3 w-full bg-transparent transition-colors duration-300 focus:border-black focus:outline-none"
                        required
                    >
                        <option value="" disabled>
                            Select Time
                        </option>
                        <option value="indoor">6:00-6:30</option>
                        <option value="outdoor">7:00-7:30</option>
                        <option value="banquet">8:00-8:30</option>
                        <option value="other">9:00-9:30</option>
                    </select>
                    </div>

                    {/* Dropdown for Location */}
                    <select
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="border-b border-gray-400 p-3 w-full bg-transparent transition-colors duration-300 focus:border-black focus:outline-none"
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

                    <button
                        type="submit"
                        className="flex items-center mt-4 justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-[#91be4d] text-white font-semibold hover:bg-green-700 transition"
                    >
                        <Image
                            src="/assets/img/send.png"
                            alt="Send"
                            width={20}
                            height={20}
                        />
                        <span>Get In Touch</span>
                    </button>
                </form>
            </div>
        </div>
    );
}
