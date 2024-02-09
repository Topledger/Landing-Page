import cx from "classnames";

import styles from "./index.module.scss";

const Section = ({
  background,
  style,
  containerStyle,
  children,
  className,
  containerClassName,
  component: Component = "section",
  ...props
}) => (
  <Component
    {...props}
    className={cx(styles.section, className)}
    style={{ ...style, backgroundImage: `url(${background})` }}
  >
    <div
      className={cx(styles.container, containerClassName)}
      style={containerStyle}
    >
      {children}
    </div>
  </Component>
);

export default Section;
