import { Caption } from "@/components/Caption";
import siteMetadata from "@/data/siteMetadata";
import { ContactItem } from "modules/contact/ContactItem";

export const Contact = () => {
  return (
    <div className="lg:mt-40 md:mt-20 mt-14">
      <Caption title1={"Contact"} title2={"Me"} />
      <div className="grid grid-cols-4 gap-x-6 xs:gap-x-10 md:gap-x-20 lg:gap-x-24 xl:gap-x-36 w-full md:mt-16">
        <ContactItem
          href={siteMetadata.github}
          src={siteMetadata.githubImage}
          title={"Github"}
        />
        <ContactItem
          href={siteMetadata.twitter}
          src={siteMetadata.twitterImage}
          title={"Twitter"}
        />
        <ContactItem
          href={siteMetadata.linkedin}
          src={siteMetadata.linkedinImage}
          title={"Linkedin"}
        />
        <ContactItem
          href={siteMetadata.facebook}
          src={siteMetadata.facebookImage}
          title={"Facebook"}
        />
      </div>
    </div>
  );
};
