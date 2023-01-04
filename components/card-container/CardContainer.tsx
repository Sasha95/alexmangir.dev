import { Fragment, ReactNode } from "react";
import { SwiperSlide } from "swiper/react";
import { SwiperCards } from "../swiper-cards/SwiperCards";
import styles from "./card-container.module.scss";

type Props = {
  cards: ReactNode[];
  name: string;
};

export const CardContainer = ({ cards, name }: Props) => {
  return (
    <>
      <div className={styles.container}>
        {cards.map((child, index) => (
          <Fragment key={index}>{child}</Fragment>
        ))}
      </div>
      <div className={styles.mobileContainer}>
        <SwiperCards
          bulletClass="swiper-pagination-bullet-sm"
          swiperName={name}
          className={styles.wrapper}
        >
          {cards.map((child, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              {child}
            </SwiperSlide>
          ))}
        </SwiperCards>
      </div>
    </>
  );
};
