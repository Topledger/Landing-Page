import { isValidElement } from "react";
import SvgIcon from "../SvgIcon";

import styles from "./index.module.scss";

const defaultMarker = (
  <SvgIcon
    className={styles.listItemIcon}
    name="diamond-bullet"
    color="#8692AD"
    height={16}
    width={16}
  />
);

const dotMarker = <span style={{ display: "inline-block" }}>{"\u2022"}</span>;

const Marker = ({ type }) => {
  return (
    <span style={{ display: "inline-block", marginRight: "8px" }}>
      {type === "dot" && dotMarker}
      {typeof type === "number" && `${type}. `}
      {!type && defaultMarker}
    </span>
  );
};

const List = ({ items = [], gap }) => {
  return (
    <ul className={styles.list} style={{ gap }}>
      {items.map((item, index) => (
        <li key={item.key ?? index} style={{ flexDirection: "column" }}>
          <span style={{ display: "flex" }}>
            <Marker type={item?.marker} />
            <span style={{ display: "inline-block" }}>
              {item.title && (
                <>
                  <b>{item.title}</b>:{" "}
                </>
              )}
              {item?.text ??
                item?.definition ??
                (isValidElement(item) ? item : "")}
            </span>
          </span>
          {item.list && (
            <div style={{ paddingLeft: "32px" }}>
              <List {...item.list} items={item.list?.items ?? []} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default List;
