import { useImageTheme } from "hooks/use-image-theme";
import Image from "next/image";
import styles from "./card-passion.module.scss";

type Props = {
  work: string;
  image: string;
  imageDark: string;
  alt: string;
  description: string;
};

export const CardPassion = ({
  work,
  description,
  image,
  imageDark,
  alt,
}: Props) => {
  const src = useImageTheme(image, imageDark);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image alt={alt} src={src} className={styles.img} priority />
      </div>
      <div className={styles.caption}>
        <p className={styles.boldText}>{work} &nbsp;</p>
        <p className={styles.text}>Developer</p>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
