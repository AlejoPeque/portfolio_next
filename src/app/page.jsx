"use client";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={`${styles.main} pt-[6rem] pb-8 px-[1.5rem] sm:px-[6rem] md:px-[12rem]`}>
      <div>
        <h2 className="text-[#ec4e39] font-[700] text-[38px]">Alejo Pequeño</h2>
        <h3 className="text-[#565d6a] font-[500] text-[16px]">Desarrollador FullStack && Diseñador Multimedial</h3>
        {/*
        <p className="text-[#565d6a] mt-10">
        Me apasiona programar y diseñar sitios web. Tengo experiencia en crear soluciones web innovadoras. Soy bueno trabajando en equipo, siempre estoy aprendiendo y listo para enfrentar nuevos desafíos en mi área. Mi objetivo es contribuir al éxito de mi equipo y la organización en la que trabajo.
        </p>
        */}
      </div>

    </main>
  );
}
