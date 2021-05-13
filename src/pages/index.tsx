import styles from './home.module.scss';
import Head from "next/head";

import { Wave } from '../components/Wave';
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from 'react-icons/fi';

export default function Home() {
  return (
    <div className={styles.homepage}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
        <title>Ryan Lima — Developer and UI/UX Design</title>
      </Head>

      <Wave>
        <div className={styles.heroContainer}>
          <div className={styles.logoContainer} />
          <div className={styles.helloContainer}>
            <h1>Me chamo Ryan, sou Desenvolvedor e UI/UX Designer</h1>
            <h3>diga olá em minhas redes sociais —</h3>
          </div>
          <div className={styles.networks}>
            <a target="_blank" href="https://github.com/ryansldev">
              <FiGithub />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/ryansldev/">
              <FiLinkedin />
            </a>
            <a target="_blank" href="https://www.instagram.com/ryansldev/?hl=pt-br">
              <FiInstagram />
            </a>
            <a target="_blank" href="https://twitter.com/ryansldev">
              <FiTwitter />
            </a>
          </div>
        </div>
      </Wave>
      <div className={styles.projectsContainer}>
      </div>
    </div>
  )
}
