import List from "../List";

import styles from "./index.module.scss";

const DashboardList = ({
  dashboards = [],
  viewMoreLink = "/dashboard-list",
}) => {
  return (
    <div className={styles.dashboardList}>
      <List items={dashboards} viewMoreLink={viewMoreLink} />
    </div>
  );
};

export default DashboardList;
