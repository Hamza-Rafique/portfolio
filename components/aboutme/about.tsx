import Image from "next/image";
import React from "react";
import Hamza from "../../assets/images/hamza.jpeg";

const About = () => {
  return (
    <div className="bg-about-background bg-no-repeat relative h-auto flex flex-row">
      <div className="ml-40 basis-1/4">
        <Image src={Hamza} width="525" height="688" />
      </div>
      <div className="mx-auto  basis-1/2 ml-8">
        <h1 className="pt-4 text-yellow-300 font-Spartan font-extrabold uppercase tracking-wide text-2xl tracking-wider">
          About me
        </h1>
        <p className="pt-8">
          Hey, I'm Hamza. I like to learn new technologies & am an Experienced
          Software Engineer with a demonstrated history of working in the
          information technology and services industry. Skilled in TypeScript,
          JavaScript, React-js, React-Native, Material-UI, React-bootstrap,
          Chakra-UI, style-system, system-design, style-component, rebase,
          Node.js Express Mongoose DB Front-end Development, HTML-5 Bootstrap,
          Cascading Style Sheets (CSS), SCSS.
        </p>
        <button
          type="button"
          className="bg-yellow-300 motion-safe:hover:-translate-x-0.5 motion-safe:transition p-4 rounded-md align-bottom mt-4"
        >
          Download CV
        </button>
      </div>
    </div>
  );
};

export default About;
