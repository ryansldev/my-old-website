import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <a className={styles.headerActive} href="/">home</a>
        <a href="#about">about</a>
        <a href="#testimonials">testimonials</a>
        <a href="#skills">skills</a>
      </div>
    </header>
  );
};