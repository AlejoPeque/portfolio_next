"use client";
import { motion } from "framer-motion";
import styles from "../../page.module.scss";

export default function Contact() {
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
          className='text-[#565d6a] font-[500] text-[16px]'>
          Ponte en contacto conmigo.
        </motion.h3>
      </div>
    </main>
  );
}