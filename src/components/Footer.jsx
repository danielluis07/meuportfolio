import React from "react";
import Logo from "../assets/img/logo.png";
import whatsLogo from "../assets/img/whatsapp-icon.png";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          <div className="flex space-x-6 items-center justify-center">
            <a
              className="text-sky-500 text-base hover:text-white cursor-pointer"
              href="https://github.com/danielluis07?tab=repositories"
              target="_blank">
              <FiGithub />
            </a>
          </div>
          <div>
            <img src={Logo} alt="" />
          </div>
          <div className="flex justify-center items-center gap-3">
            <a href="https://wa.me/5547988661111" target="blank">
              <img
                className="hover:animate-pulse"
                src={whatsLogo}
                alt="whats"
              />
            </a>
            <p>(47) 98866-1111</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
