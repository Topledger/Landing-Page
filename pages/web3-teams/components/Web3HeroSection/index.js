import Image from "next/image";

import HeroSection from "@/components/HeroSection";

import styles from "./index.module.scss";
import Button from "@/components/Button";
import Icon from "@/components/Icon";

const Web3HeroSection = () => {
  return (
    <HeroSection
      className={styles.landingHeroSection}
      containerClassName={styles.heroSectionContainer}
      backgroundColor="#F7F7FF"
    >
      <div className={styles.detailsSection}>
        <h1 className={styles.heading}>
          Transforming the way teams do{" "}
          <span style={{ color: "#4A7DFF" }}>data analytics</span>
        </h1>
        <p className={styles.subHeading}>
          Unlocking and unleashing the power of blockchain data has never been
          easier, until now
        </p>
        <p className={styles.description}>
          <Button className={styles.trialButton} primary color="#4A7DFF">
            Book a demo
          </Button>
        </p>
      </div>
      <p className={styles.image}>
        <Image
          src="/assets/images/web3-teams/hero-image.png"
          width={549}
          height={478}
          alt="Top Ledger for web3 teams"
        />
      </p>
      <span className={styles.scrollIcon}>
        <Icon name="scroll" width={32} height={49} />
      </span>
    </HeroSection>
  );
};

export default Web3HeroSection;
