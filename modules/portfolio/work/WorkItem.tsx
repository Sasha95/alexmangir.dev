import { workPositions } from "@/data/work-experience";
import { ReactElement, useRef } from "react";
import { SwiperRef } from "swiper/react";
import { Swiper } from "swiper/types";
import { WorkElement } from "./WorkElement";
import styles from "./work-item.module.scss";

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
    <div className={styles.container}>
      <WorkElement
        caption="The company"
        items={companyItem}
        className={styles.company}
      />
      <WorkElement
        caption="The project"
        items={projects}
        showArrows
        onSlideChange={onSlideChange}
        className={styles.project}
      />
      <WorkElement
        caption="The job title"
        items={positions}
        allowTouchMove={false}
        ref={jobRef}
        className={styles.job}
      />
    </div>
  );
};
