import SvgIcon from "../SvgIcon";

import styles from "./index.module.scss";

const List = ({ items = [] }) => {
  return (
    <ul className={styles.list}>
      {items.map((item, index) => (
        <li key={item.key ?? index}>
          <SvgIcon
            className={styles.listItemIcon}
            name="diamond-bullet"
            color="#8692AD"
            height={16}
            width={16}
          />{" "}
          {item}
        </li>
      ))}
    </ul>
  );
};

export default List;
