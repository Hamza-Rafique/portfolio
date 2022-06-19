import Image from "next/image";
import React from "react";
import WorkSection from "../../assets/images/worksection.png";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Works = () => {
  const style: any = {
    textAlign: "center",
    padding: " 300px 0",
    fontSize: "30px",
  };

  const properties = {
    duration: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    indicators: true,
  };

  return (
    <div className="flex container px-8">
      <div className="basis-1/2">
        <Image src={WorkSection} width='525' height='668'/>
      </div>
      <div className="basis-1/2 w-40">
      <h1 className="pt-4 mt-9 text-yellow-300 font-Spartan font-extrabold uppercase tracking-wide text-2xl tracking-wider">
              Works
            </h1>
        <Slide {...properties}>
            
          <div style={style}>
           <h2 className="text-yellow-300 font-Spartan font-extrabold uppercase tracking-wide text-2xl tracking-wider">30mins.com</h2>

          </div>
          <div style={style}>Second Slide</div>
          <div style={style}>Third Slide</div>
          <div style={style}>Fourth Slide</div>
          <div style={style}>Fifth Slide</div>
          <div style={style}>sixth Slide</div>
          <div style={style}>Seventh Slide</div>
          <div style={style}>Eight Slide</div>
        </Slide>
      </div>
    </div>
  );
};

export default Works;
