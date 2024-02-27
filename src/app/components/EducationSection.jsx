import React from 'react'

const education = [
    {
        year: "2008 - 2010",
        academy: "Hong Kong Design Institute ( HKDI )",
        course: "Higher Diploma in Graphic Information Design"
    },
    {
        year: "2006 - 2007",
        academy: "Hong Kong Design Institute ( HKDI )",
        course: "Higher Diploma in Design - Foudation Course"
    }
]

const EducationSection = () => {
  return (
    <section className='my-12'>
        <h1 className="text-4xl font-semibold section-headline">Education</h1>
        <div className="flex flex-col gap-2">
            {
                education.map((e, index) => (
                    <div key={index} className="flex flex-row items-center">
                        <div className="border-2 border-current rounded-full px-6 py-2 font-semibold mr-8">{e.year}</div>
                        <div className="flex flex-col">
                            <div className="text-xl font-bold">{e.academy}</div>
                            <div className="text-xl font-bold">{e.course}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default EducationSection