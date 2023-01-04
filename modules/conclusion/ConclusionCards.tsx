import { Card } from "@/components/card/Card";
import { CustomImage } from "@/components/custom-image/CustomImage";
import Image from "next/image";
import siteMetadata from "../../data/siteMetadata";
import styles from "./conclusion-cards.module.scss";
import VSCode from "../../public/assets/vscode.svg";
import TS from "../../public/assets/ts.svg";
import Prettier from "../../public/assets/prettier.svg";
import About from "../../public/assets/about.svg";
import Resume from "../../public/assets/resume.svg";

export const ConclusionCards = () => {
  const buffer = [];
  buffer.push(
    <Card title="TOOLBOX">
      <div className={styles.container}>
        <Image alt="vs code" src={VSCode} />
        <Image alt="typescript" src={TS} />
        <Image alt="prettier" src={Prettier} />
      </div>
      <p className={styles.text}>Here`s what I use daily</p>
    </Card>
  );
  buffer.push(
    <Card title="RESUME">
      <Image alt="resume" src={Resume} />
    </Card>
  );
  buffer.push(
    <Card title="ABOUT ME">
      <Image alt="about me" src={About} />
    </Card>
  );

  return buffer;
};
