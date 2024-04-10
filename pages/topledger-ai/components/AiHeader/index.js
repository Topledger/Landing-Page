import cx from "classnames";
import Image from "next/image";

import Button from "@/components/Button";

import styles from "./index.module.scss";

const AiHeader = ({ bottomBorder = true }) => {
  return (
    <header className={cx(styles.appHeader, { bottomBorder })}>
      <span className={styles.headerWrapper}>
        <Button.Link className={styles.logoContainer} href="/" tertiary>
          <Image
            src={"/assets/images/logo/topledger-full.svg"}
            width={144}
            height={32}
            alt="Top Ledger logo"
          />
        </Button.Link>
      </span>
    </header>
  );
};

export default AiHeader;
