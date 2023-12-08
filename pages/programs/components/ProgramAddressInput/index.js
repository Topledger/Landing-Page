import { useEffect, useMemo, useRef, useState } from "react";
import cx from "classnames";
import { useRouter } from "next/router";
import { usePopper } from "react-popper";
import { Transition } from "react-transition-group";

import SearchInput from "@/components/SearchInput";
import DashboardList, { Arrow } from "pages/home/components/DashboardList";

import Portal from "@/components/Portal";
import { PARAMETER_NAMES } from "constants/constants";
import { useSearchObject } from "helpers/utils";

import searchStyles from "../../../home/components/SearchDashboards/index.module.scss";
import styles from "./ProgramAddressInput.module.scss";

function ProgramAdressInput({ isDashboard, parameterName, onApply, programs }) {
  const [filterText, setFilterText] = useState("");
  const [portalContainer, setPortalContainer] = useState();
  const searchRef = useRef();
  const router = useRouter();
  const query = useSearchObject();
  const suggestionListRef = useRef();
  const { [`p_${parameterName}`]: address } = query;
  console.log("address", address, query);
  const { styles: popperStyles } = usePopper(
    searchRef.current,
    suggestionListRef.current
  );

  const handleInputChange = (e) => {
    setFilterText(e.target.value);
  };

  const handleArrowClick = (value) => {
    if (filterText) {
      const queryParams = new URLSearchParams(location.search);
      PARAMETER_NAMES.forEach((name) => queryParams.delete(`p_${name}`));
      queryParams.set(`p_${parameterName}`, value ?? filterText);
      const newURL = new URL(location.href);
      newURL.search = queryParams.toString();
      // router.push(newURL.href);
      window.location.href = newURL.href;
      // onApply(value ?? filterText)
    }
  };

  useEffect(() => {
    if (!address) {
      const queryParams = new URLSearchParams(location.search);
      PARAMETER_NAMES.forEach((name) => queryParams.delete(`p_${name}`));
      queryParams.set(
        `p_${parameterName}`,
        "JUP4Fb2cqiRUcaTHdrPC8h2gNsA2ETXiPDD33WcGuJB"
      );
      const newURL = new URL(location.href);
      newURL.search = queryParams.toString();
      // router.push(newURL.href);
      window.location.href = newURL.href;
    }
  }, []);

  useEffect(() => {
    if (parameterName) {
      const queryParams = new URLSearchParams(location.search);
      const currentParamName = PARAMETER_NAMES.find((name) =>
        queryParams.has(`p_${name}`)
      );
      if (currentParamName) {
        const address = queryParams.get(`p_${currentParamName}`);
        queryParams.delete(`p_${currentParamName}`);
        queryParams.set(`p_${parameterName}`, address);

        const newURL = new URL(location.href);
        newURL.search = queryParams.toString();
        router.push(newURL.href);
      }
    }
  }, [parameterName]);

  const handleSelect = (program) => {
    if (program.id) {
      setFilterText(program.id);
      handleArrowClick(program.id);
    }
  };

  useEffect(() => {
    setPortalContainer(document?.body);
  }, []);

  const programList = useMemo(() => {
    return Object.values(programs ?? {}).map(({ program, program_name }) => ({
      id: program,
      name: program_name,
    }));
  }, [programs]);

  const filteredPrograms = useMemo(() => {
    const regex = RegExp(
      filterText?.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"),
      "i"
    );
    return programList.filter((p) => regex.test(p.name) || regex.test(p.id));
  }, [filterText]);

  return (
    <>
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
            placeholder="Enter a Program or Token Address"
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
      <Portal container={portalContainer}>
        <Transition
          in={
            filterText && filterText !== address && filteredPrograms?.length > 0
          }
          nodeRef={suggestionListRef}
          timeout={1000}
        >
          {(state) => (
            <DashboardList
              ref={suggestionListRef}
              style={{
                ...popperStyles.popper,
                ...transitionStyles[state],
              }}
              onSelect={handleSelect}
              programList={filteredPrograms}
              filterText={filterText}
            />
          )}
        </Transition>
      </Portal>
    </>
  );
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

export default ProgramAdressInput;
