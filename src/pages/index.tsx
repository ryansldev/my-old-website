import styles from './home.module.scss';
import Head from "next/head";

import { FiGithub, FiInstagram, FiTwitter } from 'react-icons/fi';

export default function Home() {
  return (
    <div className={styles.homepage}>
      <Head>
        <title>Ryan Lima — Developer and UI/UX Design</title>
      </Head>

      <div className={styles.heroContainer}>
        <div className={styles.logoContainer} />
      
        <div className={styles.helloContainer}>
          <h1>Me chamo Ryan, sou Desenvolvedor e UI/UX Designer</h1>
          <h3>diga olá em minhas redes sociais —</h3>
        </div>

        <div className={styles.networks}>
          <a href="">
            <FiGithub />
          </a>
          <a href="">
            <FiInstagram />
          </a>
          <a href="">
            <FiTwitter />
          </a>
        </div>
      </div>

      <div className={styles.primaryWave}>
        <img src='/primary-wave.svg' />
      </div>

    </div>
  )
}
