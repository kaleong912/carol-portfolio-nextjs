import React from 'react'

const Bubble = ({text, classes}) => {
  return (
    <div className={`border-current border-2 rounded-full px-5 py-1 ${classes}`}>{text}</div>
  )
}

export default Bubble