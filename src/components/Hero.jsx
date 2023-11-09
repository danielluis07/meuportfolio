import React from "react";
import myImg from "../assets/img/mainbanner.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden">
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 2.6 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}>
              <p className="text-center sm:text-start text-lg text-sky-500 mb-[22px]">
                Olá, sou Daniel.
              </p>
              <h1 className="text-center sm:text-start text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
                Eu Construo <br /> Websites.
              </h1>
              <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
                Você possui um negócio e quer divulgá-lo em um website? Talvez
                criar um pequeno site de e-commerce para vender diretamente na
                internet? Ou criar um blog único para divulgar suas ideias?
                Posso ajudar você!
              </p>
              <div className="flex justify-center sm:justify-start">
                <button className="btn btn-md bg-sky-500 hover:text-sky-500 md:btn-lg transition-all">
                  <a href="https://wa.me/5547988744602" target="blank">
                    Entre em contato
                  </a>
                </button>
              </div>
            </motion.div>
          </div>
          <div className="hidden lg:flex flex-1 justify-center items-center h-full">
            <img src={myImg} alt="imagem" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
