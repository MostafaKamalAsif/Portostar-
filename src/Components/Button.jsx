import React from 'react'
import { Children } from 'react'

const Button = ({className,children}) => {
  return (
    <div className={` rounded-3xl ${className}`}>{children}</div>
  )
}

export default Button