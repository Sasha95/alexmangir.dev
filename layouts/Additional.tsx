import { Caption } from "@/components/Caption";
import { AdditionalCard } from "@/components/AdditionalCard";
import { CardPassion } from "@/components/CardPassion";
import siteMetadata from "@/data/siteMetadata";

export const Additional = () => {
  return (
    <div className="mt-28">
      <Caption title1={"Additional"} title2={"passions"} />
      <div className="flex w-full justify-between	">
        <AdditionalCard>
          <CardPassion
            alt="front-end"
            description="React, NextJS, Typescript"
            work="Front-end"
            image={siteMetadata.frontendImage}
          />
        </AdditionalCard>
        <AdditionalCard>
          <CardPassion
            alt="Mobile"
            description="React Native, Java, Swift"
            work="Mobile"
            image={siteMetadata.mobileImage}
          />
        </AdditionalCard>
        <AdditionalCard>
          <CardPassion
            alt="ML"
            description="Tensorflow, PyTorch, Theano"
            work="ML"
            image={siteMetadata.mlImage}
          />
        </AdditionalCard>
      </div>
    </div>
  );
};
