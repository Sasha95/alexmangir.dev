import { Drawer } from "@/components/drawer/Drawer";
import siteMetadata from "@/data/siteMetadata";
import Image from "next/image";
import { useState } from "react";
import styles from "./navbar-drawer.module.scss";

export const NavbarDrawer = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Drawer isOpen={isOpen} setOpen={setOpen}>
        <div>
          <h2 className={styles.text}>About</h2>
          <h2 className={styles.text}>Passions</h2>
          <h2 className={styles.text}>Portfolio</h2>
          <h2 className={styles.text}>Contact me</h2>
        </div>
      </Drawer>
      <Image
        src={siteMetadata.burgerIcon}
        alt="burger"
        width={25}
        height={25}
        className={styles.iconDrawer}
        onClick={() => setOpen(true)}
      />
    </>
  );
};
