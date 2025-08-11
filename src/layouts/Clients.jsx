import React from 'react';
import Slider from "react-slick";
import Container from "../Components/Container";
import Image from "../Components/Image";
import client_1 from "../assets/logoipsum(1).png";
import client_2 from "../assets/logoipsum(2).png";
import client_3 from "../assets/logoipsum(3).png";
import client_4 from "../assets/logoipsum(4).png";

const Clients = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,      // no delay between transitions
    speed: 3000,           // total time for one slide to move
    cssEase: "linear",     // makes it move at constant speed
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: false,   // keep moving even on hover
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="pt-[127px] pb-[113px]">
      <Container>
        <Slider {...settings}>
          <div><Image imgsrc={client_1} className={" select-none outline-none border-none"}/></div>
          <div><Image imgsrc={client_2} className={" select-none outline-none border-none"}/></div>
          <div><Image imgsrc={client_3} className={" select-none outline-none border-none"}/></div>
          <div><Image imgsrc={client_4} className={" select-none outline-none border-none"}/></div>
          {/* Duplicate images to keep scroll continuous */}
          <div><Image imgsrc={client_1} className={" select-none outline-none border-none"}/></div>
          <div><Image imgsrc={client_2} className={" select-none outline-none border-none"}/></div>
          <div><Image imgsrc={client_3} className={" select-none outline-none border-none"}/></div>
          <div><Image imgsrc={client_4} className={" select-none outline-none border-none"}/></div>
        </Slider>
      </Container>
    </div>
  );
};

export default Clients;
