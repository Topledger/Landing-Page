import Section from "@/components/Section";

import styles from "./index.module.scss";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { getAction } from "@/components/ArticleCard/ArticleFooter";
import Image from "next/image";

const Outcome = ({ image, title, description, action }) => {
  return (
    <Card contentClassName={styles.outcome}>
      <div className={styles.outcomeImage}>
        <Image
          src={image}
          alt={title}
          width={272}
          height={172}
          layout="responsive"
        />
      </div>
      <div className={styles.outcomeContent}>
        <h3 className={styles.outcomeTitle}>{title}</h3>
        <p className={styles.outcomeDescription}>{description}</p>
        <div className={styles.outcomeAction}>{getAction(action)}</div>
      </div>
    </Card>
  );
};

const OutcomesSection = ({ outcomes = [] }) => {
  return (
    <Section
      background="/assets/images/landing/block-chain-hero-80.jpg"
      style={{
        backgroundSize: "400%",
        backgroundPosition: "center center",
      }}
      containerStyle={{ paddingTop: "120px", paddingBottom: "105px" }}
    >
      <div className={styles.sectionHead}>
        <h2 className={styles.sectionTitle}>Drive better business outcomes</h2>
        <p className={styles.sectionDescription}>
          <strong>Access</strong>, <strong>Visualize</strong> and{" "}
          <strong>Analyze</strong> while our infrastructure continuously
          extracts, labels, indexes, and decodes raw data from the Solana
          blockchain into various tables
        </p>
      </div>
      <div className={styles.sectionBody}>
        <div className={styles.outcomeContainer}>
          {outcomes?.map((outcome) => (
            <Outcome {...outcome} key={outcome.id} />
          ))}
        </div>
      </div>
    </Section>
  );
};
export default OutcomesSection;
