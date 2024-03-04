import React from 'react'
import Image from 'next/image'
import HighlightWork from './HighlightWork'

const works = [
    {
        name: "Casual Enter",
        logo:"/logo_casualenter.png",
        type: "Mobile App & Web",
        skills: ["User Research", "User Flow", "UI Design"],
        desc: "'Casual Enter' is an all-in-one application designed specifically for matching individuals from different industries and backgrounds. Through this application, people can match with various types of jobs and track their work schedules and payroll within the app. The aim is to make it easier for individuals in the gig economy to manage all aspects of their work in one convenient platform.",
        image: "/big_logo_casualenter.png",
        link: "/"
    },

    {
        name: "Citysuper Foodie",
        logo:"/logo_citysuperfoodie.png",
        type: "Rresponsive Website & CMS",
        skills: ["Wireframing", "UI Design"],
        desc: "This is a CMS (Content Management System) designed for internal employees of citysuper. Its main purpose is to facilitate simple page design for promoting different products, incorporating recipes, and showcasing products available in the online store. Within this CMS, citysuper employees can create promotional pages, upload various images, and customize the layout. They can also add links to the website and include different products available in the online store.",
        image: "/mockup01_citysuperfoodie.png",
        link: "/"
    },

    {
        name: "Midland",
        logo:"/logo_midland.png",
        type: "Webpage for kiosks & Android TV ",
        skills: ["User Flow", "UI Design"],
        desc: "This webpage is created for the 'Midland' storefront, showcases televisions and kiosks. It's dedicated to presenting property listings across various areas. Real estate agents can easily select regions on a map to view listings specific to those areas, complete with property details and floor plans, streamlining the sales process.",
        image: "/mockup01_midland.png",
        link: "/"
    },

    {
        name: "visiontrustee",
        logo:"/logo_visiontrustee.png",
        type: "Rresponsive Website & CMS",
        skills: ["User Flow", "UI Design"],
        desc: "This is a platform specifically designed for asset management. Customers can input their assets into the platform and receive investment advice from the company's employees. The platform also offers various types of investments, allowing users to conveniently manage asset transfers and investment activities within the same interface.",
        image: "/mockup01_visiontrustee.png",
        link: "/"
    }
]

const HighlightSection = () => {
  return (
    <section className='my-12'>
        <div className='relative text-center mb-14'>
            <div className='relative mx-auto w-fit'>
                <Image
                    className="highlight-sparkle-1 sparkle"
                    src="/sparkle.svg"
                    alt="logo"
                    width="35"
                    height="36"
                />
                <h1 className="text-4xl font-semibold section-headline mb-4">Highlights Work</h1>
                <Image
                    className="highlight-sparkle-2 sparkle"
                    src="/sparkle.svg"
                    alt="logo"
                    width="35"
                    height="36"
                />
            </div>

        </div>

        <div className='flex flex-col gap-y-20'>
        {
            works.map((work, idx) => (
                <div key={idx}>
                    <HighlightWork work={work} />
                </div>
            ))
        }
        </div>
    </section>
  )
}

export default HighlightSection