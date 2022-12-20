import { workPositions } from "@/data/work-experience";
import { ReactElement, useRef } from "react";
import { SwiperRef } from "swiper/react";
import { Swiper } from "swiper/types";
import { WorkElement } from "./WorkElement";

type Props = {
  companyName: string;
  companySrc: string;
  companyDescription: ReactElement;
  projects: {
    title: string;
    src: string;
    description?: string;
    position: {
      title: string;
      src: string;
    };
  }[];
};
export const WorkItem = ({
  companyName,
  companySrc,
  companyDescription,
  projects,
}: Props) => {
  const positions = Object.values(workPositions);
  const jobRef = useRef<SwiperRef>(null);
  const onSlideChange = (swiper: Swiper) => {
    const selectProject = projects[swiper.activeIndex];
    const indexPosition = positions.findIndex(
      (pos) => pos.title === selectProject.position.title
    );
    jobRef.current?.swiper.slideTo(indexPosition);
  };
  const companyItem = [
    {
      src: companySrc,
      title: companyName,
      description: companyDescription,
    },
  ];

  return (
    <>
      <div className="items-center justify-around w-full h-full md:flex hidden">
        <WorkElement
          className="px-4"
          caption="The company"
          classNameContainer="w-1/3"
          items={companyItem}
        />
        <WorkElement
          caption="The project"
          classNameContainer="w-1/3"
          items={projects}
          showArrows
          className="px-4"
          onSlideChange={onSlideChange}
        />
        <WorkElement
          className="px-4"
          classNameContainer="w-1/3"
          caption="The job title"
          items={positions}
          allowTouchMove={false}
          ref={jobRef}
        />
      </div>
      <div className="flex flex-col items-center w-full h-full md:hidden">
        <div className="flex w-full justify-center ">
          <WorkElement
            classNameContainer="w-1/2 pb-0 w-full"
            className="px-4"
            caption="The company"
            items={companyItem}
          />
          <WorkElement
            className="px-4"
            caption="The job title"
            classNameContainer="w-1/2 pb-0 w-full"
            items={positions}
            allowTouchMove={false}
            ref={jobRef}
          />
        </div>
        <WorkElement
          caption="The project"
          classNameContainer="max-w-[250px] pt-4 pb-5"
          className="max-w-[160px]"
          items={projects}
          showArrows
          classImgName="my-0"
          onSlideChange={onSlideChange}
        />
      </div>
    </>
  );
};
