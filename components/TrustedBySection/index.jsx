import cx from "classnames";

import styles from "./index.module.scss";

const trustees = [
  {
    link: "https://solana.org/",
    icon: "/assets/images/trustee-icons/solana-foundation.svg",
    name: "Solana Foundation",
  },
  {
    link: "https://www.metaplex.com/",
    icon: "/assets/images/trustee-icons/metaplex.svg",
    name: "Metaplex",
  },
  {
    link: "https://www.orca.so/",
    icon: "/assets/images/trustee-icons/orca.svg",
    name: "Orca",
  },
  {
    link: "https://www.drift.trade/",
    icon: "/assets/images/trustee-icons/drift.svg",
    name: "Drift",
  },
  {
    link: "https://squads.so/",
    icon: "/assets/images/trustee-icons/squads.svg",
    name: "Squads",
  },
  {
    link: "https://switchboard.xyz/",
    icon: "/assets/images/trustee-icons/switchboard.svg",
    name: "Switchboard",
  },
  {
    link: "https://drip.haus/",
    icon: "/assets/images/trustee-icons/drip.svg",
    name: "Drip",
  },
  {
    link: "https://www.frakt.xyz/",
    icon: "/assets/images/trustee-icons/frakt.svg",
    name: "Frakt",
  },
];

const TrustedBySection = () => {
  return (
    <section className={cx("main-Section", styles.trustees)}>
      <div className="trustedText">
        <p>Trusted by</p>
      </div>
      <div className={styles.imagesContainer}>
        <div className={styles.bottomImages}>
          {trustees.map((trustee) => (
            <div className="icon" key={trustee.name}>
              <a href={trustee.link} target="_blank" rel="noreferrer">
                <img src={trustee.icon} alt={trustee.name} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
