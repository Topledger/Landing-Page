import { useEffect, useRef, useState } from "react";

/**
 * useInView — fires `inView=true` once the element first enters the viewport.
 *
 * Designed for the "fade-in on scroll" and "count-up on scroll" patterns
 * used across the editorial landing page sections. Intentionally one-shot:
 * we don't want elements re-animating every time the user scrolls past.
 *
 * @param {object} options
 * @param {number} [options.threshold=0.15]      Intersection ratio to trigger.
 * @param {string} [options.rootMargin="0px"]    Margin around the root.
 * @param {boolean} [options.once=true]          Stop observing after first hit.
 * @returns {[React.RefObject, boolean]}
 */
const useInView = ({
    threshold = 0.15,
    rootMargin = "0px",
    once = true,
} = {}) => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        if (typeof IntersectionObserver === "undefined") {
            setInView(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    if (once) observer.disconnect();
                } else if (!once) {
                    setInView(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [threshold, rootMargin, once]);

    return [ref, inView];
};

export default useInView;
