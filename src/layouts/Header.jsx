import React from 'react'
import logo from '/src/assets/LOGO.svg'
import { MdOutlineEmail } from "react-icons/md";
import Image from '../Components/Image';
import Container from '../Components/Container';
import Flex from '../Components/Flex';
import Button from '../Components/Button';

const Header = () => {
  return (
    <>
    <div className="bg-[#F9F9FC] py-7.5">
      <Container>
        <Flex className={"justify-between "}>
          <div className="">
            <Image imgsrc={logo} />
          </div>

          <div className="">
            <ul className="flex gap-x-[47px] font-pop">
              <li>HOME</li>
              <li>ABOUT US</li>
              <li>SERVICES</li>
              <li>WORKS</li>
            </ul>
          </div>

          <div className="">
            
            
            <Button className={"bg-[#5E3BEE] text-white font-pop px-5.5 py-3 flex items-center gap-x-2"} >
              
              HIRE ME <MdOutlineEmail />
               
               </Button>
               
          </div>
        </Flex>
      </Container>
      </div>
      
    </>
  )
}

export default Header