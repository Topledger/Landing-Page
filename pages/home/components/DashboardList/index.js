import React from "react";
import cx from "classnames";

import styles from "./index.module.scss";
import RightArrow from "@/components/SvgComponents/RightArrow";

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
  return (
    <ul className={cx("program-list", { thumb })}>
      {programs.map(({ icon, ...program }) => (
        <li className={cx({ thumb })}>
          <Program
            thumb={thumb}
            icon={
              <img
                className={cx("program-icon", { small: !thumb })}
                src={icon}
              />
            }
            {...program}
          />
          {!thumb && <Arrow />}
        </li>
      ))}
    </ul>
  );
}

const programs = [
  { icon: "/assets/images/program-icons/metaplex.svg", name: "Metaplex" },
  { icon: "/assets/images/program-icons/raydium.svg", name: "Raydium" },
  { icon: "/assets/images/program-icons/serum.svg", name: "Serum" },
  { icon: "/assets/images/program-icons/metaplex.svg", name: "Metaplex" },
  { icon: "/assets/images/program-icons/raydium.svg", name: "Raydium" },
  { icon: "/assets/images/program-icons/serum.svg", name: "Serum" },
];

function DashboardList() {
  return (
    <div className={styles.dashboardListContainer}>
      <h2>Polular programs</h2>
      <PopularPrograms thumb programs={programs} />
      <h2 style={{ marginTop: "1.5rem" }}>All programs</h2>
      <PopularPrograms programs={programs} />
    </div>
  );
}

export default DashboardList;
