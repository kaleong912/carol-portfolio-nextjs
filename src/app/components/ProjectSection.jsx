'use client'

import {useState} from 'react'
import ProjectItem from './ProjectItem'
import ScrollSpy from "react-ui-scrollspy";

const ProjectSection = ({projects}) => {

    const [spy, setSpy] = useState('')

    const getName = (id) => {

        if(id == '') return ''

        const r = projects.find((p) => (
            p.link == id
        ))

        return r.name ?? ''
    }

    const onPress = (e) => {
        e.preventDefault();
        const target = window.document.getElementById(
          e.currentTarget.href.split("#")[1]
        );
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      };

    const onUpdate = (id) => {
        setSpy(id)
    }

  return (

    
    
    <div className='flex flex-col pb-32 pt-48 relative'>
        <div className='scrollspy-container'>

                <div className='scrollspy-name-container hidden md:flex justify-center'>
                    {
                        getName(spy)
                    }
                </div>
            
                <div className='flex flex-col gap-y-2 items-stretch justify-center scrollspy-inner-container'>
                    {
                    projects.map((p, idx) => (
                        <a className='inline-block h-10 scroll-spy' onClick={(e) => onPress(e)} key={idx} href={'#'+p.link}>
                        <div className=' w-full ' data-to-scrollspy-id={p.link}> </div>
                        </a>
                    ))
                    }
                </div>
            
        </div>
      <ScrollSpy onUpdateCallback={ (id)=> onUpdate(id) }>
        {
            projects.map((p, idx) => (
                <ProjectItem key={idx} work={p} />
            ))
        }
      </ScrollSpy>
    </div>
  )
}

export default ProjectSection