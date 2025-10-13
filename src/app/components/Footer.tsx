"use client";

import React from "react";

import { FaFacebookF,  FaInstagram } from "react-icons/fa";
import { MdPhone, MdEmail } from "react-icons/md";

type LinkItem = {
    name: string;
    href: string;
};

type SocialItem = {
    icon: React.ReactNode;
    href: string;
    label: string;
};



const legalLinks: LinkItem[] = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Booking Policy", href: "/booking-policy" },
    // { name: "Cancellation Policy", href: "/cancellation-policy" },
   
];

const socialLinks: SocialItem[] = [
    { icon: <FaFacebookF />, href: "#", label: "Facebook" },
    { icon: <FaInstagram />, href: "#", label: "Instagram" },

];

const contactInfo = [
    { icon: <MdPhone />, href: "tel:+919147766682", text: "+91 9147766682" },
    { icon: <MdEmail />, href: "mailto:psmmanagementservicespvtltd@gmail.com", text: "psmmanagementservicespvtltd@gmail.com" },

];

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#272702] text-white md:py-20 py-4">
            <div className="max-w-7xl container mx-auto px-4">
                <div className="flex flex-wrap gap-8 text-left">
                    <div className="md:w-[30%] w-full">
                        <div className="flex flex-col">
                            <h2 className="text-[#fff] mb-6 text-[21px] font-semibold">PSM MANAGEMENT SERVICES PVT LTD.</h2>
                            <p className="text-white/70 text-[17px]">
                                Our cutting-edge football turf is in multiple locations across West Bengal. It is the perfect place for celebration, competition, and leisure. We have something for you if you&apos;re just here to play football. Enter our well-kept football field or experience the excitement of a game on our floodlit field, which is ideal for both day and night games.
                            </p>
                        </div>
                    </div>

                    <div className="md:w-[30%] w-full">
                        <div className=" flex flex-col items-start justify-start text-left">
                            <h2 className="text-[#fff] mb-6 text-[21px] font-semibold">OFFICE</h2>
                            <p className="text-white/70 text-[17px]">
                               Plot No IIF/11, Unit No. ESNTB0202, Ecospace Business Park, Rajarhat, New Town, South Twenty Four Parganas, West Bengal, 700156
                            </p>
                            <div className="pt-8">
                                <ul className="space-y-2 text-white/70 text-[16px] font-['DM_Sans'] ">
                                    {contactInfo.map((item, index) => (
                                        <li key={index} className="flex items-center gap-2 mb-8">
                                            <span className="text-[#fff] text-lg">{item.icon}</span>
                                            {item.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-[15%] w-full">
                        <div className="flex flex-col items-start justify-start text-left">
                            <h2 className="text-[#fff] mb-6 text-[21px] font-semibold">Links</h2>
                            <ul className="space-y-2 text-white/70 font-['DM_Sans'] text-[16px]">
                                {legalLinks.map((link) => (
                                    <li key={link.name} className="flex items-center gap-2">
                                        <a href={link.href} className="hover:border-b-white hover:translate-x-1.5 hover:border-b-1 transform transition-all mb-3">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="md:w-[10%] w-full">
                        <div className="flex flex-col items-start justify-start text-left">
                            <h2 className="text-[#fff] mb-6 text-[21px] font-semibold">Get in Touch</h2>
                            <div className="gap-4 text-white flex">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="hover:text-[#fgg] transition-colors text-xl mb-4"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                <hr className="my-6 border-white/20" />
                <p className="text-left text-white text-lg">
                    PSM MANAGEMENT SERVICES PVT LTD.©{new Date().getFullYear()} • All Rights Reserved
                </p>
            </div>
        </footer >
    );
};

export default Footer;