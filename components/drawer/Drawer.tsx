import { ReactNode } from "react";
import classNames from "classnames";
import styles from "./drawer.module.scss";

type Props = {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  children: ReactNode;
};

export const Drawer = ({ isOpen, setOpen, children }: Props) => {
  return (
    <div>
      <main
        className={classNames(
          styles.mainContainer,
          isOpen ? styles.isOpen : styles.isClose
        )}
      >
        <section
          className={classNames(
            styles.sectionContainer,
            isOpen ? styles.isOpenSection : styles.isCloseSection
          )}
        >
          <article className={styles.articleContainer}>{children}</article>
        </section>
        <section
          className={styles.wrapper}
          onClick={() => {
            setOpen(false);
          }}
        />
      </main>
    </div>
  );
};
