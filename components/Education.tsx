import siteMetadata from "@/data/siteMetadata";
import Image from "next/image";

export const Education = () => {
  return (
    <div className="flex w-full justify-between relative">
      <div className="w-full">
        <h2 className="md:text-3xl text-lg sm:text-xl leading-7 text-center xl:leading-10 tracking-normal md:mt-1 w-full">
          Education & Skills
        </h2>
        <div className="mt-8 md:mt-5 md:pb-5 pl-7 md:pl-5 relative pb-11">
          <div className="border-l-[1px] border-cornflower absolute top-0 bottom-0 xl:left-0 left-2"></div>
          <div className="absolute xl:-left-2 -left-0 top-0 xl:top-2 items-center order-1 bg-cornflower shadow-xl w-4 h-4 rounded-full " />
          <h4 className="text-sm sm:text-base leading-4 font-medium ">
            TRANSNISTRIAN STATE UNIVERSITY
          </h4>
          <p className="text-base sm:text-xs sm:leading-3.5 md:text-sm text-[10px] leading-3 md:leading-5 xl:mt-5 md:mt-1 mt-2">
            Master in Applied Mathematics and Computer Science
          </p>
          <p className="text-base md:text-xs text-[10px] leading-3 md:leading-5 xl:mt-3.5 md:mt-2 mt-2">
            2017 - 2019
          </p>
        </div>
        <div className="pl-7 md:pl-5 relative">
          <div className="border-l-[1px] border-cornflower absolute top-0 -bottom-5 xl:left-0 left-2"></div>
          <div className="absolute xl:-left-2 -left-0 top-1 xl:top-2 items-center order-1 bg-cornflower shadow-xl w-4 h-4 rounded-full " />
          <h4 className="xl:text-2xl text-sm sm:text-base leading-4.5 font-medium leading-9">
            TRANSNISTRIAN STATE UNIVERSITY
          </h4>
          <p className="text-base md:text-sm text-[10px] sm:text-xs sm:leading-3.5 leading-3 md:leading-5 xl:mt-5 md:mt-1 mt-2">
            Bachelor&prime;s degree/Applied Mathematics 4.8
          </p>
          <p className="text-base md:text-xs text-[10px] leading-3 md:leading-5 xl:mt-3.5 md:mt-2 mt-2">
            2013 - 2017
          </p>
        </div>
      </div>
      <div className="absolute -top-14 md:top-11 right-0 max-w-[530px] md:max-w-[241px] md:max-h-[237px] max-h-[530px] hidden md:block">
        <Image
          src={siteMetadata.illustrate}
          alt={"illustrate"}
          className={"w-full h-auto"}
          sizes="100vw"
          width="0"
          height="0"
        />
      </div>
    </div>
  );
};
