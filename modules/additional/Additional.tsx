import { Caption } from "@/components/caption/Caption";
import { CardPassion } from "@/components/card-passion/CardPassion";
import { passions } from "@/data/passions";
import styles from "./additional.module.scss";
import { CardContainer } from "../../components/card-container/CardContainer";

export const Additional = () => {
  const passionCards = passions.map((pass, index) => (
    <CardPassion
      key={index}
      alt={pass.alt}
      description={pass.description}
      work={pass.work}
      image={pass.image}
    />
  ));
  return (
    <div className={styles.container}>
      <Caption
        title1={"Additional"}
        title2={"passions"}
        className={styles.titleContainer}
      />
      <CardContainer
        cards={passionCards}
        name="swiper-custom-pagination-additional"
      />
    </div>
  );
};
