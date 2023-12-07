import { useEffect, useRef, useState } from "react";
import { Transition } from "react-transition-group";
import cx from "classnames";

import SearchInput from "@/components/SearchInput";
import DashboardList from "../DashboardList";
import Introduction from "../Introduction";

import styles from "./index.module.scss";
import { useRouter } from "next/router";

function SearchDashboards() {
  const [searchActive, setSearchActive] = useState(false);
  const [filterText, setFilterText] = useState("");
  const searchRef = useRef();
  const dashboardListRef = useRef();
  const router = useRouter();

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
        // onChange={handleInputChange}
        onClick={(e) => {
          e.preventDefault();

          router.push("/programs?p_Program+Address=JUP4Fb2cqiRUcaTHdrPC8h2gNsA2ETXiPDD33WcGuJB");
        }}
        ref={searchRef}
        placeholder="Program or Token"
      />
      <Transition in={searchActive} nodeRef={dashboardListRef}>
        {(state) => (
          <DashboardList
            filterText={filterText}
            ref={dashboardListRef}
            style={transitionStyles[state]}
          />
        )}
      </Transition>
    </div>
  );
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

export default SearchDashboards;
