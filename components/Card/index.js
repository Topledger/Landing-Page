import cx from "classnames";

import styles from "./index.module.scss";

const Card = ({
  children,
  extraContent = {},
  className,
  contentClassName,
  ...props
}) => {
  const { bottom, bottomClassName, bottomStyle } = extraContent;
  return (
    <div className={cx(styles.card, className)} {...props}>
      {bottom && (
        <div className={cx(styles.bottom, bottomClassName)} style={bottomStyle}>
          {bottom}
        </div>
      )}
      <div className={cx(styles.cardContent, contentClassName)}>{children}</div>
    </div>
  );
};

export default Card;
