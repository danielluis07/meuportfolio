import React from "react";
import Image from "../assets/img/web-development.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}>
            <img
              className="object-cover h-full w-[550px] md:mx-auto lg:mx-0 rounded-2xl"
              src={Image}
              alt="imagem"
            />
          </motion.div>
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}>
                <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3">
                  Daniel Luís
                </h2>
                <p className="mb-4 text-sky-500">Desenvolvedor Front-End</p>
                <hr className="mb-8 opacity-5" />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}>
                <p className="mb-8">
                  Sou um desenvolvedor Front-End, com conhecimento em linguagens
                  de programação como HTML, CSS, Javascript/Typescript e
                  frameworks como React e NextJs. Também trabalho com MongoDB,
                  para banco de dados de alta performance. Crio sites
                  profissionais com design moderno, responsivo e visando colocar
                  seu negócio em evidência. Além disso, atuo na divulgação do
                  mesmo, para aumentar sua exposição e faturamento.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
