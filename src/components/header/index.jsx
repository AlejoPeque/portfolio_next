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

  let [activeTab, setActiveTab] = useState(navItems[0].href);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  return (
    <header className='bg-[#1b1d22e7] backdrop-blur h-20 fixed z-[9] w-full flex items-center justify-between border-b-2 border-[#292c33]'>
      <h1 className='mx-4 flex items-center'>
        <Link
          href='/'
        >
          <img
            src='/Logo.png'
            className='w-10'
            alt='Alejo Pequeño'></img>
        </Link>
      </h1>

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
    </header>
  );
}
