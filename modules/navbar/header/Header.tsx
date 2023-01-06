import styles from "./header.module.scss";

export const Header = () => {
  return (
    <>
      <a className={styles.logo} href="#">
        <h2 className={styles.firstText}>alex</h2>
        <h2 className={styles.secondText}>mangir</h2>
      </a>
      <div className={styles.navbarContainer}>
        <a className={styles.title} href="#passion">
          Passions
        </a>
        <a className={styles.title} href="#portfolio">
          Portfolio
        </a>
        <a className={styles.btn} href="#contact">
          Contact me
        </a>
      </div>
    </>
  );
};
