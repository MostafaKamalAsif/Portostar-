import React from "react";
import Container from "../Components/Container";
import Headding from "../Components/Headding";
import Button from "../Components/Button";
import { MdOutlineEmail } from "react-icons/md";

const About = () => {
  return (
    <>
      <div className="bg-[url(/src/assets/about.png)] pb-[113px]">
        <Container>
          <div className=" ">
            <Headding
              as={"h3"}
              className={`text-[#5E3BEE] font-pop font-medium text-[16px] pt-[109px]`}
              text={"GRAPHIC DESIGNER"}
            />
            <Headding
              as={"h3"}
              text={"Graphic Designer With 10 Years Of Experience."}
              className={
                "w-[479px] font-pop text-black text-6xl font-bold leading-[78px] py-8"
              }
            />
            <Headding
              as={"p"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl."
              }
              className={'w-[570px] font-pop text-[16px] leading-[32px] text-[#333333] pb-7.5'}
            />
            <Button
              className={
                "w-fit px-5.5 bg-[#5E3BEE] text-white font-pop py-3 flex items-center gap-x-2 "
              }
            >
              <MdOutlineEmail /> CONTACT ME
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default About;
