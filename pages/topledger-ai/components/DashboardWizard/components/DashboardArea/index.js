import { TopLedgerEmbed } from "@/components/TopledgerEmbed";
import cx from 'classnames';
import styles from "./index.module.scss";

const DashboardArea = ({ isLoading, embedUrl }) => {
  return (
    <div className={cx(styles.dashboardArea, {[styles.loading]: isLoading})}>
      <TopLedgerEmbed embedUrl={embedUrl} />
    </div>
  );
};

export default DashboardArea;
