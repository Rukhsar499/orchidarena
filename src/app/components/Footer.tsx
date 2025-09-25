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
    { name: "Refund Policy", href: "/refund-policy" },
    { name: "Terms & Conditions", href: "/terms-and-conditions" },
    { name: "Cancellation Policy", href: "/cancellation-policy" },
    { name: "Privacy Policy", href: "/privacy-policy" },
];

const socialLinks: SocialItem[] = [
    { icon: <FaFacebookF />, href: "#", label: "Facebook" },
    { icon: <FaWhatsapp />, href: "#", label: "Whatsapp" },
    { icon: <FaInstagram />, href: "#", label: "Instagram" },
    { icon: <FaTwitter />, href: "#", label: "Twitter" },
];

const contactInfo = [
    { icon: <MdPhone />, text: "+91 7003810162" },
    { icon: <MdEmail />, text: "info@beyuvana.com" },
    { icon: <MdLocationOn />, text: "Kolkata, India" },
];

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#272702] text-white md:py-20 py-4">
            <div className="max-w-7xl container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 text-left">
                    <div className="flex flex-col">
                        <h2 className="text-[#fff] mb-6 text-[21px] font-semibold">KOLKATA'S PREMIER SPORTS ARENA</h2>
                        <p className="text-white/70 text-[17px]">
                            <b>Orchid Arena</b> is your premier multi-sports destination offering world-class facilities for football, pickleball, and cricket, well-maintained environment. Orchid Arena is the perfect venue for sports lovers to train, play, and compete every day.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className=" flex flex-col items-start justify-start text-left">
                        <h2 className="text-[#fff] mb-6 text-[21px] font-semibold">OFFICE</h2>
                        <p className="text-white/70 text-[17px]">
                            11A, 1J, E Topsia Rd, Mirania Gardens, East Topsia, Topsia, Kolkata, West Bengal 700105
                        </p>
                    </div>

                    {/* Legal Links */}
                    <div className="flex flex-col items-start justify-start text-left">
                        <h2 className="text-[#fff] mb-6 text-[21px] font-semibold">Links</h2>
                        <ul className="space-y-2 text-white/70 font-[DM Sans] text-[16px]">
                            {legalLinks.map((link) => (
                                <li key={link.name} className="flex items-center gap-2">
                                    <a href={link.href} className="hover:text-[#DFC362] transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div className="pt-10 flex flex-col items-start justify-start text-left">
                        <h2 className="text-[#fff] mb-6 text-[21px] font-semibold">Get in Touch</h2>
                        <ul className="space-y-2 text-white/70 text-[16px] mb-4">
                            {contactInfo.map((item, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <span className="text-[#DFC362] text-lg">{item.icon}</span>
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                        <h2 className="text-[#DFC362] mb-2 font-[Grafiels] text-[1.2rem]">Social Links</h2>
                        <div className="flex gap-4 text-white">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="hover:text-[#DFC362] transition-colors text-xl"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

                <hr className="my-6 border-white/20" />
                <p className="text-left text-white text-lg">
                    Orchid Arena©{new Date().getFullYear()} • All Rights Reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;