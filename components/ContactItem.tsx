import Image from "next/image";

type Props = {
  href: string;
  src: string;
  title: string;
};
export const ContactItem = ({ title, src, href }: Props) => (
  <a
    href={href}
    target={"_blank"}
    className="flex flex-col items-center hover:text-blue"
    rel="noreferrer"
  >
    <Image
      alt={title}
      src={src}
      sizes="100vw"
      width="0"
      height="0"
      className="max-xs:w-[55px] max-xs:h-[54px] xs:w-[55px] xs:h-[54px] md:w-[96px] md:h-[92px] lg:h-[126px] lg:w-[132px] xl:max-w-[165px] xl:max-h-[160px] lg:max-w-[132px] lg:max-h-[126px]"
    />
    <h2 className="lg:mt-8 font-medium md:text-2xl xl:text-4xl letterSpacing-normal text-sm leading-5 mt-2.5">
      {title}
    </h2>
  </a>
);
