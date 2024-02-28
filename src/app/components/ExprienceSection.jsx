"use client";
import React from 'react'
import ExperienceItem from './ExperienceItem';

const customTheme = {
    timeline:{
        root: {
            direction: {
                vertical: "relative border-l border-[#3E3F3C]"
            }
        },
        item: {
            point: {
                marker: {
                    base: {
                        vertical: "absolute -left-2.5 mt-0 h-5 w-5 rounded-full  bg-[#3E3F3C]"
                    }
                }
            }
        }
    }
}

const exprience = [
    {
        start: "2024 Jan",
        end: "2021 Jul",
        title: "Senior UX/UI Designer",
        company: "People Technology Holdings Limited",
        descriptions: [
            "Collaborate with product owners in understanding the design requirements, user journey, and interactions.",
            "Contribute to User research, ideation, and usability testing. ",
            "Responsible for campaign visuals and branding direction for websites, apps, and promotional materials.",
            "Develop wireframes, prototypes, and interactive mockups to communicate design concepts.",
            "Apply UX/UI design methodology to digital projects.",
            "Collaborate closely with project managers,developers to maintain design consistency throughout the development process"
        ]
    },
    {
        start: "2021 May",
        end: "2013 Nov",
        title: "UX/UI Designer",
        company: "Nuthon IT Solutions Ltd.",
        descriptions: [
            "Communicating with clients about flow and design.",
            "Create wireframes, flow diagrams, mockups, prototype, responsive website / applications designs.",
            "Enhance and maintain the user interface and usability of the responsive website.",
            "Work closely with web developers to understand technical requirements.",
            "Design creative materials including webpages, banners, eDM, namecard etc."
        ]
    },
    {
        start: "2012 Oct",
        end: "2013 Oct",
        title: "Graphic Designer",
        company: "Pet-Link Co. Ltd.",
        descriptions: [
            "Prepare output-ready artwork files both for digital and print for Corporate products / Marketing materials.",
            "Develop and maintain a consistent brand image, identity and guidelines.",
            "Product photoshooting, editing and general photo retouch."
        ]
    },
    {
        start: "2013 Oct",
        end: "2010 Oct",
        title: "Graphic Designer",
        company: "Creative Fun Ltd.",
        descriptions: [
            "Design graphics for Toys branding, packing and marketing material.",
            "Preparation of output files for production.",
            "Work closely with shops and external departments for all graphic design issue."
        ]
    }
]

const ExprienceSection = () => {
  return (
    <section className='my-12'>
        <h1 className="text-4xl font-semibold section-headline mb-4">Experience</h1>
        <div id='experience-container' className='pb-12'>
        {
            exprience.map((exp, index) => (
                <div className='experience-item relative w-full' key={index}>
                    <ExperienceItem exp={exp}/>
                </div>
            ))
        }
        </div>
    </section>
  )
}

export default ExprienceSection