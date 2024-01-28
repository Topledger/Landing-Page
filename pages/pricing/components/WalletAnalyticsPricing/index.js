import { getAction } from "@/components/ArticleCard/ArticleFooter";

import styles from "./index.module.scss";

// const walletAnalyticsPricing = {
//   media: {
//     type: "image",
//     src: "/assets/images/pricing/wallet-analytics.svg",
//     backgroundColor: "#F1E0FF",
//   },
//   title: "Wallet analytics at scale",
//   description:
//     "Analyze your thousands of users across multiple Solana ecosystems in a no-code way.",
//   price: "1000",
//   currency: "$",
//   period: "per month",
//   cta: {
//     type: "button",
//     secondary: true,
//     text: "Start with Plus",
//     target: "_blank",
//     href: "https://docs.topledger.io",
//   },
//   isNew: true,
// };

const WalletAnalyticsPricing = ({ walletAnalyticsPricing = {} }) => {
  return (
    <div className={styles.walletAnalyticsPricing}>
      <div className={styles.walletAnalyticsPricingMedia}>
        <img src={walletAnalyticsPricing.media.src} alt="Pricing media" />

        <div className={styles.walletAnalyticsPricingTitle}>
          {walletAnalyticsPricing.title}
        </div>
        <div className={styles.walletAnalyticsPricingDescription}>
          {walletAnalyticsPricing.description}
        </div>
      </div>
      <div className={styles.walletAnalyticsPricingContent}>
        <div className={styles.walletAnalyticsPricingPrice}>
          <div className={styles.walletAnalyticsPricingCurrency}>
            {walletAnalyticsPricing.currency}
          </div>
          {walletAnalyticsPricing.price}
          <div className={styles.walletAnalyticsPricingPeriod}>
            {walletAnalyticsPricing.period}
          </div>
        </div>
        <div className={styles.walletAnalyticsPricingCta}>
          {getAction(walletAnalyticsPricing.cta)}
        </div>
      </div>
    </div>
  );
};

export default WalletAnalyticsPricing;
