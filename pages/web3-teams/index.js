import Head from "next/head";
import Header from "@/components/Header";
import Page from "@/components/Page";
import Announceband from "@/components/announceband";

import Web3HeroSection from "./components/Web3HeroSection";

import TrialSection from "@/components/TrialSection";
import FeaturesSection from "./components/FeaturesSection";
import DashboardsSection from "./components/DashboardsSection";
import FeatureSuiteSection from "./components/FeautreSuiteSection";
import CaseStudySection from "./components/CaseStudySection";
import QueryFormModal from "@/components/QueryForm/QueryFormModal";
import {
  // dashboardSorter,
  // getAllDashboards,
  // getCreationDate,
  dashboards,
} from "helpers/dashboard";
import { DASHBOARD_ICONS } from "pages/dashboards";

const features = [
  {
    color: "#DCE6FF",
    bulletColor: "#4968B6",
    media: {
      type: "image",
      src: "/assets/images/web3-teams/feature-decoded-data.svg",
      backgroundColor: "#EDF2FF",
    },
    tags: [{ text: "Fast-track onboarding", color: "#4968B6" }],
    title: "Access decoded data",
    description:
      "We maintain a historical archive of decoded instructions and events for hundreds of programs on Solana, enabling you to easily create more in-depth metrics",
    features: [
      "Custom indexing",
      "Flexible schemas",
      "SQL to API",
      "Private dashboards",
    ],
    cta: [
      {
        key: "documentation",
        type: "link",
        text: "Documentation",
        target: "_blank",
        href: "https://docs.topledger.xyz",
      },
    ],
  },
  {
    color: "#F1E0FF",
    bulletColor: "#9F62DD",
    media: {
      type: "image",
      src: "/assets/images/web3-teams/feature-wallet-behaviour-analytics.svg",
      backgroundColor: "#F8F0F6",
    },

    tags: [{ text: "Know your users", color: "#9F62DD" }],
    title: "Wallet behaviour analytics",
    description:
      "We index every wallet on Solana, along with their activities across DEXs, NFTs, DePINs, LST protocols, perpetuals, and more. This enables you to analyze all of your users",
    features: [
      "No code required",
      "Dynamic filters",
      "Real time",
      "CSV export",
    ],
    cta: [
      {
        id: "analyze-now",
        type: "link",
        text: "Analyze now",
        target: "_blank",
        onClick: QueryFormModal.show,
      },
    ],
  },
  {
    color: "#E8E9FA",
    bulletColor: "#59B077",
    media: {
      type: "image",
      src: "/assets/images/web3-teams/feature-competetive-analysis.svg",
      backgroundColor: "#DDF8E7",
    },
    tags: [{ text: "Know your competitor", color: "#59B077" }],
    title: "Competitive Analysis",
    description:
      "Our archive of decoded data, up-to-date schemas and taggings helps you quickly analyze the entire competitive landscape without any hassle",
    features: [
      //"Monthly swap volume - DEX",
      "Sectoral analysis",
      "Ecosystem analysis",
    ],
    cta: [
      {
        id: "start-trial",
        type: "link",
        text: "Start a free trail",
        target: "_blank",
        onClick: QueryFormModal.show,
      },
    ],
  },
];

const featureSuites = [
  {
    media: {
      type: "image",
      src: "/assets/images/feature-suite/private-db.svg",
    },
    title: "Connect private DB",
    description:
      "Securely connect your private data source to the Top Ledger platform and collate it with decoded on-chain Solana data",
    cta: [
      {
        id: "connect-db",
        type: "link",
        text: "Supported DBs",
        target: "_blank",
        href: "https://docs.topledger.xyz/developer-docs/supported-dbs",
      },
    ],
  },
  {
    media: {
      type: "image",
      src: "/assets/images/feature-suite/set-alerts.svg",
    },
    title: "Set alerts",
    description:
      "Set alerts on any chart to receive notifications in both your Slack and Discord channels",
    cta: [
      {
        id: "set-alerts",
        type: "link",
        text: "Demo",
        target: "_blank",
        href: "https://docs.topledger.xyz",
      },
    ],
  },
  {
    media: {
      type: "image",
      src: "/assets/images/feature-suite/dashboard-component.svg",
    },
    title: "Cast your dashboards",
    description:
      "Our React component lets you effortlessly integrate any dashboard into your website, complementing your UI/UX design",
    cta: [
      {
        id: "cast-dashboards",
        type: "link",
        text: "Live Example",
        target: "_blank",
        href: "https://app.drift.trade/stats",
      },
    ],
  },
];

const caseStudies = [
  {
    media: {
      type: "image",
      src: "/assets/images/case-study/drift-case-study.png",
    },
    title: "Drift Protocol’s Data-Driven Journey with Top Ledger",
    description:
      "Drift Protocol is an open-sourced, decentralized exchange built on the Solana blockchain...",
    cta: [
      {
        id: "case-study-drift-protocol",
        type: "link",
        text: "Read full case study",
        target: "_blank",
        href: "https://blogs.topledger.xyz/case-study-drift-protocols-data-driven-journey-with-top-ledger-741d378293d0",
      },
    ],
  },
  {
    media: {
      type: "image",
      src: "/assets/images/case-study/squads-labs-case-study.png",
    },
    title: "Squads Utilizes Top Ledger’s Analytics Platform",
    description:
      "Squads is a platform aimed at simplifying the management of developer and treasury assets...",
    cta: [
      {
        id: "case-study-squads",
        type: "link",
        text: "Read full case study",
        target: "_blank",
        href: "https://blogs.topledger.xyz/how-squads-utilizes-top-ledgers-analytics-platform-for-data-driven-growth-1f1bf7a4d150",
      },
    ],
  },
  {
    media: {
      type: "image",
      src: "/assets/images/case-study/switchboard-case-study.png",
    },
    title: "Switchboard: Linking real-world data to blockchains",
    description:
      "Switchboard is a revolutionary multi-chain oracle protocol designed to address the ...",
    cta: [
      {
        id: "case-study-switchboard",
        type: "link",
        text: "Read full case study",
        target: "_blank",
        href: "https://blogs.topledger.xyz/switchboard-linking-real-world-data-to-blockchains-da1db7da6ab4",
      },
    ],
  },
];

const Web3TeamsPage = ({ dashboards }) => {
  return (
    <Page>
      <Head>
        {/* Basic Meta Tags */}
        <title>Top Ledger - Web3 Analytics for Solana Teams</title>
        <meta
          name="description"
          content="Empower your Web3 team with advanced blockchain analytics. Access decoded Solana data, wallet behavior analytics, custom dashboards, competitive analysis, and AI-driven insights."
        />
        <meta
          name="keywords"
          content="Web3 analytics, Solana analytics, decoded data, wallet behavior analytics, competitive analysis, dashboards for Solana, blockchain analytics, trading strategies, DePIN, LST protocols, perpetual swaps, NFT analysis, private databases, Top Ledger case studies, blockchain research, AI models, ecosystem analysis"
        />
        <meta name="author" content="Top Ledger Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Tags for Social Media */}
        <meta
          property="og:title"
          content="Top Ledger - Web3 Analytics for Solana Teams"
        />
        <meta
          property="og:description"
          content="Leverage Top Ledger’s Web3 analytics for decoded Solana data, wallet profiling, competitive analysis, and data-driven growth. Explore case studies and actionable insights."
        />
        <meta property="og:image" content="/assets/images/web3-teams/og-web3.jpg" />
        <meta property="og:url" content="https://www.topledger.xyz/web3-teams" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top Ledger - Web3 Analytics for Solana Teams" />
        <meta
          name="twitter:description"
          content="Access Solana blockchain analytics with Top Ledger: Wallet behavior analytics, competitive analysis, and private dashboards for your Web3 team."
        />
        <meta name="twitter:image" content="/assets/images/web3-teams/twitter-card-web3.jpg" />
        <meta name="twitter:site" content="@TopLedger" />

        {/* Extended Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="rating" content="General" />
        <meta name="distribution" content="global" />
        <meta name="application-name" content="Top Ledger" />
        <meta name="theme-color" content="#FFFFFF" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://www.topledger.xyz/web3-teams" />
      </Head>
      <Header />
      <Announceband />
      <Web3HeroSection />
      <FeaturesSection features={features} />
      <DashboardsSection dashboards={dashboards} />
      <FeatureSuiteSection features={featureSuites} />
      <CaseStudySection caseStudies={caseStudies} />
      <TrialSection />
    </Page>
  );
};

Web3TeamsPage.getInitialProps = async () => {
  // const dashboards = await getAllDashboards();
  // const sorter = dashboardSorter(getCreationDate, "desc");
  // return {
  //   dashboards: dashboards?.data
  //     ?.sort(sorter)
  //     ?.filter((d) => DASHBOARD_ICONS[d.attributes.title])
  //     ?.map((d) => ({
  //       id: d.id,
  //       name: d.attributes.title,
  //       href: d.attributes.link,
  //       icon:
  //         d.attributes.icon ??
  //         DASHBOARD_ICONS[d.attributes.title] ??
  //         "/assets/images/dashboards/solana.svg",
  //     }))
  //     .slice(0, 5),
  // };

  return { dashboards: dashboards.slice(0, 5) };
};

export default Web3TeamsPage;
