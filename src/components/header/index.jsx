"use client";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import Nav from "./nav";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { navItems } from "@/data/data";

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  let [activeTab, setActiveTab] = useState(pathname);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className='bg-[#1b1d22ce] backdrop-blur h-20 fixed z-[9] w-full flex items-center justify-between border-b-2 border-[#292c33]'>
      <Link href="/">
        <h1 className='mx-4 flex items-center'>
          <img
            src='/Logov2.png'
            className='w-10'
            alt='Alejo Pequeño'></img>
        </h1>
      </Link>

      {/* Menu Mobile */}
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className={`${styles.button} md:hidden`}>
        <div
          className={`${styles.burger} md:hidden ${
            isActive ? styles.burgerActive : ""
          }`}></div>
      </div>
      <AnimatePresence
        className='md:hidden'
        mode='wait'>
        {isActive && <Nav />}
      </AnimatePresence>
      {/* Menu Desktop */}
      <div className='hidden space-x-1 mx-8 gap-3 md:flex'>
        {navItems.map((tab) => (
          <Link
            href={tab.href}
            key={tab.href}
            onClick={() => setActiveTab(tab.href)}
            className={`${
              activeTab === tab.href ? "" : "hover:text-[#ec4e39]/70"
            } relative rounded-full px-3 py-1.5 text-md font-medium text-[#ec4e39] transition focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}>
            {activeTab === tab.href && (
              <motion.span
                layoutId='bubble'
                className='absolute inset-0 z-10 bg-[#fc6b57] mix-blend-difference'
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {tab.title}
          </Link>
        ))}
      </div>
    </motion.header>
  );
}
