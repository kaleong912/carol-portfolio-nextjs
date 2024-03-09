import React from 'react'
import Bubble from './Bubble'

const skills = [
    "User Research", "User / Data Analysis", "User Flow", "Wireframing",
    "information Architecture", "Prototype & Mockup", "Usability Testing",
    "Illustration", "Branding"
]

const tools = [
    "Sketch", "Figma", "Adobe XD", "PhotoShop", "Illustrator", "InDesign"
]

const SkillSection = () => {
  return (
    <div className='my-12'>
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
            <div className="flex flex-col">
                <h1 className="text-4xl font-semibold section-headline">Skills</h1>
                <div className="flex flex-wrap gap-x-3 gap-y-3.5 bubble-container text-4xl md:text-base">
                    {
                        skills.map((text, index) => (
                            <div key={index}>
                                <Bubble text={text}/>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-col">
                <h1 className="text-4xl font-semibold section-headline">Tools</h1>
                <div className="flex flex-wrap gap-x-3 gap-y-3.5 bubble-container text-4xl md:text-base">
                    {
                        tools.map((text, index) => (
                            <div key={index}>
                                <Bubble text={text} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default SkillSection