import { Card } from "@/components/Card";
import { SwiperCards } from "@/components/SwiperCards";
import siteMetadata from "@/data/siteMetadata";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";

export const Cards = () => {
  return (
    <div className="xl:mt-24 md:mt-20 mt-12">
      <div className="md:flex justify-between md:gap-x-7 hidden">
        <Card title="TOOLBOX">
          <div className="flex justify-center w-full mt-10 md:mt-2">
            <Image
              alt="vs code"
              src={siteMetadata.vscode}
              sizes="100vw"
              width="0"
              height="0"
              className={
                "w-full max-w-[50px] md:max-w-[40px] h-auto lg:max-w-full lg:max-h-full lg:w-[50px] lg:h-[50px] xl:h-[63px] xl:w-[63px]"
              }
            />
            <Image
              alt="typescript"
              src={siteMetadata.ts}
              width="0"
              height="0"
              className={
                "w-full max-w-[50px] md:max-w-[40px] mx-5 h-auto lg:max-w-full lg:max-h-full lg:w-[50px] lg:h-[50px] xl:h-[63px] xl:w-[63px]"
              }
            />
            <Image
              alt="prettier"
              src={siteMetadata.prettier}
              width="0"
              height="0"
              className={
                "w-full max-w-[50px] md:max-w-[40px] h-auto lg:max-w-full lg:max-h-full lg:w-[50px] lg:h-[50px] xl:h-[63px] xl:w-[63px]"
              }
            />
          </div>
          <p className="text-cornflower font-semibold text-xs xl:text-lg mb-3.5 mt-8 md:mt-1.5 xl:mt-8 xl:mb-3.5">
            Here`s what I use daily
          </p>
        </Card>
        <Card title="RESUME">
          <Image
            alt="resume"
            src={siteMetadata.resumeImg}
            sizes="100vw"
            width="0"
            height="0"
            className="relative w-full h-auto max-w-[122px] md:w-[80px] max-h-[110px] md:max-h-full md:max-w-full md:h-[79px] lg:h-[110px] lg:w-[122px] xl:w-[162px] xl:h-[147px] md:mb-3"
          />
        </Card>
        <Card title="ABOUT ME">
          <Image
            alt="about me"
            src={siteMetadata.about}
            sizes="100vw"
            width="0"
            height="0"
            className="relative w-full h-auto max-w-[106px] md:max-w-[88px] max-h-[102px] md:max-h-[80px] lg:h-[110px] lg:w-[122px] xl:w-[162px] xl:h-[147px] lg:max-w-fit lg:max-h-fit md:mb-3 md:-mt-1.5"
          />
        </Card>
      </div>
      <div className="block md:hidden">
        <SwiperCards
          bulletClass="swiper-pagination-bullet-sm"
          swiperName="swiper-custom-pagination-card"
        >
          <SwiperSlide>
            <Card title="TOOLBOX" className="shadow-none">
              <div className="flex justify-center w-full lg:mt-10 mt-2.5 md:mt-2">
                <Image
                  alt="vs code"
                  src={siteMetadata.vscode}
                  sizes="100vw"
                  width="0"
                  height="0"
                  className={"w-full max-w-[50px] md:max-w-[40px] h-auto"}
                />
                <Image
                  alt="typescript"
                  src={siteMetadata.ts}
                  width="0"
                  height="0"
                  className={"w-full max-w-[50px] md:max-w-[40px] mx-5 h-auto"}
                />
                <Image
                  alt="prettier"
                  src={siteMetadata.prettier}
                  width="0"
                  height="0"
                  className={"w-full max-w-[50px] md:max-w-[40px] h-auto"}
                />
              </div>
              <p className="text-cornflower font-semibold lg:text-xs text-base lg:mt-8 md:mt-2 mt-5 mb-3 sm:mt-9 sm:mb-4">
                Here`s what I use daily
              </p>
            </Card>
          </SwiperSlide>
          <SwiperSlide className="h-auto">
            <Card title="RESUME" className="shadow-none">
              <Image
                alt="resume"
                src={siteMetadata.resumeImg}
                sizes="100vw"
                width="0"
                height="0"
                className="relative w-full h-auto max-w-[122px] md:max-w-[80px] max-h-[110px] md:max-h-[71px] md:mb-3 md:mt-1 mb-1.5"
              />
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card title="ABOUT ME" className="shadow-none">
              <Image
                alt="about me"
                src={siteMetadata.about}
                sizes="100vw"
                width="0"
                height="0"
                className="relative w-full h-auto max-w-[122px] md:max-w-[80px] max-h-[110px] md:max-h-[71px] md:mb-3 md:-mt-1 mb-1.5 mt-0"
              />
            </Card>
          </SwiperSlide>
        </SwiperCards>
      </div>
    </div>
  );
};
