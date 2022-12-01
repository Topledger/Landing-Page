import React, { forwardRef } from "react";
import cx from "classnames";

import styles from "./index.module.scss";
import RightArrow from "@/components/SvgComponents/RightArrow";
import { useRouter } from "next/router";

function Program({ thumb, name, icon }) {
  return (
    <span className={cx("program", { thumb })}>
      {icon}
      <span>{name}</span>
    </span>
  );
}

function Arrow({ onClick }) {
  return (
    <button className={styles.rightArrow} onClick={onClick}>
      <span>Get insights</span> <RightArrow />
    </button>
  );
}

function PopularPrograms({ thumb, programs }) {
  const router = useRouter();

  const handleClick = (program) => {
    router.push(`/programs/${program.id}`);
  };

  return (
    <ul className={cx("program-list", { thumb })}>
      {programs.map((program) => (
        <li className={cx({ thumb })} key={program.id}>
          <Program
            thumb={thumb}
            {...program}
            icon={
              <img
                className={cx("program-icon", { small: !thumb })}
                src={program.icon}
              />
            }
          />
          {!thumb && <Arrow onClick={() => handleClick(program)} />}
        </li>
      ))}
    </ul>
  );
}

const programs = [
  {
    id: "metaplex",
    name: "Metaplex",
    icon: "/assets/images/program-icons/metaplex.svg",
  },
  {
    id: "raydium",
    name: "Raydium",
    icon: "/assets/images/program-icons/raydium.svg",
  },
  {
    id: "serum",
    name: "Serum",
    icon: "/assets/images/program-icons/serum.svg",
  },
  {
    id: "metaplex",
    name: "Metaplex",
    icon: "/assets/images/program-icons/metaplex.svg",
  },
  {
    id: "raydium",
    name: "Raydium",
    icon: "/assets/images/program-icons/raydium.svg",
  },
  {
    id: "serum",
    name: "Serum",
    icon: "/assets/images/program-icons/serum.svg",
  },
];

const DashboardList = forwardRef(({ filterText }, ref) => {
  return (
    <div className={styles.dashboardListContainer} ref={ref}>
      {!filterText && (
        <>
          <h2>Polular programs</h2>
          <PopularPrograms thumb programs={programs.slice(0, 3)} />
          <h2 style={{ marginTop: "1.5rem" }}>All programs</h2>
          <PopularPrograms programs={programs} />
        </>
      )}
      {filterText && (
        <>
          <h2>Search results</h2>
          <PopularPrograms
            programs={programs.filter((p) =>
              RegExp(filterText, "i").test(p.name)
            )}
          />
        </>
      )}
    </div>
  );
});

export default DashboardList;
