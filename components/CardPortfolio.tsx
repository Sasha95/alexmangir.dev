import Image from "next/image";
import { ReactElement } from "react";

type Props = {
  header: ReactElement;
  bgColor: string;
  image: string;
  alt: string;
};

export const CardPortfolio = ({ bgColor, header, image, alt }: Props) => {
  return (
    <div className="relative">
      {header}
      <Image alt={alt} src={image} width={347} height={266} />
      {/* <div className="w-[195px] h-[195px] bg-[#6C63FF] rounded-full absolute top-4 left-2 opacity-25 z-0" /> */}
    </div>
  );
};
