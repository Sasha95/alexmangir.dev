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
    <Image alt={title} src={src} width={166} height={160} />
    <h2 className="mt-8 font-medium text-2xl letterSpacing-normal">{title}</h2>
  </a>
);
