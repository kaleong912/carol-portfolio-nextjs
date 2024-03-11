import React from 'react'
import NavBar from '../components/NavBar'
import ProjectSection from '../components/ProjectSection'
import Image from 'next/image'
import Link from 'next/link'
import ScrollToTopButton from '../components/ScrollToTopButton'
import FooterSection from '../components/FooterSection'
import ScrollSpy from "react-ui-scrollspy";


const projects = [
    {
        name: "Casual Enter",
        logo:"/logo_casualenter.png",
        type: "Mobile App & Web",
        skills: ["User Research", "User Flow", "UI Design"],
        desc: "'Casual Enter' is an all-in-one application designed specifically for matching individuals from different industries and backgrounds. Through this application, people can match with various types of jobs and track their work schedules and payroll within the app. The aim is to make it easier for individuals in the gig economy to manage all aspects of their work in one convenient platform.",
        image: "big_logo_casualenter.png",
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
                text: "Printing Materials & Instruction Guide & Shop QR code Poster",
                images: [
                    "/project_staffenter/staffenter_detail_printingmaterials_02.png"
                ]
            }
            

        ]
    },

    {
        name: "Citysuper Foodie",
        logo:"/project_citysuper_foodie/foodie_logo_01.png",
        type: "Rresponsive Website & CMS",
        skills: ["User Flow", "UI Design"],
        desc: "This is a CMS (Content Management System) designed for internal employees of citysuper. Its main purpose is to facilitate simple page design for promoting different products, incorporating recipes, and showcasing products available in the online store. <br /><br />Within this CMS, citysuper employees can create promotional pages, upload various images, and customize the layout. They can also add links to the website and include different products available in the online store.",
        image: "/project_citysuper_foodie/foodie_mockup_cover_01.png",
        link: "foodie",
        contents:[
            {
                text: "Competitive Analysis & User Research",
                images: [
                    "/project_citysuper_foodie/foodie_detail_userresearch_01.png",
                    "/project_citysuper_foodie/foodie_detail_userresearch_02.png"
                ]
            }
            ,
            {
                text: "CMS UI Design",
                images: [
                    "/project_citysuper_foodie/foodie_detail_UI_01.png",
                    "/project_citysuper_foodie/foodie_detail_UI_02.png",
                ]
            }
            ,
            {
                text: "UI Visual Designn",
                images: [
                    "/project_citysuper_foodie/foodie_detail_UI_03.png"
                ]
            }
            

        ]
    },

    {
        name: "Citysuper E-shop",
        logo:"/project_citysuper_eshop/citysupereshop_logo_01.png",
        type: "Mobile App & CMS",
        skills: ["Wireframing", "UI Design"],
        desc: "Client requests to leverage their existing online web store dates as the basis for developing a mobile application. This app needs to accommodate various categories of member benefits and services offered by City Super. Additionally, it should incorporate a feature allowing users to apply discount codes during their transactions. <br /><br />The CMS (Content Management System) designed for internal employees of citysuper. Its main purpose is to categorize and calculate discounts & discounts code for promotional products on the e-shop app & website.",
        image: "/project_citysuper_eshop/citysupereshop_mockup_cover_01.png",
        link: "citysuper",
        contents:[
            {
                text: "Wireframing",
                images: [
                    "/project_citysuper_eshop/citysupereshop_detail_wireframing_01.png"
                ]
            }
            ,
            {
                text: "UI Visual",
                images: [
                    "/project_citysuper_eshop/citysupereshop_detail_UI_01.png",
                    "/project_citysuper_eshop/citysupereshop_detail_graphic_01.png"
                ]
            }
            ,
            {
                text: "CMS UI",
                images: [
                    "/project_citysuper_eshop/citysupereshop_detail_CMSUI_01.png",
                    "/project_citysuper_eshop/citysupereshop_detail_CMSUI_02.png",
                    "/project_citysuper_eshop/citysupereshop_detail_CMSUI_03.png",
                    "/project_citysuper_eshop/citysupereshop_detail_CMSUI_04.png"
                ]
            }
            ,
            {
                text: "UI Component",
                images: [
                    "/project_citysuper_eshop/citysupereshop_detail_UIcomponent_01.png",
                ]
            }
            

        ]
    },

    {
        name: "Visiontrustee",
        logo:"/project_visiontrustee/visiontrustee_logo_01.png",
        type: "Rresponsive Website & CMS",
        skills: ["User Flow", "UI Design"],
        desc: "This is a platform specifically designed for asset management. Customers can input their assets into the platform and receive investment advice from the company's employees. The platform also offers various types of investments, allowing users to conveniently manage asset transfers and investment activities within the same interface.",
        image: "/project_visiontrustee/visiontrustee_mockup_cover_01.png",
        link: "visiontrustee",
        contents:[
            {
                text: "Responsive UI Design",
                images: [
                    "/project_visiontrustee/visiontrustee_detail_UI_01.png",
                    "/project_visiontrustee/visiontrustee_detail_UI_02.png",
                    "/project_visiontrustee/visiontrustee_detail_UI_03.png",
                    "/project_visiontrustee/visiontrustee_detail_UI_04.png",
                ]
            }
            

        ]
    },

    {
        name: "Midland",
        logo:"/project_midland/midland_logo_01.png",
        type: "Webpage for kiosks & Android TV",
        skills: ["Wireframing", "UI Design"],
        desc: "This webpage is created for the 'Midland' storefront, showcases televisions and kiosks. It's dedicated to presenting property listings across various areas. Real estate agents can easily select regions on a map to view listings specific to those areas, complete with property details and floor plans, streamlining the sales process. <br /><br />Additionally, there's a vertical television screen installed facing the storefront, displaying the latest property listings and relevant information about nearby properties, providing quick updates for passersby.",
        image: "/project_midland/midland_mockup_cover_01.png",
        link: "midland",
        contents:[
            {
                text: "Wireframing",
                images: [
                    "/project_midland/midland_detail_wireframing_01.png",
                    "/project_midland/midland_detail_wireframing_02.png",
                ]
            }
            ,
            {
                text: "UI Visual Design",
                images: [
                    "/project_midland/midland_detail_UI_01.png",
                    "/project_midland/midland_detail_UI_02.png",
                ]
            }
            ,
            {
                text: "Showcase",
                images: [
                    "/project_midland/midland_detail_showcase_01.png",
                ]
            }
            

        ]
    },

    {
        name: "Travel Seed",
        logo:"/project_travelseed/travelseed_logo_01.png",
        type: "Responsive Website",
        skills: ["User Flow", "UI Design"],
        desc: "This is a travel website featuring up-to-date travel information from various destinations, blogger articles, categorized possibly by seasons or different locations. Users can also read or download e-books about specific destinations online.",
        image: "/project_travelseed/travelseed_mockup_cover_01.png",
        link: "travel_seed",
        contents:[
            {
                text: "User Flow",
                images: [
                    "/project_travelseed/travelseed_detail_userflow_01.png"
                ]
            }
            ,
            {
                text: "UI Visual Design",
                images: [
                    "/project_travelseed/travelseed_detail_UI_01.png",
                    "/project_travelseed/travelseed_detail_UI_02.png",
                    "/project_travelseed/travelseed_detail_graphic_02.png"
                ]
            }
        

        ]
    },

    {
        name: "The Entrance",
        logo:"/project_theentrance/theentrance_logo_01.png",
        type: "Mobile App & Responsive Website",
        skills: ["UI Design"],
        desc: "This is a property management application designed to allow customers to conveniently book facilities and stay updated on the latest news regarding the property, all from their mobile phones.",
        image: "/project_theentrance/theentrance_mockup_cover_01.png",
        link: "entrance",
        contents:[
            {
                text: "UI Design",
                images: [
                    "/project_theentrance/theentrance_detail_UI_01.png"
                ]
            }
            
        ]
    },

    {
        name: "We Truck",
        logo:"/project_wetruck/wetruck_logo_01.png",
        type: "Mobile App & Website & CMS",
        skills: ["Wireframing", "UI Design"],
        desc: "The client is an old-fashioned container shipping company. They wish to digitize their order matching function using an application and CMS, while also creating a promotional website to advertise. This move aims to enhance efficiency and align with the modern trend of digitalization and electronic demands.",
        image: "/project_wetruck/wetruck_mockup_cover_01.png",
        link: "wetruck",
        contents:[
            {
                text: "Wireframing",
                images: [
                    "/project_wetruck/wetruck_detail_wireframing_01.png"
                ]
            }
            ,
            {
                text: "UI Visual Design",
                images: [
                    "/project_wetruck/wetruck_detail_UI_01.png"
                ]
            }
        

        ]
    }
    
    
]


export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col relative">
    <ScrollToTopButton />
      
      <section className='mx-auto py-4 px-4 overflow-x-hidden relative'>
      <ProjectSection projects={projects}/>
      <FooterSection />
      </section>
    </main>
  )
}
