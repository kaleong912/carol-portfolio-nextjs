import React from 'react'
import NavBar from '../components/NavBar'
import ScrollToTopButton from '../components/ScrollToTopButton'
import FooterSection from '../components/FooterSection'
import GraphicSection from '../components/GraphicSection'


export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col relative">
    <ScrollToTopButton />
      
      <section className='mx-auto py-4 px-4 overflow-x-hidden'>
      <GraphicSection />
      <FooterSection />
      
      </section>
    </main>
  )
}
