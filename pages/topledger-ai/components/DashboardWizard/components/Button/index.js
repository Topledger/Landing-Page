import cx from "classnames";

import styles from "./index.module.scss";

const Button = (props) => {
  return <button {...props} className={cx(props.className, styles.button)} />;
};

export default Button;
