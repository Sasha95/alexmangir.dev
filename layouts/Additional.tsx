import { Caption } from "@/components/Caption";
import { Card } from "@/components/Card";
import { CardPassion } from "@/components/CardPassion";
import siteMetadata from "@/data/siteMetadata";

export const Additional = () => {
  return (
    <div className="mt-28">
      <Caption title1={"Additional"} title2={"passions"} />
      <div className="flex w-full justify-between	">
        <Card
          className={
            "bg-white shadow-3xl rounded-xl w-[346px] pt-5 pb-[18px] px-6 flex flex-col items-center"
          }
        >
          <CardPassion
            alt="front-end"
            description="React, NextJS, Typescript"
            work="Front-end"
            image={siteMetadata.frontendImage}
          />
        </Card>
        <Card
          className={
            "bg-white shadow-3xl rounded-xl w-[346px] pt-5 pb-[18px] px-6 flex flex-col items-center"
          }
        >
          <CardPassion
            alt="Mobile"
            description="React Native, Java, Swift"
            work="Mobile"
            image={siteMetadata.mobileImage}
          />
        </Card>
        <Card
          className={
            "bg-white shadow-3xl rounded-xl w-[346px] pt-5 pb-[18px] px-6 flex flex-col items-center"
          }
        >
          <CardPassion
            alt="ML"
            description="Tensorflow, PyTorch, Theano"
            work="ML"
            image={siteMetadata.mlImage}
          />
        </Card>
      </div>
    </div>
  );
};
