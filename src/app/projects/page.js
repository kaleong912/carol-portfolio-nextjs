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
        image: "/project_casualenter/casualenter_mockup_cover_01.png",
        link: "casual_enter",
        contents:[
            {
                text: "Project Stage",
                images: [
                    "/project_casualenter/casualenter_detail_timeline_01.png"
                ]
            }
            ,
            {
                text: "Competitive Analysis & User Research",
                images: [
                    "/project_casualenter/casualenter_detail_ userresearch_01.png",
                    "/project_casualenter/casualenter_detail_ userresearch_02.png"
                ]
            }
            ,
            {
                text: "User Flow",
                images: [
                    "/project_casualenter/casualenter_detail_ userflow_01.png",
                    "/project_casualenter/casualenter_detail_ userflow_02.png"
                ]
            }
            ,
            {
                text: "UI Visual Design",
                images: [
                    "/project_casualenter/casualenter_detail_UI_01.png",
                    "/project_casualenter/casualenter_detail_UI_02.png"
                ]
            }
            ,
            {
                text: "Color & Typography",
                images: [
                    "/project_casualenter/casualenter_detail_color_01.png"
                ]
            }
            ,
            {
                text: "UI Component Handing",
                images: [
                    "/project_casualenter/casualenter_detail_component_01.png"
                ]
            }
            ,
            {
                text: "State Graphics",
                images: [
                    "/project_casualenter/casualenter_detail_graphic_01.png"
                ]
            }
            ,
            {
                images: [
                    "/project_casualenter/casualenter_detail_mockup_01.png"
                ]
            }

        ]
    },

    {
        name: "Staff Enter",
        logo:"/project_staffenter/staffenter_logo_01.png",
        type: "Mobile App & Web",
        skills: ["Illustration", "User Flow", "UI Design"],
        desc: "'Staff Enter' is a clock-in/clock-out system designed for employers to manage their employees' attendance. All employees simply need to install an application or visit the website. They can then scan a QR code to record their clock-in and clock-out times. <br /><br />Employers can generate various types of reports based on the times employees scan the QR code, making monthly payroll calculations faster and more convenient.",
        image: "/project_staffenter/staffenter_mockup_cover_01.png",
        link: "staff_enter",
        contents:[
            {
                text: "User Flow",
                images: [
                    "/project_staffenter/staffenter_detail_userflow_01.png"
                ]
            }
            ,
            {
                text: "UI Visual Design",
                images: [
                    "/project_staffenter/staffenter_detail_UI_01.png",
                    "/project_staffenter/staffenter_detail_UI_02.png"
                ]
            }
            ,
            {
                text: "Printing Materials ｜ Instruction Guide & Shop QR code Poster",
                images: [
                    "/project_staffenter/staffenter_detail_userflow_01.png"
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
