import Header from "@/components/Header";
import Page from "@/components/Page";

import ResearchHeroSection from "./components/ResearchHeroSection";

import TrialSection from "@/components/TrialSection";
import FeatureSuiteSection from "./components/FeautreSuiteSection";
import PrivateCloudSection from "./components/PrivateCloudSection";

const privateCloud = [
  {
    title: "Tailored schemas to fit your specific needs",
    features: [
      {
        title: "DEX trades",
        description:
          "Decoding perpetual swaps to analyze the derivatives ecosystem",
      },
      {
        title: "NFT/cNFT mints and trades",
        description: "Access the activities of all stablecoins and SPL tokens",
      },
      {
        title: "Staking",
        description: "Decoded data for all DePIN protocols on Solana",
      },
      {
        title: "Perpetuals",
        description:
          "Decoding perpetual swaps to analyze the derivatives ecosystem",
      },
      {
        title: "Stablecoin activities",
        description: "Access the activities of all stablecoins and SPL tokens",
      },
      {
        title: "DePIN",
        description: "Decoded data for all DePIN protocols on Solana",
      },
    ],
    columns: 3,
  },
  {
    title: "Powering the most advanced use cases of the industry",
    features: [
      {
        title: "Market intelligence & reporting",
        description:
          "Fuel your research reports effortlessly, without concerning yourself with the underlying data",
      },
      {
        title: "Intelligent trading strategies",
        description:
          "Build trading tactics and develop backtesting systems by employing data science techniques",
      },
      {
        title: "AI models",
        description:
          "Train custom AI models from trusted and curatedon-chain data",
      },
      {
        title: "Wallet profiling at scale",
        description:
          "Compute customized attributes and enhance your wallet profiling and cohort segmentation applications",
      },
    ],
    columns: 2,
  },
];

const featureSuites = [
  {
    media: {
      type: "image",
      src: "/assets/images/feature-suite/private-db.svg",
    },
    title: "Data integrity",
    description:
      "Securely connect your private data source to the Top Ledger platform and collate it with decoded on-chain Solana data",
  },
  {
    media: {
      type: "image",
      src: "/assets/images/feature-suite/set-alerts.svg",
    },
    title: "Speed",
    description:
      "Set alerts on any chart to receive notifications in both your Slack and Discord channels",
  },
  {
    media: {
      type: "image",
      src: "/assets/images/feature-suite/dashboard-component.svg",
    },
    title: "Custom Infra",
    description:
      "Our React component lets you effortlessly integrate any dashboard into your website, complementing your UI/UX design",
  },
];

const ResearchPage = () => {
  return (
    <Page>
      <Header />
      <ResearchHeroSection />
      <PrivateCloudSection sections={privateCloud} />
      <FeatureSuiteSection features={featureSuites} />
      <TrialSection />
    </Page>
  );
};

export default ResearchPage;
