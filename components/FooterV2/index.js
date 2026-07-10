import { useEffect, useState } from "react";
import Link from "next/link";

import styles from "./index.module.scss";

// ============================================================================
// FooterV2 — editorial site footer.
//
// Composition:
//   1. Top strip: live status row + region + "Built on Solana" badge
//   2. Sitemap: 4 columns (Products / Solutions / Resources / Company)
//   3. Bottom strip: copyright + legal + social
//   4. Signature: massive "Top Ledger" wordmark with a subtle gradient sweep
//
// All animations are subtle and respect prefers-reduced-motion via tokens.
// ============================================================================

const COLUMNS = [
    {
        title: "Products",
        links: [
            { label: "SQL warehouse", href: "/web3-teams" },
            { label: "Real-time streams", href: "/web3-teams" },
            { label: "REST & MCP APIs", href: "https://docs.topledger.xyz", external: true },
            { label: "Wallet analytics", href: "/web3-teams" },
            { label: "Decoded archive", href: "/research" },
            { label: "Top Ledger AI", href: "/artifical-intelligence", muted: true },
        ],
    },
    {
        title: "Solutions",
        links: [
            { label: "Web3 teams", href: "/web3-teams" },
            { label: "Institutions", href: "/research" },
            { label: "Developers", href: "https://docs.topledger.xyz", external: true },
            { label: "Foundations", href: "/research" },
        ],
    },
    {
        title: "Resources",
        links: [
            { label: "Documentation", href: "https://docs.topledger.xyz/", external: true },
            { label: "Blog", href: "https://research.topledger.xyz/blogs", external: true },
            { label: "Discriminator DB", href: "https://discrimin8r.topledger.xyz/", external: true },
            { label: "Pricing", href: "/pricing" },
            { label: "Media kit", href: "https://www.figma.com/design/Vs0VeatB3BvTmwks7A2bIj/Media-Kit", external: true },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "Contact", href: "mailto:nitin@topledger.xyz" },
            { label: "Schedule a call", href: "https://calendly.com/nitin_topledger/30min", external: true },
            { label: "Terms & Conditions", href: "/tnc" },
            { label: "Privacy policy", href: "/privacy-policy" },
        ],
    },
];

const SOCIAL = [
    { label: "Twitter", href: "https://twitter.com/ledger_top", icon: TwitterIcon },
    { label: "Telegram", href: "https://telegram.me/ergon50", icon: TelegramIcon },
    { label: "GitHub", href: "https://github.com/Topledger/solana-programs", icon: GithubIcon },
];

const FooterV2 = () => {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer} aria-label="Site footer">
            <div className={styles.aurora} aria-hidden="true">
                <span className={styles.auroraA} />
                <span className={styles.auroraB} />
            </div>

            <div className={styles.inner}>
                {/* ---------- Status row ---------- */}
                <div className={styles.statusRow}>
                    <a
                        href="https://status.topledger.xyz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.status}
                    >
                        <span className={styles.statusDot} aria-hidden="true" />
                        <span className={styles.statusText}>
                            All systems operational
                        </span>
                    </a>
                </div>

                {/* ---------- Sitemap ---------- */}
                <div className={styles.grid}>
                    <div className={styles.brandCol}>
                        <Link href="/">
                            <a
                                className={styles.brand}
                                aria-label="Top Ledger home"
                            >
                                <Mark />
                                <span className={styles.brandWordmark}>
                                    Top Ledger
                                </span>
                            </a>
                        </Link>
                        <p className={styles.brandDesc}>
                            The data layer for teams shipping on Solana &amp;
                            the SVM. SQL, streams, REST, MCP, archive — one
                            stack, one billing relationship.
                        </p>

                        <ul className={styles.social}>
                            {SOCIAL.map(({ label, href, icon: Icon }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        className={styles.socialLink}
                                    >
                                        <Icon />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {COLUMNS.map((col) => (
                        <Column key={col.title} title={col.title} links={col.links} />
                    ))}
                </div>

                {/* ---------- Bottom legal bar ---------- */}
                <div className={styles.bottom}>
                    <span className={styles.copyright}>
                        © {year} Donna Analytics Pvt Ltd · CIN U72200RJ2022PTC082273
                    </span>
                    <span className={styles.contact}>
                        <a href="mailto:nitin@topledger.xyz">
                            nitin@topledger.xyz
                        </a>
                    </span>
                </div>

                {/* ---------- Editorial signature: @ledger_top → Twitter ---------- */}
                <a
                    href="https://twitter.com/ledger_top"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.signature}
                    aria-label="Follow @ledger_top on Twitter"
                >
                    <span className={styles.signatureText}>@ledger_top</span>

                    <span className={styles.tooltip} aria-hidden="true">
                        <span className={styles.tooltipDot} />
                        <span className={styles.tooltipLabel}>
                            View on Twitter
                        </span>
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 14 14"
                            fill="none"
                        >
                            <path
                                d="M3 7h8M7 3l4 4-4 4"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                </a>
            </div>
        </footer>
    );
};

// ---------- Column ----------

const Column = ({ title, links }) => (
    <div className={styles.col}>
        <p className={styles.colTitle}>{title}</p>
        <ul className={styles.colList}>
            {links.map((link) => (
                <li key={link.label}>
                    {link.external ? (
                        <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.colLink}
                            data-muted={link.muted ? "true" : "false"}
                        >
                            <span>{link.label}</span>
                            <ExtArrow />
                        </a>
                    ) : (
                        <Link href={link.href}>
                            <a
                                className={styles.colLink}
                                data-muted={link.muted ? "true" : "false"}
                            >
                                <span>{link.label}</span>
                                <IntArrow />
                            </a>
                        </Link>
                    )}
                </li>
            ))}
        </ul>
    </div>
);

// ---------- Inline icons ----------

function Mark() {
    return (
        <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className={styles.markSvg}
        >
            <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="4"
                stroke="currentColor"
                strokeWidth="1.6"
            />
            <path
                d="M7 8h10M9 8v9M15 8v9"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
            />
        </svg>
    );
}

function TwitterIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
                d="M12.6 2H14.7l-4.6 5.3L15.5 14h-4.2L8 9.7 4.2 14H2.1l4.9-5.6L1.8 2H6.1l3 4 3.5-4Zm-.7 10.6h1.1L5.3 3.3H4.1l7.8 9.3Z"
                fill="currentColor"
            />
        </svg>
    );
}

function TelegramIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
                d="M14 2.4 11.7 13c-.2.8-.6 1-1.3.6L7 11l-1.7 1.6c-.2.2-.4.3-.7.3l.3-3.4 6.1-5.6c.3-.2-.1-.4-.4-.2L3 8 .8 7.3c-.7-.2-.7-.7.2-1L13 1.5c.6-.2 1.1.1.9.9Z"
                fill="currentColor"
            />
        </svg>
    );
}

function GithubIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
                d="M8 1a7 7 0 0 0-2.2 13.6c.35.07.5-.15.5-.34v-1.2c-2 .43-2.4-.96-2.4-.96-.32-.83-.8-1.05-.8-1.05-.65-.45.05-.44.05-.44.72.05 1.1.74 1.1.74.65 1.1 1.7.78 2.1.6.07-.47.25-.79.45-.97-1.6-.18-3.27-.8-3.27-3.55 0-.78.28-1.42.74-1.92-.07-.18-.32-.92.07-1.92 0 0 .6-.2 1.97.74A6.84 6.84 0 0 1 8 4.4c.6 0 1.22.08 1.78.24 1.36-.93 1.96-.74 1.96-.74.39 1 .14 1.74.07 1.92.46.5.74 1.14.74 1.92 0 2.76-1.68 3.37-3.28 3.55.26.22.5.66.5 1.34v1.98c0 .19.13.42.5.34A7 7 0 0 0 8 1Z"
                fill="currentColor"
            />
        </svg>
    );
}

function ExtArrow() {
    return (
        <svg width="11" height="11" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
                d="M5 3h6v6M11 3 4 10"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function IntArrow() {
    return (
        <svg width="11" height="11" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
                d="M3 7h8M7 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default FooterV2;
