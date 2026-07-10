import { useEffect } from "react";
import Link from "next/link";

import styles from "./MobileDrawer.module.scss";

// ============================================================================
// MobileDrawer — full-screen overlay menu for narrow viewports.
// Massive type, stagger reveal on open, includes both flat links and
// expanded product/use-case lists in groups.
// ============================================================================

const MobileDrawer = ({
    open,
    onClose,
    products,
    useCases,
    simpleLinks,
}) => {
    useEffect(() => {
        if (!open) return;
        const onKey = (e) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    return (
        <div
            className={styles.drawer}
            data-open={open ? "true" : "false"}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            aria-hidden={!open}
        >
            <button
                type="button"
                className={styles.backdrop}
                onClick={onClose}
                aria-label="Close menu"
                tabIndex={open ? 0 : -1}
            />

            <div className={styles.panel}>
                <div className={styles.head}>
                    <span className={styles.brand}>Top Ledger</span>
                    <button
                        type="button"
                        className={styles.close}
                        onClick={onClose}
                        aria-label="Close menu"
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                        >
                            <path
                                d="m4 4 8 8M12 4l-8 8"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>
                </div>

                <div className={styles.body}>
                    <Group label="Products" items={products} index={0} onClose={onClose} />
                    <Group label="Use cases" items={useCases} index={1} onClose={onClose} />
                    <Group
                        label="More"
                        items={simpleLinks.map((s) => ({
                            id: s.id,
                            title: s.label,
                            href: s.href,
                            external: s.external,
                        }))}
                        index={2}
                        onClose={onClose}
                    />
                </div>

                <div className={styles.foot}>
                    <Link href="https://calendly.com/nitin_topledger/30min">
                        <a
                            className={styles.cta}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={onClose}
                        >
                            Schedule a call
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
                </div>
            </div>
        </div>
    );
};

const Group = ({ label, items, index, onClose }) => (
    <section
        className={styles.group}
        style={{ "--g-stagger": `${120 + index * 60}ms` }}
    >
        <p className={styles.groupLabel}>{label}</p>
        <ul className={styles.groupList}>
            {items.map((item, i) => (
                <li
                    key={item.id}
                    className={styles.groupItem}
                    style={{ "--i-stagger": `${180 + index * 60 + i * 30}ms` }}
                >
                    {item.external ? (
                        <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={onClose}
                        >
                            <span>{item.title}</span>
                            <ArrowExt />
                        </a>
                    ) : (
                        <Link href={item.href || "#"}>
                            <a onClick={onClose}>
                                <span>{item.title}</span>
                                <ArrowInt />
                            </a>
                        </Link>
                    )}
                </li>
            ))}
        </ul>
    </section>
);

const ArrowInt = () => (
    <svg width="18" height="18" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path
            d="M3 7h8M7 3l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const ArrowExt = () => (
    <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path
            d="M5 3h6v6M11 3 4 10"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default MobileDrawer;
