import React from 'react'
import { Children } from 'react'

const Headding = (props) => {
  return (
    <>
    <props.as className={props.className}>{props.text} </props.as>
    </>
  )
}

export default Headding