import { useRef, useState } from "react";
import { useRouter } from "next/router";
import cx from "classnames";

import SearchInput from "@/components/SearchInput";
import { Arrow } from "pages/home/components/DashboardList";

import searchStyles from "../../../home/components/SearchDashboards/index.module.scss";
import styles from "./ProgramAddressInput.module.scss";

function ProgramAdressInput({ isDashboard, onApply }) {
  const [filterText, setFilterText] = useState("");
  const searchRef = useRef();
  const router = useRouter();

  const handleInputChange = (e) => {
    setFilterText(e.target.value);
  };

  const handleArrowClick = (value) => {
    if (filterText) {
      const queryParams = new URLSearchParams(location.search);
      queryParams.set("p_Program Address", value ?? filterText);
      const newURL = new URL(location.href);
      newURL.search = queryParams.toString();
      router.push(newURL.href);
      // onApply(value ?? filterText)
    }
  };

  return (
    <div className={styles.container}>
      <div className={cx(searchStyles.text, styles.title)}>
        End-to-end blockchain analytics
      </div>
      <span className={styles.searchContainer}>
        <SearchInput
          className={cx(searchStyles.search, styles.search, {
            dashboardInput: isDashboard,
          })}
          onStateChange={() => {}}
          onChange={handleInputChange}
          ref={searchRef}
          defaultFocused
          placeholder="Enter a program address"
          onEnter={handleArrowClick}
          value={filterText}
        />
        <Arrow
          focused
          onClick={() => handleArrowClick()}
          className={styles.arrow}
        />

      </span>
    </div>
  );
}

export default ProgramAdressInput;
