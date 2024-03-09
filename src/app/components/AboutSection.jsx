import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <div className='my-12'>
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
          <div className='info-text'>
Hi, I&apos;m Carol Cheung a UX/UI & Graphic designer from Hong Kong. I have over 9 years of experience in UI/UX and graphic design. For the past 8 years, I&apos;ve collaborated with IT solutions agencies, honing my skills in creating diverse products for various brands. 
<br />My passion lies in improving lives through design, and I&apos;m committed to continuous learning and growth.  </div>
          <div className='relative'>
            <div className='about-avator'>

            </div>
            <div className='about-shadow'>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection