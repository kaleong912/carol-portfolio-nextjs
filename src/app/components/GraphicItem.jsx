'use client'
import React from 'react'
import Image from 'next/image'

export const GraphicItem = ({item}) => {
  return (
    <div className='flex flex-col mb-20'>
        <h1 className='graphic-text'>{item.text}</h1>
        <div className='flex flex-col gap-y-6'>
            {
                item.images.map((path, idx) => (
                    <Image
                    key={idx}
                    loading='lazy'
                    src={path}
                    width={0}
                    height={0}
                    sizes='100vw'
                    className='w-full h-auto'>

                    </Image>
                ))
            }
        </div>
    </div>
  )
}
