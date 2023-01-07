import classNames from "classnames";
import useWindowPosition from "hooks/use-window-position";
import { Header } from "./header/Header";
import { NavbarDrawer } from "./navbar-drawer/NavbarDrawer";
import styles from "./navbar.module.scss";

export const Navbar = () => {
  const windowPosition = useWindowPosition();
  return (
    <nav
      className={classNames(styles.container, {
        [styles.offset]: windowPosition > 0,
      })}
    >
      <div className={styles.main}>
        <Header />
        <NavbarDrawer />
      </div>
    </nav>
  );
};
