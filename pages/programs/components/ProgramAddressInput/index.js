import { useRef, useState } from "react";
import cx from "classnames";

import SearchInput from "@/components/SearchInput";

import searchStyles from "../../../home/components/SearchDashboards/index.module.scss";
import styles from "./ProgramAddressInput.module.scss";
import { Arrow } from "pages/home/components/DashboardList";

function ProgramAdressInput({ isDashboard }) {
  const [filterText, setFilterText] = useState("");
  const searchRef = useRef();

  const handleInputChange = (e) => {
    setFilterText(e.target.value);
  };

  const handleArrowClick = (value) => {
    if (filterText) {
      const queryParams = new URLSearchParams(location.search);
      queryParams.set("p_Program Address", value ?? filterText);

      location.search = queryParams.toString();
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
        <Arrow focused onClick={() => handleArrowClick()} className={styles.arrow} />
      </span>
    </div>
  );
}

export default ProgramAdressInput;
