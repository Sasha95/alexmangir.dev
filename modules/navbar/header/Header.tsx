import classNames from "classnames";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <>
      <div className={styles.logo}>
        <h2 className={styles.firstText}>alex</h2>
        <h2 className={styles.secondText}>mangir</h2>
      </div>
      <div className={styles.navbarContainer}>
        <h2 className="text-2xl md:text-xl lg:text-2xl font-normal mx-11 md:mx-4 lg:mx-5 xl:mx-11 cursor-pointer hover:text-blue">
          About
        </h2>
        <h2 className="text-2xl md:text-xl lg:text-2xl font-normal cursor-pointer  hover:text-blue">
          Passions
        </h2>
        <h2 className="text-2xl md:text-xl lg:text-2xl font-normal mx-11 md:mx-4 lg:mx-5 xl:mx-11 cursor-pointer  hover:text-blue">
          Portfolio
        </h2>
        <button className="rounded-lg bg-cornflower py-2 px-4 lg:py-2.5 lg:px-5 font-semibold text-white text-2xl md:text-base lg:text-2xl cursor-pointer hover:bg-blue">
          Contact me
        </button>
      </div>
    </>
  );
};
