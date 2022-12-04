import { Card } from "@/components/Card";
import siteMetadata from "@/data/siteMetadata";
import Image from "next/image";

export const Cards = () => {
  return (
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
          Here`s what I use daily
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
  );
};
