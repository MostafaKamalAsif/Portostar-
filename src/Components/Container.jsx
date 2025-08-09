import React from 'react'
import { Children } from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`max-w-[1170px] m-auto ${className}`}>{children}</div>
  )
}

export default Container