import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import MegaMenu from "./MegaMenu";
import MobileDrawer from "./MobileDrawer";
import HoverPill from "./HoverPill";

import styles from "./index.module.scss";

// ============================================================================
// HeaderV2 — editorial top chrome for the landing page.
//
// Behaviour:
//   • Transparent at the very top of the page; frosts to glass after 8px.
//   • Slim 64px → 56px height transition on scroll.
//   • Center nav has a sliding "hover pill" that morphs between items.
//   • "Products" + "Use cases" trigger rich mega-menus.
//   • Right side: subtle ⌘K hint pill (decorative) + primary CTA.
//   • Mobile: a full-screen drawer with massive type and stagger reveal.
// ============================================================================

const PRODUCTS = [
    {
        id: "sql",
        icon: "analytics",
        title: "SQL warehouse",
        description: "Query a fully-decoded Solana with familiar SQL.",
        href: "/web3-teams",
    },
    {
        id: "streams",
        icon: "research",
        title: "Real-time streams",
        description: "Sub-second WebSocket and Kafka feeds.",
        href: "/web3-teams",
        badge: "live",
    },
    {
        id: "rest-mcp",
        icon: "developers",
        title: "REST & MCP APIs",
        description: "Built for apps and AI agents alike.",
        href: "https://docs.topledger.xyz",
        external: true,
    },
    {
        id: "wallet",
        icon: "wallet-profiler",
        title: "Wallet analytics",
        description: "Cohort, retention and segmentation for SVM.",
        href: "/web3-teams",
    },
    {
        id: "research",
        icon: "research",
        title: "Decoded archive",
        description: "Genesis-to-tip blocks, parsed at parquet scale.",
        href: "/research",
    },
    {
        id: "ai",
        icon: "artificial-intelligence",
        title: "Top Ledger AI",
        description: "Natural-language analytics, in private preview.",
        href: "/artifical-intelligence",
        comingSoon: true,
    },
];

const USE_CASES = [
    {
        id: "web3",
        icon: "web3-teams",
        title: "Web3 teams",
        description: "Cohorts, retention, and growth analytics for SVM.",
        href: "/web3-teams",
    },
    {
        id: "institutions",
        icon: "institutions",
        title: "Institutions",
        description: "Decoded historical data on your private cloud.",
        href: "/research",
    },
    {
        id: "developers",
        icon: "developers",
        title: "Developers",
        description: "REST, WebSocket, Kafka, MCP — pick your fit.",
        href: "https://docs.topledger.xyz",
        external: true,
    },
];

const SIMPLE_LINKS = [
    { id: "pricing", label: "Pricing", href: "/pricing" },
    {
        id: "docs",
        label: "Docs",
        href: "https://docs.topledger.xyz/",
        external: true,
    },
    {
        id: "blogs",
        label: "Blogs",
        href: "https://research.topledger.xyz/blogs",
        external: true,
    },
];

const HeaderV2 = () => {
    const [scrolled, setScrolled] = useState(false);
    const [openMenu, setOpenMenu] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const navRef = useRef(null);

    // ---------- scroll-aware shrink ----------
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // ---------- close mega-menu on outside click + escape ----------
    useEffect(() => {
        if (!openMenu) return;
        const onClick = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setOpenMenu(null);
            }
        };
        const onKey = (e) => {
            if (e.key === "Escape") setOpenMenu(null);
        };
        document.addEventListener("click", onClick);
        document.addEventListener("keydown", onKey);
        return () => {
            document.removeEventListener("click", onClick);
            document.removeEventListener("keydown", onKey);
        };
    }, [openMenu]);

    // ---------- lock scroll when drawer is open ----------
    useEffect(() => {
        if (drawerOpen) {
            document.body.style.overflow = "hidden";
            return () => {
                document.body.style.overflow = "";
            };
        }
    }, [drawerOpen]);

    const toggleMenu = useCallback((id) => {
        setOpenMenu((cur) => (cur === id ? null : id));
    }, []);

    return (
        <>
            <header
                className={styles.header}
                data-scrolled={scrolled ? "true" : "false"}
                data-menu-open={openMenu ? "true" : "false"}
            >
                <div className={styles.inner}>
                    {/* ---------- Logo ---------- */}
                    <Link href="/">
                        <a className={styles.logo} aria-label="Top Ledger home">
                            <Image
                                src="/assets/images/logo/topledger-full.svg"
                                width={132}
                                height={36}
                                alt="Top Ledger"
                                priority
                            />
                        </a>
                    </Link>

                    {/* ---------- Center nav ---------- */}
                    <nav
                        className={styles.nav}
                        ref={navRef}
                        aria-label="Primary"
                    >
                        <HoverPill containerSelector={`.${styles.nav}`} />

                        <NavTrigger
                            id="products"
                            label="Products"
                            openMenu={openMenu}
                            onToggle={toggleMenu}
                        />
                        <NavTrigger
                            id="usecases"
                            label="Use cases"
                            openMenu={openMenu}
                            onToggle={toggleMenu}
                        />
                        {SIMPLE_LINKS.map((l) => (
                            <NavLink
                                key={l.id}
                                href={l.href}
                                external={l.external}
                            >
                                {l.label}
                            </NavLink>
                        ))}
                    </nav>

                    {/* ---------- Right side: ⌘K + CTA ---------- */}
                    <div className={styles.right}>
                        <button
                            type="button"
                            className={styles.commandHint}
                            aria-label="Search (coming soon)"
                            tabIndex={-1}
                        >
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 14 14"
                                fill="none"
                                aria-hidden="true"
                            >
                                <circle
                                    cx="6"
                                    cy="6"
                                    r="4"
                                    stroke="currentColor"
                                    strokeWidth="1.4"
                                />
                                <path
                                    d="m12 12-3-3"
                                    stroke="currentColor"
                                    strokeWidth="1.4"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <kbd className={styles.kbd}>⌘K</kbd>
                        </button>

                        <Link href="https://calendly.com/nitin_topledger/30min">
                            <a
                                className={styles.cta}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span>Schedule a call</span>
                                <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M3 7h8M7 3l4 4-4 4"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>
                        </Link>

                        <button
                            type="button"
                            className={styles.burger}
                            onClick={() => setDrawerOpen(true)}
                            aria-label="Open menu"
                            aria-expanded={drawerOpen}
                        >
                            <span />
                            <span />
                        </button>
                    </div>
                </div>

                {/* ---------- Mega-menus (positioned by header) ---------- */}
                <MegaMenu
                    open={openMenu === "products"}
                    items={PRODUCTS}
                    title="Products"
                    feature={{
                        eyebrow: "New",
                        title: "Real-time streams are live",
                        body: "Sub-second WebSocket and Kafka feeds, fully decoded. Subscribe to any program, account, or instruction.",
                        cta: "Read the announcement",
                        href: "https://docs.topledger.xyz",
                    }}
                />
                <MegaMenu
                    open={openMenu === "usecases"}
                    items={USE_CASES}
                    title="Use cases"
                    feature={{
                        eyebrow: "Case study",
                        title: "How Drift built funding-rate analytics in days, not quarters",
                        body: "Production dashboards on top of Top Ledger's decoded perp data — without staffing a data team.",
                        cta: "Read the story",
                        href: "/web3-teams",
                    }}
                />
            </header>

            <MobileDrawer
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                products={PRODUCTS}
                useCases={USE_CASES}
                simpleLinks={SIMPLE_LINKS}
            />
        </>
    );
};

const NavTrigger = ({ id, label, openMenu, onToggle }) => {
    const isOpen = openMenu === id;
    return (
        <button
            type="button"
            className={styles.navItem}
            data-nav-item
            data-open={isOpen ? "true" : "false"}
            onClick={(e) => {
                e.stopPropagation();
                onToggle(id);
            }}
            aria-haspopup="true"
            aria-expanded={isOpen}
        >
            <span>{label}</span>
            <svg
                className={styles.navChevron}
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                aria-hidden="true"
            >
                <path
                    d="m2.5 4 2.5 2.5L7.5 4"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
};

const NavLink = ({ href, external, children }) => {
    if (external) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.navItem}
                data-nav-item
            >
                {children}
            </a>
        );
    }
    return (
        <Link href={href}>
            <a className={styles.navItem} data-nav-item>
                {children}
            </a>
        </Link>
    );
};

export default HeaderV2;
