import { TopLedgerEmbed } from "@/components/TopledgerEmbed";
import styles from "./index.module.scss";

const DashboardArea = ({ embedUrl }) => {
  return (
    <div className={styles.dashboardArea}>
      <TopLedgerEmbed embedUrl={embedUrl} />
    </div>
  );
};

export default DashboardArea;
