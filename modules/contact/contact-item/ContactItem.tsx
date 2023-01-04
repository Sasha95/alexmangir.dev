import Image from "next/image";
import styles from "./contact-item.module.scss";

type Props = {
  href: string;
  src: string;
  title: string;
};

export const ContactItem = ({ title, src, href }: Props) => (
  <a
    href={href}
    target={"_blank"}
    className={styles.container}
    rel="noreferrer"
  >
    <Image alt={title} src={src} />
    <h2 className={styles.title}>{title}</h2>
  </a>
);
