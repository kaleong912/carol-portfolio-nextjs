'use client'

import React from 'react'
import {motion} from 'framer-motion'

export default function Template ({children}) {
  return (
    <motion.div
        initial={{ x: 20, opacity: 0}}
        animate={{ x: 0, opacity: 1}}
        transition={{ ease: "easeInOut", duration: 0.75}}
    >
        {children}
    </motion.div>
  )
}
