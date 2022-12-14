import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { forwardRef, ReactNode } from "react";
import classNames from "classnames";
import styles from "./swiper-cards.module.scss";

type Props = {
  children: ReactNode;
  bulletClass: string;
  swiperName: string;
  classSwiper?: string;
  className?: string;
} & SwiperProps;

export const SwiperCards = ({
  children,
  bulletClass,
  swiperName,
  className,
  classSwiper,
  ...props
}: Props) => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
          el: `.${swiperName}`,
          type: "bullets",
          bulletClass: bulletClass,
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        spaceBetween={30}
        slidesPerView={1}
        className={styles.container}
        modules={[Pagination]}
        {...props}
      >
        {children}
      </Swiper>
      <div className={classNames(swiperName, className)} />
    </>
  );
};
