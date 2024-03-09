import React from 'react'
import Bubble from './Bubble'
import Image from 'next/image'

const ProjectItem = ({work}) => {
  return (
    <div className='flex flex-col mb-48' id={work.link} style={{ scrollMarginTop: '40px' }}>
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
                <div className='flex flex-wrap gap-x-3 gap-y-3.5 bubble-container text-xl md:text-base'>
                    {
                        work.skills.map((s, idx) => (
                            <Bubble key={idx} text={s} />
                        ))
                    }
                </div>
                <div className='work-desc whitespace-pre-line' >{
                    work.desc.split('<br />').map((t, idx) => (
                        <p key={idx}>{t}<br /></p>
                        
                    ))
                }</div>
            </div>
            <div>
                <div className="work-image hidden md:block" style={{
                    backgroundImage: `url(${work.image})`
                }}>

                </div>
            </div>
        </div>

        <div className='flex flex-col mt-16'>
            {
                work.contents.map((content, idx) => (
                    <div className='flex flex-col' key={idx}>
                        <h1 className='content-headline gap-2'>{ content.text }</h1>

                        <div className='flex flex-wrap items-center justify-center gap-3 mb-12 mt-6'>
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