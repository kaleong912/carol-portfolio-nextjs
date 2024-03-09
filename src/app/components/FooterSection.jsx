import React from 'react'
import Bubble from './Bubble'
import Image from 'next/image'

const FooterSection = () => {
  return (
    <div className='my-12' id='footer'>
        <div className='flex flex-col md:flex-row flex-nowrap w-full'>
            <div className="flex flex-col min-w-96 gap-y-3 ">
                <h1 className='section-headline'>Contact</h1>
                <div className='bg-[#3e3f3c] text-white rounded-full px-4 py-2 uppercase text-center self-start'>carol cheung</div>
                <div className='flex flex-col md:flex-row gap-y-1 items-start md:items-center'>
                    <Bubble classes="w-fit min-w-0 md:min-w-40 text-center font-semibold" text="Phone" />
                    <h3 className='footer-info ml-0 md:ml-6 font-semibold'>+852 9198 0066</h3>
                </div>

                <div className='flex flex-col md:flex-row gap-y-1  items-start md:items-center'>
                    <Bubble classes="w-fit md:min-w-40 text-center font-semibold" text="Mail" />
                    <h3 className='footer-info ml-0 md:ml-6 font-semibold'>cheung3413@gmail.com</h3>
                </div>

                <div className='flex flex-col md:flex-row gap-y-1  items-start md:items-center'>
                    <Bubble classes="w-fit md:min-w-40 text-center font-semibold" text="Portfolio" />
                    <h3 className='footer-info ml-0 md:ml-6  font-semibold'>https://carolcheung.cc</h3>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center mt-24 md:mt-0 ml-0 md:ml-96'>
                <Image
                    src="/fi_9131566.svg"
                    alt="Heart"
                    width={130}
                    height={130}>

                </Image>
                <h1 className='companyname text-center'>Thank You For<br />Your Scrolling :D</h1>
            </div>
        </div>
    </div>
  )
}

export default FooterSection