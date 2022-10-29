import siteMetadata from "@/data/siteMetadata";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="relative flex">
      <Image
        src={siteMetadata.footerImage}
        alt={"footer"}
        sizes={"100vw"}
        width={0}
        height={0}
        style={{ inset: "auto", height: "unset", width: "100%" }}
        priority
      />
    </footer>
  );
};
