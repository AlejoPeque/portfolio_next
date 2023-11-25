"use client";
import { motion } from "framer-motion";
import styles from "../../page.module.scss";
import { useState } from "react";
import { PaperPlaneTilt } from "@phosphor-icons/react";
import { sendEmail } from "@/action/sendEmail";
import toast from "react-hot-toast";
import { Toaster, toast as toast2 } from "sonner";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const promise = () => new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <main
      className={`${styles.main} pt-[6rem] pb-8 px-[1.5rem] sm:px-[6rem] md:px-[12rem]`}>
      <div className='mb-4 text-center'>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className='text-[#ec4e39] font-[700] text-[38px]'>
          Contácteme
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className='text-[#565d6a] font-[500] text-[16px]'>
          Contame en que te puedo ayudar.
        </motion.h3>
      </div>
      <form
        className='w-full justify-center'
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}>
        <div className='max-w-4xl m-auto'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className='mb-6'>
            <label
              htmlFor='email'
              className='block text-sm mb-2 text-[#ec4e39] md:text-base font-medium'>
              Ingrese su email
            </label>
            <input
              type='email'
              name='senderEmail'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='text-sm block w-full p-2.5 bg-[transparent] outline-none border-2 border-[#565d6a] text-[#565d6a] rounded-lg md:text-base'
              placeholder='example@email.com'
              required
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className='mb-6'>
            <label
              htmlFor='message'
              className='block text-sm mb-2 text-[#ec4e39] md:text-base font-medium'>
              Ingrese su mensaje
            </label>
            <textarea
              id='message'
              name='message'
              rows='4'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={5000}
              className='block p-2.5 w-full text-sm bg-[transparent] outline-none border-2 border-[#565d6a] text-[#565d6a] rounded-lg md:text-base'
              placeholder='Escribe su consulta aqui...'></textarea>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}>
            <Toaster />
            {message && email ? (
              <button
                onClick={() =>
                  toast2.promise(promise, {
                    loading: "Cargando...",
                    success: () => {
                      return `Su consulta se ha enviado`;
                    },
                    error: "Error",
                  })
                }
                className='flex items-center gap-1 py-2 px-4 font-[600] transition-all duration-200 text-[#1b1d22] bg-[#ec4e39] rounded-full'>
                Enviar
                <PaperPlaneTilt
                  size={17}
                  weight='bold'
                />
              </button>
            ) : (
              <button
                disabled
                className='flex items-center gap-1 py-2 px-4 font-[600] transition-all duration-200 text-[#1b1d22] bg-[#ec4e3948] rounded-full line-through relative translate-y-2'>
                Enviar
                <PaperPlaneTilt
                  size={17}
                  weight='bold'
                />
              </button>
            )}
          </motion.div>
        </div>
      </form>
    </main>
  );
}
