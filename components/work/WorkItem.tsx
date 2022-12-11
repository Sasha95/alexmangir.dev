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
      <div className="flex items-center justify-around w-full h-full">
        <WorkElement
          className="px-4"
          caption="The company"
          items={companyItem}
        />
        <WorkElement
          caption="The project"
          items={projects}
          showArrows
          className="px-4"
          onSlideChange={onSlideChange}
        />
        <WorkElement
          className="px-4"
          classNameContainer="max-w-[250px]"
          caption="The job title"
          items={positions}
          allowTouchMove={false}
          ref={jobRef}
        />
      </div>
    </>
  );
};
