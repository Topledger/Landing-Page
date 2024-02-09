import cx from "classnames";

import styles from "./index.module.scss";
import Section from "../Section";

const HeroSection = ({
  style,
  className,
  containerClassName,
  background,
  backgroundColor,
  children,
}) => {
  return (
    <Section
      className={cx(styles.heroSection, className)}
      containerClassName={cx(styles.heroSectionContainer, containerClassName)}
      background={background}
      style={{
        ...style,
        ...(backgroundColor && { backgroundColor }),
      }}
    >
      {children}
    </Section>
  );
};

export default HeroSection;
