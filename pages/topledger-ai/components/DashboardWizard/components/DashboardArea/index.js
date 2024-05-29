import cx from "classnames";

import TopLedgerEmbed from "@/components/TopledgerEmbed";

import styles from "./index.module.scss";

const DashboardArea = ({ isLoading, embedUrl, embedRef }) => {
  return (
    <div className={cx(styles.dashboardArea, { [styles.loading]: isLoading })}>
      <TopLedgerEmbed embedUrl={embedUrl} ref={embedRef} />
    </div>
  );
};

export default DashboardArea;
