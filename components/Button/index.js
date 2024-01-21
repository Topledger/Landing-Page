import cx from "classnames";

import styles from "./index.module.scss";

const getBtnProps = (props) => ({
  ...props,
  className: cx(styles.button, props.className, {
    [styles.primary]: props.primary,
    [styles.secondary]: props.secondary,
    [styles.tertiary]: props.tertiary,
  }),
});

const Button = ({ children, className, ...props }) => {
  const btnProps = getBtnProps({ ...props, className });

  return <button {...btnProps}>{children}</button>;
};

Button.Link = ({ children, className, ...props }) => {
  const btnProps = getBtnProps({ ...props, className });
  const newWindowLink = props.target === "_blank";
  return (
    <a {...btnProps} className={cx(btnProps.className, styles.link)}>
      {children}
      {newWindowLink && (
        <span className={styles.newWindowIcon} aria-hidden="true">
          ↗
        </span>
      )}
    </a>
  );
};

Button.Search = ({ children, className, ...props }) => {
  return (
    <div className={cx(styles.searchContainer)}>
      <input type="text" {...props} className={cx(styles.search)} />
      <Button primary>
        <span className={styles.searchIcon} aria-hidden="true">
          🔍
        </span>
      </Button>
    </div>
  );
};

export default Button;
