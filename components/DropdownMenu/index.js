import Dropdown from "../Dropdown";

import styles from "./index.module.scss";

const DropdownMenu = ({ children, menuOptions }) => {
  return (
    <Dropdown
      content={(close) => (
        <ul className={styles.menuContainer}>
          {menuOptions.map((option) => (
            <li
              key={option.id}
              onClick={option.onClick}
              className={styles.menuItem}
            >
              {option.content}
            </li>
          ))}
        </ul>
      )}
    >
      {children}
    </Dropdown>
  );
};

export default DropdownMenu;
