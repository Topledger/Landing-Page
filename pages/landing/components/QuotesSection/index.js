import { useState } from "react";

import styles from "./index.module.scss";

const QUOTES = [
    {
        id: "messari",
        body: "Top Ledger&rsquo;s decoded Solana data has become essential to how we ship coverage. The schemas are the cleanest in the ecosystem, and freshness is best-in-class.",
        name: "Messari Research",
        role: "Solana ecosystem coverage",
    },
    {
        id: "drift",
        body: "We replaced three internal pipelines with Top Ledger overnight. The team treats data infrastructure with the seriousness it deserves &mdash; we get to focus on the product.",
        name: "Drift Protocol",
        role: "Data &amp; analytics",
    },
    {
        id: "helium",
        body: "Reliable, decoded, queryable. That&rsquo;s the trifecta we needed for production analytics on Solana, and Top Ledger has delivered it for us at scale.",
        name: "Helium Foundation",
        role: "Network analytics",
    },
    {
        id: "raydium",
        body: "From metrics to research narratives, Top Ledger is the data layer behind a meaningful share of what gets published about our protocol.",
        name: "Raydium",
        role: "Protocol team",
    },
];

const QuotesSection = () => {
    const [idx, setIdx] = useState(0);
    const quote = QUOTES[idx];

    return (
        <section className={styles.section} aria-labelledby="quotes-heading">
            <div className={styles.container}>
                <p id="quotes-heading" className={styles.eyebrow}>
                    What teams say
                </p>

                <figure className={styles.figure} key={quote.id}>
                    <span className={styles.mark} aria-hidden="true">
                        &ldquo;
                    </span>
                    <blockquote
                        className={styles.body}
                        dangerouslySetInnerHTML={{ __html: quote.body }}
                    />
                    <figcaption className={styles.caption}>
                        <span className={styles.captionName}>
                            {quote.name}
                        </span>
                        <span className={styles.captionRole}>
                            {quote.role.replace(/&amp;/g, "&")}
                        </span>
                    </figcaption>
                </figure>

                <div
                    className={styles.dots}
                    role="tablist"
                    aria-label="Select testimonial"
                >
                    {QUOTES.map((q, i) => (
                        <button
                            key={q.id}
                            type="button"
                            role="tab"
                            aria-selected={i === idx}
                            aria-label={`Show quote from ${q.name}`}
                            className={styles.dot}
                            data-active={i === idx ? "true" : "false"}
                            onClick={() => setIdx(i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QuotesSection;
