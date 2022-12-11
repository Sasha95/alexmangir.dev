import { Caption } from "@/components/Caption";
import { ContactItem } from "@/components/ContactItem";
import siteMetadata from "@/data/siteMetadata";

export const Contact = () => {
  return (
    <div className="lg:mt-40 md:mt-20 mt-14">
      <Caption title1={"Contact"} title2={"Me"} />
      <div className="flex w-full justify-around md:mt-16">
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
