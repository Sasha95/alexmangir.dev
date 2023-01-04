import { Fragment, ReactNode } from "react";
import { SwiperSlide } from "swiper/react";
import { SwiperCards } from "../swiper-cards/SwiperCards";
import styles from "./card-container.module.scss";

type Props = {
  cards: ReactNode[];
  name: string;
  bulletClass?: string;
};

export const CardContainer = ({
  cards,
  name,
  bulletClass = "swiper-pagination-bullet-sm",
}: Props) => {
  return (
    <>
      <div className={styles.container}>
        {cards.map((child, index) => (
          <Fragment key={index}>{child}</Fragment>
        ))}
      </div>
      <div className={styles.mobileContainer}>
        <SwiperCards
          bulletClass={bulletClass}
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
