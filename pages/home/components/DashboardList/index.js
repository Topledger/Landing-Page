import React, { forwardRef } from "react";
import cx from "classnames";

import styles from "./index.module.scss";
import RightArrow from "@/components/SvgComponents/RightArrow";
import { useRouter } from "next/router";
import EmptyStates from "@/components/SvgComponents/EmptyStates";

function Program({ thumb, name, icon, onClick }) {
  return (
    <span className={cx("program", { thumb })} onClick={onClick}>
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
            onClick={() => handleClick(program)}
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
    id: "metaplex-1",
    name: "Metaplex",
    icon: "/assets/images/program-icons/metaplex.svg",
  },
  {
    id: "raydium-1",
    name: "Raydium",
    icon: "/assets/images/program-icons/raydium.svg",
  },
  {
    id: "serum-1",
    name: "Serum",
    icon: "/assets/images/program-icons/serum.svg",
  },
];

const DashboardList = forwardRef(({ filterText, style, className }, ref) => {
  const filteredPrograms = programs.filter((p) =>
    RegExp(filterText, "i").test(p.name)
  );

  return (
    <div
      className={cx(styles.dashboardListContainer, className)}
      ref={ref}
      style={style}
    >
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
          {filteredPrograms.length > 0 ? (
            <PopularPrograms programs={filteredPrograms} />
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <EmptyStates />
              <span
                style={{
                  display: "inline-block",
                  marginTop: "-2rem",
                  paddingBottom: "2rem",
                }}
              >
                No results found
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
});

export default DashboardList;
