import React from 'react'

const ExperienceItem = ({exp}) => {
  return (
    <div className=''>
        <div className='flex flex-col md:flex-row ml-4 md:m-0'>
            <div className='flex flex-row md:flex-col justify-center md:justify-start gap-x-4 md:gap-x-0 border-0 items-center px-8 py-1 md:py-0 experience-info text-4xl md:text-base'>
                <span>{exp.start}</span>
                <span>to</span>
                <span>{exp.end}</span>
            </div>
            <div className='flex flex-1 flex-col'>
                <h1 className='jobtitle'>{exp.title}</h1>
                <h1 className='companyname'>{exp.company}</h1>
                <hr className='my-3' />
                <ul className='list-disc pl-4 text-2xl md:text-base'>
                    {
                        exp.descriptions.map((d, idx) => (
                            <li key={idx}>{d}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ExperienceItem