import { useEffect, useRef, useState } from "react";
import cx from "classnames";
import SearchInput from "@/components/SearchInput";
import DashboardList from "../DashboardList";
import Introduction from "../Introduction";

import styles from "./index.module.scss";

function SearchDashboards() {
  const [searchActive, setSearchActive] = useState(false);
  const [filterText, setFilterText] = useState("");
  const searchRef = useRef();
  const dashboardListRef = useRef();

  const handleSearchStateChange = (state) => {
    if (state.focused) {
      setSearchActive(true);
    }
  };

  const handleInputChange = (e) => {
    setFilterText(e.target.value);
  };

  useEffect(() => {
    function checkParent(element, container) {
      if (!container || !element) return false;
      while (element) {
        if (element === container) {
          return true;
        }
        element = element.parentElement;
      }

      return false;
    }
    function listenClick(e) {
      const clickTarget = e.target;
      if (
        searchActive &&
        !checkParent(clickTarget, searchRef.current) &&
        !checkParent(clickTarget, dashboardListRef.current)
      ) {
        setSearchActive(false);
      }
    }
    function listenKeydown(e) {
      if (e.key === "Escape") {
        setSearchActive(false);
        e.target?.blur();
      }
    }
    if (searchActive) {
      window.addEventListener("mousedown", listenClick);
      window.addEventListener("keydown", listenKeydown);
    }

    return () => {
      window.removeEventListener("mousedown", listenClick);
      window.addEventListener("keydown", listenKeydown);
    };
  }, [searchActive]);

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
        onChange={handleInputChange}
        ref={searchRef}
      />
      {searchActive && (
        <DashboardList filterText={filterText} ref={dashboardListRef} />
      )}
    </div>
  );
}

export default SearchDashboards;
