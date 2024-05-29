import cx from "classnames";

import styles from "./index.module.scss";

const AiContent = ({ background, children, className }) => {
  return (
    <div
      className={cx(className, styles.content)}
      style={{
        ...(background && {
          backgroundImage: `url(/assets/images/${background})`,
        }),
      }}
    >
      {children}
    </div>
  );
};

export default AiContent;
