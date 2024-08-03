import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>ZenZone | Home</title>
        <meta name="description" content="Discover ZenZone, your ultimate destination for relaxation and wellness." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/image/Hippie Monkey.jpeg" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.logo}>ZenZone</h1>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h2 className={styles.heroTitle}>Find Your Zen</h2>
            <p className={styles.heroSubtitle}>Experience tranquility and rejuvenation like never before.</p>
            <Link href="/services">
              <p className={styles.ctaButton}>Explore Our Services</p>
            </Link>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/image/Hippie Monkey.jpeg"
              alt="ZenZone Hero"
              layout="fill"
              objectFit="cover"
              className={styles.image}
            />
          </div>
        </section>

        <section className={styles.features}>
          <div className={styles.container}>
            <div className={styles.feature}>
              <h3>Personalized Wellness</h3>
              <p>Tailored wellness plans to meet your unique needs.</p>
            </div>
            <div className={styles.feature}>
              <h3>Expert Guidance</h3>
              <p>Guidance from certified professionals to help you achieve your goals.</p>
            </div>
            <div className={styles.feature}>
              <h3>Relaxing Environment</h3>
              <p>Immerse yourself in a calm and soothing atmosphere.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>&copy; 2024 ZenZone. All rights reserved.</p>
          <p>
            <Link href="/privacy-policy">Privacy Policy</Link> | <Link href="/terms-of-service">Terms of Service</Link>
          </p>
        </div>
      </footer>
    </>
  );
}
