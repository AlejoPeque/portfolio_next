import React from "react";
import { CreditCard, Atom, Wallet } from "@phosphor-icons/react";

export const navItems = [
  {
    title: "Inicio",
    href: "/",
  },
  {
    title: "Conoceme",
    href: "/about",
  },
  {
    title: "Proyectos",
    href: "/proyects",
  },
  {
    title: "Contactame",
    href: "/contact",
  },
];

export const experiencesData = [
  {
    title: "Analista QA SSR",
    location: "Sistemas Activos SRL",
    description:
      "Actualmente, soy Analista y Líder QA SSR en el equipo de Conciliación Bancaria en Prisma Medios de Pago. Me dedico al análisis y resolución de problemas en desarrollos e incidentes, además de colaborar en la creación de soluciones para proyectos del Banco Galicia en entornos COBOL Mainframe.",
    date: "Jun 2023 - Actualidad",
    icon: React.createElement(Wallet),
  },
  {
    title: "Full-Stack Developer",
    location: "Digital House",
    description:
      "Participé en el desarrollo Full Stack de una página web con Node.js, Express y MySQL, creando una API específica para el proyecto. También contribuí en la creación de un sitio React que se integró con la API, formando un completo panel de control para productos y usuarios. Esto destaca mis habilidades en proyectos multidisciplinarios.",
    date: "Mar 2023 - Oct 2023",
    icon: React.createElement(Atom),
  },
  {
    title: "Tester QA",
    location: "Sistemas Activos SRL",
    description:
      "Trabajé como Tester QA en Conciliación Bancaria en Prisma Medios de Pago, enfocado en pruebas unitarias para sistemas Mainframe (COBOL Batch, JCL, VSAM/SAM) utilizando File Manager.",
    date: "Ago 2021 - Jun 2023",
    icon: React.createElement(CreditCard),
  },
];
