import Header from "@/components/Header";
import Page from "@/components/Page";

import LandingHeroSection from "./components/LandingHeroSection";
import ArticleSection from "./components/ArticleSection";

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
      actionElements: [{ type: "search", text: "Enter a solana wallet" }],
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

const LandingPage = () => {
  return (
    <Page>
      <Header />
      <LandingHeroSection />
      <ArticleSection articles={articles} />
    </Page>
  );
};

export default LandingPage;
