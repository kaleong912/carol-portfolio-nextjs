import React from 'react'
import NavBar from '../components/NavBar'
import ProjectItem from '../components/ProjectItem'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
    {
        name: "Casual Enter",
        logo:"/logo_casualenter.png",
        type: "Mobile App & Web",
        skills: ["User Research", "User Flow", "UI Design"],
        desc: "'Casual Enter' is an all-in-one application designed specifically for matching individuals from different industries and backgrounds. Through this application, people can match with various types of jobs and track their work schedules and payroll within the app. The aim is to make it easier for individuals in the gig economy to manage all aspects of their work in one convenient platform.",
        image: "/big_logo_casualenter.png",
        link: "/projects#casual_enter",
        contents:[
            {
                text: "Project Stage",
                images: [
                    "/logo_casualenter.png",
                    "/logo_casualenter.png"
                ]
            }
            ,
            {
                text: "Project Stage",
                images: [
                    "/big_logo_casualenter.png"
                ]
            }
        ]
    }
]

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar/>
      <section className='mx-auto py-4 px-4'>
      <div className='flex flex-col pb-32 pt-48'>
      <Link href={"/"}>
      <button className='self-start btn-back flex items-center justify-center px-4 py-1 gap-x-2 rounded-full'>
        <Image
        src="/back_arrow.svg"
        alt=""
        width={24}
        height={27}
        />
        Back
        </button>
        </Link>
        {
            projects.map((p, idx) => (
                <ProjectItem key={idx} work={p} />
            ))
        }
      </div>
      </section>
    </main>
  )
}
