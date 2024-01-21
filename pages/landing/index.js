import Header from "@/components/Header";
import Page from "@/components/Page";

import LandingHeroSection from "./components/LandingHeroSection";
import ArticleSection from "./components/ArticleSection";
import Section from "@/components/Section";
import OutcomesSection from "./components/OutcomesSection";
import DataCultureSection from "./components/CultureSection";

const articles = [
  {
    id: 1,
    tags: [{ text: "Web3 teams", color: "#3678C5" }],
    title: "SQL based analytics platform",
    description:
      "Create comprehensive dashboards with deeper competitive insights, broader user profiling, and in-depth ecosystem analysis",
    image: "/assets/images/landing/article-1.jpg",
    footer: {
      actionElements: [
        { type: "button", text: "See details" },
        {
          type: "link",
          text: "Public dashboards",
          target: "_blank",
          href: "https://app.topledger.io",
        },
      ],
    },
  },
  {
    id: 2,
    tags: [{ text: "Crypto investors", color: "#9F62DD" }],
    title: "Wallet profiler",
    description:
      "Track individual wallet activity across DEXs, NFT or cNFT marketplaces, LST protocols, perpetuals, lending & borrowing platforms, DePIN, and more",
    image: "/assets/images/landing/article-2.jpg",
    footer: {
      actionElements: [
        { type: "search", placeholder: "Enter a solana wallet" },
      ],
    },
  },
  {
    id: 3,
    tags: [
      {
        text: "Institutions & Market intelligence platforms",
        color: "#6467C5",
      },
    ],
    title: "Top Ledger for research",
    description:
      "Forget about data integrity, speed, and infrastructure customization. Access decoded Solana data on your private cloud, including DEX trades, NFT/cNFT mints and trades, staking, DePIN, stablecoin activities, and more",
    image: "/assets/images/landing/article-3.jpg",
    footer: {
      actionElements: [
        { type: "button", text: "See details" },
        {
          type: "link",
          text: "Available schemas",
          target: "_blank",
          href: "https://app.topledger.io",
        },
      ],
    },
  },
  {
    id: 4,
    tags: [{ text: "Everyone", color: "#D4996D" }],
    title: "Top Ledger AI: Your trusted data ally",
    description:
      "Top Ledger AI is set to transform data analysis on Solana, simplifying large-scale insight consumption and accelerating decision-making",
    image: "/assets/images/landing/article-3.jpg",
    footer: {
      actionElements: [{ type: "button", text: "Coming soon" }],
    },
  },
];

const outcomes = [
  {
    id: 1,
    image: "/assets/images/landing/outcome-analysts.jpg",
    title: "For analysts",
    description:
      "Run blazingly fast SQL queries and leave auto-scaling, replication of workloads, rollup aggregations and custom data decoding to us",
    action: {
      type: "link",
      target: "_blank",
      text: "Start a free trial",
    },
  },
  {
    id: 2,
    image: "/assets/images/landing/outcome-businesses.jpg",
    title: "For business people",
    description:
      "Our user-friendly interface with upcoming AI capabilities accelerates data analysis, enabling quicker, more effective problem-solving and a stronger data-driven approach in business decision-making",
    action: {
      type: "link",
      target: "_blank",
      text: "Select a time",
    },
  },
  {
    id: 3,
    image: "/assets/images/landing/outcome-developers.jpg",
    title: "For developers",
    description:
      "Boost your development with Top Ledger API! Designed for seamless data integration on the Solana blockchain, our API empowers you to efficiently manage and query hundreds of decoded data tables",
    action: {
      type: "link",
      target: "_blank",
      text: "API guide",
    },
  },
];

const dataCultures = [
  {
    id: 1,
    title: "Uncompromising analytics - End to end solutions",
    description:
      "Our robust infrastructure, combined with our data indexing and decoding capabilities and enterprise support, ensures that you receive end-to-end analytics that are both broad and deep, without any interruption",
    action: {
      type: "link",
      target: "_blank",
      text: "See details",
    },
    bottomContent: {
      text: "Indexing Helium's on-chain and oracle data",
    },
  },
  {
    id: 2,
    title: "Top Ledger is your partner in data culture",
    description:
      "We collaborate with various teams in an organization to identify their specific data and analytics needs, aiming to improve operational efficiency and decision-making across all verticals",
    action: {
      type: "link",
      target: "_blank",
      text: "Success stories",
    },
    bottomContent: {
      text: "Multiple teams at Metaplex uses Top Ledger daily",
    },
  },
];

const LandingPage = () => {
  return (
    <Page>
      <Header />
      <LandingHeroSection />
      <ArticleSection articles={articles} />
      <OutcomesSection outcomes={outcomes} />
      <DataCultureSection dataCultures={dataCultures} />
    </Page>
  );
};

export default LandingPage;
