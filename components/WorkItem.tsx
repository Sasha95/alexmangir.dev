import Image from "next/image";
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { Pagination } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/pagination.css";
import { Fragment } from "react";

type Props = {
  companyName: string;
  companySrc: string;
  companyDescription: string;

  functions: {
    functionName: string;
    functionSrc: string;
  }[];

  projects: {
    functionName: string;
    projectName: string;
    projectSrc: string;
    projectDescription?: string;
  }[];
};
export const WorkItem = ({
  companyName,
  companySrc,
  companyDescription,
  functions,
  projects,
}: Props) => {
  return (
    <div className="shadow-3xl rounded-xl flex justify-center max-h-[526px]">
      <div className="flex items-center justify-around py-14 w-full">
        <div className="max-w-[232px] flex flex-col justify-between h-full">
          <h3 className="text-3xl leading-10 tracking-normal font-medium text-center mb-8">
            The company
          </h3>
          <Image
            alt={companyName}
            src={companySrc}
            fill
            className="relative max-w-[213px] max-h-[221px]"
          />
          <div className="mt-7">
            <p className="text-2xl leading-9 text-center">{companyName}</p>
            <p className="text-lg leading-5 mt-2.5 text-center font-[Inter]">
              {companyDescription}
            </p>
          </div>
        </div>
        <div className="max-w-[232px] flex flex-col justify-between h-full">
          <h3 className="text-3xl leading-10 tracking-normal font-medium text-center mb-8">
            The project
          </h3>
          <Flicking horizontal={false}>
            {functions.map((func, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-between h-full"
                >
                  <Image
                    alt={func.functionName}
                    src={func.functionSrc}
                    fill
                    className="relative max-w-[232px] max-h-[232px]"
                  />
                  <p className="text-2xl leading-9 text-center mt-7 mb-4">
                    {func.functionName}
                  </p>
                </div>
              );
            })}
          </Flicking>
        </div>
        <div className="max-w-[232px] flex flex-col justify-between h-full">
          <h3 className="text-3xl leading-10 tracking-normal font-medium text-center mb-8">
            The project
          </h3>
          <Flicking horizontal={false}>
            {projects.map((proj, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-between h-full"
                >
                  <Image
                    alt={proj.projectName}
                    src={proj.projectSrc}
                    fill
                    className="relative max-w-[179px] max-h-[179px] h-full"
                  />
                  <div className="mt-7">
                    <p className="text-2xl leading-9 text-center">
                      {proj.projectName}
                    </p>
                    {proj.projectDescription && (
                      <p className="text-lg leading-5 mt-2.5 text-center font-[Inter]">
                        {proj.projectDescription}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </Flicking>
        </div>
      </div>
    </div>
  );
};
