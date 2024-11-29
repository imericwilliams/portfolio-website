'use client';

import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const nav_items = [
    {
        name: "Home",
        href: "/",
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
// #FIXME: Need to collapse into hamburger icon once it is in mobile version
export default function Navbar() {
    const pathname = usePathname();
    return (
        <div className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-background-color">
            {/* Navbar */}
            <div className="justify-between md:items-center md:flex">
                {/* Left side of navbar */}
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <Link href="/">
                      <div className="container flex items-center space-x-2">
                        <h2 className="text-2xl font-bold text-stretch">Eric Williams</h2>
                      </div>
                    </Link>
                </div>
                {/* Right side of navbar */}
                <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 font-bold">
                    {nav_items.map((navitem) => {
                        return (
                        <Link
                        key={navitem.name}
                        href={navitem.href}
                        >
                            <p>{navitem.name}
                            </p>
                        </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};