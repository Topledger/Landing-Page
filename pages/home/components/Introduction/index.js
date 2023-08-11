import cx from "classnames";
import SolanaLogo from "@/components/SolanaLogo";

import styles from "./index.module.scss";

function Introduction({ className }) {
  return (
    <div className={cx(className, styles.introduction)}>
      <div className={styles.line1}>End-to-end</div>
      <div className={styles.line2}>blockchain analytics</div>
      <div className={styles.line3}>
        Discover your users&aps; engagement on <SolanaLogo inline />
      </div>
    </div>
  );
}

export default Introduction;
