import { useImageTheme } from "hooks/use-image-theme";
import Image from "next/image";
import FooterImg from "public/assets/footer.svg";
import FooterImgDark from "public/assets/footer-dark.svg";
import styles from "./footer.module.scss";

export const Footer = () => {
  const src = useImageTheme(FooterImg, FooterImgDark);
  const year = new Date().getFullYear();
  return (
    <footer className={styles.container}>
      <Image src={src} alt={"footer"} className={styles.img} />
      <p className={styles.copyright}>© {year} Alexandr Mangir</p>
    </footer>
  );
};
