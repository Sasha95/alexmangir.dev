import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const SwiperCards = ({ children }: Props) => {
  return (
    <div>
      <Swiper
        pagination={{
          clickable: true,
          el: ".swiper-custom-pagination-sm",
          type: "bullets",
          bulletClass: "swiper-pagination-bullet-sm",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        spaceBetween={30}
        slidesPerView={1}
        className={"shadow-xl rounded-xl bg-transparent flex justify-center"}
        modules={[Pagination]}
      >
        {children}
      </Swiper>
      <div className="swiper-custom-pagination-sm md:mt-8" />
    </div>
  );
};
