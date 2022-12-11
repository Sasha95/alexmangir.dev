import { ReactElement, useRef } from "react";
import { SwiperRef } from "swiper/react";
import { WorkElement } from "./WorkElement";

type Props = {
  companyName: string;
  companySrc: string;
  companyDescription: ReactElement;

  functions: {
    title: string;
    src: string;
    description?: ReactElement;
  }[];

  projects: {
    title: string;
    src: string;
    description?: string;
  }[];
};
export const WorkItem = ({
  companyName,
  companySrc,
  companyDescription,
  functions,
  projects,
}: Props) => {
  const jobRef = useRef<SwiperRef>(null);
  return (
    <>
      <div className="flex items-center justify-around w-full h-full">
        <WorkElement
          className="px-4"
          caption="The company"
          items={[
            {
              src: companySrc,
              title: companyName,
              description: companyDescription,
            },
          ]}
        />
        <WorkElement
          caption="The project"
          items={projects}
          showArrows
          className="px-4"
        />
        <WorkElement
          caption="The job title"
          items={functions}
          allowTouchMove={false}
          ref={jobRef}
        />
      </div>
    </>
  );
};
