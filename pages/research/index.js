import Header from "@/components/Header";
import Page from "@/components/Page";

import ResearchHeroSection from "./components/ResearchHeroSection";

import TrialSection from "@/components/TrialSection";
import PrivateCloudSection from "./components/PrivateCloudSection";
import FeatureSuiteSection from "../web3-teams/components/FeautreSuiteSection";

const privateCloud = [
  {
    title: "Tailored schemas to fit your specific needs",
    features: [
      {
        title: "DEX trades",
        description:
          "Decoded data from all DEXs and aggregators since 2021",
      },
      {
        title: "NFT/cNFT mints and trades",
        description: "All NFT/cNFT decoded data to analyze primary & secondary GMV",
      },
      {
        title: "Staking",
        description: "All native and liquid staking decoded transactions",
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
    titleMobile: "Powering the most advanced use cases",
    customClass: "part-2",
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
