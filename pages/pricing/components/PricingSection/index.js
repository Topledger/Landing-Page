import cx from "classnames";

import Section from "@/components/Section";
import UnderlinedText from "@/components/UnderlinedText";

import styles from "./index.module.scss";
import Pricing from "../Pricing";
import { useState } from "react";
import EnterpricePricing from "../EnterpricePricing";
import WalletAnalyticsPricing from "../WalletAnalyticsPricing";

const PricingSection = ({
  pricing = [],
  enterpricePricingPlan = {},
  walletAnalyticsPricing = {},
}) => {
  const [selectedPricing, setSelectedPricing] = useState(1);
  return (
    <Section className={styles.pricingSection}>
      <h2 className={styles.pricingSectionTitle}>
        Build a <UnderlinedText>strong data culture</UnderlinedText> in your
        organization
      </h2>
      <div className={styles.pricingSectionSubtitle}>
        Gain access to reliable data through a range of products designed to
        support your custom analytics workflow
      </div>
      <div className={styles.pricingSectionContent}>
        <div className={styles.pricingContainer}>
          {pricing.map((pricing, index) => (
            <div className={styles.pricingItem} key={pricing.name}>
              <Pricing
                pricing={pricing}
                // onClick={() => setSelectedPricing(index)}
                isSelected={selectedPricing === index}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={cx(styles.pricingSectionContent, styles.customPricing)}>
        <div className={styles.enterpricePlan}>
          <EnterpricePricing enterpricePricingPlan={enterpricePricingPlan} />
        </div>
        <div className={styles.walletAnalyticsPlan}>
          <WalletAnalyticsPricing
            walletAnalyticsPricing={walletAnalyticsPricing}
          />
        </div>
      </div>
    </Section>
  );
};

export default PricingSection;
