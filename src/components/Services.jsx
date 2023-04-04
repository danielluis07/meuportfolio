import React from "react";
import { motion } from "framer-motion";
import { FiLayout, FiSettings, FiPenTool, FiTag } from "react-icons/fi";

const Services = () => {
  return (
    <section id="services" className="section bg-tertiary">
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
            <h2 className="section-title">O que ofereço</h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}>
            <p className="subtitle">
              Ofereço um pacote completo, desde o design do site - com
              ferramentas como Figma - passando pelo desenvolvimento, publicação
              e propaganda
            </p>
          </motion.div>
        </div>
        <div className="grid lg:grid-cols-4 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 2 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}>
            <div className="bg-secondary p-6 rounded-2xl">
              <div className="text-sky-500 rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[28px]">
                <FiPenTool />
              </div>
              <h4 className="text-xl font-medium mb-2">Design</h4>
              <p>
                O desenho do site, com o planejamento das imagens, desenhos e de
                onde irão ficar posicionados os principais elementos da página
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 1.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}>
            <div className="bg-secondary p-6 rounded-2xl">
              <div className="text-sky-500 rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[28px]">
                <FiSettings />
              </div>
              <h4 className="text-xl font-medium mb-2">Desenvolvimento</h4>
              <p>
                A montagem do site, traduzindo o planejamento contido no design
                em códigos, com o uso das linguagens de programação como React e
                NextJs
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}>
            <div className="bg-secondary p-6 rounded-2xl">
              <div className="text-sky-500 rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[28px]">
                <FiLayout />
              </div>
              <h4 className="text-xl font-medium mb-2">Publicação</h4>
              <p>
                A publicação e a manutenção do site com provedor de hospedagem
                seguro e com todos os recursos necessários para dar partida no
                seu projeto.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}>
            <div className="bg-secondary p-6 rounded-2xl">
              <div className="text-sky-500 rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[28px]">
                <FiTag />
              </div>
              <h4 className="text-xl font-medium mb-2">Propaganda</h4>
              <p>
                Faço a propaganda do site, com geração de tráfego de maneira
                orgânica (marketing de conteúdo) ou cliques em canais pagos,
                como Google e Social Ads.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
