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
    <div className="relative">
      <Image alt={title} src={src} fill className="relative" />
    </div>
    <div className="lg:mt-8 font-medium letterSpacing-normal text-sm  md:text-2xl lg:text-4xl leading-5 mt-2.5">
      {title}
    </div>
  </a>
);
