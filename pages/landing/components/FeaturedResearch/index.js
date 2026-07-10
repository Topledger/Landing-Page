import Link from "next/link";

import styles from "./index.module.scss";

const RESEARCH = [
    {
        id: "messari-state",
        publication: "Messari",
        title: "State of Solana DEXs, Q4",
        href: "https://messari.io/report/state-of-solana-dexs-q4-2024",
    },
    {
        id: "artemis",
        publication: "Artemis",
        title: "Solana ecosystem dashboards",
        href: "https://app.artemis.xyz/asset/solana",
    },
    {
        id: "dune",
        publication: "Top Ledger Research",
        title: "Perpetuals on Solana &mdash; the deep dive",
        href: "https://research.topledger.xyz",
    },
];

const FeaturedResearch = () => (
    <section className={styles.section} aria-labelledby="cited-heading">
        <div className={styles.container}>
            <p id="cited-heading" className={styles.label}>
                Cited &amp; consumed by
            </p>
            <ul className={styles.list}>
                {RESEARCH.map((r) => (
                    <li key={r.id} className={styles.item}>
                        <Link href={r.href}>
                            <a
                                className={styles.card}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className={styles.publication}>
                                    {r.publication}
                                </span>
                                <span
                                    className={styles.title}
                                    dangerouslySetInnerHTML={{
                                        __html: r.title,
                                    }}
                                />
                                <span className={styles.arrow} aria-hidden="true">
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 14 14"
                                        fill="none"
                                    >
                                        <path
                                            d="M5 3h6v6M11 3 4 10"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </section>
);

export default FeaturedResearch;
