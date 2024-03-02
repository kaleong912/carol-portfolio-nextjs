import React from 'react'
import Image from 'next/image'
import HighlightWork from './HighlightWork'

const works = [
    {
        name: "Casual Enter",
        logo:"/logo_casualenter.png",
        type: "Job Matching Mobile App",
        skills: ["User Flow", "UI UX Design", "Branding"],
        desc: "It's an all-in-one application designed specifically for matching individuals from different industries and backgrounds. Through this application, people can match with various types of jobs and track their work schedules and payroll within the app. The aim is to make it easier for individuals in the gig economy to manage all aspects of their work in one convenient platform.",
        image: "/big_logo_casualenter.png",
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