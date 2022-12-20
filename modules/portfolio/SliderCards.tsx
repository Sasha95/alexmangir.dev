import { SwiperCards } from "@/components/SwiperCards";
import { WorkItem } from "modules/portfolio/work/WorkItem";
import { portfolio } from "@/data/portfolio";
import { useRef } from "react";
import { Pagination } from "swiper";
import { SwiperRef, SwiperSlide } from "swiper/react";

export type Props = {
  bulletName: string;
};

export const SliderCards = ({ bulletName }: Props) => {
  const swiperRef = useRef<SwiperRef | null>(null);

  return (
    <SwiperCards
      ref={swiperRef}
      modules={[Pagination]}
      swiperName={"swiper-custom-pagination-portfolio"}
      classSwiper="flex justify-center mt-4 lg:mt-14 md:mt-8"
      className="shadow-3xl rounded-xl flex justify-center bg-white"
      bulletClass={bulletName}
    >
      {portfolio.map((data, index) => (
        <SwiperSlide key={index}>
          <WorkItem {...data} />
        </SwiperSlide>
      ))}
    </SwiperCards>
  );
};
