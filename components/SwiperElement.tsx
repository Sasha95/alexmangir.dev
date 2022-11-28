import { Pagination } from "swiper";
import {  Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import {  ReactNode } from "react";

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
