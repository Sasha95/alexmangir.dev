import siteMetadata from "@/data/siteMetadata";
import Image from "next/image";

export const Education = () => {
  return (
    <div className="flex w-full justify-between relative">
      <div>
        <h2 className="text-3xl	leading-10 tracking-normal">
          Education & Skills
        </h2>
        <div className="mt-8  pl-7 relative pb-11">
          <div className="border-l-[1px] border-cornflower absolute top-3 bottom-0 left-0"></div>
          <div className="absolute -left-2 top-2 items-center order-1 bg-cornflower shadow-xl w-4 h-4 rounded-full " />
          <h4 className="text-2xl font-medium leading-9">
            TRANSNISTRIAN STATE UNIVERSITY
          </h4>
          <p className="text-base leading-5 mt-5">
            Master in Applied Mathematics and Computer Science
          </p>
          <p className="text-base leading-5 mt-3.5">2017 - 2019</p>
        </div>
        <div className="pl-7 relative">
          <div className="border-l-[1px] border-cornflower absolute top-0 -bottom-3 left-0"></div>
          <div className="absolute -left-2 top-2 items-center order-1 bg-cornflower shadow-xl w-4 h-4 rounded-full " />
          <h4 className="text-2xl font-medium leading-9">
            TRANSNISTRIAN STATE UNIVERSITY
          </h4>
          <p className="text-base leading-5 mt-5">
            Bachelor's degree/Applied Mathematics 4.8
          </p>
          <p className="text-base leading-5 mt-3.5">2013 - 2017</p>
        </div>
      </div>
      <div className="absolute -top-14 -right-12">
        <Image
          src={siteMetadata.illustrate}
          alt={"illustrate"}
          fill
          className="relative max-w-[530px] max-h-[530px]"
        />
      </div>
    </div>
  );
};
