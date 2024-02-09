import Image from "next/image";

import HeroSection from "@/components/HeroSection";

import styles from "./index.module.scss";

const LandingHeroSection = () => {
  return (
    <HeroSection
      className={styles.landingHeroSection}
      background="/assets/images/landing/block-chain-hero-80.jpg"
    >
      <p className={styles.subHeading}>End to End</p>
      <h1 className={styles.heading}>Blockchain Analytics</h1>
      <p className={styles.description}>
        <span>Powering the best</span>
        <span className={styles.hiddenMobile}>
          in the
          <span style={{ 
            transform: 'translate(0px, 4px)',
    display: 'inline-block',
    margin: '0rem 0.25rem', }}>
            <Image
              src="/assets/images/landing/solanaLogo.svg"
              width={96}
              height={18}
              alt="Solana"
            />
          </span>
          <span>ecosystem</span>
        </span>
      </p>
      <p className={styles.companyLogos}>
        {/* <Image
          src={"/assets/images/landing/company-logos.svg"}
          width={836}
          height={40}
        /> */}
      </p>
    </HeroSection>
  );
};

export default LandingHeroSection;
