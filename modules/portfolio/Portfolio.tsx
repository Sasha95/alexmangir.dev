import { SwiperCards } from "@/components/swiper-cards/SwiperCards";
import { SwiperSlide } from "swiper/react";
import styles from "./portfolio.module.scss";
import { WorkItem } from "./work/WorkItem";
import { portfolio } from "@/data/portfolio";

export const Portfolio = () => {
  const cards = portfolio.map((item, index) => (
    <WorkItem
      key={index}
      companyName={item.companyName}
      companyDescription={item.companyDescription}
      companySrc={item.companySrc}
      projects={item.projects}
    />
  ));
  return (
    <>
      <h2 className={styles.container}>Work Experience</h2>
      <SwiperCards
        swiperName="swiper-custom-pagination-work"
        bulletClass="swiper-pagination-bullet-sm"
      >
        {cards.map((child, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            {child}
          </SwiperSlide>
        ))}
      </SwiperCards>
    </>
  );
};
