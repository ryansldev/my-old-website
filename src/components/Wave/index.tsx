import styles from './styles.module.scss';

export function Wave({children}) {
  return (
    <div className={styles.waveContainer}>
      <div className={`${styles.wave} ${styles.wave1}`} />
      <div className={`${styles.wave} ${styles.wave2}`} />
      <div className={`${styles.wave} ${styles.wave3}`} />
      <div className={`${styles.wave} ${styles.wave4}`} />
      {children}
    </div>
  );
};