import Head from "next/head";
import Header from "@/components/Header";
import Page from "@/components/Page";

import ResearchHeroSection from "./components/ResearchHeroSection";

import TrialSection from "@/components/TrialSection";
import PrivateCloudSection from "./components/PrivateCloudSection";
import FeatureSuiteSection from "../web3-teams/components/FeautreSuiteSection";

const privateCloud = [
  {
    title: "Tailored schemas to fit your specific needs",
    cta: {
      text: "more",
      icon: "arrow-right-dark",
      type: "link",
      href: "https://docs.topledger.xyz/data-tables/smart-tables",
    },
    features: [
      {
        title: "DEX trades",
        description: "Decoded data from all DEXs and aggregators since 2021",
      },
      {
        title: "NFT/cNFT mints and trades",
        description:
          "All NFT/cNFT decoded data to analyze primary & secondary GMV",
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
      <Head>
        {/* Basic Meta Tags */}
        <title>Top Ledger - Research and Advanced Blockchain Analytics</title>
        <meta
          name="description"
          content="Leverage advanced blockchain analytics with Top Ledger. Access decoded Solana data for DEX trades, NFT/cNFT activities, staking, stablecoin transactions, and AI-driven insights for market intelligence and trading strategies."
        />
        <meta
          name="keywords"
          content="Solana analytics, DEX trades, NFT analytics, cNFT activities, staking analytics, perpetual swaps, DePIN protocols, stablecoin activities, blockchain research, market intelligence, wallet profiling, AI models, trading strategies, data integrity, on-chain data, custom infra, private cloud analytics, Top Ledger research"
        />
        <meta name="author" content="Top Ledger Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Tags for Social Media */}
        <meta
          property="og:title"
          content="Top Ledger - Research and Advanced Blockchain Analytics"
        />
        <meta
          property="og:description"
          content="Empowering blockchain research with decoded Solana data: DEX trades, NFT/cNFT analytics, staking, stablecoin transactions, and AI-driven solutions for trading and market intelligence."
        />
        <meta property="og:image" content="/assets/images/research/og-research.jpg" />
        <meta property="og:url" content="https://www.topledger.xyz/research" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top Ledger - Research and Advanced Blockchain Analytics" />
        <meta
          name="twitter:description"
          content="Leverage Top Ledger's research solutions for advanced blockchain analytics, wallet profiling, market intelligence, and AI-driven trading strategies."
        />
        <meta name="twitter:image" content="/assets/images/research/twitter-card-research.jpg" />
        <meta name="twitter:site" content="@TopLedger" />

        {/* Extended Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="rating" content="General" />
        <meta name="distribution" content="global" />
        <meta name="application-name" content="Top Ledger" />
        <meta name="theme-color" content="#FFFFFF" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://www.topledger.xyz/research" />
      </Head>
      <Header />
      <ResearchHeroSection />
      <PrivateCloudSection sections={privateCloud} />
      <FeatureSuiteSection features={featureSuites} />
      <TrialSection />
    </Page>
  );
};

export default ResearchPage;
