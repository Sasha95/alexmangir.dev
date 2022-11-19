import { Caption } from "@/components/Caption";
import { Card } from "@/components/Card";
import { WorkItem } from "@/components/WorkItem";
import siteMetadata from "@/data/siteMetadata";
import Image from "next/image";
import { Education } from "../components/Education";

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
      <WorkItem
        companyName="Wisent Group"
        companyDescription="dec. 2020 - present Chisinau, Moldova"
        companySrc={siteMetadata.wisent}
        functionName={"Lead Software Engineer Senior"}
        functionSrc={siteMetadata.react}
        projectName={"Everact.io"}
        projectSrc={siteMetadata.everact}
        projectDescription={"https://everact.io"}
      />
    </div>
  );
};
