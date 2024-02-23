import Section from "@/components/Section";
import UnderlinedText from "@/components/UnderlinedText";
import DashboardList from "../DashboardList";

import styles from "./index.module.scss";
import { getId } from "helpers/utils";

const DashboardsSection = ({ dashboards }) => {
  return (
    <Section
      className={styles.dashboardsSection}
      id={getId("Learn from the metrics top projects monitor")}
    >
      <h2 className={styles.dashboardsSectionTitle}>
        Learn from the <UnderlinedText>metrics</UnderlinedText> top projects
        monitor
      </h2>
      <div className={styles.dashboardsSectionSubtitle}>
        Our clients have made their key metrics public for the broader Solana
        community to view and understand
      </div>
      <div className={styles.dashboardsSectionContent}>
        <DashboardList dashboards={dashboards} />
      </div>
    </Section>
  );
};

export default DashboardsSection;
