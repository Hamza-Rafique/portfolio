import React from "react";
import Image from "next/image";
import Skill from "../../assets/images/skillsection.png";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  const percentage = 66;
  const value = 0.66;
  return (
    <div className="flex">
      <div className="ml-40 mt-8 basis-1/2 ">
        <h1 className="pt-4 text-yellow-300 font-Spartan font-extrabold uppercase tracking-wide text-2xl tracking-wider">
          Skills
        </h1>
        <p className="pt-8">
          I enjoy creating things that live on the internet, whether that be
          websites, applications, or anything in between.
        </p>
        <div className="flex flex-row justify-around">
          <div style={{ width: 100, height: 125 }}>
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
            <span>HTML:5+CSS3</span>
          </div>
          <div style={{ width: 100, height: 125 }}>
            <CircularProgressbar value={66} />
            <span>React.js</span>
          </div>
          <div style={{ width: 100, height: 125 }}>
            <CircularProgressbar
              value={value}
              maxValue={1}
              text={`${value * 100}%`}
            />
             <span>Next.js</span>
          </div>
          <div style={{ width: 100, height: 125 }}>
            <CircularProgressbar
              value={value}
              maxValue={1}
              text={`${value * 100}%`}
            />
            <span>TypeScript</span>
          </div>
          ;
        </div>
      </div>
      <div className="mx-auto  basis-1/2 ml-8">
        <Image src={Skill} width="525" height="688" />
      </div>
    </div>
  );
};

export default Skills;
