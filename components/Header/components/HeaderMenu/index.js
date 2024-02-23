import { useCallback, useEffect, useRef, useState } from "react";
import cx from "classnames";

import Icon from "components/Icon";

import Image from "next/image";
import Link from "next/link";

import styles from "./index.module.scss";
import headerStyles from "@/components/Header/index.module.scss";
import { useRouter } from "next/router";
// const menuItem = {
//   icon: "analytics",
//   title: "SQL based analytics platform",
//   description: "Create comprehensive dashboards with deeper analysis",
//   href: "https://topledger.xyz/landing",
// }
// <Button.Link tertiary href={menuItem.href}>
//                   {menuItem.title}
//                 </Button.Link>

const MenuItem = ({
  icon,
  title,
  description,
  href,
  target,
  comingSoon,
  onClick,
}) => {
  return (
    <Link href={comingSoon ? "" : href}>
      <a className={styles.headerMenuItem} target={target} onClick={onClick}>
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
  const anchorRef = useRef();
  const [isOpen, setIsOpen] = useState();
  const [isActive, setIsActive] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setIsActive(
      menuItems?.some((item) => router.pathname?.includes(item.href))
    );
  }, [router.pathname]);

  const handleClick = useCallback(
    (e) => {
      if (e.currentTarget === anchorRef.current) {
        setIsOpen(!isOpen);
      }
    },
    [isOpen]
  );

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
        ref={containerRef}
      >
        <span
          style={{ display: "inline-flex" }}
          onClick={handleClick}
          ref={anchorRef}
          className={cx({ [styles.active]: false && isActive })}
        >
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
                <MenuItem
                  {...menuItem}
                  onClick={() => {
                    if (menuItem.href === router.pathname) {
                      setIsOpen(false);
                    }
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </span>
    </>
  );
};

export default HeaderMenu;
