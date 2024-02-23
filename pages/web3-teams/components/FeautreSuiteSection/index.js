import Section from "@/components/Section";
import UnderlinedText from "@/components/UnderlinedText";

import styles from "./index.module.scss";
import { getAction } from "@/components/ArticleCard/ArticleFooter";
import { getId } from "helpers/utils";

// const feature = {
//   media: {
//     type: "image",
//     src: "/assets/images/feature-suite/private-db.svg",
//   },
//   title: "Connect private DB",
//   description:
//     "Securely connect your private data source to the Top Ledger platform and collate it with decoded on-chain Solana data",
//   cta: [
//     {
//       type: "link",
//       text: "Supported DBs",
//       target: "_blank",
//       href: "https://docs.topledger.xyz",
//     },
//   ],
// }

const FeatureList = ({ features = [] }) => {
  return (
    <div className={styles.featureList}>
      {features.map((feature, index) => (
        <div key={index} className={styles.featureListItem}>
          <div className={styles.featureListItemMedia}>
            <img src={feature.media.src} alt="Feature media" />
          </div>
          <div className={styles.featureListItemContent}>
            <div className={styles.featureListItemTitle}>{feature.title}</div>
            <div className={styles.featureListItemDescription}>
              {feature.description}
            </div>
            <div className={styles.featureListItemCta}>
              {feature.cta?.map(getAction)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const FeatureSuiteSection = ({ features = [] }) => {
  return (
    <Section
      className={styles.featuresSection}
      id={getId("Suite of features to build a connected analytics experience")}
    >
      <h2 className={styles.featuresSectionTitle}>
        Suite of features to build a <UnderlinedText>connected</UnderlinedText>{" "}
        analytics experience
      </h2>
      <div className={styles.featuresSectionSubtitle}>
        We add new features with one sole aim: to fuel decision-making and
        skyrocket productivity
      </div>
      <div className={styles.featuresSectionContent}>
        <FeatureList features={features} />
      </div>
    </Section>
  );
};

export default FeatureSuiteSection;
