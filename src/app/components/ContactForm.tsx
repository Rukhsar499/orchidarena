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
                    className="w-full h-full object-cover md:pb-0 pb-10"
                    width={400}
                    height={400}
                />
            </div>

            {/* Right Side Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-start md:px-35 bg-white">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-lg space-y-6 p-6"
                >
                    <div>
                        <p className="text-sm font-medium tracking-wide text-[#000]">
                            CONTACT US
                        </p>
                        <h2 className="md:text-[55px] text-[30px] leading-tight font-semibold mt-2 leading-[55px]">
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
                            className="border-b border-gray-400 p-3 w-full transition-colors duration-300 focus:border-b- focus:border-black focus:outline-none"
                            required
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="border-b border-gray-400 p-3 w-full transition-colors duration-300 focus:border-b- focus:border-black focus:outline-none"
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
                            className="border-b border-gray-400 p-3 w-full transition-colors duration-300 focus:border-b- focus:border-black focus:outline-none"
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="border-b border-gray-400 p-3 w-full transition-colors duration-300 focus:border-b- focus:border-black focus:outline-none"
                            required
                        />
                    </div>

                    <input
                        name="eventDetails"
                        placeholder="Event Details If Any"
                        value={formData.eventDetails}
                        onChange={handleChange}
                        className="border-b border-gray-400 p-3 w-full transition-colors duration-300 focus:border-b- focus:border-black focus:outline-none"
                            required
                    />

                    <button
                        type="submit"
                        className="flex items-center mt-4 justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-[#91be4d] text-white font-semibold hover:bg-green-700 transition"
                    >
                        <Image
                            src="/assets/img/send.png" // 👉 replace with your image
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