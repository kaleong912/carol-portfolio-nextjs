"use client";
import React, { useState }  from 'react'
import Link from 'next/link';
import NavLink from './NavLink';
import Image from 'next/image';

const navLinks = [
  {
    title: "About.",
    path: "/",
  },
  {
    title: "UI/UX.",
    path: "/showcase",
  },
  {
    title: "Graphic.",
    path: "/grahic",
  },
];

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-[#f3f4eb] bg-opacity-100">
        <div className="flex flex-wrap items-center justify-between mx-auto px-12 py-2">
            <Link href={"/"} className="text-5xl font-semibold relative">
              <Image
                src="/logo.svg"
                width="22"
                height="21"
                alt="logo"
              />
              <Image
                        className="nav-sparkle sparkle"
                        src="/sparkle.svg"
                        alt="logo"
                        width="10"
                        height="10"
                    />
            </Link>
            <div className="menu hidden md:block md:w-auto" id="navbar">
              <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                {
                  navLinks.map((link, index) => (
                    <li key={index}>
                      <NavLink href={link.path} title={link.title}/>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div>
            <Link href={"/"} className="">Contact</Link>
            </div>
        </div>
    </nav>
  )
}

export default NavBar