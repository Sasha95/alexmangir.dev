import { CardContainer } from "@/components/card-container/CardContainer";
import { Card } from "@/components/card/Card";
import siteMetadata from "@/data/siteMetadata";
import { ToolboxItem } from "../toolbox-items/ToolboxItem";
import styles from "./cards.module.scss";

const toolboxItems = [
  {
    alt: "vs code",
    src: siteMetadata.vscode,
  },
  {
    alt: "typescript",
    src: siteMetadata.ts,
  },
  {
    alt: "prettier",
    src: siteMetadata.prettier,
  },
];

export const Cards = () => {
  return (
    <div className={styles.container}>
      <CardContainer
        name="swiper-custom-pagination-cards"
        cards={[
          <Card title="TOOLBOX" key={0}>
            <div className={styles.toolboxContainer}>
              {toolboxItems.map((item, index) => (
                <div key={index}>
                  <ToolboxItem
                    alt={item.alt}
                    src={item.src}
                    className={"relative"}
                  />
                </div>
              ))}
            </div>
            <p className={styles.text}>Here`s what I use daily</p>
          </Card>,
          <Card title="RESUME" key={1}>
            <ToolboxItem
              alt="resume"
              src={siteMetadata.resumeImg}
              className={styles.toolbox}
            />
          </Card>,
          <Card title="ABOUT ME" key={3}>
            <ToolboxItem
              alt="about me"
              src={siteMetadata.about}
              className={styles.toolbox}
            />
          </Card>,
        ]}
      />
    </div>
  );
};
