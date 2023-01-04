import Image from "next/image";

type Props = {
  alt: string;
  src: string;
  className: string;
};
export const ToolboxItem = ({ alt, className, src }: Props) => {
  return <Image alt={alt} src={src} className={className} fill />;
};
