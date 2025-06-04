import Section from "@/components/Section";
import Button from "@/components/Button";

import styles from "./index.module.scss";
import QueryFormModal from "../QueryForm/QueryFormModal";
import { getId } from "helpers/utils";

const TrialSection = () => {
  return (
    <Section
      className={styles.trialSection}
      containerClassName={styles.trialSectionContainer}
      containerStyle={{}}
      background="/assets/images/landing/bars-background-1.svg"
      id={getId("Don't just take our word for it")}
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
              color="#085ED4"
              onClick={() => {
                window.open("https://calendly.com/nitin_topledger/30min", "_blank");
              }}
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TrialSection;
