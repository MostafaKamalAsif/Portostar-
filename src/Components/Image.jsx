import React from 'react'

const Image = ({className,imgsrc,altsrc}) => {
  return (
     <img className={`${className}`} src={`${imgsrc}`} />
  )
}

export default Image