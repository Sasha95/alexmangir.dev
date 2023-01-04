import { Caption } from "@/components/caption/Caption";
import { EducationHistory } from "./education-history/EducationHistory";
import styles from "./education.module.scss";

export const Education = () => {
  return (
    <div className={styles.container}>
      <Caption title1={"My"} title2={"Portfolio"} />
      <div className={styles.history}>
        <EducationHistory />
      </div>
    </div>
  );
};
