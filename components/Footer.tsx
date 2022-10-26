import siteMetadata from "@/data/siteMetadata";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer style={{ position: "relative", height: "200px" }}>
      <Image
        src={siteMetadata.footerImage}
        alt={"footer"}
        quality={100}
        fill
        sizes="100vw"
        priority
      />
    </footer>
  );
};
