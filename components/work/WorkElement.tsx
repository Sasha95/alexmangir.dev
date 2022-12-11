import Image from "next/image";
import { Navigation } from "swiper";
import { Swiper, SwiperProps, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { forwardRef, ReactElement, Ref } from "react";

type Props = {
  caption: string;
  items: { src: string; title: string; description?: ReactElement | string }[];
  showArrows?: boolean;
  className?: string;
  classNameContainer?: string;
} & SwiperProps;

const WorkElementCard = (
  { items, caption, showArrows = false, className, ...props }: Props,
  ref: Ref<SwiperRef>
) => (
  <div className={"max-w-[350px] h-[500px] flex flex-col py-[54px]"}>
    <h3 className="text-3xl leading-10 tracking-normal font-medium text-center max-w=[250px]">
      {caption}
    </h3>
    <Swiper
      direction={"horizontal"}
      spaceBetween={0}
      className={"flex w-full"}
      slidesPerView={1}
      navigation={showArrows ? true : undefined}
      modules={showArrows ? [Navigation] : undefined}
      ref={ref}
      {...props}
    >
      {items.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              key={index}
              className="flex flex-col items-center h-full m-auto max-w-[250px]"
            >
              <div
                className={"relative w-[250px] h-[236px] overflow-hidden my-4"}
              >
                <Image
                  alt={item.title}
                  src={item.src}
                  fill
                  className={className}
                />
              </div>
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
export const WorkElement = forwardRef(WorkElementCard);
