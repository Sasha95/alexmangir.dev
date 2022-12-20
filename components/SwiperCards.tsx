import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { forwardRef, ReactNode } from "react";
import classNames from "classnames";

type Props = {
  children: ReactNode;
  bulletClass: string;
  swiperName: string;
  classSwiper?: string;
  className?: string;
} & SwiperProps;

const SwiperElement = ({
  children,
  bulletClass,
  swiperName,
  className,
  classSwiper,
  ...props
}: Props) => {
  return (
    <div>
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
        className={"shadow-xl rounded-xl bg-transparent flex justify-center"}
        modules={[Pagination]}
        {...props}
      >
        {children}
      </Swiper>
      <div className={classNames(swiperName, className)} />
    </div>
  );
};

export const SwiperCards = forwardRef(SwiperElement);
