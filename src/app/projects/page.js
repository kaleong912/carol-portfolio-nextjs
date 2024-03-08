import React from 'react'
import NavBar from '../components/NavBar'
import ProjectItem from '../components/ProjectItem'
import Image from 'next/image'
import Link from 'next/link'
import ScrollToTopButton from '../components/ScrollToTopButton'

const projects = [
    {
        name: "Casual Enter",
        logo:"/logo_casualenter.png",
        type: "Mobile App & Web",
        skills: ["User Research", "User Flow", "UI Design"],
        desc: "'Casual Enter' is an all-in-one application designed specifically for matching individuals from different industries and backgrounds. Through this application, people can match with various types of jobs and track their work schedules and payroll within the app. The aim is to make it easier for individuals in the gig economy to manage all aspects of their work in one convenient platform.",
        image: "/casualenter_mockup_cover_01.png",
        link: "/projects#casual_enter",
        contents:[
            {
                text: "Project Stage",
                images: [
                    "/casualenter_detail_timeline_01.png"
                ]
            }
            ,
            {
                text: "Competitive Analysis & User Research",
                images: [
                    "/casualenter_detail_ userresearch_01.png",
                    "/casualenter_detail_ userresearch_02.png"
                ]
            }
            ,
            {
                text: "User Flow",
                images: [
                    "/casualenter_detail_ userflow_01.png",
                    "/casualenter_detail_ userflow_02.png"
                ]
            }
            ,
            {
                text: "UI Visual Design",
                images: [
                    "/casualenter_detail_UI_01.png",
                    "/casualenter_detail_UI_02.png"
                ]
            }
            ,
            {
                text: "Color & Typography",
                images: [
                    "/casualenter_detail_color_01.png"
                ]
            }
            ,
            {
                text: "UI Component Handing",
                images: [
                    "/casualenter_detail_component_01.png"
                ]
            }
            ,
            {
                text: "State Graphics",
                images: [
                    "/casualenter_detail_graphic_01.png"
                ]
            }
            ,
            {
                images: [
                    "/casualenter_detail_mockup_01.png"
                ]
            }

        ]
    }
]

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col relative">
    <ScrollToTopButton />
      <NavBar/>
      <section className='mx-auto py-4 px-4'>
      <div className='flex flex-col pb-32 pt-48'>
      <Link href={"/"}>
      <button className='self-start btn-back flex items-center justify-center px-4 py-1 gap-x-2 rounded-full'>
        <Image
        src="/back_arrow.svg "
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
