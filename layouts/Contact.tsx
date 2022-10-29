import { Caption } from "@/components/Caption";
import siteMetadata from "@/data/siteMetadata";
import Image from "next/image";

export const Contact = () => {
  return (
    <div className="mt-40">
      <Caption title1={"Contact"} title2={"My"} />
      <div className="flex w-full justify-between">
        <div className="flex flex-col items-center">
          <Image
            alt="Github"
            src={siteMetadata.githubImage}
            width={166}
            height={160}
          />
          <h2 className="mt-8 font-medium text-2xl letterSpacing-normal">
            Github
          </h2>
        </div>
        <div className="flex flex-col items-center">
          <Image
            alt="Instagram"
            src={siteMetadata.instagramImage}
            width={166}
            height={160}
          />
          <h2 className="mt-8 font-medium text-2xl letterSpacing-normal">
            Instagram
          </h2>
        </div>
        <div className="flex flex-col items-center">
          <Image
            alt="Email"
            src={siteMetadata.emailImage}
            width={166}
            height={160}
          />
          <h2 className="mt-8 font-medium text-2xl letterSpacing-normal">
            Email
          </h2>
        </div>
        <div className="flex flex-col items-center">
          <Image
            alt="Phone"
            src={siteMetadata.phoneImage}
            width={166}
            height={160}
          />
          <h2 className="mt-8 font-medium text-2xl letterSpacing-normal">
            Phone
          </h2>
        </div>
      </div>
    </div>
  );
};
