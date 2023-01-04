import Image from "next/image";
import Illustrate from "../../../public/assets/illustrate.png";
import styles from "./education-history.module.scss";

export const EducationHistory = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Education & Skills</h2>
        <div className={styles.firstUniversity}>
          <div className={styles.firstBorder}></div>
          <div className={styles.firstBorder} />
          <h4 className={styles.universityName}>
            TRANSNISTRIAN STATE UNIVERSITY
          </h4>
          <p className={styles.describe}>
            Master in Applied Mathematics and Computer Science
          </p>
          <p className={styles.describe}>2017 - 2019</p>
        </div>
        <div className={styles.university}>
          <div className={styles.border}></div>
          <div className={styles.point} />
          <h4 className={styles.universityName}>
            TRANSNISTRIAN STATE UNIVERSITY
          </h4>
          <p className={styles.describe}>
            Bachelor&prime;s degree/Applied Mathematics 4.8
          </p>
          <p className={styles.describe}>2013 - 2017</p>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src={Illustrate} alt={"illustrate"} className={styles.img} />
      </div>
    </div>
  );
};
