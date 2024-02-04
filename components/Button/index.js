import Link from "next/link";
import cx from "classnames";
import SvgIcon from "../SvgIcon";

import styles from "./index.module.scss";

const getBtnProps = (props) => ({
  ...props,
  className: cx(styles.button, props.className, {
    [styles.primary]: props.primary,
    [styles.secondary]: props.secondary,
    [styles.tertiary]: props.tertiary,
    [styles.disabled]: props.disabled,
  }),
});

const Button = ({ color, children, className, ...props }) => {
  const btnProps = getBtnProps({ ...props, className });

  const style = {
    ...btnProps?.style,
    ...(props.primary &&
      color && { backgroundColor: color, backgroundImage: "none" }),
    ...(props.tertiary && { color }),
    ...(props.secondary && {
      backgroundColor: "transparent",
      backgroundImage: "none",
      borderColor: color,
      color,
    }),
  };

  return (
    <button {...btnProps} style={style}>
      {children}
    </button>
  );
};

const Anchor = ({ children, ...props }) => <a {...props}>{children}</a>;

Button.Link = ({
  color,
  href,
  children,
  className,
  noArrow,
  arrowOnHover,
  ...props
}) => {
  const btnProps = getBtnProps({ ...props, className });
  const newWindowLink = props.target === "_blank";

  const style = {
    ...btnProps?.style,
    borderColor: color,
    color,
  };

  const Component = href ? Link : Anchor;

  const renderedChildren = (
    <>
      {children}
      {newWindowLink && !noArrow && (
        <SvgIcon
          className={cx(styles.newWindowIcon, {
            [styles.arrowOnHover]: arrowOnHover,
          })}
          name="out-arrow"
        />
      )}
    </>
  );

  const allProps = {
    ...btnProps,
    className: cx(btnProps.className, styles.link),
    style: style,
  };

  return (
    <Component {...allProps} href={href}>
      {Component === Link ? (
        <a {...allProps}>{renderedChildren}</a>
      ) : (
        renderedChildren
      )}
    </Component>
  );
};

Button.Link.displayName = "Button.Link";

export default Button;
