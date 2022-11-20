import { Caption } from "@/components/Caption";
import { Card } from "@/components/Card";
import { WorkItem } from "@/components/WorkItem";
import siteMetadata from "@/data/siteMetadata";
import Image from "next/image";
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { Pagination } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/pagination.css";

import { Education } from "../components/Education";
import { useRef } from "react";

export const Portfolio = () => {
  const flickerRef = useRef<Flicking | null>(null);
  return (
    <div className="mt-40">
      <Caption title1={"My"} title2={"Portfolio"} />
      <div className="flex w-full justify-between	">
        <Education />
      </div>
      <h2 className="text-3xl	leading-10 tracking-normal mt-24 mb-7">
        Work Experience
      </h2>
      <button onClick={() => flickerRef.current?.moveTo(2)}>click</button>
      <Flicking
        ref={flickerRef}
        bound={true}
        nested
        plugins={[new Pagination({ type: "bullet" })]}
      >
        <div className="w-full">
          <WorkItem
            companyName="Wisent Group"
            companyDescription="dec. 2020 - present Chisinau, Moldova"
            companySrc={siteMetadata.wisent}
            functions={[
              {
                functionName: "React Software Engineer Senior",
                functionSrc: siteMetadata.react,
              },
            ]}
            projects={[
              {
                functionName: "React Software Engineer Senior",
                projectName: "Everact.io",
                projectSrc: siteMetadata.everact,
                projectDescription: "https://everact.io",
              },
            ]}
          />
        </div>
        <div className="w-full">
          <WorkItem
            companyName="DexTechnology"
            companyDescription="Tiraspol, Stînga Nistrul, Moldova Dec 2017 - Apr 2019"
            companySrc={siteMetadata.dex}
            functions={[
              {
                functionName: "React Software Engineer Senior",
                functionSrc: siteMetadata.react,
              },
              {
                functionName: "React Native Software Engineer Middle",
                functionSrc: siteMetadata.react,
              },
              {
                functionName: "React Native Software Engineer Middle",
                functionSrc: siteMetadata.react,
              },
              {
                functionName: "React Software Engineer Middle",
                functionSrc: siteMetadata.react,
              },
              {
                functionName: "React Software Engineer Middle",
                functionSrc: siteMetadata.react,
              },
            ]}
            projects={[
              {
                functionName: "React Software Engineer Senior",
                projectName: "DEX job",
                projectSrc: siteMetadata.dex,
                projectDescription: "https://job.dex-it.ru",
              },
              {
                functionName: "React Native Software Engineer Middle",
                projectName: "Samocat Sharing",
                projectSrc: siteMetadata.samocat,
              },
              {
                functionName: "React Native Software Engineer Middle",
                projectName: "Luxxy",
                projectSrc: siteMetadata.luxxy,
              },
              {
                functionName: "React Software Engineer Middle",
                projectName: "Nokia",
                projectSrc: siteMetadata.nokia,
              },
              {
                functionName: "React Software Engineer Middle",
                projectName: "PIK",
                projectSrc: siteMetadata.pik,
              },
            ]}
          />
        </div>
        <div className="w-full">
          <WorkItem
            companyName="IHelp"
            companyDescription="Tiraspol, Stînga Nistrul, Moldova Dec 2017 - Apr 2019"
            companySrc={siteMetadata.ihelp}
            functions={[
              {
                functionName: "Lead React Software Engineer Senior",
                functionSrc: siteMetadata.react,
              },
              {
                functionName: "ASP NET Developer",
                functionSrc: siteMetadata.sharp,
              },
            ]}
            projects={[
              {
                functionName: "Lead React Software Engineer Senior",
                projectName: "Corridor",
                projectSrc: siteMetadata.corridor,
              },
              {
                functionName: "ASP NET Developer",
                projectName: "CRMWhatsApp",
                projectSrc: siteMetadata.crmWhatsApp,
              },
            ]}
          />
        </div>
        <ViewportSlot>
          <div className="flicking-pagination"></div>
        </ViewportSlot>
      </Flicking>
      <div className="flex justify-between mt-24">
        <Card title="TOOLBOX">
          <div className="flex justify-around w-full mt-10">
            <Image
              alt="vs code"
              src={siteMetadata.vscode}
              width={50}
              height={50}
            />
            <Image
              className="mx-5"
              alt="typescript"
              src={siteMetadata.ts}
              width={50}
              height={50}
            />
            <Image
              alt="prettier"
              src={siteMetadata.prettier}
              width={50}
              height={50}
            />
          </div>
          <p className="font-cornflower text-xs mb-3.5 mt-8">
            Here`s what I use daily.
          </p>
        </Card>
        <Card title="RESUME">
          <Image
            alt="resume"
            src={siteMetadata.resumeImg}
            fill
            className="relative max-w-[122px] max-h-[110px] my-5"
          />
        </Card>
        <Card title="ABOUT ME">
          <Image
            alt="about me"
            src={siteMetadata.about}
            fill
            className="relative max-w-[106px] max-h-[102px] my-6"
          />
        </Card>
      </div>
    </div>
  );
};
