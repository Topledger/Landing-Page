import cx from "classnames";

import styles from "./index.module.scss";
import Button from "../Button";
import Icon from "../Icon";

const Input = ({ className, ...props }) => {
  return <input className={cx(styles.input, className)} {...props} />;
};

Input.Search = ({
  className,
  inputClassName,
  btnClassName,
  children,
  style,
  ...props
}) => {
  return (
    <span style={style} className={cx(styles.searchInputContainer, className)}>
      <Input className={cx(styles.searchInput, inputClassName)} {...props} />
      <Button {...props} className={cx(styles.searchBtn, btnClassName)} primary>
        <Icon name="arrow-right" />
      </Button>
    </span>
  );
};

Input.Search.displayName = "Input.Search";

export default Input;
