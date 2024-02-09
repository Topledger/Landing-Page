import Section from "@/components/Section";
import FeatureList from "../FeatureList";

import styles from "./index.module.scss";

const FeaturesSection = ({ features }) => {
  return (
    <Section containerClassName={styles.featuresSection}>
      {features?.map((feature, index) => (
        <FeatureList key={index} features={feature} />
      ))}
    </Section>
  );
};

export default FeaturesSection;
