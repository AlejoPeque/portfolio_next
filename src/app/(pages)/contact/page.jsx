"use client";
import { useState } from "react";
import styles from "../../page.module.scss";
import { motion } from "framer-motion";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleEnviarClick = async () => {
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, mensaje }),
      });

      if (res.ok) {
        console.log("Email enviado");
      } else {
        console.error("Error al enviar el email");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <main
      className={`${styles.main} pt-[6rem] pb-8 px-[1.5rem] sm:px-[6rem] md:px-[12rem]`}>
      <div className='mb-4'>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className='text-[#ec4e39] font-[700] text-[38px] text-center'>
          Contactame
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className='text-[#565d6a] font-[500] text-[16px] text-center'>
          Ponte en contacto conmigo.
        </motion.h3>
        {/* <div className='flex justify-center items-center mt-16'>
          <form className='lg:w-[700px]'>
            <input
              id='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='bg-[transparent] outline-none text-[#565d6a] border-b-2 border-[#ec4e39] my-4 text-lg w-full'
              placeholder='Email'
            />
            <br />
            <textarea
              id='mensaje'
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              className='bg-[transparent] outline-none text-[#565d6a] border-b-2 border-[#ec4e39] my-4 text-lg w-full h-40'
              placeholder='Mensaje'
            />

            <button
              className='rounded-full bg-red-600'
              onClick={handleEnviarClick}>
              Enviar
            </button>
          </form>
        </div> */}
      </div>
    </main>
  );
}
