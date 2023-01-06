import { CardContainer } from "@/components/card-container/CardContainer";
import { Card } from "@/components/card/Card";
import Image from "next/image";
import styles from "./cards.module.scss";

import VSCode from "public/assets/vscode.svg";
import Typescript from "public/assets/ts.svg";
import Prettier from "public/assets/prettier.svg";
import Resume from "public/assets/resume.svg";
import About from "public/assets/about.svg";

const toolboxItems = [
  {
    alt: "vs code",
    src: VSCode,
  },
  {
    alt: "typescript",
    src: Typescript,
  },
  {
    alt: "prettier",
    src: Prettier,
  },
];

export const Cards = () => {
  return (
    <div className={styles.container}>
      <CardContainer
        className={styles.conclusionContainer}
        name="swiper-custom-pagination-cards"
        cards={[
          <Card title="TOOLBOX" key={0}>
            <div className={styles.toolboxContainer}>
              {toolboxItems.map((item, index) => (
                <Image
                  alt={item.alt}
                  src={item.src}
                  key={index}
                  className={styles.toolboxImg}
                />
              ))}
            </div>
            <p className={styles.text}>Here`s what I use daily</p>
          </Card>,
          <Card title="RESUME" key={1}>
            <Image alt="resume" src={Resume} className={styles.img} />
          </Card>,
          <Card title="ABOUT ME" key={3}>
            <Image alt="about me" src={About} className={styles.img} />
          </Card>,
        ]}
      />
    </div>
  );
};
