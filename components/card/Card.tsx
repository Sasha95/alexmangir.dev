import Link from "next/link";
import { ReactNode } from "react";
import styles from "./card.module.scss";

type Props = {
  children: ReactNode;
  title: string;
  link: string;
};
export const Card = ({ children, title, link }: Props) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      {children}
      <Link className={styles.btn} href={link}>
        Click to see more
      </Link>
    </div>
  );
};
