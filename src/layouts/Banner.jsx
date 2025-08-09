import React from "react";
import Container from "../Components/Container";
import Flex from "../Components/Flex";
import Headding from "../Components/Headding";
import Button from "../Components/Button";
import { MdOutlineEmail,MdOutlineFileDownload } from "react-icons/md";
import Image from "../Components/Image";
import sakib from '/src/assets/shikib.svg'

const Banner = () => {
  return (
    <>
      <div className="bg-[#F9F9FC] pt-4 pb-[45px]">
        <Container>
          <Flex className={"justify-between"}>
            <div className="w-[49%]">
              <Headding
                as={"h3"}
                className={`text-[#5E3BEE] font-pop font-medium text-[16px] pt-[103px]`}
                text={"SAKIB AL HASAN"}
              />
              <Headding
                as={"h3"}
                text={"Hello, my name’s Sakib. I’m MERN Stack Developer."}
                className={"w-[479px] font-pop text-black text-6xl font-bold leading-[78px] py-8"}
              />
              <Flex className={"gap-x-3 pb-[142px]"}>
                <Button className={"w-fit px-5.5 bg-transparent text-black hover:bg-[#5E3BEE] hover:text-white duration-400 font-pop py-3 flex items-center gap-x-2"}>
             <MdOutlineEmail /> CONTACT ME
              </Button>
                <Button className={"w-fit px-5.5 bg-transparent text-black hover:bg-[#5E3BEE] hover:text-white duration-400 font-pop py-3 flex items-center gap-x-2"}>
             <MdOutlineFileDownload /> DOWNLOAD CV
              </Button>

              </Flex>
              
            
            </div>
            <div className="">
                <Image  imgsrc={sakib}/>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Banner;
