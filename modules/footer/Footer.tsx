import Image from "next/image";
import FooterImg from "public/assets/footer.svg";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <Image src={FooterImg} alt={"footer"} className={styles.img} fill />
    </footer>
  );
};
