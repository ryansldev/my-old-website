import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <a id="home-nav" className={styles.headerActive} href="/">home</a>
        <a id="about-nav" href="#about">about</a>
        <a id="testimonial-nav" href="#testimonials" onClick={() => alert('Como este site ainda está sendo desenvolvido, essa parte ainda não foi feita, prossiga navegando pelo site ;D')}>testimonials</a>
        <a id="skills-nav" href="#skills">skills</a>
      </div>
    </header>
  );
};