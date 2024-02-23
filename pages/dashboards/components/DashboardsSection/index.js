import Section from "@/components/Section";

import styles from "./index.module.scss";
import DashboardList from "pages/web3-teams/components/DashboardList";
import { getId } from "helpers/utils";

const DashboardsSection = ({ dashboards = [] }) => {
  return (
    <Section id={getId("Dashboards")} className={styles.dashboardsSection}>
      <h2 className={styles.dashboardsSectionTitle}>Dashboards</h2>
      <div className={styles.dashboardsSectionSubtitle}>
        Review the public dashboards to see the main metrics tracked by top
        Solana projects
      </div>
      <div className={styles.dashboardsSectionContent}>
        <DashboardList dashboards={dashboards} viewMoreLink="" />
      </div>
    </Section>
  );
};

export default DashboardsSection;
