import { useState } from "react";
import Link from "next/link";

import styles from "./index.module.scss";

const PERSONAS = [
    {
        id: "web3",
        tab: "Web3 teams",
        eyebrow: "For founders, growth & data",
        headline: "Ship product decisions on chain-scale data.",
        bullets: [
            "Cohort, retention, and funnel analytics native to SVM.",
            "Versioned dashboards your whole team can subscribe to.",
            "Hosted SQL warehouse with parquet exports and BI hooks.",
        ],
        cta: { text: "Explore for Web3 teams", href: "/web3-teams" },
        snippet: {
            title: "swap_volume_by_dex.sql",
            lines: [
                ["SELECT", " dex, SUM(volume_usd)"],
                ["FROM", " solana.dex.swaps"],
                ["WHERE", " day >= now() - 30"],
                ["GROUP BY", " dex"],
            ],
        },
    },
    {
        id: "institutions",
        tab: "Institutions",
        eyebrow: "For research, funds & policy",
        headline: "Auditable data for serious analysis.",
        bullets: [
            "Decoded historical archive — genesis to live.",
            "Private cloud delivery with SLA-backed freshness.",
            "Direct partner with Messari, Artemis, and top funds.",
        ],
        cta: { text: "Explore for institutions", href: "/research" },
        snippet: {
            title: "fees.parquet",
            lines: [
                ["partition", " day=2025-04-17/"],
                ["rows", " 28,431,602"],
                ["compression", " ZSTD"],
                ["lineage", " block → ix → decoded"],
            ],
        },
    },
    {
        id: "developers",
        tab: "Developers",
        eyebrow: "For engineering teams",
        headline: "REST, WebSocket, Kafka, MCP &mdash; pick your fit.",
        bullets: [
            "Typed SDK clients and OpenAPI schemas.",
            "Real-time streams with at-least-once delivery semantics.",
            "MCP server for native LLM-agent access to Solana data.",
        ],
        cta: { text: "Explore the API", href: "https://api.topledger.xyz" },
        snippet: {
            title: "stream.ts",
            lines: [
                ["import", " { TopLedger }"],
                ["", " from \"@topledger/sdk\";"],
                ["const tl =", " new TopLedger();"],
                ["tl.swaps", ".onBlock(handler);"],
            ],
        },
    },
];

const PersonasSection = () => {
    const [active, setActive] = useState("web3");
    const persona = PERSONAS.find((p) => p.id === active);

    return (
        <section className={styles.section} aria-labelledby="personas-heading">
            <div className={styles.container}>
                <header className={styles.head}>
                    <p className={styles.eyebrow}>Built for</p>
                    <h2 id="personas-heading" className={styles.heading}>
                        Three teams.
                        <br />
                        One shared source of truth.
                    </h2>
                </header>

                <div
                    className={styles.tabs}
                    role="tablist"
                    aria-label="Persona selector"
                >
                    {PERSONAS.map((p) => (
                        <button
                            key={p.id}
                            role="tab"
                            aria-selected={active === p.id}
                            aria-controls={`persona-panel-${p.id}`}
                            id={`persona-tab-${p.id}`}
                            className={styles.tab}
                            data-active={active === p.id ? "true" : "false"}
                            onClick={() => setActive(p.id)}
                        >
                            {p.tab}
                        </button>
                    ))}
                </div>

                <div
                    role="tabpanel"
                    id={`persona-panel-${persona.id}`}
                    aria-labelledby={`persona-tab-${persona.id}`}
                    className={styles.panel}
                    key={persona.id}
                >
                    <div className={styles.panelLeft}>
                        <p className={styles.panelEyebrow}>
                            {persona.eyebrow}
                        </p>
                        <h3
                            className={styles.panelHeadline}
                            dangerouslySetInnerHTML={{
                                __html: persona.headline,
                            }}
                        />
                        <ul className={styles.bullets}>
                            {persona.bullets.map((b) => (
                                <li key={b}>{b}</li>
                            ))}
                        </ul>
                        <Link href={persona.cta.href}>
                            <a
                                className={styles.cta}
                                target={
                                    persona.cta.href.startsWith("http")
                                        ? "_blank"
                                        : undefined
                                }
                                rel={
                                    persona.cta.href.startsWith("http")
                                        ? "noopener noreferrer"
                                        : undefined
                                }
                            >
                                {persona.cta.text}
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
                            </a>
                        </Link>
                    </div>

                    <div
                        className={styles.panelRight}
                        aria-hidden="true"
                    >
                        <div className={styles.snippet}>
                            <header className={styles.snippetHead}>
                                <span className={styles.snippetDots}>
                                    <span /> <span /> <span />
                                </span>
                                <span className={styles.snippetTitle}>
                                    {persona.snippet.title}
                                </span>
                            </header>
                            <pre className={styles.snippetCode}>
                                {persona.snippet.lines.map((line, i) => (
                                    <span key={i} className={styles.snippetLine}>
                                        <span className={styles.snippetKw}>
                                            {line[0]}
                                        </span>
                                        <span>{line[1]}</span>
                                    </span>
                                ))}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PersonasSection;
