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
    title: "Contácteme",
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

export const proyectsData = [
  {
    title: "Blog | Alejo Pequeño",
    description:
      "Creé un blog con Next.js y React, donde comparto tutoriales sobre la construcción de componentes y exploración de diversas tecnologías web.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: '/blogAlejo.jpg',
    href: 'https://alejo-pequeno-blog.vercel.app/',
    delay: 0.3
  },
  {
    title: "Antiria",
    description:
      "Participé en la creación de una página web con Node.js, Express y MySQL, incluyendo la creación de una API específicamente diseñada para el proyecto.",
    tags: ["Node.js", "Express.js", "MySQL", "Sequelize", "EJS"],
    imageUrl: '/antiria.png',
    href: 'https://github.com/alepeque9/antiria_node',
    delay: 0.4
  },
  {
    title: "ToDo List",
    description:
      "Desarrollé una página web utilizando Vite y React con el propósito de crear una aplicación para gestionar y listar tareas pendientes.",
    tags: ["React", "Vite", "Tailwind"],
    imageUrl: '/todo.jpg',
    href: 'https://github.com/alepeque9/toDo-FrontEnd-Mentor',
    delay: 0.5
  },
]