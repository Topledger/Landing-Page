import cx from "classnames";

import styles from "./index.module.scss";

const Chip = ({ children, className, color, style, ...props }) => {
  return (
    <span
      className={cx(styles.chip, className)}
      style={{
        ...style,
        color: color,
        backgroundColor: color + "20",
      }}
      {...props}
    >
      {children}
    </span>
  );
};

export default Chip;
