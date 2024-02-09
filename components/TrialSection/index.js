import Section from "@/components/Section";
import Button from "@/components/Button";

import styles from "./index.module.scss";
import QueryFormModal from "../QueryForm/QueryFormModal";

const TrialSection = () => {
  return (
    <Section
      className={styles.trialSection}
      containerClassName={styles.trialSectionContainer}
      containerStyle={{}}
      background="/assets/images/landing/bars-background-1.svg"
    >
      <div className={styles.trialContainer}>
        <div className={styles.trialContent}>
          <h2 className={styles.trialTitle}>
            Don&apos;t just take our word for it
          </h2>
          <p className={styles.trialDescription}>Experience it now</p>
          <div className={styles.trialButtonContainer}>
            <Button
              className={styles.trialButton}
              primary
              color="#4A7DFF"
              onClick={() => QueryFormModal.show()}
            >
              Start a free trial
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TrialSection;
