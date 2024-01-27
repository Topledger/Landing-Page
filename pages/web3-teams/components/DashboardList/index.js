import List from "../List";

import styles from "./index.module.scss";

const DashboardList = ({ dashboards }) => {
  return (
    <div className={styles.dashboardList}>
      <List items={dashboards} viewMoreLink="/dashboards" />
    </div>
  );
};

export default DashboardList;
