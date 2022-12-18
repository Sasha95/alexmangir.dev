import siteMetadata from "@/data/siteMetadata";
import Image from "next/image";

export const Content = () => {
  return (
    <div className="md:mt-10 lg:mt-24 xl:mt-20 mt-7 relative flex justify-between flex-col-reverse md:flex-row items-center">
      <div className="mt-10 xs:mt-5 max-w-xl">
        <h1 className="md:text-5xl text-2xl sm:text-3xl tracking-tightest leading-10">
          I&apos;m Alexandr
        </h1>
        <h1 className="lg:text-5xl md:text-3xl sm:mt-4 lg:mt-5 sm:text-3xl leading-8 text-2xl tracking-tightest font-semibold mt-5">
          {siteMetadata.description}
        </h1>
        <h4 className="md:text-sm sm:text-sm tracking-wider mt-2 sm:mt-5 sm:leading-5 text-xs lg:text-2xl lg:mt-10 leading-4">
          Front-End developer based in Moldova, Chisinau I&apos;am coding with a
          clean and beautiful problem solving in mind.
        </h4>
      </div>
      <Image
        src={siteMetadata.wisent}
        alt={"main image"}
        sizes="100vw"
        width="0"
        height="0"
        className="w-full h-auto max-w-lg lg:max-w-[287px] xs:max-w-[260px] sm:max-w-[290px] xl:max-w-lg xl:w-full"
      />
    </div>
  );
};
