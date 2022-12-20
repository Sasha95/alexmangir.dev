import { CustomImage } from "@/components/CustomImage";
import Image from "next/image";
import siteMetadata from "../../data/siteMetadata";
import { CardWrapper } from "./CardWrapper";

export const ConclusionCards = () => {
  const buffer = [];
  buffer.push(
    <CardWrapper title="TOOLBOX">
      <div className="flex justify-center w-full mt-10 md:mt-2">
        <CustomImage
          classNameContainer="w-full flex justify-center"
          alt="vs code"
          src={siteMetadata.vscode}
          className={
            "max-w-[50px] md:max-w-[40px] lg:max-w-full lg:max-h-full lg:w-[50px] lg:h-[50px] xl:h-[63px] xl:w-[63px]"
          }
        />
        <CustomImage
          classNameContainer="w-full flex justify-center"
          alt="typescript"
          src={siteMetadata.ts}
          className={
            "max-w-[50px] md:max-w-[40px] mx-5 lg:max-w-full lg:max-h-full lg:w-[50px] lg:h-[50px] xl:h-[63px] xl:w-[63px]"
          }
        />
        <CustomImage
          classNameContainer="w-full flex justify-center"
          alt="prettier"
          src={siteMetadata.prettier}
          className={
            "max-w-[50px] md:max-w-[40px] lg:max-w-full lg:max-h-full lg:w-[50px] lg:h-[50px] xl:h-[63px] xl:w-[63px]"
          }
        />
      </div>
      <p className="text-cornflower font-semibold text-xs xl:text-lg mb-3.5 mt-8 md:mt-1.5 xl:mt-8 xl:mb-3.5">
        Here`s what I use daily
      </p>
    </CardWrapper>
  );
  buffer.push(
    <CardWrapper title="RESUME">
      <CustomImage
        alt="resume"
        src={siteMetadata.resumeImg}
        classNameContainer="w-full flex justify-center"
        className="max-w-[122px] md:w-[80px] md:h-[79px] lg:h-[110px] lg:w-[122px] xl:w-[162px] xl:h-[147px] md:max-w-[80px] max-h-[110px] md:max-h-[71px] lg:max-w-fit lg:max-h-fit md:mb-3 md:mt-1 mb-1.5"
      />
    </CardWrapper>
  );
  buffer.push(
    <CardWrapper title="ABOUT ME">
      <CustomImage
        classNameContainer="w-full flex justify-center"
        alt="about me"
        src={siteMetadata.about}
        className="max-w-[106px] md:max-w-[88px] max-h-[102px] md:max-h-[80px] lg:h-[110px] lg:w-[122px] xl:w-[162px] xl:h-[147px] lg:max-w-fit lg:max-h-fit mb-1.5 mt-0 md:mb-3 md:-mt-1"
      />
    </CardWrapper>
  );

  return buffer;
};
