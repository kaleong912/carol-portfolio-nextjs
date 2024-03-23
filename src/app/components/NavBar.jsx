"use client";
import React, { useState }  from 'react'
import Link from 'next/link';
import NavLink from './NavLink';
import Image from 'next/image';
import Lottie from 'lottie-react'
import EyeBlink from '../../../public/data.json'

const navLinks = [
  {
    title: "About.",
    path: "/",
  },
  {
    title: "UI/UX.",
    path: "/projects",
  },
  {
    title: "Graphic.",
    path: "/graphics",
  },
];

const iconStyle = {
  width: 22,
  height: 21
}

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-[#f3f4eb] bg-opacity-100">
        <div className="flex flex-row relative items-center px-4 md:px-0 py-2 w-full mx-auto" id="navbar">
            <Link href={"/"} className="relative hidden md:block">
            <Lottie animationData={EyeBlink} style={iconStyle} />
              {/* <Image
                src="/logo.svg"
                width="22"
                height="21"
                alt="logo"
              /> */}
              <Image
                        className="nav-sparkle sparkle"
                        src="/sparkle.svg"
                        alt="logo"
                        width="10"
                        height="10"
                    />
            </Link>
            <div className="menu" >
              <ul className="flex mx-auto md:p-0 md:flex-row md:space-x-8 mt-0">
                {
                  navLinks.map((link, index) => (
                    <li key={index}>
                      <NavLink href={link.path} title={link.title}/>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className='ml-auto'>
            <Link href={"#footer"} className="contact self-end flex flex-row justify-center items-center gap-x-2">
              <Image
                        src="/comment.svg"
                        alt="logo"
                        width="18"
                        height="18"
              />
              <span className='hidden md:block'>Contact</span>
            </Link>
            </div>
        </div>
    </nav>
  )
}

export default NavBar