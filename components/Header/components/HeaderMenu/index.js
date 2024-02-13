import { useEffect, useRef, useState } from "react";
import cx from "classnames";

import Icon from "components/Icon";

import styles from "./index.module.scss";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

// const menuItem = {
//   icon: "analytics",
//   title: "SQL based analytics platform",
//   description: "Create comprehensive dashboards with deeper analysis",
//   href: "https://topledger.xyz/landing",
// }
// <Button.Link tertiary href={menuItem.href}>
//                   {menuItem.title}
//                 </Button.Link>

const MenuItem = ({ icon, title, description, href, target, comingSoon }) => {
  return (
    <Link href={comingSoon ? "" : href}>
      <a className={styles.headerMenuItem} target={target}>
        <Image
          className={styles.headerMenuItemIcon}
          src={`/assets/images/header/menu-item-${icon}.svg`}
          width={64}
          height={64}
          alt={icon}
        />
        <div className={styles.headerMenuItemContent}>
          <span
            className={styles.menuItemTitle}
            // href={href}
            style={{ padding: 0 }}
          >
            {title}{" "}
            {comingSoon && (
              <span className={styles.comingSoon}>Coming soon</span>
            )}
          </span>
          <p className={styles.headerMenuItemDescription}>{description}</p>
        </div>
      </a>
    </Link>
  );
};

const HeaderMenu = ({ children, menuItems }) => {
  const containerRef = useRef();
  const [isOpen, setIsOpen] = useState();

  useEffect(() => {
    if (isOpen) {
      const handleClick = (e) => {
        if (containerRef.current && !containerRef.current.contains(e.target)) {
          setIsOpen(false);
        }
      };
      document.addEventListener("click", handleClick);
      return () => document.removeEventListener("click", handleClick);
    }
  }, [isOpen]);

  return (
    <>
      <span
        className={cx(styles.headerLink, { [styles.headerLinkOpen]: isOpen })}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        ref={containerRef}
      >
        <span>
          {children}{" "}
          <Icon
            className={cx(styles.chevron, "chevron-icon")}
            // style={{ transform: `rotate(${isOpen ? -180 : 0}deg)` }}
            name="chevron"
          />
        </span>
        <div className={cx(styles.headerMenu, "header-menu")}>
          <ul className={styles.headerMenuItems}>
            {menuItems.map((menuItem) => (
              <li key={menuItem.id}>
                <MenuItem {...menuItem} />
              </li>
            ))}
          </ul>
        </div>
      </span>
    </>
  );
};

export default HeaderMenu;
