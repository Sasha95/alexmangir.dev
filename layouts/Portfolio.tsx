import { Caption } from "@/components/Caption";
import { WorkItem } from "@/components/work/WorkItem";
import siteMetadata from "@/data/siteMetadata";

import { Education } from "../components/Education";
import { workExperience } from "@/data/work-experience";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useRef } from "react";

export const Portfolio = () => {
  const swiperRef = useRef<SwiperRef | null>(null);
  return (
    <div className="xl:mt-28 md:mt-20 sm:mt-16 mt-14">
      <Caption title1={"My"} title2={"Portfolio"} />
      <div className="flex w-full justify-between -mt-3 lg:-mt-7 md:mt-0">
        <Education />
      </div>
      <h2 className="xl:text-3xl text-lg sm:text-xl md:text-3xl md:font-semibold xl:text-start xl:mb-5 sm:leading-7 sm:font-normal leading-5 xl:leading-6 font-bold text-center tracking-normal mt-14 mb-7 lg:mb-14 xl:mt-32">
        Work Experience
      </h2>
      <Swiper
        pagination={{
          clickable: true,
          el: ".swiper-custom-pagination",
          type: "bullets",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        slidesPerView={1}
        className={"shadow-3xl rounded-xl flex justify-center bg-white"}
        modules={[Pagination]}
        ref={swiperRef}
      >
        <SwiperSlide>
          <WorkItem
            companyName="Wisent Group"
            companyDescription={
              <>
                Dec 2020 - present
                <br /> Chisinau, Moldova
              </>
            }
            companySrc={siteMetadata.wisent}
            projects={workExperience.wisent}
          />
        </SwiperSlide>
        <SwiperSlide>
          <WorkItem
            companyName="DexTechnology"
            companyDescription={
              <>
                Dec 2017 - Apr 2019
                <br />
                Tiraspol, Moldova
              </>
            }
            companySrc={siteMetadata.dex}
            projects={workExperience.dex}
          />
        </SwiperSlide>
        <SwiperSlide>
          <WorkItem
            companyName="IHelp"
            companyDescription={
              <>
                Dec 2017 - Apr 2019
                <br /> Tiraspol, Moldova
              </>
            }
            companySrc={siteMetadata.ihelp}
            projects={workExperience.ihelp}
          />
        </SwiperSlide>
      </Swiper>
      <div className="swiper-custom-pagination flex justify-center mt-4 lg:mt-14 md:mt-8" />
    </div>
  );
};
