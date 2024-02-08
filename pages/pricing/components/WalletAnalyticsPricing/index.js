import { getAction } from "@/components/ArticleCard/ArticleFooter";

import styles from "./index.module.scss";

const WalletAnalyticsPricing = ({ walletAnalyticsPricing = {} }) => {
  return (
    <div className={styles.walletAnalyticsPricing}>
      <div className={styles.walletAnalyticsPricingMedia}>
        <img src={walletAnalyticsPricing.media?.src} alt="Pricing media" />

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
