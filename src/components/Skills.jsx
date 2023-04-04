import React from "react";
import HtmlLogo from "../assets/img/html.png";
import CssLogo from "../assets/img/css.png";
import TailwindLogo from "../assets/img/tailwind.png";
import JavascriptLogo from "../assets/img/javascript.png";
import TypescriptLogo from "../assets/img/typescript.png";
import ReactLogo from "../assets/img/react.png";
import NextjsLogo from "../assets/img/nextjs.png";
import MongodbLogo from "../assets/img/mongodb.png";
import { Box, Tooltip } from "@mui/material";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="bg-tertiary py-12">
      <div className="container mx-auto">
        <div className="grid grid-rows-4 grid-flow-col gap-8 justify-center md:flex">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 2.6 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}>
            <Tooltip title="HTML">
              <Box>
                <img
                  src={HtmlLogo}
                  alt="html"
                  className="h-12 w-12 hover:animate-bounce"
                />
              </Box>
            </Tooltip>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 2.3 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}>
            <Tooltip title="CSS">
              <Box>
                <img
                  src={CssLogo}
                  alt="css"
                  className="h-12 w-12 hover:animate-bounce"
                />
              </Box>
            </Tooltip>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 2 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}>
            <Tooltip title="Tailwind">
              <Box>
                <img
                  src={TailwindLogo}
                  alt="tailwind"
                  className="h-12 w-12 hover:animate-bounce"
                />
              </Box>
            </Tooltip>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 1.7 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}>
            <Tooltip title="JavaScript">
              <Box>
                <img
                  src={JavascriptLogo}
                  alt="javascript"
                  className="h-12 w-12 hover:animate-bounce"
                />
              </Box>
            </Tooltip>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 1.4 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}>
            <Tooltip title="TypeScript">
              <Box>
                <img
                  src={TypescriptLogo}
                  alt="typescript"
                  className="h-12 w-12 hover:animate-bounce"
                />
              </Box>
            </Tooltip>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 1.1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}>
            <Tooltip title="React">
              <Box>
                <img
                  src={ReactLogo}
                  alt="react"
                  className="h-12 w-12 hover:animate-bounce"
                />
              </Box>
            </Tooltip>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}>
            <Tooltip title="NextJs">
              <Box>
                <img
                  src={NextjsLogo}
                  alt="nextjs"
                  className="h-12 w-12 hover:animate-bounce"
                />
              </Box>
            </Tooltip>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}>
            <Tooltip title="MongoDB">
              <Box>
                <img
                  src={MongodbLogo}
                  alt="mongodb"
                  className="h-12 w-12 hover:animate-bounce"
                />
              </Box>
            </Tooltip>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

//  <div className="flex items-center justify-center" key={index}>
// <img src={skill.image} alt="habilidade" />
// </div>
