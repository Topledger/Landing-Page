import cx from "classnames";

import styles from "./index.module.scss";

function Loader() {
  return (
    <div className={cx(styles.div, "tl-dashboard-loader")}>
      <span className={styles.span}></span>
      <span className={styles.span}></span>
      <span className={styles.span}></span>
      <span className={styles.span}></span>
      <span className={styles.span}></span>
      <span className={styles.span}></span>
      <span className={styles.span}></span>
      <span className={styles.span}></span>
    </div>
  );
}

export default Loader;
