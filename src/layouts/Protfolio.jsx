import React from 'react'
import Container from '../Components/Container'
import Image from '../Components/Image'
import Headding from "../Components/Headding";
import polygon from "/src/assets/Polygon.png"
import Flex from '../Components/Flex';
import Work from '../Components/work';
import work_1 from "/src/assets/portfolio.webp"
import work_2 from "/src/assets/work_2.jpeg"
import work_3 from "/src/assets/work_3.webp"
import work_4 from "/src/assets/work_4.webp"

const Protfolio = () => {
  return (
   <>
   <div className="">
    <Container>
        <div className="relative">
            <Image imgsrc={polygon}/>
            <Headding as={"h3"} text={"PORTFOLIO"} className={"absolute text-blueText text-16 top-[50%] pb-4.5"}/>
        </div>
        <Flex className={"justify-between"}>
            <div className="w-1/2">
                <Headding as={"h3"} text={"Selected Works."} className={" text-black text-[44px] font-semibold "}/>
            </div>
            <div className="w-1/2">
                <Headding as={"p"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl."} className={" text-[#121212]/70 text-16 w-[557px] px-[20px] "}/>
            </div>

        </Flex>

        <Flex className={'justify-between flex-wrap pb-[86px]'}>
            <div className="w-[48%] mt-[51px]"> <Work workName={"Creativa - Elementor Template Kit" } workimg={work_1}/>

            </div>
            <div className="w-[48%] mt-[51px]"> <Work workName={"Creativa - Elementor Template Kit" } workimg={work_2}/>

            </div>

            <div className="w-[48%] mt-[51px]"> <Work workName={"Creativa - Elementor Template Kit" } workimg={work_3}/>

            </div>

            <div className="w-[48%] mt-[51px]"> <Work workName={"Creativa - Elementor Template Kit" } workimg={work_4}/>

            </div>
           
        </Flex>
    </Container>
   </div>
   </>
  )
}

export default Protfolio