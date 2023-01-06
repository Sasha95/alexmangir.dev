import { Drawer } from "@/components/drawer/Drawer";
import Image from "next/image";
import { useState } from "react";
import styles from "./navbar-drawer.module.scss";
import Hamburger from "public/assets/hamburger.svg";

export const NavbarDrawer = () => {
  const [isOpen, setOpen] = useState(false);
  const onClose = () => setOpen(false);
  return (
    <>
      <Drawer isOpen={isOpen} setOpen={setOpen}>
        <div className={styles.container}>
          <a className={styles.text} href="#passion" onClick={onClose}>
            Passions
          </a>
          <a className={styles.text} href="#portfolio" onClick={onClose}>
            Portfolio
          </a>
          <a className={styles.text} href="#contact" onClick={onClose}>
            Contact me
          </a>
        </div>
      </Drawer>
      <Image
        src={Hamburger}
        alt="burger"
        width={25}
        height={25}
        className={styles.iconDrawer}
        onClick={() => setOpen(true)}
      />
    </>
  );
};
