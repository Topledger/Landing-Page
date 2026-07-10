import Link from "next/link";

import HeroLiveRibbon from "./HeroLiveRibbon";

import styles from "./index.module.scss";

// ============================================================================
// HeroV2 — Editorial type-first hero.
//
// Design notes:
//   • One column. No fake product window, no tabs, no chips.
//   • The breadth of the product (SQL · REST · WS · Kafka · MCP · archive)
//     is communicated in the subhead, not in a busy mockup. The product
//     itself is shown in the bento section below the fold.
//   • The page breathes via two slow-drifting gradient mesh layers and
//     a faint dot grid — no other decoration competes for attention.
//   • A single live-data ribbon at the bottom of the hero gives the page
//     an "always-on infrastructure" pulse without shouting.
//   • Every motion is long-easing and respects prefers-reduced-motion.
// ============================================================================

const HeroV2 = () => {
    return (
        <section className={styles.hero} aria-labelledby="hero-heading">
            <div className={styles.dotGrid} aria-hidden="true" />
            <div className={styles.meshA} aria-hidden="true" />
            <div className={styles.meshB} aria-hidden="true" />

            <div className={styles.container}>
                <div className={styles.content}>
                    <p
                        className={styles.eyebrow}
                        style={{ "--reveal-delay": "0ms" }}
                    >
                        <span className={styles.eyebrowDot} />
                        Solana data infrastructure
                    </p>

                    <h1
                        id="hero-heading"
                        className={styles.heading}
                        style={{ "--reveal-delay": "120ms" }}
                    >
                        Solana data,
                        <br />
                        <span className={styles.headingAccent}>
                            however you build.
                        </span>
                    </h1>

                    <p
                        className={styles.subheading}
                        style={{ "--reveal-delay": "260ms" }}
                    >
                        SQL warehouses, sub-second streams over WebSocket and
                        Kafka, REST and MCP for agents, plus a fully-decoded
                        archive from genesis to tip &mdash; one data layer for
                        the teams shipping on Solana.
                    </p>

                    <div
                        className={styles.ctaRow}
                        style={{ "--reveal-delay": "380ms" }}
                    >
                        <Link href="https://calendly.com/nitin_topledger/30min">
                            <a
                                className={styles.ctaPrimary}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span>Schedule a call</span>
                                <svg
                                    width="14"
                                    height="14"
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

                        <Link href="https://docs.topledger.xyz/">
                            <a
                                className={styles.ctaSecondary}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span>Read the docs</span>
                                <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M5 3h6v6M11 3 4 10"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

            <HeroLiveRibbon />
        </section>
    );
};

export default HeroV2;
