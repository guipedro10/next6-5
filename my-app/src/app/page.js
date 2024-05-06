import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
    <h1>Hello World!!</h1>
    <h2>Subititulo</h2>
    <br/>
    <p>paragrafo</p>
    <div>
      <p>outro paragrafo</p>
    </div>
    <p><Link href={'/login'}>Login</Link></p>
    <p><Link href={'/produtos'}>Produtos</Link></p>
    </main>
  );
}
