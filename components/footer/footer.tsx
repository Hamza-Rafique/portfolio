import React from "react";
import styles from "../../styles/Home.module.css";

const Footer = () => {
  return (
    <footer className="px-4 py-4 h-auto mb-4 w3-full flex flex-wrap justify-center items-center bg">
      <div className="flex flex-wrap flex-col items-center">
        <div className="flex flex-wrap">
          <img
            className="h-6 w-6 mx-1 rounded-full bg-blue-200"
            alt="Use any sample image here..."
            src="https://tailwindcomponents.com/storage/avatars/baG0wMQUtoTOZOOmStaUBVQsa7LAwc5HjiGZMjdB.png"
          />
          <img
            className="h-6 w-6 mx-1 rounded-full bg-blue-200"
            alt="Use any sample image here..."
            src="https://tailwindcomponents.com/storage/avatars/baG0wMQUtoTOZOOmStaUBVQsa7LAwc5HjiGZMjdB.png"
          />
          <img
            className="h-6 w-6 mx-1 rounded-full bg-blue-200"
            alt="Use any sample image here..."
            src="https://tailwindcomponents.com/storage/avatars/baG0wMQUtoTOZOOmStaUBVQsa7LAwc5HjiGZMjdB.png"
          />
        </div>
        <a
          href="https://www.pagesection.com/templates"
          className="font-semibold text-sm m-1"
        >
          Logo
        </a>
        <span className="text-xs text-gray-500">
          © 2000. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
