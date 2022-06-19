import Image from "next/image";
import React from "react";
import Linkedin from "../../assets/images/entypo-social_linkedin-with-circle.png";
import Github from "../../assets/images/ant-design_github-filled.png";
import Instagram from "../../assets/images/ant-design_instagram-filled.png";
import Twitter from "../../assets/images/ant-design_twitter-circle-filled.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="p-8 pt-40 pb-40">
      <div className="py-2 md:py-4 ml-20">
        <h1 className=" decoration-white uppercase tracking-wide text-5xl tracking-wider text-yellow-300  font-Spartan font-extrabold">
          Hamza Rafique
        </h1>
        <p className="block mt-4 text-4xl leading-tight font-normal text-white">
          Engineer + Front-End React.js Next.js developer :)
        </p>
        <div className="flex align-middle justify-start mt-1">
          <span className="mr-4 mt-4 mb-4">
            <Link href="#">
              <Image src={Linkedin} />
            </Link>
          </span>
          <span className="m-4">
            <Link href="#">
              <Image src={Github} />
            </Link>
          </span>
          <span className="m-4">
            <Link href="#">
              <Image src={Instagram} />
            </Link>
          </span>
          <span className="m-4">
            <Link href="#">
              <Image src={Twitter} />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
