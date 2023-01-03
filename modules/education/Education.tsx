import { Caption } from "@/components/caption/Caption";
import { EducationHistory } from "./EducationHistory";

export const Education = () => {
  return (
    <div className="xl:mt-28 md:mt-20 sm:mt-16 mt-14">
      <Caption title1={"My"} title2={"Portfolio"} />
      <div className="flex w-full justify-between -mt-3 lg:-mt-7 md:mt-0">
        <EducationHistory />
      </div>
    </div>
  );
};
