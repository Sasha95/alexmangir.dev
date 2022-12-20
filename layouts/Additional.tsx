import { Caption } from "@/components/Caption";
import { CardPassion } from "@/components/CardPassion";
import siteMetadata from "@/data/siteMetadata";
import { SwiperSlide } from "swiper/react";
import { SwiperCards } from "@/components/SwiperCards";

export const Additional = () => {
  return (
    <div className="xl:mt-28 md:mt-20 mt-14 sm:mt-16">
      <Caption title1={"Additional"} title2={"passions"} />
      <div className="md:flex w-full justify-between	gap-x-4 xl:gap-x-12 hidden">
        <CardPassion
          alt="frontend"
          description="React, NextJS, Typescript"
          work="Frontend"
          image={siteMetadata.frontendImage}
        />

        <CardPassion
          alt="Mobile"
          description="React Native, Typescript"
          work="Mobile"
          image={siteMetadata.mobileImage}
        />

        <CardPassion
          alt="ML"
          description="Tensorflow, Keras"
          work="ML"
          image={siteMetadata.mlImage}
        />
      </div>
      <div className="block md:hidden">
        <SwiperCards
          bulletClass="swiper-pagination-bullet-sm"
          swiperName="swiper-custom-pagination-additional"
          
        >
          <SwiperSlide>
            <CardPassion
              alt="frontend"
              description="React, NextJS, Typescript"
              work="Frontend"
              image={siteMetadata.frontendImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardPassion
              alt="Mobile"
              description="React Native, Typescript"
              work="Mobile"
              image={siteMetadata.mobileImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardPassion
              alt="ML"
              description="Tensorflow, Keras"
              work="ML"
              image={siteMetadata.mlImage}
            />
          </SwiperSlide>
        </SwiperCards>
      </div>
    </div>
  );
};
