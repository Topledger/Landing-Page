import { useState } from "react";
import cx from "classnames";
import SearchInput from "@/components/SearchInput";
import DashboardList from "../DashboardList";
import Introduction from "../Introduction";

import styles from "./index.module.scss";

function SearchDashboards() {
  const [searchActive, setSearchActive] = useState(false);

  const handleSearchStateChange = (state) => {
    if (state.focused) {
      setSearchActive(true);
    }
    if (!state.focused) {
      setSearchActive(false);
    }
  };

  return (
    <div className={styles.searchDashboards}>
      <Introduction
        className={cx(styles.introduction, { hidden: searchActive })}
      />
      {searchActive && (
        <div className={styles.text}>End-to-end blockchain analytics</div>
      )}
      <SearchInput
        className={styles.search}
        onStateChange={handleSearchStateChange}
      />
      {searchActive && <DashboardList />}
    </div>
  );
}

export default SearchDashboards;
