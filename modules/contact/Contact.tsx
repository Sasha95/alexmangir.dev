import { Caption } from "@/components/caption/Caption";
import siteMetadata from "@/data/siteMetadata";
import { ContactItem } from "./contact-item/ContactItem";
import styles from "./contact.module.scss";
import Github from "public/assets/github.svg";
import Twitter from "public/assets/twitter.svg";
import Linkedin from "public/assets/linkedin.svg";
import Facebook from "public/assets/facebook.svg";

export const Contact = () => {
  return (
    <div className={styles.container} id="contact">
      <Caption
        title1={"Contact"}
        title2={"Me"}
        className={styles.titleContainer}
      />
      <div className={styles.wrapper}>
        <ContactItem href={siteMetadata.github} src={Github} title={"Github"} />
        <ContactItem
          href={siteMetadata.twitter}
          src={Twitter}
          title={"Twitter"}
        />
        <ContactItem
          href={siteMetadata.linkedin}
          src={Linkedin}
          title={"Linkedin"}
        />
        <ContactItem
          href={siteMetadata.facebook}
          src={Facebook}
          title={"Facebook"}
        />
      </div>
    </div>
  );
};
