import React from 'react'

const Description = ({myClass, text}) => {
  return (
      <p className={`${myClass} fw-6 text-xs lh-sm custom-light`}>{text}</p>
  )
}

export default Description