import { Card } from "@/components/Card";
import siteMetadata from "@/data/siteMetadata";
import { CardContainer } from "modules/additional/CardContainer";
import { ToolboxItem } from "modules/conclusion/ToolboxItem";

const toolboxItems = [
  {
    alt: "vs code",
    src: siteMetadata.vscode,
  },
  {
    alt: "typescript",
    src: siteMetadata.ts,
  },
  {
    alt: "prettier",
    src: siteMetadata.prettier,
  },
];

export const Cards = () => {
  return (
    <div className="xl:mt-24 md:mt-20 mt-12">
      <CardContainer
        cards={[
          <Card title="TOOLBOX" key={0}>
            <div className="flex justify-center w-full mt-2.5 md:mt-2">
              {toolboxItems.map((item, index) => (
                <div className="mx-3" key={index}>
                  <ToolboxItem
                    alt={item.alt}
                    src={item.src}
                    className={"relative"}
                  />
                </div>
              ))}
            </div>
            <p className="text-cornflower font-semibold text-xs xl:text-lg mb-3.5 mt-8 md:mt-1.5 xl:mt-8 xl:mb-3.5">
              Here`s what I use daily
            </p>
          </Card>,
          <Card title="RESUME" key={1}>
            <div className="relative">
              <ToolboxItem
                alt="resume"
                src={siteMetadata.resumeImg}
                className="relative w-full h-full max-h-[124px] max-w-[138px] md:max-w-[88px] md:max-h-[80px] lg:h-[110px] lg:w-[122px] xl:w-[162px] xl:h-[147px] lg:max-w-fit lg:max-h-fit md:mb-3 md:mt-1 mb-1.5"
              />
            </div>
          </Card>,
          <Card title="ABOUT ME" key={3}>
            <div className="relative">
              <ToolboxItem
                alt="about me"
                src={siteMetadata.about}
                className="relative w-full h-full max-h-[124px] max-w-[138px] md:max-w-[88px] md:max-h-[80px] lg:h-[110px] lg:w-[122px] xl:w-[162px] xl:h-[147px] lg:max-w-fit lg:max-h-fit mb-1.5 mt-0 md:mb-3 md:-mt-1"
              />
            </div>
          </Card>,
        ]}
      />
    </div>
  );
};
