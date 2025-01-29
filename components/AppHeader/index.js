import cx from "classnames";
import Image from "next/image";

import Button from "../Button";

import styles from "./index.module.scss";

const AppHeader = ({ className, pageType = "normal" }) => {
    return (
        <header
            className={cx(styles.appHeader, className, `page-type-${pageType}`)}
        >
            <span className={cx(styles.headerWrapper, `page-type-${pageType}`)}>
                <Button.Link className={styles.logoContainer} href="/" tertiary>
                    <Image
                        src={"/assets/images/topledger-logo-dark.svg"}
                        width={144}
                        height={50}
                        alt="Top Ledger logo"
                    />
                </Button.Link>
            </span>
        </header>
    );
};

export default AppHeader;
