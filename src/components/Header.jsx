import React, { useState, useEffect } from "react";
import Logo from "../assets/img/logo.png";
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";
import { FiGithub } from "react-icons/fi";

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? "bg-tertiary h-20" : "h-24"
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}>
      <div className="container mx-auto h-full flex items-center justify-between">
        <a href="#">
          <img src={Logo} alt="logo" />
        </a>
        <div className="hidden lg:block">
          <Nav />
        </div>
        <div className="hidden lg:block">
          <a
            className="text-sky-500 text-base hover:text-white cursor-pointer"
            href="https://github.com/danielluis07?tab=repositories"
            target="_blank">
            <FiGithub />
          </a>
        </div>
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
