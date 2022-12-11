import Image from "next/image";
import { Navigation } from "swiper";
import classnames from "classnames";
import { Swiper, SwiperProps, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { forwardRef, ReactElement, Ref } from "react";
import classNames from "classnames";

type Props = {
  caption: string;
  items: { src: string; title: string; description?: ReactElement | string }[];
  showArrows?: boolean;
  className?: string;
  classImgName?: string;
  classNameContainer?: string;
} & SwiperProps;

const WorkElementCard = (
  {
    items,
    caption,
    showArrows = false,
    className,
    classNameContainer,
    classImgName,
    ...props
  }: Props,
  ref: Ref<SwiperRef>
) => (
  <div
    className={classnames(
      "md:max-w-[350px] md:h-[500px] flex flex-col md:py-[54px] py-5",
      classNameContainer
    )}
  >
    <h3 className="text-base xs:text-lg leading-6 lg:text-3xl md:text-2xl md:leading-10 tracking-normal font-medium text-center">
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
              className="flex flex-col items-center h-full md:m-auto"
            >
              <div
                className={classNames(
                  "relative md:px-5 md:h-[236px] overflow-hidden md:my-4 my-1.5 flex",
                  classImgName
                )}
              >
                <Image
                  alt={item.title}
                  src={item.src}
                  sizes="100vw"
                  width="0"
                  height="0"
                  className={classNames(
                    "w-full h-auto min-w-[111px] min-h-[104px]",
                    className
                  )}
                />
              </div>
              <div className="h-25">
                <p className="text-xs xs:text-sm leading-4 md:text-2xl md:leading-9 text-center">
                  {item.title}
                </p>
                {item.description && (
                  <p className="text-lg text-[10px] xs:text-xs leading-3 md:text-sm md:leading-5 md:mt-2.5 mt-1.5 text-center font-[Inter]">
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
