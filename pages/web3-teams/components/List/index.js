import Image from "next/image";
import cx from "classnames";

import Button from "@/components/Button";

import styles from "./index.module.scss";
import { Arrow } from "pages/home/components/DashboardList";

const List = ({ items = [], viewMoreLink }) => {
  return (
    <ul className={styles.list}>
      {items.map((item, index) => (
        <li key={index} className={styles.listItemContainer}>
          <a
            key={index}
            href={item.href}
            target={item.target}
            className={styles.listItem}
          >
            <span className={styles.listItemIcon}>
              <Image src={item.icon} alt={item.name} width={32} height={32} />
            </span>
            <span className={styles.listItemName}>{item.name}</span>
            <Arrow
              className={cx(styles.listItemArrow, "dashboards-list-item-arrow")}
              text="View"
            />
          </a>
        </li>
      ))}
      {viewMoreLink && (
        <li
          className={styles.listItemContainer}
          key="view-more"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Button.Link
            className={styles.listItem}
            tertiary
            color="#374151"
            href={viewMoreLink}
            style={{ fontSize: "16px" }}
          >
            View More
          </Button.Link>
        </li>
      )}
    </ul>
  );
};

export default List;
