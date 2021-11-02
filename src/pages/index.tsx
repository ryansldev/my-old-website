import styles from './home.module.scss';
import Head from "next/head";

import { Wave } from '../components/Wave';
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from 'react-icons/fi';
import { RiDiscordLine } from 'react-icons/ri';

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
            <a target="_blank" href="https://discord.gg/7QU93fUHun">
              <RiDiscordLine />
            </a>
          </div>
        </div>
      </Wave>
      <div className={styles.projectsContainer}>
        <div className={styles.projectSectionTitle}>
          <h1>Meus projetos</h1>
          <h2>Alguns projetos que fiz e estou fazendo ao longo dessa jornada!</h2>
        </div>
        <div className={styles.projects}>
          <div className={styles.project}>
            <a href="https://github.com/EddyPBR/world-wide-dev" target="_blank" rel="noopener noreferer">
              <div className={`${styles.WWDProjectImage}`}></div>
            </a>
            <a href="https://github.com/ryansldev/letmeask" target="_blank" rel="noopener noreferer">
              <div className={`${styles.LetMeAskProjectImage}`}></div>
            </a>
          </div>
        </div>
      </div>
      <div id="about" className={styles.about}>
        <div className={styles.aboutContainer}>
          <div className={styles.content}>
            <span>sobre mim</span>
            <h1>Ryan Lima</h1>

            <div>
              <p>
                Me chamo Ryan, começei essa jornada em busca do conhecimento, programação e UI/UX Design em torno dos meus 11 anos de idade, desde pequeno sempre gostei de tecnologia e games então sempre estive em contato com tudo isso. Essa busca por programação surgiu por meio do meu irmão, eu sempre achei chato toda essa coisa de programação por que eu sempre via ele resolvendo bugs e quebrando um pouco da cabeça para resolvê-los 😂
              </p>
              <p>
              Porém, ele me convenceu a tentar aprender e a partir dai se iniciou a minha paixão por programação e todo esse mundo tecnológico incluindo UI/UX Design, desde então não paro mais de programar e atualmente estou apaixonado pela tecnologia JS e todo seu entorno! 😍
              </p>
            </div>
          </div>
          <div className={styles.image}>
            <img alt="Ryan" src="/profile.jpg" />
          </div>
        </div>
      </div>
      <Wave>
        <div className={styles.contact}>
          <span>deseja desenvolver um projeto</span>
          <a target="_blank" href="https://www.linkedin.com/in/ryansldev/"><h1>Vamos trabalhar juntos</h1></a>
        </div>
        <div className={styles.skills} id="skills">
          <div className={styles.skillsContainer}>
            <div className={styles.skillsImages}>
              <img alt="Js" height="50" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
              <img alt="Ts" height="50" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg" />
              <img alt="React" height="50" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" />
              <img alt="Next.js" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" />
              <img alt="Node.js" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
              <img alt="Figma" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
              <img alt="HTML" height="50" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
              <img alt="CSS" height="50" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
              <img alt="Bulma" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bulma/bulma-plain.svg" />
            </div>
          </div>
        </div>
      </Wave>
    </div>
  )
}
