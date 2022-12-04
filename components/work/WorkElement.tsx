import Image from "next/image";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";

type Props = {
  caption: string;
  items: { src: string; title: string; description?: string }[];
  showArrows?: boolean;
};

export const WorkElement = ({ items, caption, showArrows = false }: Props) => {
  return (
    <div className="max-w-[232px] flex flex-col max-h-[526px]">
      <h3 className="text-3xl leading-10 tracking-normal font-medium text-center pt-[52px]">
        {caption}
      </h3>
      <Swiper
        direction={"vertical"}
        spaceBetween={50}
        navigation={showArrows ? true : undefined}
        modules={showArrows ? [Navigation] : undefined}
      >
        {items.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div key={index} className="flex flex-col items-center h-full">
                <Image
                  alt={item.title}
                  src={item.src}
                  fill
                  className="relative max-w-[179px] max-h-[179px] mt-12 mb-16"
                />
                <div className="h-25">
                  <p className="text-2xl leading-9 text-center">{item.title}</p>
                  {item.description && (
                    <p className="text-lg leading-5 mt-2.5 text-center font-[Inter]">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
