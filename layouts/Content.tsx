import siteMetadata from "@/data/siteMetadata";
import Image from "next/image";

export const Content = () => {
  return (
    <div className="mt-10 relative flex justify-between">
      <div className="mt-10 max-w-xl">
        <h1 className="text-navy text-3xl tracking-widest leading-[3rem]">
          I'm Alexandr
        </h1>
        <h1 className="text-navy text-4xl tracking-normal font-semibold leading-[38px]	">
          {siteMetadata.description}
        </h1>
        <h4>
          Front-End devel oper based in Moldova, Chisinau I’am coding with a
          clean and beautiful problem solving in mind.
        </h4>
      </div>
      <Image
        src={siteMetadata.mainImage}
        alt={"main image"}
        fill
        className="relative max-w-[467px] max-h-[501px]"

        // width={501}
        // height={467}
      />
    </div>
  );
};