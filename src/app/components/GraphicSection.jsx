import React from 'react'
import { GraphicItem } from './GraphicItem'

const items = [
    {
        text: "Branding Guideline",
        images: [
            "/graphic/graphic_branding_01.png",
            "/graphic/graphic_branding_02.png",
            "/graphic/graphic_branding_03.png"
        ]
    },
    {
        text: "illustration",
        images: [
            "/graphic/graphic_illustration_01.png"
        ]
    },
    {
        text: "Instructions Design",
        images: [
            "/graphic/graphic_instructions_01.png",
            "/graphic/graphic_instructions_02.png"
        ]
    },
    {
        text: "Name Card Design",
        images: [
            "/graphic/graphic_namecarddesign_01.png"
        ]
    },
    {
        text: "Packing Design",
        images: [
            "/graphic/graphic_packing_01.png",
            "/graphic/graphic_packing_02.png"
        ]
    },
    {
        text: "Promotional Materials Design",
        images: [
            "/graphic/graphic_promotional_01.png",
            "/graphic/graphic_promotional_02.png",
            "/graphic/graphic_promotional_03.png"
        ]
    }
]

const GraphicSection = () => {
  return (
    <div className='flex flex-col pb-32 pt-20'>
    {
        items.map((item, idx) => (
            <GraphicItem key={idx} item={item} />
        ))
    }

    </div>
  )
}

export default GraphicSection