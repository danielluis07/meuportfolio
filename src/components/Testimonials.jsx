import React from "react";
import TestimonialSlider from "./TestimonialSlider";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}>
            <h2 className="section-title">Educação</h2>
            <p className="subtitle">
              Grande parte de meu conhecimento vem de organizações renomadas,
              como a faculdade Estácio, além de Codecademy, uma das maiores
              plataformas de aprendizado para desenvolvedores no mundo. Possuo
              também certificados da Udemy e Prodabel - empresa de informática
              do município de Belo Horizonte
            </p>
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}>
          <TestimonialSlider />
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
