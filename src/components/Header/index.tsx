import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <a className={styles.headerActive} href="/">home</a>
        <a href="/">about</a>
        <a href="/">testimonials</a>
        <a href="/">skills</a>
      </div>
    </header>
  );
};