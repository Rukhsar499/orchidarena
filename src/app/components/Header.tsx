"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Navbar */}
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ? "bg-black/80 shadow-md" : "bg-transparent"
                    }`}
            >
                <div className="mx-auto flex items-center justify-between px-10 md:py-2">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 mt-4">
                        <Image
                            src="/assets/img/logo.webp"
                            alt="Right arrow"
                            width={70}
                            height={100}
                        />
                    </Link>

                    {/* Links */}


                    {/* Right side */}
                    <div className="flex items-center gap-4">
                        <nav className="hidden md:flex items-center gap-8 text-white text-[17px] font-semibold">
                            <Link href="/">HOME</Link>
                            <Link href="/about-us">ABOUT US</Link>
                            <Link href="/facilities">FACILITIES</Link>
                            <Link href="/host-an-event">HOST AN EVENT</Link>
                            <Link href="/faqs">FAQS</Link>
                            <Link href="/contact">CONTACT US</Link>
                        </nav>
                        {/* Dots menu */}
                        <button
                            onClick={() => setOpenMenu(true)}
                            className="p-2 rounded-md text-white hover:bg-white/10"
                        >
                            <Menu size={22} />
                        </button>

                        {/* Book Now button */}
                        <Link
                            href="/book"
                            className="bg-lime-500 text-white px-5 py-2 font-semibold hover:bg-lime-600 transition"
                        >
                            BOOK NOW
                        </Link>
                    </div>
                </div>
            </header>

            {/* Side Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-black text-white transform transition-transform duration-300 z-50 ${openMenu ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="p-6 flex flex-col gap-6">
                    <button
                        onClick={() => setOpenMenu(false)}
                        className="self-end text-gray-400 hover:text-white"
                    >
                        ✕
                    </button>
                    <Link href="/" onClick={() => setOpenMenu(false)}>HOME</Link>
                    <Link href="/about" onClick={() => setOpenMenu(false)}>ABOUT US</Link>
                    <Link href="/facilities" onClick={() => setOpenMenu(false)}>FACILITIES</Link>
                    <Link href="/event" onClick={() => setOpenMenu(false)}>HOST AN EVENT</Link>
                    <Link href="/faqs" onClick={() => setOpenMenu(false)}>FAQS</Link>
                    <Link href="/contact" onClick={() => setOpenMenu(false)}>CONTACT US</Link>
                </div>
            </div>

            {/* Overlay */}
            {openMenu && (
                <div
                    onClick={() => setOpenMenu(false)}
                    className="fixed inset-0 bg-black/50 z-40"
                />
            )}
        </>
    );
}
