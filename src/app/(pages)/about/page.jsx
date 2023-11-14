"use client";
import styles from "../../page.module.scss";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main className={`${styles.main} pt-[6rem] pb-8 px-[1.5rem] sm:px-[6rem] md:px-[12rem]`}>
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }} className="text-[#ec4e39] font-[700] text-[38px]">Conoceme</motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0, 0.71, 0.2, 1.01],
          }} className="text-[#565d6a] font-[500] text-[16px]">Conoceme rapidamente</motion.h3>
        <p className="text-blue-700">ACA VAN FOTOS MIAS </p>
        <div className="mt-10">
          <motion.h4 initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }} className="text-[#565d6a] font-semibold mb-4">Hola! Me llamo <span className="text-[#ec4e39]">Alejo Pequeño</span>.</motion.h4>
          <motion.p initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: [0, 0.71, 0.2, 1.01],
          }} className="text-[#565d6a] mb-4">
            Soy <span className="text-[#ec4e39] font-semibold">Desarrollador Web Full Stack y Diseñador Multimedial</span>.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.7,
            ease: [0, 0.71, 0.2, 1.01],
          }} className="text-[#565d6a] mb-4">
            Me apasiona programar y diseñar sitios web. Tengo experiencia en crear soluciones web innovadoras. Soy bueno trabajando en equipo, siempre estoy aprendiendo y listo para enfrentar nuevos desafíos en mi área. Mi objetivo es contribuir al éxito de mi equipo y la organización en la que trabajo.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }} className="text-[#565d6a]">
            Soy estudiante universitario en la insitución <span className="text-[#ec4e39] font-semibold">Escula Da Vinci</span>, persiguiendo un título de Diseñador Multimedial, ya que une mis dos pasiones, la progrmación y el diseño. Ademas estoy certificado profecionalmente como Desarrollador Web FullStack en <span className="text-[#ec4e39] font-semibold">Digital House</span>. Deseo seguir espacializandome en este rubro del diseño y la programación. Tengo una fuerte pasión por la tecnología, el software y los lenguajes de programación, estoy constantemente buscando ampliar mis conocimientos y habilidades en estas áreas. También me interesan la escritura y las matemáticas, y creo que estas materias complementan mis objetivos técnicos. Gracias por visitar mi portafolio y espero compartir mi trabajo contigo.
          </motion.p>
        </div>
      </div>

    </main>
  );
}