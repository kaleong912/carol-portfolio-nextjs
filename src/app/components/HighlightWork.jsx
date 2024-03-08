import Image from 'next/image'
import React from 'react'
import Bubble from './Bubble'
import Link from 'next/link'


const HighlightWork = ({work}) => {
  return (
    <div className='flex flex-col'>
        <div className='flex flex-col md:flex-row'>
            <div className='flex flex-col'>
                <img src={work.logo} alt="" className='self-center md:self-start' />
                <div className='self-center'>
                    <div className="work-image   md:hidden block" style={{
                        backgroundImage: `url(${work.image})`
                    }}>

                    </div>
                </div>
                <h3 className='work-type'>{work.type}</h3>
                <div className='flex flex-wrap gap-x-3 gap-y-3.5 bubble-container text-4xl md:text-base'>
                    {
                        work.skills.map((s, idx) => (
                            <Bubble key={idx} text={s} />
                        ))
                    }
                </div>
                <div className='work-desc'>{work.desc}</div>
                <Link href={work.link}>
                    <h1 className='work-link'>View Full Project {'>'}</h1>
                </Link>
            </div>
            <div>
                <div className="work-image hidden md:block" style={{
                    backgroundImage: `url(${work.image})`
                }}>

                </div>
            </div>
        </div>
        <div >
                <img className='work-cover' src={work.cover} alt="" />
        </div>
    </div>
    
  )
}

export default HighlightWork