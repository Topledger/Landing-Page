import { Children, useState } from "react";
import cx from "classnames";

import SvgIcon from "../SvgIcon";

import styles from "./index.module.scss";

const Carousel = ({ className, style, children, getKey }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % Children.count(children));
  };

  const prevSlide = () => {
    setCurrentSlide(
      (currentSlide - 1 + Children.count(children)) % Children.count(children)
    );
  };

  return (
    <div className={cx(styles.carousel, className)} style={style}>
      <button className={cx(styles.button, styles.prev)} onClick={prevSlide}>
        <SvgIcon name="chevron-left" className={styles.chevron} />
      </button>
      <div className={styles.carouselInner}>
        {Children.map(children, (child, index) => (
          <Carousel.Slide
            key={getKey ? getKey(child, index) : index}
            isActive={index === currentSlide}
          >
            {child}
          </Carousel.Slide>
        ))}
      </div>
      <button className={cx(styles.button, styles.next)} onClick={nextSlide}>
        <SvgIcon name="chevron-left" style={{ transform: "rotate(180deg)" }} />
      </button>
    </div>
  );
};

Carousel.Slide = ({ isActive, children, ...props }) => {
  return (
    <div className={cx(styles.slide, { [styles.active]: isActive })} {...props}>
      {children}
    </div>
  );
};

Carousel.Slide.displayName = "Carousel.Slide";

export default Carousel;
