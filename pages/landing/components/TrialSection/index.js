import Section from "@/components/Section";
import Button from "@/components/Button";

import styles from "./index.module.scss";

const TrialSection = () => {
  return (
    <Section
      style={{
        height: "422px",
        backgroundSize: "contain",
        borderTop: "1px solid #E8E9FA",
      }}
      className={styles.trialSection}
      containerStyle={{}}
      background="/assets/images/landing/bars-background.svg"
    >
      <div className={styles.trialContainer}>
        <div className={styles.trialContent}>
          <h2 className={styles.trialTitle}>
            Don&apos;t just take our word for it
          </h2>
          <p className={styles.trialDescription}>Experience it now</p>
          <div className={styles.trialButtonContainer}>
            <Button className={styles.trialButton} primary color="#4A7DFF">
              Start a free trial
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TrialSection;
