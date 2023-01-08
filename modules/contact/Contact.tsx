import { Caption } from "@/components/caption/Caption";
import siteMetadata from "@/data/siteMetadata";
import { ContactItem } from "./contact-item/ContactItem";
import styles from "./contact.module.scss";
import Github from "public/assets/github.svg";
import GithubDark from "public/assets/github-dark.svg";
import Twitter from "public/assets/twitter.svg";
import TwitterDark from "public/assets/twitter-dark.svg";
import Linkedin from "public/assets/linkedin.svg";
import LinkedinDark from "public/assets/linkedin-dark.svg";
import Facebook from "public/assets/facebook.svg";
import FacebookDark from "public/assets/facebook-dark.svg";

export const Contact = () => {
  return (
    <div className={styles.container} id="contact">
      <Caption
        title1={"Contact"}
        title2={"Me"}
        className={styles.titleContainer}
      />
      <div className={styles.wrapper}>
        <ContactItem
          href={siteMetadata.github}
          src={Github}
          srcDark={GithubDark}
          title={"Github"}
        />
        <ContactItem
          href={siteMetadata.twitter}
          src={Twitter}
          srcDark={TwitterDark}
          title={"Twitter"}
        />
        <ContactItem
          href={siteMetadata.linkedin}
          src={Linkedin}
          srcDark={LinkedinDark}
          title={"Linkedin"}
        />
        <ContactItem
          href={siteMetadata.facebook}
          src={Facebook}
          srcDark={FacebookDark}
          title={"Facebook"}
        />
      </div>
    </div>
  );
};
