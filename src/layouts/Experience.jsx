import React, { useEffect } from 'react';
import counterUp from 'counterup2';

import Container from "../Components/Container";
import Flex from "../Components/Flex";
import Headding from "../Components/Headding";

const Experience = () => {
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");
    counters.forEach((el) =>
      counterUp(el, {
        duration: 2500,
        delay: 10,
      })
    );
  }, []);

  return (
    <>
      <div className="pt-[91px] pb-[79px] bg-white">
        <Container>
          <Flex className="justify-between text-center flex-wrap gap-y-10">
            <div>
              <Flex className="justify-center">
                <Headding as="h2" text="100" className="counter text-black font-pop font-semibold text-[48px]" />
                <Headding as="h3" text="+" className="text-black font-pop font-semibold text-[48px]" />
              </Flex>
              <Headding as="p" text="PROJECTS" className="text-black font-pop font-medium text-[16px]" />
            </div>

            <div>
              <Headding as="h2" text="24" className="counter text-black font-pop font-semibold text-[48px]" />
              <Headding as="p" text="WINNING AWARD" className="text-black font-pop font-medium text-[16px]" />
            </div>

            <div>
              <Flex className="justify-center">
                <Headding as="h2" text="70" className="counter text-black font-pop font-semibold text-[48px]" />
                <Headding as="h3" text="+" className="text-black font-pop font-semibold text-[48px]" />
              </Flex>
              <Headding as="p" text="HAPPY CLIENTS" className="text-black font-pop font-medium text-[16px]" />
            </div>

            <div>
              <Headding as="h2" text="10" className="counter text-black font-pop font-semibold text-[48px]" />
              <Headding as="p" text="YEAR EXPERIENCE" className="text-black font-pop font-medium text-[16px]" />
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Experience;
