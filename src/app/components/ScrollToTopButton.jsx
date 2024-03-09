'use client'
import { useEffect, useState } from "react"

import Image from "next/image";

const isBrowser = () => typeof window !== 'undefined'; 

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false)

const scrollToTop = () => {
    if (!isBrowser()) return;
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
}



  useEffect(() => {
    const toggleVisibility = () => {
      
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false)
    }
    
    window.addEventListener("scroll", toggleVisibility)

    
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])
  return (
    <button 
          className={`fixed bottom-0 z-50 -right-6 p-10 transition-opacity duration-200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`} onClick={scrollToTop}>
          <Image 
          src="/backtotop.png"
          alt="top"
          width={64}
          height={64}
          />
    </button>
  )
}

export default ScrollToTopButton