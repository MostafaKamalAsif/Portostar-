import React from "react";
import Image from "../Components/Image";
import polygon from "/src/assets/Polygon_2.png";
import Headding from "../Components/Headding";
import Container from "../Components/Container";
import Flex from "../Components/Flex";
import { FaRegStar } from "react-icons/fa";
import { HiOutlineChatBubbleLeft } from "react-icons/hi2";

const Testimony = () => {
  return (
    <>
      <div className="pt-[92px] pb-[157px] bg-[#F9F9FC] relative">
        <Container>
          <Image imgsrc={polygon} className={" m-auto"} />
          <Headding
            as={"h3"}
            text={"TESTIMONY"}
            className={
              "absolute top-[24%] left-1/2 -translate-x-1/2 text-blueText text-16 m-auto"
            }
          />
          <Headding
            as={"h3"}
            text={"What Our Clients Say."}
            className={"text-[44px] font-semibold font-pop text-center "}
          />
          <Headding
            as={"p"}
            text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl.`}
            className={
              "text-[16px] leading-[32px]  font-pop m-auto text-center w-[580px] pb-[65px]  "
            }
          />
          <div className="absolute top-[369px] w-[1170px]  ">
            <Flex className={'justify-between'}>
                <div className="w-[48%] pt-11 pb-14  rounded-3xl px-12 bg-white drop-shadow-[27px_37px_80px_rgba(0,0,0,0.1)]">
                    <ul className="flex gap  gap-1.5 pb-8">
                        <li className="text-[#EEC01C] text-2xl"><FaRegStar/></li>
                        <li className="text-[#EEC01C] text-2xl"><FaRegStar/></li>
                        <li className="text-[#EEC01C] text-2xl"><FaRegStar/></li>
                        <li className="text-[#EEC01C] text-2xl"><FaRegStar/></li>
                        <li className="text-[#EEC01C] text-2xl"><FaRegStar/></li>
                    </ul>
                    
                    <Headding as={'p'} text={"Nulla nunc orci, suscipit vitae rutrum vitae, sagittis eget dui. Vestibulum nisl lorem, porta at mollis varius, tincidunt in lectus. Nam pulvinar auctor sem ac dictum. Ut sed felis urna."} className={"w-[430px] text-[18px] font-medium leading-6.5 text-black "}/>
                 
                        <Flex className={'pt-[27px] justify-between '}>
                            <div className="w-1/2">
                            <Flex className={"gap-[17px]"}>
                                <div className="w-[64px] h-[64px] rounded-full bg-blueText"></div>
                                <div className="">
                                    <Headding as={"h3"} text={"David Gueta"} className={"text-black font-medium text-[18px] "} />
                                    <Headding as={"h3"} text={"UI/UX Designer"} className={"text-black/50  text-16 "} />
                                </div>
                            </Flex>
                            </div>
                             <div className=" w-[10%]">
                             <HiOutlineChatBubbleLeft className="text-[45px] text-blueText"/>
                             </div>
                        </Flex>
                    
                </div>
                <div className="w-[48%] pt-11 pb-14 bg-white rounded-3xl px-12 drop-shadow-[27px_37px_80px_rgba(0,0,0,0.1)]">
                    <ul className="flex gap  gap-1.5 pb-8">
                        <li className="text-[#EEC01C] text-2xl"><FaRegStar/></li>
                        <li className="text-[#EEC01C] text-2xl"><FaRegStar/></li>
                        <li className="text-[#EEC01C] text-2xl"><FaRegStar/></li>
                        <li className="text-[#EEC01C] text-2xl"><FaRegStar/></li>
                        <li className="text-[#EEC01C] text-2xl"><FaRegStar/></li>
                    </ul>
                    
                    <Headding as={'p'} text={"Nulla nunc orci, suscipit vitae rutrum vitae, sagittis eget dui. Vestibulum nisl lorem, porta at mollis varius, tincidunt in lectus. Nam pulvinar auctor sem ac dictum. Ut sed felis urna."} className={"w-[430px] text-[18px] font-medium leading-6.5 text-black "}/>
                 
                        <Flex className={'pt-[27px] justify-between '}>
                            <div className="w-1/2">
                            <Flex className={"gap-[17px]"}>
                                <div className="w-[64px] h-[64px] rounded-full bg-blueText"></div>
                                <div className="">
                                    <Headding as={"h3"} text={"David Gueta"} className={"text-black font-medium text-[18px] "} />
                                    <Headding as={"h3"} text={"UI/UX Designer"} className={"text-black/50  text-16 "} />
                                </div>
                            </Flex>
                            </div>
                             <div className=" w-[10%]">
                             <HiOutlineChatBubbleLeft className="text-[45px] text-blueText"/>
                             </div>
                        </Flex>
                    
                </div>
            </Flex>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Testimony;
