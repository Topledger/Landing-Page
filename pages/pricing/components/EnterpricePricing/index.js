import SvgIcon from "@/components/SvgIcon";

import styles from "./index.module.scss";
import { getAction } from "@/components/ArticleCard/ArticleFooter";

// const enterpricePricingPlan = {
//   media: {
//     type: "image",
//     src: "/assets/images/pricing/enterprise.svg",
//     backgroundColor: "#F1F5FF",
//   },
//   name: "Enterprise plan",
//   description:
//     "A complete solution designed to integrate analytics across all areas of your organization",
//   cta: {
//     type: "button",
//     primary: true,
//     text: "Contact sales",
//     target: "_blank",
//     href: "https://docs.topledger.io",
//   },
//   featureTitle: "Tailored for institutional demands :",
//   features: [
//     "Decoded data on your private cloud",
//     "Dedicated analyst & data engineer",
//     "Priority data decoding & indexing",
//     "Custom APIs",
//     "All Pro plan benefits",
//   ],
// };

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
