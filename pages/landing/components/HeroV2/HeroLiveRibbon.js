import { useEffect, useState } from "react";

import styles from "./HeroLiveRibbon.module.scss";

// ============================================================================
// HeroLiveRibbon — a single quiet line of live data underneath the hero.
//
// Six mono items separated by faint dots. The slot number ticks at roughly
// Solana's real cadence (~400ms) and the events/sec + block-time wobble
// gently around plausible values. Reduced-motion users get a static line.
//
// Visually this should feel like a status bar in a high-end IDE — present,
// trustworthy, and silent until you look at it.
// ============================================================================

const SEED = {
    slot: 312_894_211,
    tps: 4210,
    block: 412,
};

const HeroLiveRibbon = () => {
    const [vals, setVals] = useState(SEED);

    useEffect(() => {
        if (
            typeof window !== "undefined" &&
            window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
            return;
        }

        const id = setInterval(() => {
            setVals((v) => ({
                slot: v.slot + 1,
                tps: Math.max(
                    3800,
                    Math.min(4600, Math.round(v.tps + (Math.random() - 0.5) * 90)),
                ),
                block: Math.max(
                    380,
                    Math.min(440, Math.round(v.block + (Math.random() - 0.5) * 14)),
                ),
            }));
        }, 420);

        return () => clearInterval(id);
    }, []);

    return (
        <div
            className={styles.ribbon}
            role="status"
            aria-live="off"
            aria-label="Live Solana network status"
        >
            <div className={styles.inner}>
                <span className={styles.indicator}>
                    <span className={styles.dot} aria-hidden="true" />
                    <span className={styles.indicatorLabel}>live</span>
                </span>
                <Sep />
                <Item label="slot" value={vals.slot.toLocaleString("en-US")} />
                <Sep />
                <Item label="events" value={`${vals.tps.toLocaleString("en-US")}/s`} />
                <Sep />
                <Item label="block" value={`${vals.block}ms`} />
                <Sep className={styles.sepHideMd} />
                <Item
                    label="freshness"
                    value="<5s"
                    className={styles.itemHideMd}
                />
                <Sep className={styles.sepHideMd} />
                <Item
                    label="uptime"
                    value="99.95%"
                    className={styles.itemHideMd}
                />
            </div>
        </div>
    );
};

const Item = ({ label, value, className = "" }) => (
    <span className={`${styles.item} ${className}`}>
        <span className={styles.itemLabel}>{label}</span>
        <span className={styles.itemValue}>{value}</span>
    </span>
);

const Sep = ({ className = "" }) => (
    <span className={`${styles.sep} ${className}`} aria-hidden="true">
        ·
    </span>
);

export default HeroLiveRibbon;
