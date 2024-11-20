import Head from "next/head";
import Header from "@/components/Header";
import Page from "@/components/Page";
import PricingSection from "./components/PricingSection";
import QueryFormModal from "@/components/QueryForm/QueryFormModal";

const pricing = [
  {
    media: {
      type: "image",
      src: "/assets/images/pricing/basic.svg",
      backgroundColor: "#F1F5FF",
    },
    name: "Basic",
    price: "750",
    currency: "$",
    period: "per month",
    features: [
      "Access to all decoded program tables",
      "CSV exports",
      "SQL to API",
      "Basic support",
    ],
    cta: [
      {
        type: "button",
        secondary: true,
        text: "Start with Basic",
        target: "_blank",
        onClick: () => QueryFormModal.show(),
      },
    ],
  },
  {
    media: {
      type: "image",
      src: "/assets/images/pricing/plus.svg",
      backgroundColor: "#F1E0FF",
    },
    name: "Plus",
    price: "1500",
    currency: "$",
    period: "per month",
    features: [
      "Access to all smart tables like dex-trades, nft-trades, staking, DePIN, bridges and more",
      "Unlimited custom data decoding & indexing",
      "Ability to connect private database",
      "Business support",
      "Access to all decoded program tables",
      "SQL to API",
      "CSV exports",
    ],
    cta: [
      {
        type: "button",
        secondary: true,
        text: "Start with Plus",
        target: "_blank",
        onClick: () => QueryFormModal.show(),
      },
    ],
  },
  {
    media: {
      type: "image",
      src: "/assets/images/pricing/pro.svg",
      backgroundColor: "#DCE6FF",
    },
    name: "Pro",
    price: "2500",
    currency: "$",
    period: "per month",
    features: [
      "Offload analytics workload",
      "Wallet behaviour analytics",
      "Custom APIs",
      "All Plus plan benefits",
    ],
    cta: [
      {
        type: "button",
        secondary: true,
        text: "Start with Pro",
        target: "_blank",
        onClick: () => QueryFormModal.show(),
      },
    ],
  },
];

const enterpricePricingPlan = {
  media: {
    type: "image",
    src: "/assets/images/pricing/enterprise.svg",
    backgroundColor: "#F1F5FF",
  },
  name: "Enterprise plan",
  description:
    "A complete solution designed to integrate analytics across all areas of your organization",
  cta: {
    type: "button",
    primary: true,
    text: "Contact sales",
    target: "_blank",
    onClick: () => QueryFormModal.show(),
  },
  featureTitle: "Tailored for institutional demands :",
  features: [
    "Decoded data on your private cloud",
    "Dedicated analyst & data engineer",
    "Priority data decoding & indexing",
    "Custom APIs",
    "All Pro plan benefits",
  ],
};

const walletAnalyticsPricing = {
  media: {
    type: "image",
    src: "/assets/images/pricing/wallet-analytics.svg",
    backgroundColor: "#F1E0FF",
  },
  title: "Wallet behaviour analytics",
  description:
    "Analyze your thousands of users across multiple Solana ecosystems in a no-code way.",
  price: "1000",
  currency: "$",
  period: "per month",
  cta: {
    type: "button",
    primary: true,
    text: "Start with Plus",
    target: "_blank",
    onClick: () => QueryFormModal.show(),
    style: {
      width: "100%",
      justifyContent: "center",
    },
  },
  isNew: true,
};

const Web3TeamsPage = () => {
  return (
    <Page>
      <Head>
        {/* Basic Meta Tags */}
        <title>Top Ledger - Web3 Analytics & Pricing Plans</title>
        <meta
          name="description"
          content="Explore Web3 analytics pricing plans for Solana blockchain. Choose from Basic, Plus, Pro, and Enterprise plans for wallet analytics, perpetual trades, staking, liquidity data, DePIN insights, and more."
        />
        <meta
          name="keywords"
          content="Solana analytics, Web3 pricing, affordable pricing for Solana, subscription plans, wallet balances, perpetual trades, token balances, historic data, gaming data, account state data, liquidity data, DePIN analytics, staking data pricing, custom APIs, decoded data pricing, smart tables pricing, institutional pricing, liquidity data pricing, enterprise analytics"
        />
        <meta name="author" content="Top Ledger Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Tags for Social Media */}
        <meta
          property="og:title"
          content="Top Ledger - Web3 Analytics & Pricing Plans"
        />
        <meta
          property="og:description"
          content="Affordable Web3 analytics pricing plans for blockchain solutions. Choose from subscription tiers tailored for wallet analytics, perpetual trades, staking, liquidity data, and DePIN insights."
        />
        <meta property="og:image" content="/assets/images/pricing/og-pricing.jpg" />
        <meta property="og:url" content="https://www.topledger.xyz/pricing" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top Ledger - Web3 Analytics & Pricing Plans" />
        <meta
          name="twitter:description"
          content="Discover affordable pricing for Web3 teams: Basic, Plus, Pro, and Enterprise plans for Solana analytics, wallet behavior, staking, perpetual trades, liquidity data, and more."
        />
        <meta name="twitter:image" content="/assets/images/pricing/twitter-card-pricing.jpg" />
        <meta name="twitter:site" content="@TopLedger" />

        {/* Extended Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="rating" content="General" />
        <meta name="distribution" content="global" />
        <meta name="application-name" content="Top Ledger" />
        <meta name="theme-color" content="#FFFFFF" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://www.topledger.xyz/pricing" />
      </Head>
      <Header />
      <PricingSection
        pricing={pricing}
        enterpricePricingPlan={enterpricePricingPlan}
        walletAnalyticsPricing={walletAnalyticsPricing}
      />
    </Page>
  );
};

export default Web3TeamsPage;
