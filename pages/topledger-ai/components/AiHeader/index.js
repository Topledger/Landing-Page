import cx from "classnames";
import Image from "next/image";

import Button from "@/components/Button";
import { useUser } from "providers/User";

import styles from "./index.module.scss";
import DropdownMenu from "@/components/DropdownMenu";

const MenuItem = ({ icon, text }) => {
  return (
    <span style={{ color: "#4E618D" }}>
      <span>{icon}</span>
      <span style={{ marginLeft: "12px" }}>{text}</span>
    </span>
  );
};

const AiHeader = ({ bottomBorder = true }) => {
  const { user, setUser } = useUser();

  const dropdownContent = (close) => <div>Dropdown Content</div>;

  return (
    <header className={cx(styles.appHeader, { bottomBorder })}>
      <span className={styles.headerWrapper}>
        <Button.Link className={styles.logoContainer} href="/" tertiary>
          <Image
            src={"/assets/images/logo/topledger-full.svg"}
            width={144}
            height={32}
            alt="Top Ledger logo"
          />
        </Button.Link>
      </span>
      {user && (
        <span className={styles.profileWrapper}>
          <DropdownMenu
            className={styles.profileButton}
            menuOptions={[
              {
                id: 1,
                onClick: () => console.log("History"),
                content: <MenuItem text="History" icon="📜" />,
              },
              {
                id: 2,
                onClick: () => console.log("Profile"),
                content: <MenuItem text="Profile" icon="👤" />,
              },
              {
                id: 3,
                onClick: () => setUser(null),
                content: <MenuItem text="Logout" icon="🚪" />,
              },
            ]}
          >
            <img
              src={user?.picture}
              width={32}
              height={32}
              alt="User icon"
              style={{ borderRadius: "3rem" }}
            />
          </DropdownMenu>
        </span>
      )}
    </header>
  );
};

export default AiHeader;
