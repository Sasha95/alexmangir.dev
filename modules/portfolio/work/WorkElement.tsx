import Image from "next/image";
import { Navigation } from "swiper";
import { Swiper, SwiperProps, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { forwardRef, ReactElement, Ref } from "react";
import styles from "./work-element.module.scss";
import classNames from "classnames";

type Props = {
  caption: string;
  items: { src: string; title: string; description?: ReactElement | string }[];
  showArrows?: boolean;
  className?: string;
} & SwiperProps;

const WorkElement = forwardRef<SwiperRef, Props>(
  ({ items, caption, showArrows = false, className, ...props }, ref) => (
    <div className={classNames(styles.container, className)}>
      <h3 className={styles.caption}>{caption}</h3>
      <Swiper
        direction={"horizontal"}
        spaceBetween={0}
        slidesPerView={1}
        navigation={showArrows ? true : undefined}
        modules={showArrows ? [Navigation] : undefined}
        ref={ref}
        className={styles.swiperContainer}
        {...props}
      >
        {items.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div key={index} className={styles.projectContainer}>
                <div className={styles.projImg}>
                  <Image alt={item.title} src={item.src} />
                </div>
                <div>
                  <p className={styles.title}>{item.title}</p>
                  {item.description && (
                    <p className={styles.description}>{item.description}</p>
                  )}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  )
);
WorkElement.displayName = "WorkElement";
export { WorkElement };
