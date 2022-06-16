import Image from "next/image";
import Link from "next/link";
import React from "react";


const Header = () => {
  return (
    <nav className="py-2 md:py-4">
      <div className="container px-4 mx-auto md:flex md:items-center">
        <div className="flex justify-between items-center">
          <button
            className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
            id="navbar-toggle"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <div
          className="hidden md:flex flex-col md:flex-row mt-3 md:mt-0"
          id="navbar-collapse"
        >
          <div className="bg-home-background bg-no-repeat bg-center p-2 lg:px-4 md:mx-2 rounded-lg shadow-lg flex flex-col">
            <Link href="/home">
              <a
                href="#"
                className="p-2 lg:px-4 md:ml-2  md:mr-6 text-yellow-300 text-bold"
              >
                Home
              </a>
            </Link>
          </div>
          <Link href="about">
            <a
              href="#"
              className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              About
            </a>
          </Link>
          <Link href="skills">
            <a
              href="#"
              className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Skills
            </a>
          </Link>
          <Link href="works">
            <a
              href="#"
              className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Works
            </a>
          </Link>
          <Link href="contact">
            <a
              href="#"
              className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Contact
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
