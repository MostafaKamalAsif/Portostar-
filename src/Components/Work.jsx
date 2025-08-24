import React from 'react'
import Image from './Image'
import Headding from './Headding'

const Work = ({workimg,workName}) => {
  return (
    <>
    <div className="rounded-3xl bg-white drop-shadow-[37px_37px_80px_rgba(0,0,0,0.1)] h-[425px]">
    <Image imgsrc={workimg} className={"rounded-tl-3xl rounded-tr-3xl h-[70%] w-full"} />
    <Headding as={'h3'} text={workName} className={"text-[22px] font-medium text-black pt-8.5 pb-2 pl-[45px] "}/>
    <Headding as={'h3'} text={'UI/UX Design'} className={"text-[#000000]/50  text-16 pb-11.5 pl-[45px] pr-[176px]"}/>
    </div>
    </>
  )
}

export default Work