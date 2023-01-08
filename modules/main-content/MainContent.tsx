import siteMetadata from "@/data/siteMetadata";
import Image from "next/image";
import styles from "./main-content.module.scss";
import mainImg from "public/assets/main_img.svg";
import mainImgDark from "public/assets/main_img-dark.svg";
import { useImageTheme } from "hooks/use-image-theme";

export const MainContent = () => {
  const src = useImageTheme(mainImg, mainImgDark);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.textName}>I&apos;m Alexandr</h1>
        <h1 className={styles.textDescription}>{siteMetadata.description}</h1>
        <h4 className={styles.textAbout}>
          Front-End developer based in Moldova, Chisinau I&apos;am coding with a
          clean and beautiful problem solving in mind.
        </h4>
      </div>
      <div className={styles.imgContainer}>
        <Image src={src} alt={"main image"} className={styles.img} priority />
      </div>
    </div>
  );
};
