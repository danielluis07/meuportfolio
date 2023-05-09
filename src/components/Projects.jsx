import Project1 from "../assets/img/projects/p1.png";
import Project2 from "../assets/img/projects/p2.png";
import Project3 from "../assets/img/projects/p3.png";
import Project4 from "../assets/img/projects/p4.png";
import Project5 from "../assets/img/projects/p5.png";
import Project6 from "../assets/img/projects/p6.png";
import Project7 from "../assets/img/projects/p7.png";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Projects = () => {
  return (
    <div>
      <nav className="mb-12 max-w-xl mx-auto"></nav>
      <section className="grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 3.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}>
          <div className="flex flex-col items-center text-center">
            <div className="mb-8">
              <img className="rounded-2xl" src={Project5} alt="airbnb" />
            </div>
            <h3 className="text-2xl font-semibold capitalize mb-3 hover:text-sky-500">
              <a href="https://site-de-aluguel.vercel.app/" target="_blank">
                Clone Airbnb
              </a>
            </h3>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 3 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}>
          <div className="flex flex-col items-center text-center">
            <div className="mb-8">
              <img className="rounded-2xl" src={Project2} alt="netflix" />
            </div>
            <h3 className="text-2xl font-semibold capitalize mb-3 hover:text-sky-500">
              <a href="https://my-netflix-tau.vercel.app/" target="_blank">
                Clone Netflix
              </a>
            </h3>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 2.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}>
          <div className="flex flex-col items-center text-center">
            <div className="mb-8">
              <img className="rounded-2xl" src={Project1} alt="vignolli" />
            </div>
            <h3 className="text-2xl font-semibold capitalize mb-3 hover:text-sky-500">
              <a
                href="https://danielluis07.github.io/vignollirestaurante/"
                target="_blank">
                Restaurante Vignolli
              </a>
            </h3>
          </div>
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
          <div className="flex flex-col items-center text-center">
            <div className="mb-8">
              <img className="rounded-2xl" src={Project4} alt="barbearia" />
            </div>
            <h3 className="text-2xl font-semibold capitalize mb-3 hover:text-sky-500">
              <a href="https://danielluis07.github.io/barber/" target="_blank">
                Barbearia & Spa
              </a>
            </h3>
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
          <div className="flex flex-col items-center text-center">
            <div className="mb-8">
              <img className="rounded-2xl" src={Project3} alt="blog" />
            </div>
            <h3 className="text-2xl font-semibold capitalize mb-3 hover:text-sky-500">
              <a href="https://sportysblog.vercel.app/" target="_blank">
                Blog Sportys
              </a>
            </h3>
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
          <div className="flex flex-col items-center text-center">
            <div className="mb-8">
              <img className="rounded-2xl" src={Project7} alt="academia" />
            </div>
            <h3 className="text-2xl font-semibold capitalize mb-3 hover:text-sky-500">
              <a href="https://menssagens-top.vercel.app/" target="_blank">
                MensagensTop
              </a>
            </h3>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Projects;
