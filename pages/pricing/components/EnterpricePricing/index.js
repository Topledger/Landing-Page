import SvgIcon from "@/components/SvgIcon";

import styles from "./index.module.scss";
import { getAction } from "@/components/ArticleCard/ArticleFooter";

const EnterpricePricing = ({ enterpricePricingPlan = {} }) => {
  return (
    <div className={styles.enterpricePricing}>
      <div className={styles.enterpricePricingMedia}>
        <img src={enterpricePricingPlan.media?.src} alt="Pricing media" />

        <div className={styles.enterpricePricingName}>
          {enterpricePricingPlan.name}
        </div>
        <div className={styles.enterpricePricingDescription}>
          {enterpricePricingPlan.description}
        </div>
        {enterpricePricingPlan.cta && (
          <div className={styles.enterpricePricingCta}>
            {getAction(enterpricePricingPlan.cta)}
          </div>
        )}
      </div>
      <div className={styles.enterpricePricingContent}>
        <div className={styles.enterpricePricingFeatures}>
          <div className={styles.enterpricePricingFeatureTitle}>
            {enterpricePricingPlan.featureTitle}
          </div>
          <ul className={styles.enterpricePricingFeatureList}>
            {enterpricePricingPlan.features?.map((feature) => (
              <li key={feature} className={styles.enterpricePricingFeature}>
                <SvgIcon
                  name="diamond-bullet"
                  color="#8692AD"
                  height={16}
                  width={16}
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EnterpricePricing;
