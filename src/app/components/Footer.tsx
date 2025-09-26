"use client";

import React from "react";
import Image from "next/image";
import { FaFacebookF, FaWhatsapp, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";

type LinkItem = {
    name: string;
    href: string;
};

type SocialItem = {
    icon: React.ReactNode;
    href: string;
    label: string;
};

const quickLinks: LinkItem[] = [
    { name: "Contact Us", href: "/contact" },
    { name: "Shipping & Returns", href: "/" },
    { name: "Product", href: "/product" },
];

const legalLinks: LinkItem[] = [
    { name: "Home", href: "/shipping-policy" },
    { name: "About Us", href: "/refund-policy" },
    { name: "Host an Event", href: "/terms-and-conditions" },
    { name: "FAQs", href: "/cancellation-policy" },
    { name: "Contact Us", href: "/privacy-policy" },
    { name: "Privacy policy", href: "/privacy-policy" },
    { name: "Turf Booking Policy", href: "/privacy-policy" },
];

const socialLinks: SocialItem[] = [
    { icon: <FaFacebookF />, href: "#", label: "Facebook" },
    { icon: <FaInstagram />, href: "#", label: "Instagram" },

];

const contactInfo = [
    { icon: <MdPhone />, text: "+91 98315 57613" },
    { icon: <MdEmail />, text: "calboat@gmail.com" },

];

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#272702] text-white md:py-20 py-4">
            <div className="max-w-7xl container mx-auto px-4">
                <div className="flex flex-wrap gap-8 text-left">
                    <div className="md:w-[30%] w-full">
                        <div className="flex flex-col">
                            <h2 className="text-[#fff] mb-6 text-[21px] font-semibold">KOLKATA&apos;S PREMIER SPORTS ARENA</h2>
                            <p className="text-white/70 text-[17px]">
                                <b>Orchid Arena</b> is your premier multi-sports destination offering world-class facilities for football, pickleball, and cricket, well-maintained environment. Orchid Arena is the perfect venue for sports lovers to train, play, and compete every day.
                            </p>
                        </div>
                    </div>

                    <div className="md:w-[30%] w-full">
                        <div className=" flex flex-col items-start justify-start text-left">
                            <h2 className="text-[#fff] mb-6 text-[21px] font-semibold">OFFICE</h2>
                            <p className="text-white/70 text-[17px]">
                                11A, 1J, E Topsia Rd, Mirania Gardens, East Topsia, Topsia, Kolkata, West Bengal 700105
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
                            <div className="gap-4 text-white">
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
                    Orchid Arena©{new Date().getFullYear()} • All Rights Reserved
                </p>
            </div>
        </footer >
    );
};

export default Footer;