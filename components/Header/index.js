import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import cx from "classnames";
import Image from "next/image";
import BarsOutlinedIcon from "@ant-design/icons/BarsOutlined";

import Button from "../Button";
import HeaderMenu from "./components/HeaderMenu";
import MobileHidden from "../MobileHidden";
import MobileOnly from "../MobileOnly";

import styles from "./index.module.scss";
import { getId } from "helpers/utils";

const productsHeaderLinks = [
    {
        id: "sql-analytics",
        icon: "analytics",
        title: "SQL based analytics platform",
        description: "Create comprehensive dashboards with deeper analysis",
        href: "/web3-teams",
    },
    {
        id: "wallet-profiler",
        icon: "wallet-profiler",
        title: "Wallet behaviour analytics",
        description:
            "Create user personas at scale to help align with your product roadmap",
        href: `/web3-teams#${getId("Wallet behaviour analytics")}`,
        //comingSoon: true,
    },
    {
        id: "research",
        icon: "research",
        title: "Top Ledger for research",
        description:
            "Access Solana's decoded data directly on your private cloud",
        href: "/research",
    },
    {
        id: "artificial-intelligence",
        icon: "artificial-intelligence",
        title: "Top Ledger AI",
        description: "Simplifying large-scale insight consumption",
        href: "/artifical-intelligence",
        comingSoon: true,
    },
];

const useCasesHeaderLinks = [
    {
        id: "web3-teams",
        icon: "web3-teams",
        title: "For web3 teams",
        description: "Your partner in building a data culture",
        href: "/web3-teams",
    },
    {
        id: "institutions",
        icon: "institutions",
        title: "For institutions",
        description: "Powering advanced analytics use cases",
        href: "/research",
    },
    {
        id: "developers",
        icon: "developers",
        title: "For developers",
        description: "Enhance your development using Top Ledger API",
        href: "https://docs.topledger.xyz",
        target: "_blank",
    },
];

const BurgerButton = ({ className, onClick }) => {
    return (
        <Button
            className={cx(styles.burgerButton, className)}
            onClick={onClick}
            noArrow
            tertiary
            color="#283D6D"
        >
            <BarsOutlinedIcon width={32} height={32} size={32} />
        </Button>
    );
};

const Header = ({ className, pageType = "normal" }) => {
    const [isHeaderOpen, setIsHeaderOpen] = useState(false);

    const router = useRouter();

    const toggleHeader = () => {
        setIsHeaderOpen((isHeaderOpen) => !isHeaderOpen);
    };

    useEffect(() => {
        if (isHeaderOpen) {
            const handleClick = (e) => {
                if (!e.target.closest(`.${styles.appHeader}`)) {
                    setIsHeaderOpen(false);
                }
            };
            document.addEventListener("click", handleClick);
            return () => document.removeEventListener("click", handleClick);
        }
    }, [isHeaderOpen]);

    return (
        <header
            className={cx(styles.appHeader, className, `page-type-${pageType}`)}
        >
            <span className={cx(styles.headerWrapper, `page-type-${pageType}`)}>
                <Button.Link className={styles.logoContainer} href="/" tertiary>
                    <Image
                        src={"/assets/images/logo/topledger-full.svg"}
                        width={144}
                        height={50}
                        alt="Top Ledger logo"
                    />
                </Button.Link>
                <MobileOnly visibilityType="inline-flex">
                    <div className={styles.mobileButtonContainer}>
                        <BurgerButton onClick={toggleHeader} />
                    </div>
                </MobileOnly>
                <nav
                    className={cx(styles.headerLinks, {
                        [styles.mobileHeaderOpen]: isHeaderOpen,
                    })}
                >
                    <HeaderMenu
                        className={styles.headerLink}
                        menuItems={productsHeaderLinks}
                    >
                        <a className={styles.headerLink}>Products</a>
                    </HeaderMenu>
                    <HeaderMenu
                        className={styles.headerLink}
                        menuItems={useCasesHeaderLinks}
                    >
                        <a className={styles.headerLink}>Use cases</a>
                    </HeaderMenu>
                    <Button.Link
                        tertiary
                        className={cx(styles.headerLink, {
                            // [headerMenuStyles.active]: router.pathname?.includes("/pricing"),
                        })}
                        href="/pricing"
                    >
                        Pricing
                    </Button.Link>
                    <Button.Link
                        tertiary
                        className={cx(styles.headerLink)}
                        href="https://blogs.topledger.xyz/"
                        target="_blank"
                        noArrow
                    >
                        Blogs
                    </Button.Link>
                    <Button.Link
                        tertiary
                        className={cx(styles.headerLink)}
                        href="https://docs.topledger.xyz/"
                        target="_blank"
                        noArrow
                    >
                        Docs
                    </Button.Link>
                    <Button.Link
                        tertiary
                        className={cx(styles.headerLink)}
                        href="https://discrimin8r.topledger.xyz/"
                        target="_blank"
                        noArrow
                    >
                        Discriminator DB
                    </Button.Link>
                </nav>
                <MobileHidden>
                    <span className={styles.headerButtons}>
                        <Button.Link
                            href="https://research.topledger.xyz/"
                            target="_blank"
                            noArrow

                            color="#085ED4"
                            secondary
                        >
                            Top Ledger Research
                        </Button.Link>
                    </span>
                </MobileHidden>
            </span>
        </header>
    );
};

export default Header;
