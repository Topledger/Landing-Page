import Button from "../Button";
import Section from "../Section";

import styles from "./index.module.scss";

const AppFooter = () => {
    return (
        <Section
            id="app-footer"
            style={{ backgroundColor: "transparent" }}
            className={styles.appFooter}
            containerClassName={styles.appFooterContainer}
            component="footer"
        >
            <div className={styles.container}>
                <div className={styles.copyContainer}>
                    <Button.Link
                        tertiary
                        color="#B8C0CC"
                        className={styles.copyLink}
                    >
                        © 2025, Top Ledger, All rights reserved
                    </Button.Link>
                    <span style={{ display: "inline-flex", gap: "2rem" }}>
                        <Button.Link
                            tertiary
                            color="#B8C0CC"
                            className={styles.copyLink}
                            href="/tnc"
                        >
                            Terms of Use
                        </Button.Link>
                        <Button.Link
                            tertiary
                            color="#B8C0CC"
                            className={styles.copyLink}
                            href="/privacy-policy"
                        >
                            Privacy Policy
                        </Button.Link>
                    </span>
                </div>
            </div>
        </Section>
    );
};
export default AppFooter;
