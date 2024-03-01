import React from 'react'
import Image from 'next/image'
import HighlightWork from './HighlightWork'

const works = [
    {
        name: "Casual Enter",
        type: "Job Matching Mobile App",
        skills: ["User Flow", "UI UX Design", "Branding"],
        desc: "It's an all-in-one application designed specifically for matching individuals from different industries and backgrounds. Through this application, people can match with various types of jobs and track their work schedules and payroll within the app. The aim is to make it easier for individuals in the gig economy to manage all aspects of their work in one convenient platform.",
        image: "/logo_casualenter.png",
        cover: "/IMG_Entering_highlight.png"
    },

    {
        name: "Project name",
        type: "Project Type",
        skills: ["skill-1", "skill-2", "skill-3"],
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "/faren.jpg",
        cover: "/faren.jpg"
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