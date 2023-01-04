import Image from "next/image";
import styles from "./card-passion.module.scss";

type Props = {
  work: string;
  image: string;
  alt: string;
  description: string;
};

export const CardPassion = ({ work, description, image, alt }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image alt={alt} src={image} className={styles.img} />
      </div>
      <div className={styles.descriptionContainer}>
        <p className={styles.boldText}>{work} &nbsp;</p>
        <p className={styles.text}>Developer</p>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
