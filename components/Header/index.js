import cx from "classnames";
import Image from "next/image";

import Button from "../Button";

import styles from "./index.module.scss";
import HeaderMenu from "./components/HeaderMenu";

const Header = ({ className }) => {
  return (
    <header className={cx(styles.appHeader, className)}>
      <span className={styles.headerWrapper}>
        <span className={styles.logoContainer}>
          <Image
            src={"/assets/images/logo/topledger-full.svg"}
            width={144}
            height={50}
          />
        </span>
        <span className={styles.headerLinks}>
          <HeaderMenu menuItems={[]}>
            <a className={styles.headerLink}>About</a>
          </HeaderMenu>
          <HeaderMenu menuItems={[]}>
            <a className={styles.headerLink}>Product</a>
          </HeaderMenu>
          <HeaderMenu menuItems={[]}>
            <a className={styles.headerLink}>User cases</a>
          </HeaderMenu>
          <a className={styles.headerLink} href="/blog">
            Blogs
          </a>
          <a className={styles.headerLink} href="/contact-us">
            Docs
          </a>
        </span>
        <span className={styles.headerButtons}>
          <Button.Link href="//analytics.topledger.xyz/login">
            Login
          </Button.Link>
        </span>
      </span>
    </header>
  );
};

export default Header;
