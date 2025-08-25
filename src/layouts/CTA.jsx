import React from 'react'
import Container from '../Components/Container'
import Headding from '../Components/Headding'
import Button from '../Components/Button';
import { MdOutlineEmail } from "react-icons/md";

const CTA = () => {
  return (
    <>
    <div className="pt-[400px] pb-[156px] ">
        <Container className={"bg-[url(/src/assets/CTA.png)] pt-[112px] pb-[126px]"}>
         <Headding as={'h3'} text={`Interested Working
With me? Let's connect!`} className={'text-[50px] text-black font-semibold leading-[72px] text-center pb-[19px] w-[600px] m-auto'}/>
<Button className={"bg-[#5E3BEE] text-white text-center w-fit m-auto px-5.5 py-3 flex items-center gap-x-2"} >
              
           <MdOutlineEmail /> CONTACT ME
               
               </Button>
        </Container>
    </div>
    
    </>
  )
}

export default CTA