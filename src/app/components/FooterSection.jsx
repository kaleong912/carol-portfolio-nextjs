import React from 'react'
import Bubble from './Bubble'
import Image from 'next/image'

const FooterSection = () => {
  return (
    <section className='my-12'>
        <div className='flex flex-col md:flex-row flex-nowrap '>
            <div className="flex flex-col min-w-96 gap-y-3 mr-48">
                <h1 className='footer-header'>Contact</h1>
                <div className='footer-name uppercase'>carol cheung</div>
                <div className='flex flex-col md:flex-row'>
                    <Bubble classes="w-fit min-w-0 md:min-w-40 text-center" text="Phone" />
                    <h3 className='footer-info ml-0 md:ml-12'>+852 9198 0066</h3>
                </div>

                <div className='flex flex-col md:flex-row'>
                    <Bubble classes="w-fit md:min-w-40 text-center" text="Mail" />
                    <h3 className='footer-info ml-0 md:ml-12'>cheung3413@gmail.com</h3>
                </div>

                <div className='flex flex-col md:flex-row'>
                    <Bubble classes="w-fit md:min-w-40 text-center" text="Portfolio" />
                    <h3 className='footer-info ml-0 md:ml-12'>https://carolcheung.cc</h3>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <Image
                    src="/fi_9131566.svg"
                    alt="Heart"
                    width={130}
                    height={130}>

                </Image>
                <h1>Thank You For<br />Your Scrolling :D</h1>
            </div>
        </div>
    </section>
  )
}

export default FooterSection