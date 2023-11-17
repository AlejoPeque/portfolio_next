"use client";
import React from "react";
import styles from "../../page.module.scss";
import { motion } from "framer-motion";
import { proyectsData } from "@/data/data";
import Link from "next/link";

export default function About() {
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
          className='text-[#ec4e39] font-[700] text-[38px]'>
          Proyectos
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
          Me encanta poner en practica mis habilidades con determinación y
          pasión.
        </motion.h3>
      </div>
      <div>
        {proyectsData.map((data) => (
          <Link
          href={data.href}
          target="_blank"
          key={data.title}
          className='flex p-4 border-2 border-[#565d6a] transition-all rounded-xl mb-4 hover:border-[#ec4e39] hover:bg-[#181a1f]'
        >
          <div className='hidden mr-4 lg:block'>
            <img src={data.imageUrl} className='w-[200px] rounded-lg' alt={data.title} />
          </div>
          <div className="w-full flex flex-col justify-between">
            <div>
              <p className='text-[#ec4e39] text-lg font-[600]'>
                {data.title}
              </p>
              <p className='text-[#565d6a] mb-2 text-base'>
                {data.description}
              </p>
            </div>
            <ul className='flex gap-2 flex-wrap justify-end align-self-end'>
              {data.tags.map((tag) => (
                <li
                  key={tag}
                  className='bg-[#ec4e39] text-[#1b1d22] text-base rounded-full px-3 py-[2px] font-[500]'
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </Link>
        ))}
      </div>
    </main>
  );
}
