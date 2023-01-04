import { ReactNode } from "react";
import styles from "./card.module.scss";

type Props = {
  children: ReactNode;
  title: string;
};
export const Card = ({ children, title }: Props) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      {children}
      <button className={styles.btn}>Click to see more</button>
    </div>
  );
};
