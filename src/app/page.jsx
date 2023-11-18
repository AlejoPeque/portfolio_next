"use client";
import styles from "./page.module.scss";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main
      className={`${styles.main} pt-[6rem] pb-8 px-[1.5rem] sm:px-[6rem] md:px-[12rem]`}>
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className='text-[#ec4e39] font-[700] text-[38px]'>
          Alejo Pequeño
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
          Desarrollador FullStack && Diseñador Multimedial
        </motion.h3>
        <motion.a
          className='w-[200px] h-[60px] rounded-[50px] bg-[#ec4e39] flex items-center justify-center font-[600] my-4 text-lg text-[#1b1d22]'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
          href='/CV Alejo Pequeño v2.pdf'
          download>
          Descargar CV
        </motion.a>
        {/*
        <p className="text-[#565d6a] mt-10">
        Me apasiona programar y diseñar sitios web. Tengo experiencia en crear soluciones web innovadoras. Soy bueno trabajando en equipo, siempre estoy aprendiendo y listo para enfrentar nuevos desafíos en mi área. Mi objetivo es contribuir al éxito de mi equipo y la organización en la que trabajo.
        </p>
        */}
      </div>
    </main>
  );
}
