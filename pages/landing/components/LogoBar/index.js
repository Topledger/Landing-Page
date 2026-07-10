import Image from "next/image";

import styles from "./index.module.scss";

// Restrained, single-row, no-marquee. Each logo gets its brand colour on
// hover via a CSS filter chain. Uses only logos that actually exist in the
// /public/assets/images/logo directory.
const LOGOS = [
    { name: "Solana Foundation", src: "/assets/images/logo/solana-foundation.svg", w: 156 },
    { name: "Drift Protocol",    src: "/assets/images/logo/drift-protocol.svg",    w: 132 },
    { name: "Helium Foundation", src: "/assets/images/logo/helium-foundation.svg", w: 144 },
    { name: "Metaplex",          src: "/assets/images/logo/metaplex.svg",          w: 132 },
    { name: "Squads Labs",       src: "/assets/images/logo/squads-labs.svg",       w: 124 },
];

const LogoBar = () => (
    <section className={styles.section} aria-labelledby="logobar-heading">
        <div className={styles.container}>
            <p id="logobar-heading" className={styles.label}>
                Trusted by teams building on Solana
            </p>
            <ul className={styles.logos}>
                {LOGOS.map((logo) => (
                    <li key={logo.name} className={styles.logo}>
                        <Image
                            src={logo.src}
                            alt={logo.name}
                            width={logo.w}
                            height={32}
                        />
                    </li>
                ))}
            </ul>
        </div>
    </section>
);

export default LogoBar;
