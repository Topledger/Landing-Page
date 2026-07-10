import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import styles from "./index.module.scss";

const MAGNET_STRENGTH = 0.32;
const MAGNET_RADIUS = 96;

const FinalCta = () => {
    const buttonRef = useRef(null);
    const [reducedMotion, setReducedMotion] = useState(false);

    // Respect prefers-reduced-motion: skip the magnetic transform entirely
    // and let the button sit still for users with motion sensitivity.
    useEffect(() => {
        if (typeof window === "undefined" || !window.matchMedia) return;
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        const handler = (e) => setReducedMotion(e.matches);
        handler(mq);
        if (mq.addEventListener) {
            mq.addEventListener("change", handler);
            return () => mq.removeEventListener("change", handler);
        }
        mq.addListener(handler);
        return () => mq.removeListener(handler);
    }, []);

    const handleMove = (e) => {
        if (reducedMotion) return;
        const node = buttonRef.current;
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.hypot(dx, dy);
        if (dist > MAGNET_RADIUS + Math.max(rect.width, rect.height) / 2) {
            node.style.transform = "translate(0, 0)";
            return;
        }
        node.style.transform = `translate(${dx * MAGNET_STRENGTH}px, ${
            dy * MAGNET_STRENGTH
        }px)`;
    };

    const handleLeave = () => {
        const node = buttonRef.current;
        if (node) node.style.transform = "translate(0, 0)";
    };

    return (
        <section
            className={styles.section}
            aria-labelledby="cta-heading"
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
        >
            <div className={styles.mesh} aria-hidden="true">
                <span className={styles.blob1} />
                <span className={styles.blob2} />
                <span className={styles.blob3} />
            </div>
            <div className={styles.grid} aria-hidden="true" />

            <div className={styles.container}>
                <p className={styles.eyebrow}>
                    <span className={styles.eyebrowDot} />
                    Ready when your data is
                </p>
                <h2 id="cta-heading" className={styles.heading}>
                    Build on the
                    <br />
                    <span className={styles.headingAccent}>
                        decoded chain.
                    </span>
                </h2>
                <p className={styles.kicker}>
                    A 30-minute call is all it takes to scope the right data
                    layer for your team.
                </p>

                <div className={styles.ctaWrap}>
                    <Link href="https://calendly.com/nitin_topledger/30min">
                        <a
                            ref={buttonRef}
                            className={styles.cta}
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

                    <Link href="https://docs.topledger.xyz">
                        <a
                            className={styles.secondary}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Or read the docs
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
        </section>
    );
};

export default FinalCta;
