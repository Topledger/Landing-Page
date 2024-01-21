import cx from "classnames";

import styles from "./index.module.scss";

const HeroSection = ({ style, className, background, children }) => {
  return (
    <section
      className={cx(styles.heroSection, className)}
      style={{ ...style, backgroundImage: `url(${background})` }}
    >
      {children}
    </section>
  );
};

export default HeroSection;
