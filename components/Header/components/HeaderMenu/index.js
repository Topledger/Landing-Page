import { useState } from "react";

import Icon from "components/Icon";

import styles from "./index.module.scss";

const HeaderMenu = ({ children, menuItems }) => {
  const [isOpen, setIsOpen] = useState();

  return (
    <>
      <span
        className={styles.headerLink}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        {children}{" "}
        <Icon
          className={styles.chevron}
          style={{ transform: `rotate(${isOpen ? -180 : 0}deg)` }}
          name="chevron"
        />
      </span>
      {isOpen && (
        <div className={styles.headerMenu}>
          <ul>
            {menuItems.map((menuItem) => (
              <li key={menuItem.id}>
                <a href={menuItem.href}>{menuItem.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default HeaderMenu;
