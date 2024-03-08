"use client";
import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion';
import {TypeAnimation} from 'react-type-animation';

const HeroSection = () => {
  return (
    <section className="pb-32 pt-48" id='hero-container'>
        <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-12 max-w-full">
            <div className="col-span-7">
                <div className="relative w-fit">
                    <Image
                        src="/logo.svg"
                        alt="logo"
                        width="195"
                        height="179"
                    />
                    <Image
                        className="hero-sparkle sparkle"
                        src="/sparkle.svg"
                        alt="logo"
                        width="78"
                        height="82"
                    />
                </div>
            </div>
            <div 
                    
                    className="col-span-8 place-self-center justify-self-start sm:text-left ">
                    
                    <h1 className="mb-4 text-5xl sm:text-3xl lg:text-5xl lg:leading-normal font-extrabold">
                        <span className="">
                            Hello, I'm{" "}
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                "Carol",
                                1000,
                                "UI/UX Designer",
                                1000,
                                "Web Designer",
                                1000,
                                "Mobile App Designer",
                                1000,
                                "Graphic Designer",
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            />
                    </h1>
                </div>
                <div className="col-span-7">
                    <h1 className="text-6xl md:text-3xl">Portfolio Website</h1>
                </div>
                <div className="col-span-7 mt-8 md:mt-0">
                    <span className="bg-[#3e3f3c] text-white rounded-full px-4 py-2 uppercase text-4xl md:text-xl">Carol Chenug</span>
                </div>
        </div>
    </section>
  )
}

export default HeroSection