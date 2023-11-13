"use client";
import styles from "../../page.module.scss";
import Double from '../../../components/double'
import { projects } from '@/data/data';

export default function Proyects() {
  return (
    <main className={`${styles.main} pt-20`}>
      <Double projects={[projects[0], projects[1]]}/>
      <Double projects={[projects[2], projects[3]]} reversed={true}/>
    </main>
  );
}