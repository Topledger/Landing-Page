import Image from "next/image";

import HeroSection from "@/components/HeroSection";

import styles from "./index.module.scss";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Chip from "@/components/Chip";

const ResearchHeroSection = () => {
  return (
    <HeroSection
      className={styles.landingHeroSection}
      containerClassName={styles.heroSectionContainer}
      backgroundColor="#F7F7FF"
    >
      <div className={styles.detailsSection}>
        <p className={styles.tags}>
          <Chip className={styles.chip} color="#6467C5">
            Institutions & Market intelligence platforms
          </Chip>
        </p>
        <h1 className={styles.heading}>
          Trusted data source for advanced use cases
        </h1>
        <p className={styles.subHeading}>
          Whether you&apos;re training an AI agent, conducting industry-leading
          crypto research, or creating a DeFi simulator, Top Ledger is your
          go-to data provider for Solana
        </p>
        <p className={styles.description}>
          <Button className={styles.trialButton} primary color="#4A7DFF">
            Schedule a call
          </Button>
        </p>
      </div>
      <p className={styles.image}>
        <Image
          src="/assets/images/research/data-source-8b.png"
          width={457}
          height={490}
          alt="Top Ledger for web3 teams"
        />
      </p>
      <span className={styles.scrollIcon}>
        <Icon name="scroll" width={32} height={49} />
      </span>
    </HeroSection>
  );
};

export default ResearchHeroSection;
