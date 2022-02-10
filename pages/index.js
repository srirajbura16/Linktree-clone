import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const img = `https://picsum.photos/${randomIntFromInterval(
    200,
    800
  )}/${randomIntFromInterval(200, 800)}`;
  return (
    <div className={styles.container}>
      <Head>
        <title>Sriraj Bura</title>
        <meta name="description" content="Sriraj Bura's Links" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.profile_pic}>
            <figure
              className="avatar"
              style={{ backgroundImage: `url(${img})` }}
            />
          </div>
          <div className={styles.links}>
            <Link href="https://twitter.com/SrirajBura">
              <button className={styles.link}>
                <a>Twitter</a>
              </button>
            </Link>
            <Link href="https://github.com/srirajbura16">
              <button className={styles.link}>
                <a>Github</a>
              </button>
            </Link>
            <Link href="https://www.linkedin.com/in/srirajbura/">
              <button className={styles.link}>
                <a>Linkedin</a>
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
