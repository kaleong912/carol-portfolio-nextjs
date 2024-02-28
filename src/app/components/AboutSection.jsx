import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section className='my-12'>
      <div className='relative'>
        <div className='relative w-fit'>
          <h1 className='text-4xl font-semibold section-headline inline-block'>About Me</h1>
          <Image
              className="about-sparkle sparkle"
              src="/sparkle.svg"
              alt="logo"
              width="35"
              height="36"
          />
        </div>
        <div className='flex flex-col-reverse justify-center items-center md:flex-row'>
          <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /><br />Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
          <div className='relative'>
            <div className='about-avator'>

            </div>
            <div className='about-shadow'>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection