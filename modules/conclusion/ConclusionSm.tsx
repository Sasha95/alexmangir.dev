import { Card } from "@/components/Card";
import { SwiperCards } from "@/components/SwiperCards";
import siteMetadata from "@/data/siteMetadata";
import { SwiperSlide } from "swiper/react";
import { ToolboxItem } from "./ToolboxItem";

type Props = {
  toolboxItems: { alt: string; src: string }[];
};

export const ConclusionSm = ({ toolboxItems }: Props) => {
  return (
    <SwiperCards
      bulletClass="swiper-pagination-bullet-sm"
      swiperName="swiper-custom-pagination-cards"
    >
      <SwiperSlide className="h-auto">
        <Card title="TOOLBOX">
          <div className="flex justify-center w-full mt-2.5 md:mt-2">
            {toolboxItems.map((item, index) => (
              <div className="mx-3" key={index}>
                <ToolboxItem
                  alt={item.alt}
                  src={item.src}
                  className={"relative"}
                />
              </div>
            ))}
          </div>
          <p className="text-cornflower font-semibold text-xs xl:text-lg mb-3.5 mt-8 md:mt-1.5 xl:mt-8 xl:mb-3.5">
            Here`s what I use daily
          </p>
        </Card>
      </SwiperSlide>
      <SwiperSlide className={"h-auto"}>
        <Card title="RESUME">
          <div className="relative">
            <ToolboxItem
              alt="resume"
              src={siteMetadata.resumeImg}
              className="relative w-full h-full max-h-[124px] max-w-[138px] md:max-w-[88px] md:max-h-[80px] lg:h-[110px] lg:w-[122px] xl:w-[162px] xl:h-[147px] lg:max-w-fit lg:max-h-fit md:mb-3 md:mt-1 mb-1.5"
            />
          </div>
        </Card>
      </SwiperSlide>
      <SwiperSlide className={"h-auto"}>
        <Card title="ABOUT ME">
          <div className="relative">
            <ToolboxItem
              alt="about me"
              src={siteMetadata.about}
              className="relative w-full h-full max-h-[124px] max-w-[138px] md:max-w-[88px] md:max-h-[80px] lg:h-[110px] lg:w-[122px] xl:w-[162px] xl:h-[147px] lg:max-w-fit lg:max-h-fit mb-1.5 mt-0 md:mb-3 md:-mt-1"
            />
          </div>
        </Card>
      </SwiperSlide>
    </SwiperCards>
  );
};
