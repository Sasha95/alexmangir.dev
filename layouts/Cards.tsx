import siteMetadata from "@/data/siteMetadata";
import { ConclusionsBig } from "modules/conclusion/ConclusionsBig";
import { ConclusionSm } from "modules/conclusion/ConclusionSm";

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
      <div className="md:flex w-full justify-between gap-x-7 lg:gap-x-9 xl:gap-x-14 hidden">
        <ConclusionsBig toolboxItems={toolboxItems} />
      </div>
      <div className="block md:hidden">
        <ConclusionSm toolboxItems={toolboxItems} />
      </div>
    </div>
  );
};
