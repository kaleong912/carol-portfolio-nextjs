import React from 'react'

const ExperienceItem = ({exp}) => {
  return (
    <div className='flex flex-row'>
        <div className='flex flex-col items-center px-8'>
            <span>{exp.start}</span>
            <span>to</span>
            <span>{exp.end}</span>
        </div>
        <div className='flex flex-1 flex-col'>
            <h1 className='text-2xl'>{exp.title}</h1>
            <h1 className='text-xl'>{exp.company}</h1>
            <hr className='my-3' />
            <ul className='list-disc'>
                {
                    exp.descriptions.map((d, idx) => (
                        <li key={idx}>{d}</li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default ExperienceItem