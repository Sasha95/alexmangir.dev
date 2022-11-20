import { Pagination } from "swiper";
import { SwiperSlide, Swiper, SwiperProps } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { ReactElement, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const SwiperElement = ({ children }: Props) => {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
    >
      {children}
    </Swiper>
  );
};
