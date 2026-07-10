import { useEffect, useState } from "react";

import useInView from "../../../../hooks/useInView";

import styles from "./index.module.scss";

const STATS = [
    {
        id: "protocols",
        value: 24,
        suffix: "+",
        label: "Protocols indexed",
        sub: "DEX · Perps · Lending · Liquid staking · NFTs · DePIN",
    },
    {
        id: "rows",
        prefix: "",
        value: 14.6,
        decimals: 1,
        suffix: "B+",
        label: "Decoded rows",
        sub: "Block, transaction, instruction, account-state — fully parsed.",
    },
    {
        id: "freshness",
        prefix: "<",
        value: 5,
        suffix: "s",
        label: "Median freshness",
        sub: "From slot finality to query-ready, end-to-end.",
    },
];

const PROTOCOLS = [
    "Raydium", "Orca", "Meteora", "Jupiter",
    "Drift", "Mango", "Phoenix", "Lifinity",
    "Kamino", "MarginFi", "Solend",
    "Marinade", "Jito", "Lido",
    "Tensor", "Magic Eden", "Helium", "Render",
    "Pyth", "Switchboard", "Wormhole", "Squads",
    "Metaplex", "Sanctum",
];

const CoverageBand = () => {
    return (
        <section className={styles.section} aria-labelledby="coverage-heading">
            <div className={styles.glow} aria-hidden="true" />
            <div className={styles.container}>
                <header className={styles.head}>
                    <p className={styles.eyebrow}>Coverage</p>
                    <h2 id="coverage-heading" className={styles.heading}>
                        At the pace of the chain.
                    </h2>
                    <p className={styles.kicker}>
                        Top Ledger indexes Solana&rsquo;s most-used programs
                        end-to-end &mdash; from raw blocks to decoded
                        instructions, refreshed continuously.
                    </p>
                </header>

                <ul className={styles.stats}>
                    {STATS.map((stat) => (
                        <Stat key={stat.id} stat={stat} />
                    ))}
                </ul>

                <div className={styles.protocols}>
                    <p className={styles.protocolsLabel}>
                        <span className={styles.dot} /> Programs covered
                    </p>
                    <ul className={styles.pills}>
                        {PROTOCOLS.map((p) => (
                            <li key={p} className={styles.pill}>
                                {p}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

const Stat = ({ stat }) => {
    const [ref, inView] = useInView({ threshold: 0.3 });
    return (
        <li ref={ref} className={styles.stat} data-in-view={inView ? "true" : "false"}>
            <p className={styles.statValue}>
                {stat.prefix && (
                    <span className={styles.prefix}>{stat.prefix}</span>
                )}
                <CountUp
                    target={stat.value}
                    play={inView}
                    decimals={stat.decimals || 0}
                />
                {stat.suffix && (
                    <span className={styles.suffix}>{stat.suffix}</span>
                )}
            </p>
            <p className={styles.statLabel}>{stat.label}</p>
            <p className={styles.statSub}>{stat.sub}</p>
        </li>
    );
};

const CountUp = ({ target, play, decimals = 0, duration = 1600 }) => {
    const [val, setVal] = useState(0);

    useEffect(() => {
        if (!play) return;

        // Respect prefers-reduced-motion — snap straight to the final value.
        if (
            typeof window !== "undefined" &&
            window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
            setVal(target);
            return;
        }

        let start = null;
        let raf;

        const ease = (t) => 1 - Math.pow(1 - t, 3);

        const step = (ts) => {
            if (start === null) start = ts;
            const t = Math.min((ts - start) / duration, 1);
            setVal(target * ease(t));
            if (t < 1) raf = requestAnimationFrame(step);
        };

        raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
    }, [play, target, duration]);

    return (
        <span>
            {decimals > 0 ? val.toFixed(decimals) : Math.round(val)}
        </span>
    );
};

export default CoverageBand;
