import cx from "classnames";

import styles from "./index.module.scss";
import SvgIcon from "../SvgIcon";

const getBtnProps = (props) => ({
  ...props,
  className: cx(styles.button, props.className, {
    [styles.primary]: props.primary,
    [styles.secondary]: props.secondary,
    [styles.tertiary]: props.tertiary,
  }),
});

const Button = ({ color, children, className, ...props }) => {
  const btnProps = getBtnProps({ ...props, className });

  const style = {
    ...btnProps?.style,
    ...(props.primary && { backgroundColor: color, backgroundImage: "none" }),
  };

  return (
    <button {...btnProps} style={style}>
      {children}
    </button>
  );
};

Button.Link = ({ color, children, className, ...props }) => {
  const btnProps = getBtnProps({ ...props, className });
  const newWindowLink = props.target === "_blank";

  const style = {
    ...btnProps?.style,
    borderColor: color,
    color,
  };

  return (
    <a
      {...btnProps}
      className={cx(btnProps.className, styles.link)}
      style={style}
    >
      {children}
      {newWindowLink && (
        <SvgIcon className={styles.newWindowIcon} name="out-arrow" />
      )}
    </a>
  );
};

Button.Link.displayName = "Button.Link";

export default Button;
