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
    className="flex flex-col gap-y-2.5 md:gap-y-4 lg:gap-y-6 xl:gap-y-7 items-center hover:text-blue"
    rel="noreferrer"
  >
    <div className="relative max-h-[160px] max-w-[166px]">
      <Image alt={title} src={src} fill className="relative" />
    </div>
    <h2 className="font-medium letterSpacing-normal leading-5 contactText">
      {title}
    </h2>
  </a>
);
