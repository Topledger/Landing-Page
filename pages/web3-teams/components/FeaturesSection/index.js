import Section from "@/components/Section";
import FeatureList from "../FeatureList";

import styles from "./index.module.scss";
import { getId } from "helpers/utils";

const FeaturesSection = ({ features }) => {
  return (
    <Section
      containerClassName={styles.featuresSection}
      id={getId("feature-list")}
    >
      {features?.map((feature, index) => (
        <FeatureList key={index} features={feature} />
      ))}
    </Section>
  );
};

export default FeaturesSection;
