import React from 'react'
import Bubble from './Bubble'
import Image from 'next/image'

const ProjectItem = ({work}) => {
  return (
    <div className='flex flex-col'>
        <div className='flex flex-col md:flex-row'>
            <div className='flex flex-col'>
                <img src={work.logo} alt="" className='self-center md:self-start' />
                <div>
                    <div className="work-image  md:hidden block" style={{
                        backgroundImage: `url(${work.image})`
                    }}>

                    </div>
                </div>
                <h3 className='work-type'>{work.type}</h3>
                <div className='flex flex-wrap gap-x-3 gap-y-3.5 bubble-container'>
                    {
                        work.skills.map((s, idx) => (
                            <Bubble key={idx} text={s} />
                        ))
                    }
                </div>
                <div className='work-desc'>{work.desc}</div>
            </div>
            <div>
                <div className="work-image hidden md:block" style={{
                    backgroundImage: `url(${work.image})`
                }}>

                </div>
            </div>
        </div>

        <div className='flex flex-col'>
            {
                work.contents.map((content, idx) => (
                    <div className='flex flex-col' key={idx}>
                        <h1 className='content-headline gap-2'>{ content.text }</h1>

                        <div className='flex flex-wrap items-center justify-center'>
                            {
                                content.images.map((path, idx) => (
                                    <img key={idx} src={path} />
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ProjectItem