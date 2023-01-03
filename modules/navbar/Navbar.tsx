import { Header } from "./header/Header";
import { NavbarDrawer } from "./navbar-drawer/NavbarDrawer";
import styles from "./navbar.module.scss";

export const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Header />
      <NavbarDrawer />
    </nav>
  );
};
