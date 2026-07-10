import React from "react";

// Editorial-precision announcement band — slim, mono, charcoal.
// Originally a bright #2c67f2 strip; reworked to fit the new design system
// without breaking the contract for other pages that still mount it.

const AnnouncementBand = () => {
    return (
        <div style={styles.band}>
            <div style={styles.inner}>
                <span style={styles.dot} />
                <span style={styles.label}>New</span>
                <span style={styles.text}>Top Ledger APIs are live.</span>
                <a
                    href="https://api.topledger.xyz"
                    target="_blank"
                    rel="noreferrer"
                    style={styles.link}
                >
                    Check it out
                    <svg
                        width="11"
                        height="11"
                        viewBox="0 0 14 14"
                        fill="none"
                        aria-hidden="true"
                        style={{ marginLeft: 4 }}
                    >
                        <path
                            d="M5 3h6v6M11 3 4 10"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
};

const styles = {
    band: {
        backgroundColor: "var(--tl-ink, #0a0b0e)",
        color: "var(--tl-text-on-ink-muted, rgba(250,250,250,0.72))",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
    },
    inner: {
        maxWidth: 1240,
        margin: "0 auto",
        padding: "10px clamp(20px, 4vw, 64px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        fontSize: 13,
        flexWrap: "wrap",
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: "50%",
        background: "var(--tl-solana-mint, #14f195)",
        boxShadow: "0 0 0 3px rgba(20, 241, 149, 0.18)",
    },
    label: {
        fontFamily: "var(--tl-font-mono, monospace)",
        fontSize: 10,
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        color: "var(--tl-solana-mint, #14f195)",
        fontWeight: 600,
    },
    text: {
        color: "rgba(250,250,250,0.78)",
    },
    link: {
        color: "var(--tl-text-on-ink, #fafafa)",
        textDecoration: "none",
        fontWeight: 500,
        display: "inline-flex",
        alignItems: "center",
    },
};

export default AnnouncementBand;
