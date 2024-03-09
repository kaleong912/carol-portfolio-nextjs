import React from 'react'

export const GraphicItem = ({item}) => {
  return (
    <div className='flex flex-col mb-20'>
        <h1 className='graphic-text'>{item.text}</h1>
        <div className='flex flex-col gap-y-6'>
            {
                item.images.map((path, idx) => (
                    <img key={idx} src={path} />
                ))
            }
        </div>
    </div>
  )
}
