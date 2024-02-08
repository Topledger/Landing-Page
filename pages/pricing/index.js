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
      "Wallet analytics at scale",
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
  title: "Wallet analytics at scale",
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
  },
  isNew: true,
};

const Web3TeamsPage = () => {
  return (
    <Page>
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
