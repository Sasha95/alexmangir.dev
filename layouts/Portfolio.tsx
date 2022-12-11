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
    <div className="mt-40">
      <Caption title1={"My"} title2={"Portfolio"} />
      <div className="flex w-full justify-between">
        <Education />
      </div>
      <h2 className="text-3xl	leading-10 tracking-normal mt-24 mb-7">
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
      <div className="swiper-custom-pagination flex justify-center mt-14" />
    </div>
  );
};
