import React from "react";
import { contact } from "../data";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section id="contact" className="section bg-primary">
      <div className="container mx-auto">
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
            <h2 className="section-title">Entre em Contato</h2>
            <p className="subtitle">
              Se você possui alguma dúvida ou está interessado em ter seu
              próprio site, mande uma mensagem através do formulário abaixo ou
              pelo link do meu Whatsapp
            </p>
          </div>
        </motion.div>
        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}>
              {contact.map((item, index) => {
                const { icon, title, subtitle, description } = item;
                return (
                  <div key={index} className="flex lg:flex-row gap-x-4">
                    <div className="text-sky-500 rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                      {icon}
                    </div>
                    <div>
                      <h4 className="font-body text-xl mb-1">{title}</h4>
                      <p className="mb-1">{subtitle}</p>
                      <p className="text-sky-500">{description}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}>
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/bombdaniel@hotmail.com"
              method="POST"
              className="space-y-8 w-full max-w-[780px]">
              <div className="flex flex-col gap-8 sm:flex">
                <input
                  className="input"
                  type="text"
                  placeholder="Seu nome"
                  {...register("name", {
                    required: true,
                    maxLength: 100,
                  })}
                />
                {errors.name && (
                  <p className="text-red-500 mt-1">
                    {errors.name.type === "required" && "Preencha o campo"}
                    {errors.name.type === "maxLength" &&
                      "No máximo 100 caracteres"}
                  </p>
                )}

                <input
                  className="input"
                  type="email"
                  placeholder="Seu email"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 mt-1">
                    {errors.email.type === "required" && "Preencha o campo"}
                    {errors.email.type === "pattern" && "Email inválido"}
                  </p>
                )}
              </div>
              <textarea
                className="textarea"
                type="text"
                placeholder="Sua mensagem"
                rows="4"
                cols="50"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="text-red-500 mt-1">
                  {errors.email.type === "required" && "Preencha o campo"}
                  {errors.email.type === "maxLength" &&
                    "No máximo 2.000 caracteres"}
                </p>
              )}

              <button
                type="submit"
                className="btn btn-lg bg-sky-500 hover:text-sky-500">
                Enviar
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
