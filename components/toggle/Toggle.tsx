import styles from "./toggle.module.scss";
import Moon from "public/assets/moon.svg";
import Sun from "public/assets/sun.svg";
import Image from "next/image";
import { useTheme } from "next-themes";
import classNames from "classnames";

type Props = {
  className: string;
};

export const Toggle = ({ className }: Props) => {
  const { theme, setTheme } = useTheme();

  const onSelectTheme = () => {
    if (theme === "light" || theme === "system") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className={classNames(styles.container, className)}>
      <input id="check" type="checkbox" onChange={onSelectTheme} />
      <label htmlFor="check" className={styles.checkTrail}>
        <span className={styles.checkHandler}>
          <Image alt="moon" src={Moon} className={styles.moon} />
          <Image alt="sun" src={Sun} className={styles.sun} />
        </span>
      </label>
    </div>
  );
};
