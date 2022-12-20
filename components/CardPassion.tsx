import Image from "next/image";

type Props = {
  work: string;
  image: string;
  alt: string;
  description: string;
};

export const CardPassion = ({ work, description, image, alt }: Props) => {
  return (
    <div className="bg-white shadow-3xl rounded-xl w-full xl:min-w-[346px] xl:max-h-[289px] py-7 md:py-4 lg:pt-7 xl:py-5 lg:pb-5 md:px-3 px-6 flex flex-col items-center">
      <Image
        alt={alt}
        src={image}
        sizes="100vw"
        width="0"
        height="0"
        className={
          "px-16 md:px-12 lg:px-0 max-xs:p-0 relative w-full h-auto xl:max-w-[225px] xl:max-h-[159px] lg:max-w-[152px] lg:max-h-[104px]"
        }
      />
      <div className="flex mt-4">
        <p className="font-semibold xl:text-2xl xl:leading-9 lg:text-base lg:leading-6 md:text-sm md:leading-5 text-2xl leading-8">
          {work} &nbsp;
        </p>
        <p className="xl:text-2xl xl:leading-9 lg:text-base lg:leading-6 md:text-sm md:leading-5 text-2xl leading-8">
          Developer
        </p>
      </div>
      <p className="xl:text-lg xl:leading-7 lg:text-sm lg:leading-5 md:text-xs md:leading-5 text-base sm:text-lg leading-6 lg:mt-2">
        {description}
      </p>
    </div>
  );
};
