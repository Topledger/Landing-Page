import Link from "next/link";

import {
    SqlPreview,
    PulsePreview,
    SparklinePreview,
    BlockStackPreview,
    ApiPreview,
    DashboardPreview,
} from "./previews";

import styles from "./index.module.scss";

// ----------------------------------------------------------------------------
// Catalogue. The `layout` value maps to a deliberate grid position in the
// asymmetric mosaic — see index.module.scss for the geometry.
//
//   featured        → 8c × 4r anchor (horizontal split)
//   medium-tall     → 4c × 2r right-stack column (Feeds + Wallets)
//   bottom-wide     → 5c × 3r — the wide bottom card
//   bottom-medium   → 4c × 3r — the middle bottom card
//   bottom-narrow   → 3c × 3r — the narrow bottom card
// ----------------------------------------------------------------------------
const TILES = [
    {
        id: "sql",
        tag: "Platform",
        title: "SQL analytics, decoded.",
        description:
            "Query a fully-decoded Solana with familiar SQL — no RPC plumbing, no parsing.",
        href: "/web3-teams",
        tint: "blue",
        layout: "featured",
        kind: "Open platform",
        cta: "Explore the platform",
        hints: [
            "Versioned schemas across every major program",
            "Dashboards, scheduled queries, parquet exports",
            "BI hooks: Looker, Metabase, Tableau, Hex",
        ],
        Preview: SqlPreview,
    },
    {
        id: "feeds",
        tag: "Streaming",
        title: "Real-time feeds",
        description: "Sub-second WebSocket and Kafka streams, decoded.",
        href: "https://docs.topledger.xyz",
        tint: "mint",
        layout: "medium-tall",
        kind: "Read the docs",
        Preview: PulsePreview,
    },
    {
        id: "wallets",
        tag: "Behaviour",
        title: "Wallet analytics",
        description: "Cohort, retention and segmentation built for the SVM.",
        href: "/web3-teams",
        tint: "violet",
        layout: "medium-tall",
        kind: "See use case",
        Preview: SparklinePreview,
    },
    {
        id: "history",
        tag: "Archive",
        title: "Historical raw + decoded",
        description:
            "Genesis-to-tip blocks, transactions, account state — at parquet scale.",
        href: "/research",
        tint: "slate",
        layout: "bottom-wide",
        kind: "Browse archive",
        Preview: BlockStackPreview,
    },
    {
        id: "apis",
        tag: "Interfaces",
        title: "REST · WS · Kafka · MCP",
        description:
            "One data layer, four ways to consume it. Pick the fit, swap any time.",
        href: "https://api.topledger.xyz",
        tint: "amber",
        layout: "bottom-medium",
        kind: "API reference",
        Preview: ApiPreview,
    },
    {
        id: "research",
        tag: "Research",
        title: "Curated dashboards",
        description:
            "Production dashboards used by leading SVM analysts and funds.",
        href: "https://research.topledger.xyz",
        tint: "rose",
        layout: "bottom-narrow",
        kind: "Open research",
        Preview: DashboardPreview,
    },
];

const ProductShowcase = () => {
    return (
        <section
            className={styles.section}
            aria-labelledby="showcase-heading"
        >
            <div className={styles.container}>
                <header className={styles.head}>
                    <div className={styles.headLeft}>
                        <span className={styles.eyebrowRow}>
                            <span className={styles.eyebrowDot} aria-hidden="true" />
                            <span className={styles.eyebrow}>What we ship</span>
                        </span>
                        <h2 id="showcase-heading" className={styles.heading}>
                            One data layer.
                            <br />
                            Every Solana question, <em>answered</em>.
                        </h2>
                        <p className={styles.kicker}>
                            SQL analytics, real-time feeds, decoded history,
                            and APIs &mdash; built around the way analytics,
                            growth, and engineering teams actually work.
                        </p>
                    </div>
                    <span className={styles.headOrnament}>
                        01&nbsp;—&nbsp;06&nbsp;Products
                    </span>
                </header>

                <div className={styles.grid}>
                    {TILES.map((tile, i) =>
                        tile.layout === "featured" ? (
                            <FeaturedTile key={tile.id} tile={tile} index={i + 1} />
                        ) : (
                            <CompactTile key={tile.id} tile={tile} index={i + 1} />
                        )
                    )}
                </div>
            </div>
        </section>
    );
};

// ----------------------------------------------------------------------------
// FeaturedTile — horizontal split: editorial copy on the left, big product
// canvas on the right.
// ----------------------------------------------------------------------------
const FeaturedTile = ({ tile, index }) => {
    const { tag, title, description, href, tint, layout, cta, kind, hints, Preview } =
        tile;
    const { target, rel } = externalProps(href);
    const indexLabel = String(index).padStart(2, "0");

    return (
        <Link href={href}>
            <a
                className={styles.tile}
                data-tint={tint}
                data-layout={layout}
                target={target}
                rel={rel}
            >
                <div className={styles.featuredCopy}>
                    <div className={styles.tileMeta}>
                        <span className={styles.tileIndex}>{indexLabel}</span>
                        <span className={styles.tileMetaSep} aria-hidden="true" />
                        <span className={styles.tileTag}>{tag}</span>
                    </div>
                    <h3 className={styles.featuredTitle}>{title}</h3>
                    <p className={styles.featuredDesc}>{description}</p>
                    {hints && (
                        <ul className={styles.featuredHints}>
                            {hints.map((h) => (
                                <li key={h} className={styles.featuredHint}>
                                    {h}
                                </li>
                            ))}
                        </ul>
                    )}
                    <div className={styles.featuredFoot}>
                        <span className={styles.featuredCta}>
                            {cta}
                            <Arrow />
                        </span>
                        <span className={styles.featuredCtaHint}>{kind}</span>
                    </div>
                </div>
                <div className={styles.featuredCanvas} aria-hidden="true">
                    <Preview />
                </div>
            </a>
        </Link>
    );
};

// ----------------------------------------------------------------------------
// CompactTile — vertical stack used for every non-featured layout slot.
// ----------------------------------------------------------------------------
const CompactTile = ({ tile, index }) => {
    const { tag, title, description, href, tint, layout, kind, Preview } = tile;
    const { target, rel } = externalProps(href);
    const indexLabel = String(index).padStart(2, "0");

    return (
        <Link href={href}>
            <a
                className={styles.tile}
                data-tint={tint}
                data-layout={layout}
                target={target}
                rel={rel}
            >
                <div className={styles.tileHead}>
                    <div className={styles.tileMeta}>
                        <span className={styles.tileIndex}>{indexLabel}</span>
                        <span className={styles.tileMetaSep} aria-hidden="true" />
                        <span className={styles.tileTag}>{tag}</span>
                    </div>
                    <div className={styles.tileBody}>
                        <h3 className={styles.tileTitle}>{title}</h3>
                        <p className={styles.tileDesc}>{description}</p>
                    </div>
                </div>

                <div className={styles.tilePreview} aria-hidden="true">
                    <Preview />
                </div>

                <div className={styles.tileFoot}>
                    <span className={styles.tileLink}>
                        Explore
                        <Arrow />
                    </span>
                    <span className={styles.tileLinkHint}>{kind}</span>
                </div>
            </a>
        </Link>
    );
};

// ----------------------------------------------------------------------------
// Helpers
// ----------------------------------------------------------------------------
const Arrow = () => (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path
            d="M3 7h8M7 3l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const externalProps = (href) => {
    const isExternal = href.startsWith("http");
    return {
        target: isExternal ? "_blank" : undefined,
        rel: isExternal ? "noopener noreferrer" : undefined,
    };
};

export default ProductShowcase;
