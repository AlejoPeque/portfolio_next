"use client";
import styles from "./page.module.scss";
import { motion } from "framer-motion";
import { ArrowLineDown, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import StickerPlanes from "@/components/stickersHome/StickerPlanes";

export default function Home() {
  const [MouseMovement, setMouseMovement] = useState(0);
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <main
      onMouseMove={(e) => {
        setMouseMovement(e);
      }}
      className={`${styles.main} ${styles.mainHome} pt-[6rem] pb-8 px-[1.5rem] sm:px-[6rem] md:px-[12rem] flex justify-center gap-2 lg:gap-8 items-center flex-wrap`}>
      <StickerPlanes MouseMovement={MouseMovement} />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className={`${styles.homeImgMe} bg-[#1b1d22] w-[300px] h-[300px] xl:w-[350px] xl:h-[350px] border-4 border-[#ec4e39] relative z-10`}></motion.div>
      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className='text-[#ec4e39] font-[700] text-[38px] text-center lg:text-left'>
          Alejo Pequeño
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className='text-[#565d6a] font-[500] text-[16px] text-center lg:text-left'>
          Desarrollador FullStack && Diseñador Multimedial
        </motion.h3>
        <div className='flex gap-3 justify-center lg:justify-start'>
          <motion.a
            className='w-[160px] h-[55px] rounded-[60px] bg-[#ec4e39] flex items-center justify-center font-[600] my-4 text-base text-[#1b1d22]'
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
            <ArrowLineDown
              className='ml-1'
              size={20}
              weight='bold'
            />
          </motion.a>
          <motion.a
            className='w-[55px] h-[55px] rounded-[60px] bg-[#565d6a2d] flex items-center justify-center font-[600] my-4 text-base text-[#ec4e39]'
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
            href='https://github.com/alepeque9'
            target='_blank'>
            <GithubLogo size={30} />
          </motion.a>
          <motion.a
            className='w-[55px] h-[55px] rounded-[60px] bg-[#565d6a2d] flex items-center justify-center font-[600] my-4 text-base text-[#ec4e39]'
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
            href='https://www.linkedin.com/in/alejo-peque%C3%B1o/'
            target='_blank'>
            <LinkedinLogo size={30} />
          </motion.a>
        </div>
      </div>
    </main>
  );
}
