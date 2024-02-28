import Image from 'next/image'
import React from 'react'
import Bubble from './Bubble'


const HighlightWork = ({work}) => {
  return (
    <div className='flex flex-col'>
        <div className='flex flex-row'>
            <div className='flex flex-col'>
                <h1 className='work-name'>{work.name}</h1>
                <h3 className='work-type'>{work.type}</h3>
                <div className='flex flex-wrap'>
                    {
                        work.skills.map((s, idx) => (
                            <Bubble key={idx} text={s} />
                        ))
                    }
                </div>
                <div className='work-desc'>{work.desc}</div>
            </div>
            <div>
                <div className="work-image" style={{
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