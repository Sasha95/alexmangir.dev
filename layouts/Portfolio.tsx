import { Caption } from "@/components/Caption";
import { WorkItem } from "@/components/work/WorkItem";
import siteMetadata from "@/data/siteMetadata";

import { Education } from "../components/Education";
import { workExperience } from "@/data/work-experience";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export const Portfolio = () => {
  return (
    <div className="mt-40">
      <Caption title1={"My"} title2={"Portfolio"} />
      <div className="flex w-full justify-between	">
        <Education />
      </div>
      <h2 className="text-3xl	leading-10 tracking-normal mt-24 mb-7">
        Work Experience
      </h2>
      <Swiper
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        spaceBetween={13}
        className={"shadow-3xl rounded-xl flex justify-center w-full bg-white"}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <WorkItem
            companyName="Wisent Group"
            companyDescription="dec. 2020 - present Chisinau, Moldova"
            companySrc={siteMetadata.wisent}
            functions={workExperience.wisent.functions}
            projects={workExperience.wisent.projects}
          />
        </SwiperSlide>
        <SwiperSlide>
          <WorkItem
            companyName="DexTechnology"
            companyDescription="Tiraspol, Stînga Nistrul, Moldova Dec 2017 - Apr 2019"
            companySrc={siteMetadata.dex}
            functions={workExperience.dex.functions}
            projects={workExperience.dex.projects}
          />
        </SwiperSlide>
        <SwiperSlide>
          <WorkItem
            companyName="IHelp"
            companyDescription="Tiraspol, Stînga Nistrul, Moldova Dec 2017 - Apr 2019"
            companySrc={siteMetadata.ihelp}
            functions={workExperience.ihelp.functions}
            projects={workExperience.ihelp.projects}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
