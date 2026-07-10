import { useEffect, useRef, useState } from "react";

import styles from "./index.module.scss";

// ============================================================================
// HoverPill — a single soft pill that morphs (position + width) between the
// hovered nav items. Pure DOM measurements + transform-only animation, so
// it's smooth and cheap. Hidden when nothing is hovered.
//
// Implementation notes:
//   • Listens to pointerenter/leave on the container and reads bounding
//     rects of `.nav-item` elements.
//   • `prefers-reduced-motion` users get instant snaps with no transition.
// ============================================================================

const HoverPill = ({ containerSelector }) => {
    const pillRef = useRef(null);
    const [reduced, setReduced] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined" || !window.matchMedia) return;
        setReduced(
            window.matchMedia("(prefers-reduced-motion: reduce)").matches,
        );
    }, []);

    useEffect(() => {
        if (typeof document === "undefined") return;
        const container = document.querySelector(containerSelector);
        const pill = pillRef.current;
        if (!container || !pill) return;

        const move = (target) => {
            const cRect = container.getBoundingClientRect();
            const tRect = target.getBoundingClientRect();
            const x = tRect.left - cRect.left;
            const w = tRect.width;
            pill.style.opacity = "1";
            pill.style.width = `${w}px`;
            pill.style.transform = `translateX(${x}px)`;
        };

        const hide = () => {
            pill.style.opacity = "0";
        };

        const onOver = (e) => {
            const item = e.target.closest("[data-nav-item]");
            if (item && container.contains(item)) move(item);
        };

        const onLeave = (e) => {
            // only hide when the pointer leaves the whole nav
            if (!container.contains(e.relatedTarget)) hide();
        };

        container.addEventListener("pointerover", onOver);
        container.addEventListener("pointerleave", onLeave);
        return () => {
            container.removeEventListener("pointerover", onOver);
            container.removeEventListener("pointerleave", onLeave);
        };
    }, [containerSelector]);

    return (
        <span
            ref={pillRef}
            className={styles.hoverPill}
            data-reduced={reduced ? "true" : "false"}
            aria-hidden="true"
        />
    );
};

export default HoverPill;
