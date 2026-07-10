import { useEffect, useState } from "react";

import styles from "./previews.module.scss";

// ----- 1. SqlPreview: animated SQL editor with shimmer cursor ------------
export const SqlPreview = () => (
    <div className={styles.sql}>
        <div className={styles.sqlChrome}>
            <span /> <span /> <span />
            <span className={styles.sqlTab}>perps_volume.sql</span>
        </div>
        <pre className={styles.sqlCode}>
            <span className={styles.line}>
                <span className={styles.ln}>1</span>
                <span className={styles.kw}>WITH</span> daily{" "}
                <span className={styles.kw}>AS</span> (
            </span>
            <span className={styles.line}>
                <span className={styles.ln}>2</span>
                {"  "}
                <span className={styles.kw}>SELECT</span> day,{" "}
                <span className={styles.fn}>SUM</span>(volume) v
            </span>
            <span className={styles.line}>
                <span className={styles.ln}>3</span>
                {"  "}
                <span className={styles.kw}>FROM</span> solana.perps
            </span>
            <span className={styles.line}>
                <span className={styles.ln}>4</span>
                {"  "}
                <span className={styles.kw}>GROUP BY</span> day
            </span>
            <span className={styles.line}>
                <span className={styles.ln}>5</span>)
            </span>
            <span className={styles.line}>
                <span className={styles.ln}>6</span>
                <span className={styles.kw}>SELECT</span> *{" "}
                <span className={styles.kw}>FROM</span> daily
                <span className={styles.cursor} />
            </span>
        </pre>
    </div>
);

// ----- 2. PulsePreview: pulsing dots feed --------------------------------
export const PulsePreview = () => (
    <div className={styles.pulse}>
        {[0, 1, 2, 3, 4, 5].map((i) => (
            <span
                key={i}
                className={styles.pulseRow}
                style={{ animationDelay: `${i * 0.18}s` }}
            >
                <span className={styles.pulseDot} />
                <span className={styles.pulseLine} />
            </span>
        ))}
    </div>
);

// ----- 3. SparklinePreview: little chart ---------------------------------
export const SparklinePreview = () => {
    const points = [
        [0, 30], [20, 26], [40, 34], [60, 22], [80, 28],
        [100, 18], [120, 24], [140, 14], [160, 20], [180, 8],
    ];
    const path = points
        .map((p, i) => `${i === 0 ? "M" : "L"}${p[0]} ${p[1]}`)
        .join(" ");
    const area = `${path} L180 40 L0 40 Z`;
    return (
        <div className={styles.sparkline}>
            <div className={styles.sparkLabel}>
                <span>Active wallets · 7d</span>
                <span className={styles.sparkValue}>+18.4%</span>
            </div>
            <svg
                viewBox="0 0 180 40"
                preserveAspectRatio="none"
                className={styles.sparkSvg}
            >
                <defs>
                    <linearGradient id="ps-spark" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="var(--tl-solana-violet)" stopOpacity="0.32" />
                        <stop offset="100%" stopColor="var(--tl-solana-violet)" stopOpacity="0" />
                    </linearGradient>
                </defs>
                <path d={area} fill="url(#ps-spark)" />
                <path
                    d={path}
                    fill="none"
                    stroke="var(--tl-solana-violet)"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
};

// ----- 4. BlockStackPreview: stacked blocks visual -----------------------
export const BlockStackPreview = () => (
    <div className={styles.stack}>
        {[0, 1, 2, 3, 4].map((i) => (
            <div
                key={i}
                className={styles.stackBlock}
                style={{ animationDelay: `${i * 0.08}s` }}
            >
                <span className={styles.stackSlot}>
                    slot · {(289_412_009 + i).toLocaleString()}
                </span>
                <span className={styles.stackHash}>0x{(0xa9b3c12 + i).toString(16)}…</span>
            </div>
        ))}
    </div>
);

// ----- 5. ApiPreview: rotating endpoint snippet --------------------------
const ENDPOINTS = [
    { method: "GET",  path: "/v1/dex/swaps?dex=raydium&day=30" },
    { method: "WS",   path: "/v1/stream/blocks" },
    { method: "POST", path: "/v1/sql/query" },
    { method: "MCP",  path: "topledger.solana.dex" },
];

export const ApiPreview = () => {
    const [idx, setIdx] = useState(0);
    useEffect(() => {
        const id = setInterval(() => setIdx((i) => (i + 1) % ENDPOINTS.length), 2200);
        return () => clearInterval(id);
    }, []);
    const ep = ENDPOINTS[idx];
    return (
        <div className={styles.api}>
            <div className={styles.apiRow} key={idx}>
                <span className={styles.apiMethod} data-method={ep.method}>
                    {ep.method}
                </span>
                <span className={styles.apiPath}>{ep.path}</span>
            </div>
            <div className={styles.apiResp}>
                <span className={styles.apiStatus}>200</span>
                <span className={styles.apiTime}>· 84ms</span>
            </div>
        </div>
    );
};

// ----- 6. DashboardPreview: chart thumbnail ------------------------------
export const DashboardPreview = () => {
    const bars = [12, 18, 14, 22, 16, 28, 24, 34, 30, 38, 32, 42];
    return (
        <div className={styles.dash}>
            <div className={styles.dashHead}>
                <span>State of Solana DEXs</span>
                <span className={styles.dashPill}>Q4</span>
            </div>
            <div className={styles.dashChart}>
                {bars.map((h, i) => (
                    <span
                        key={i}
                        className={styles.dashBar}
                        style={{
                            height: `${h * 1.2}%`,
                            animationDelay: `${i * 0.04}s`,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};
