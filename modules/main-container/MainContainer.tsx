import { ReactNode } from "react";
import styles from "./main-container.module.scss";

type Props = {
  children: ReactNode;
};
export const MainContainer = ({ children }: Props) => {
  return <section className={styles.container}>{children}</section>;
};
