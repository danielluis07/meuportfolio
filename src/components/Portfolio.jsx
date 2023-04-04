import React from "react";
import Projects from "./Projects";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <section id="portfolio" className="section bg-primary min-h-[1400px]">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}>
          <div className="flex flex-col items-center text-center">
            <h2 className="section-title">Meus Projetos</h2>
            <p className="subtitle">
              Abaixo estão alguns dos meus projetos, contendo algumas landing
              pages, uma versão simples de um blog e até sites mais complexos,
              como clones da Netflix e Airbnb. Para saber mais, acesse meu{" "}
              <a
                className="hover:underline cursor-pointer"
                href="https://github.com/danielluis07?tab=repositories"
                target="_blank">
                Github
              </a>
            </p>
          </div>
        </motion.div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
