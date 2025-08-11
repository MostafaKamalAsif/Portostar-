import React from "react";
import Container from "../Components/Container";
import Image from "../Components/Image";
import polygon from '/src/assets/Polygon.png';
import UI_UX from "/src/assets/ul_ux.png"
import Product_Design from "/src/assets/product_design.png"
import Motion from "/src/assets/Motion.png"
import Headding from "../Components/Headding";
import Flex from "../Components/Flex";


const Services = () => {
  return (
    <>
      <div className="bg-white pb-[140px]">
        <Container className={"relative"}>
          <Image imgsrc={polygon} className={"m-auto "} />
          <Headding
            as={"h3"}
            text={"SERVICES"}
            className={
              "text-[#5E3BEE] text-[16px] font-pop text-center absolute top-7 left-[45%]"
            }
          />
          <Headding
            as={"h3"}
            text={"What I Do For My Customer."}
            className={"text-[44px] font-semibold font-pop text-center "}
          />
          <Headding
            as={"p"}
            text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl.`}
            className={"text-[16px] leading-[32px]  font-pop m-auto text-center w-[580px] pb-[65px]  "}
          />
          <Flex className={"justify-between "}>
                  <div className="py-[51px] px-[35px] bg-white drop-shadow-[37px_37px_80px_rgba(0,0,0,0.1)] hover:bg-[#F9F9FC] duration-300 rounded-3xl   ">
                     <Image imgsrc={UI_UX} className={"m-auto"}/>
                     <Headding as={"h3"} text={"UI/UX Design"} className={"font-pop font-medium text-black text-xl pt-[37px] pb-[9px] text-center "}/>
                     <Headding as={"p"} text={"lorem ipsum dolor sit amet consectur adi pising leo"} 
                     className={"font-pop font-medium text-[16px]  text-[#121212] opacity-70 leading-[32px] w-[300px] text-center "}/>
                  </div>

                  <div className="py-[51px] px-[35px] bg-white drop-shadow-[37px_37px_80px_rgba(0,0,0,0.1)] hover:bg-[#F9F9FC] duration-300 rounded-3xl   ">
                     <Image imgsrc={Product_Design} className={"m-auto"}/>
                     <Headding as={"h3"} text={"Product Design"} className={"font-pop font-medium text-black text-xl pt-[37px] pb-[9px] text-center "}/>
                     <Headding as={"p"} text={"lorem ipsum dolor sit amet consectur adi pising leo"} 
                     className={"font-pop font-medium text-[16px]  text-[#121212] opacity-70 leading-[32px] w-[300px] text-center "}/>
                  </div>


                  <div className="py-[51px] px-[35px] bg-white drop-shadow-[37px_37px_80px_rgba(0,0,0,0.1)] hover:bg-[#F9F9FC] duration-300 rounded-3xl   ">
                     <Image imgsrc={Motion} className={"m-auto"}/>
                     <Headding as={"h3"} text={"Motion Graphics"} className={"font-pop font-medium text-black text-xl pt-[37px] pb-[9px] text-center "}/>
                     <Headding as={"p"} text={"lorem ipsum dolor sit amet consectur adi pising leo"} 
                     className={"font-pop font-medium text-[16px]  text-[#121212] opacity-70 leading-[32px] w-[300px] text-center "}/>
                  </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Services;
