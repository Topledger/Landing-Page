import cx from "classnames";

import styles from "./index.module.scss";

const UnderlinedText = ({ className, ...props }) => {
  return (
    <span {...props} className={cx(className, styles.underlinedText)}></span>
  );
};

export default UnderlinedText;
