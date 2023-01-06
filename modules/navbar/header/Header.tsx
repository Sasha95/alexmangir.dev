import styles from "./header.module.scss";

export const Header = () => {
  return (
    <>
      <div className={styles.logo}>
        <h2 className={styles.firstText}>alex</h2>
        <h2 className={styles.secondText}>mangir</h2>
      </div>
      <div className={styles.navbarContainer}>
        <h2 className={styles.title}>About</h2>
        <h2 className={styles.title}>Passions</h2>
        <h2 className={styles.title}>Portfolio</h2>
        <button className={styles.btn}>Contact me</button>
      </div>
    </>
  );
};
