import { Inter } from "next/font/google";

import "./globals.css";

import Head from 'next/head';

import Header from "../components/header";
import StickyCursor from "../components/stickyCursor";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Alejo Pequeño | FullStack Developer && Multimedial Designer",
  description:
    "Hola! Me llamo Alejo Pequeño, soy Desarrollador Web FullStack y Diseñador Multimedial",
};

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={`${inter.className} min-h-screen`}>
        <Header />
        <StickyCursor />
        {children}
        <Footer />
      </body>
    </html>
  );
}
