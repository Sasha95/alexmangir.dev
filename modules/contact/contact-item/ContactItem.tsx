import { useImageTheme } from "hooks/use-image-theme";
import Image from "next/image";
import styles from "./contact-item.module.scss";

type Props = {
  href: string;
  src: string;
  srcDark: string;
  title: string;
};

export const ContactItem = ({ title, src, srcDark, href }: Props) => {
  const image = useImageTheme(src, srcDark);
  return (
    <a
      href={href}
      target={"_blank"}
      className={styles.container}
      rel="noreferrer"
    >
      <Image alt={title} src={image} className={styles.img} />
      <h2 className={styles.title}>{title}</h2>
    </a>
  );
};
