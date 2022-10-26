import siteMetadata from "@/data/siteMetadata";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav>
      <Image
        src={siteMetadata.avatarImage}
        alt={"avatar"}
        width={100}
        height={100}
        priority
      />
      <Image
        src={siteMetadata.mainImage}
        alt={"avatar"}
        width={100}
        height={100}
        priority
      />
      <h2 className="w-full text-center font-montserrat">About</h2>
      <h2>Passions</h2>
      <h2>Portfolio</h2>
      <button>Contact me</button>
    </nav>
  );
};
