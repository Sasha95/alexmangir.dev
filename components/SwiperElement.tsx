import { Pagination } from "swiper";
import { SwiperSlide, Swiper, SwiperProps } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { ReactElement } from "react";

type Props = {
  slide1: ReactElement;
  slide2: ReactElement;
  slide3: ReactElement;
  rest?: SwiperProps;
};

export const SwiperElement = ({ slide1, slide2, slide3, ...rest }: Props) => {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      {...rest}
    >
      <SwiperSlide>{slide1}</SwiperSlide>
      <SwiperSlide>{slide2}</SwiperSlide>
      <SwiperSlide>{slide3}</SwiperSlide>
    </Swiper>
  );
};
