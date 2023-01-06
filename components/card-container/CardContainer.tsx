import classNames from "classnames";
import { Fragment, ReactNode } from "react";
import { SwiperSlide } from "swiper/react";
import { SwiperCards } from "../swiper-cards/SwiperCards";
import styles from "./card-container.module.scss";

type Props = {
  cards: ReactNode[];
  name: string;
  bulletClass?: string;
  className?: string;
};

export const CardContainer = ({
  cards,
  name,
  className,
  bulletClass = "swiper-pagination-bullet-sm",
}: Props) => {
  return (
    <>
      <div className={classNames(styles.container, className)}>
        {cards.map((child, index) => (
          <Fragment key={index}>{child}</Fragment>
        ))}
      </div>
      <div className={styles.mobileContainer}>
        <SwiperCards bulletClass={bulletClass} swiperName={name}>
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
