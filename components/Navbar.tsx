'use client';

import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoMdMenu, IoMdClose } from "react-icons/io"

const nav_items = [
    {
        name: "Home",
        href: "#",
    },
    {
        name: "About",
        href: "#about-section",
    },
    {
        name: "Projects",
        href: "#projects-section",
    },
];
export default function Navbar() {
    const [navbar, setNavbar] = useState(false)
    return (
        <div className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow bg-background-color">
            {/* Navbar */}
            <div className="justify-between md:items-center md:flex">
                {/* Left side of navbar */}
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <Link href="/">
                      <div className="container flex items-center space-x-2">
                        <h2 className="text-3xl font-bold text-stretch hover:underline hover:underline-offset-8 hover:decoration-accent-color hover:decoration-2">Eric Williams</h2>
                      </div>
                    </Link>
                    <div className="md:hidden">
                    <button
                      className="p-2 rounded-md outline-none focus:foreground-color focus:border"
                      onClick={() => setNavbar(!navbar)}
                    >
                        {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
                    </button>
                </div>
                </div>
                {/* Right side of navbar */}
                <div className={`pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}>
                <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                    {nav_items.map((navitem) => {
                        return (
                        <Link
                        key={navitem.name}
                        href={navitem.href}
                        className={"block lg:inline-block cursor-pointer text-right font-bold text-xl hover:underline hover:underline-offset-8 hover:decoration-accent-color hover:decoration-2"}
                        onClick={() => setNavbar(!navbar)}
                        >
                            <p>{navitem.name}
                            </p>
                        </Link>
                        )
                    })}
                </div>
                </div>
            </div>
        </div>
    );
};