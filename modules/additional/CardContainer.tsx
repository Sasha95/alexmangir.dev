import { useMediaQuery } from "hooks/use-media-query";
import { Fragment, ReactNode } from "react";
import { SwiperSlide } from "swiper/react";
import { SwiperCards } from "../../components/SwiperCards";

type Props = {
  cards: ReactNode[];
};

export const CardContainer = ({ cards }: Props) => {
  const match = useMediaQuery(980);
  const matchLg = useMediaQuery(1440);
  const gap = !matchLg ? "53px" : !match ? "35px" : "28px";
  return (
    <>
      <div className="md:flex hidden" style={{ gap }}>
        {cards.map((child, index) => (
          <Fragment key={index}>{child}</Fragment>
        ))}
      </div>
      <div className="block md:hidden">
        <SwiperCards
          bulletClass="swiper-pagination-bullet-sm"
          swiperName="swiper-custom-pagination-additional"
        >
          {cards.map((child, index) => (
            <SwiperSlide key={index} className={"h-auto"}>
              {child}
            </SwiperSlide>
          ))}
        </SwiperCards>
      </div>
    </>
  );
};
