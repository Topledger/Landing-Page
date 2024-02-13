import cx from "classnames";

import SvgIcon from "@/components/SvgIcon";
import { getAction } from "@/components/ArticleCard/ArticleFooter";

import styles from "./index.module.scss";

// const pricing = {
//   media: {
//     type: "image",
//     src: "/assets/images/pricing/basic.svg",
//     backgroundColor: "#F1F5FF",
//   },
//   name: "Basic",
//   price: "750",
//   currency: "$",
//   period: "per month",
//   features: [
//     "Access to all decoded program tables",
//     "CSV exports",
//     "SQL to API",
//     "Basic support",
//   ],
//   cta: [
//     {
//       type: "link",
//       text: "Start with Basic",
//       target: "_blank",
//       href: "https://docs.topledger.xyz",
//     },
//   ],
// },

const Pricing = ({ pricing = {}, isSelected, onClick }) => {
  return (
    <div
      className={cx(styles.pricing, { [styles.selectedPricing]: isSelected })}
      onClick={onClick}
    >
      <div className={styles.pricingMedia}>
        <img src={pricing.media?.src} alt="Pricing media" />
        <div className={styles.pricingName}>{pricing.name}</div>
      </div>
      <div className={styles.pricingContent}>
        <div className={styles.pricingPrice}>
          <div className={styles.pricingCurrency}>{pricing.currency}</div>
          {pricing.price}
          <div className={styles.pricingPeriod}>{pricing.period}</div>
        </div>
        <ul className={styles.pricingFeatures}>
          {pricing.features?.map((feature) => (
            <li key={feature} className={styles.pricingFeature}>
              <SvgIcon
                name="diamond-bullet"
                color="#8692AD"
                height={16}
                width={16}
              />{" "}
              {feature}
            </li>
          ))}
        </ul>
        <div className={styles.pricingCta}>
          {pricing.cta?.map((cta) => getAction({ ...cta, isSelected }))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
