import React from "react";
import { motion } from "framer-motion";

const Project = ({ item }) => {
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}>
        <div key={item.id} className="flex flex-col items-center text-center">
          <div className="mb-8">
            <img className="rounded-2xl" src={item.image} alt="" />
          </div>
          <p className="capitalize text-sky-500">{item.category}</p>
          <h3 className="text-2xl font-semibold capitalize mb-3">
            {item.name}
          </h3>
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
