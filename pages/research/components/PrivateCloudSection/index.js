import Section from "@/components/Section";

import styles from "./index.module.scss";
import Card from "@/components/Card";
import { getAction } from "@/components/ArticleCard/ArticleFooter";
import Image from "next/image";
import Icon from "@/components/Icon";
import Button from "@/components/Button";
import UnderlinedText from "@/components/UnderlinedText";

// const sections = [
//   {
//     title: "Tailored schemas to fit your specific needs",
//     features: [
//       {
//         title: "DEX trades",
//         description:
//           "Decoding perpetual swaps to analyze the derivatives ecosystem",
//       },
//       {
//         title: "NFT/cNFT mints and trades",
//         description: "Access the activities of all stablecoins and SPL tokens",
//       },
//       {
//         title: "Staking",
//         description: "Decoded data for all DePIN protocols on Solana",
//       },
//       {
//         title: "Perpetuals",
//         description:
//           "Decoding perpetual swaps to analyze the derivatives ecosystem",
//       },
//       {
//         title: "Stablecoin activities",
//         description: "Access the activities of all stablecoins and SPL tokens",
//       },
//       {
//         title: "DePIN",
//         description: "Decoded data for all DePIN protocols on Solana",
//       },
//     ],
//   },
//   {
//     title: "Powering the most advanced use cases of the industry",
//     features: [
//       {
//         title: "Market intelligence & reporting",
//         description:
//           "Fuel your research reports effortlessly, without concerning yourself with the underlying data",
//       },
//       {
//         title: "Intelligent trading strategies",
//         description:
//           "Build trading tactics and develop backtesting systems by employing data science techniques",
//       },
//       {
//         title: "AI models",
//         description:
//           "Train custom AI models from trusted and curatedon-chain data",
//       },
//       {
//         title: "Wallet profiling at scale",
//         description:
//           "Compute customized attributes and enhance your wallet profiling and cohort segmentation applications",
//       },
//     ],
//   },
// ]

const CloudSection = ({ section = [] }) => {
  return (
    <div className={styles.cloudSection}>
      <h3 className={styles.cloudSectionTitle}>{section.title}</h3>
      <div
        className={styles.cloudSectionFeatures}
        style={{ gridTemplateColumns: `repeat(${section.columns}, 1fr)` }}
      >
        {section.features?.map((feature, index) => (
          <div className={styles.cloudSectionFeature} key={index}>
            <h4 className={styles.cloudSectionFeatureTitle}>{feature.title}</h4>
            <p className={styles.cloudSectionFeatureDescription}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const PrivateCloudFeatures = ({ image, sections = [] }) => {
  return (
    <div className={styles.cloudSectionContainer}>
      {sections?.map((section, index) => (
        <>
          <CloudSection section={section} />
          {index !== sections.length - 1 && (
            <div className={styles.cloudSectionDivider}>{image}</div>
          )}
        </>
      ))}
    </div>
  );
};

const PrivateCloudSection = ({ sections = [] }) => {
  return (
    <Section containerStyle={{ paddingTop: "120px", paddingBottom: "120px" }}>
      <div className={styles.sectionHead}>
        <div>
          <h2 className={styles.sectionTitle}>
            <UnderlinedText>Fast, reliable and decoded</UnderlinedText> Solana
            data in your private cloud
          </h2>
        </div>
        <p className={styles.sectionDescription}>
          Seamless integration of decoded data into your existing systems,
          empowering you to enhance your market research and advanced analytics
        </p>
        <div className={styles.chartIcons}>
          {["#F1F5FF", "#F8F0FF", "#EDFAF2", "#FCF4EF", "#F2EFFF"].map(
            (color, index) => (
              <span
                key={color}
                className={styles.chartIcon}
                style={{ backgroundColor: color }}
              >
                <Image
                  src={`/assets/images/landing/culture-icon-${index + 1}.svg`}
                  width={100}
                  height={100}
                  alt={`culture-icon-${index + 1}`}
                />
              </span>
            )
          )}
        </div>
      </div>
      <div className={styles.sectionBody}>
        <div className={styles.cultureContainer}>
          <PrivateCloudFeatures
            sections={sections}
            image={
              <Image
                src="/assets/images/research/private-cloud.svg"
                width={328}
                height={511}
                alt="Private Cloud"
              />
            }
          />
        </div>
        <div className={styles.sectionAction}>
          <span className={styles.scheduleMessage}>
            We collaborate closely with you to gain a thorough understanding of
            your specific needs and offer comprehensive enterprise support
            throughout the entire process
          </span>
          <Button primary color="#085ED4">
            Schedule a call
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default PrivateCloudSection;
