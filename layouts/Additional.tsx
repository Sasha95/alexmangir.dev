import { Caption } from "@/components/Caption";
import { AdditionalCard } from "@/components/AdditionalCard";
import { CardPassion } from "@/components/CardPassion";
import siteMetadata from "@/data/siteMetadata";
import { SwiperCards } from "@/components/swiper-cards/SwiperCards";
import { SwiperSlide } from "swiper/react";

export const Additional = () => {
  return (
    <div className="xl:mt-28 md:mt-20 mt-14 sm:mt-16">
      <Caption title1={"Additional"} title2={"passions"} />
      <div className="md:flex w-full justify-between	gap-x-4 xl:gap-x-12 hidden">
        <AdditionalCard>
          <CardPassion
            alt="frontend"
            description="React, NextJS, Typescript"
            work="Frontend"
            image={siteMetadata.frontendImage}
          />
        </AdditionalCard>
        <AdditionalCard>
          <CardPassion
            alt="Mobile"
            description="React Native, Typescript"
            work="Mobile"
            image={siteMetadata.mobileImage}
          />
        </AdditionalCard>
        <AdditionalCard>
          <CardPassion
            alt="ML"
            description="Tensorflow, Keras"
            work="ML"
            image={siteMetadata.mlImage}
          />
        </AdditionalCard>
      </div>
      <div className="block md:hidden">
        <SwiperCards>
          <SwiperSlide>
            <AdditionalCard className="shadow-none">
              <CardPassion
                alt="frontend"
                description="React, NextJS, Typescript"
                work="Frontend"
                image={siteMetadata.frontendImage}
              />
            </AdditionalCard>
          </SwiperSlide>
          <SwiperSlide>
            <AdditionalCard className="shadow-none">
              <CardPassion
                alt="Mobile"
                description="React Native, Typescript"
                work="Mobile"
                image={siteMetadata.mobileImage}
              />
            </AdditionalCard>
          </SwiperSlide>
          <SwiperSlide>
            <AdditionalCard className="shadow-none">
              <CardPassion
                alt="ML"
                description="Tensorflow, Keras"
                work="ML"
                image={siteMetadata.mlImage}
              />
            </AdditionalCard>
          </SwiperSlide>
        </SwiperCards>
      </div>
    </div>
  );
};
