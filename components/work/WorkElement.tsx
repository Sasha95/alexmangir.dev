import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

type Props = {
  caption: string;
  items: { src: string; title: string; description?: string }[];
};

export const WorkElement = ({ items, caption }: Props) => {
  return (
    <div className="max-w-[232px] flex flex-col max-h-[526px]">
      <h3 className="text-3xl leading-10 tracking-normal font-medium text-center">
        {caption}
      </h3>
      <Swiper
        direction={"vertical"}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
      >
        {items.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div key={index} className="flex flex-col">
                <Image
                  alt={item.title}
                  src={item.src}
                  fill
                  className="relative max-w-[179px] max-h-[179px]"
                />
                <div className="mt-7">
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
