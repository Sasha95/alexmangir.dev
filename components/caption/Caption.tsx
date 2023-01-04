import classNames from "classnames";
import styles from "./caption.module.scss";

type Props = {
  title1: string;
  title2: string;
  className?: string;
};

export const Caption = ({ title1, title2, className }: Props) => {
  return (
    <div className={classNames(styles.container, className)}>
      <h1 className={styles.title1}>{title1}&nbsp;</h1>
      <h1 className={styles.title2}>{title2}</h1>
    </div>
  );
};
