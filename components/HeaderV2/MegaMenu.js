import Link from "next/link";

import styles from "./MegaMenu.module.scss";

// ============================================================================
// MegaMenu — opens beneath the header, a two-column flyout:
//   • Left: list of products/use cases with icon, title, description, badges
//   • Right: a single "featured" callout tile
// Uses CSS-only transitions; the outer header positions it absolutely.
// ============================================================================

const ICONS = {
    analytics: SqlIcon,
    research: ChartIcon,
    "wallet-profiler": WalletIcon,
    developers: CodeIcon,
    institutions: BuildingIcon,
    "web3-teams": TeamIcon,
    "artificial-intelligence": AiIcon,
};

const MegaMenu = ({ open, items, title, feature }) => {
    return (
        <div
            className={styles.menu}
            data-open={open ? "true" : "false"}
            role="region"
            aria-label={`${title} menu`}
            aria-hidden={!open}
        >
            <div className={styles.inner}>
                <div className={styles.list}>
                    {items.map((item, idx) => {
                        const Icon = ICONS[item.icon] || ChartIcon;
                        const Wrapper = item.external ? ExtAnchor : IntAnchor;
                        return (
                            <Wrapper
                                key={item.id}
                                href={item.comingSoon ? null : item.href}
                                className={styles.item}
                                style={{
                                    "--stagger": `${40 + idx * 35}ms`,
                                }}
                                data-disabled={item.comingSoon ? "true" : "false"}
                            >
                                <span className={styles.iconWrap}>
                                    <Icon />
                                </span>
                                <span className={styles.body}>
                                    <span className={styles.title}>
                                        {item.title}
                                        {item.comingSoon && (
                                            <span
                                                className={styles.badge}
                                                data-tone="muted"
                                            >
                                                Soon
                                            </span>
                                        )}
                                        {item.badge === "live" && (
                                            <span
                                                className={styles.badge}
                                                data-tone="live"
                                            >
                                                <span
                                                    className={styles.liveDot}
                                                />
                                                Live
                                            </span>
                                        )}
                                    </span>
                                    <span className={styles.desc}>
                                        {item.description}
                                    </span>
                                </span>
                                <span className={styles.arrow} aria-hidden="true">
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 14 14"
                                        fill="none"
                                    >
                                        <path
                                            d="M3 7h8M7 3l4 4-4 4"
                                            stroke="currentColor"
                                            strokeWidth="1.4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                            </Wrapper>
                        );
                    })}
                </div>

                {feature && (
                    <Link href={feature.href}>
                        <a
                            className={styles.feature}
                            target={
                                feature.href?.startsWith("http")
                                    ? "_blank"
                                    : undefined
                            }
                            rel={
                                feature.href?.startsWith("http")
                                    ? "noopener noreferrer"
                                    : undefined
                            }
                            style={{ "--stagger": "240ms" }}
                        >
                            <span className={styles.featureGlow} aria-hidden="true" />
                            <span className={styles.featureEyebrow}>
                                <span className={styles.featureDot} />
                                {feature.eyebrow}
                            </span>
                            <span className={styles.featureTitle}>
                                {feature.title}
                            </span>
                            <span className={styles.featureBody}>
                                {feature.body}
                            </span>
                            <span className={styles.featureCta}>
                                {feature.cta}
                                <svg
                                    width="13"
                                    height="13"
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
                            </span>
                        </a>
                    </Link>
                )}
            </div>
        </div>
    );
};

// ---------- helpers ----------

const IntAnchor = ({ href, children, ...rest }) => {
    if (!href)
        return (
            <span {...rest} role="link" aria-disabled="true">
                {children}
            </span>
        );
    return (
        <Link href={href}>
            <a {...rest}>{children}</a>
        </Link>
    );
};

const ExtAnchor = ({ href, children, ...rest }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
    </a>
);

// ---------- inline icons (small, mono-tone, take currentColor) ----------

function SqlIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <ellipse cx="8" cy="3.5" rx="5" ry="1.5" stroke="currentColor" strokeWidth="1.3" />
            <path d="M3 3.5v9c0 .83 2.24 1.5 5 1.5s5-.67 5-1.5v-9" stroke="currentColor" strokeWidth="1.3" />
            <path d="M3 8c0 .83 2.24 1.5 5 1.5s5-.67 5-1.5" stroke="currentColor" strokeWidth="1.3" />
        </svg>
    );
}
function ChartIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2.5 13h11M4 11l2-3 2.5 2L11 6l1.5 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
function WalletIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="2" y="4" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
            <path d="M2 6h12" stroke="currentColor" strokeWidth="1.3" />
            <circle cx="11" cy="9.5" r="1" fill="currentColor" />
        </svg>
    );
}
function CodeIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="m6 5-3 3 3 3M10 5l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
function BuildingIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="3" y="3" width="10" height="11" rx="1" stroke="currentColor" strokeWidth="1.3" />
            <path d="M5.5 6h1M9.5 6h1M5.5 9h1M9.5 9h1M5.5 12h1M9.5 12h1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
    );
}
function TeamIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="6" r="2.2" stroke="currentColor" strokeWidth="1.3" />
            <path d="M3.5 13c0-2.2 2-4 4.5-4s4.5 1.8 4.5 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
    );
}
function AiIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 2.5 9.2 6l3.3.5-2.5 2.3.7 3.4L8 10.5l-2.7 1.7.7-3.4L3.5 6.5 6.8 6 8 2.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
        </svg>
    );
}

export default MegaMenu;
