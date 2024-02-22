import Header from "@/components/Header";
import Page from "@/components/Page";

import LandingHeroSection from "./components/LandingHeroSection";
import ArticleSection from "./components/ArticleSection";
import OutcomesSection from "./components/OutcomesSection";
import DataCultureSection from "./components/CultureSection";
import TestimonialsSection from "./components/TestimonialsSection";
import TrialSection from "@/components/TrialSection";
import QueryFormModal from "@/components/QueryForm/QueryFormModal";

const articles = [
  {
    id: 1,
    tags: [{ text: "Web3 teams", color: "#3678C5" }],
    title: "SQL based analytics platform",
    description:
      "Create comprehensive dashboards with deeper competitive insights, broader user profiling, and in-depth ecosystem analysis.",
    image: "/assets/images/landing/article-1.jpg",
    footer: {
      actionElements: [
        {
          type: "link",
          text: "See details",
          primary: true,
          href: "/web3-teams",
        },
        {
          type: "link",
          text: "Public dashboards",
          //target: "_blank",
          href: "/dashboards",
          secondary: true,
        },
      ],
    },
  },
  {
    id: 2,
    tags: [{ text: "Business professionals", color: "#9F62DD" }],
    title: "Wallet behaviour analytics",
    description:
      "Conduct an in-depth analysis of wallet behaviours, develop detailed wallet profiles aimed at aligning your efforts with your product development plans.",
    image: "/assets/images/landing/article-2.jpg",
    footer: {
      actionElements: [
        {
          type: "link",
         text: "Analyze now",
         primary: true,
         onClick: () => QueryFormModal.show()
        },
        {
          type: "link",
          text: "See details",
          href: "/web3-teams#little-bit-more-b"
          
        }
       // { type: "search", placeholder: "Enter a solana wallet" },
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
      "Forget about data integrity, speed, and infrastructure customization. Access decoded Solana data on your private cloud, including DEX trades, NFT/cNFT mints and trades, staking, DePIN, stablecoin activities, and more.",
    image: "/assets/images/landing/article-3.jpg",
    footer: {
      actionElements: [
        { type: "link", text: "See details", primary: true, href: "/research" },
        {
          type: "link",
          text: "Available schemas",
          target: "_blank",
          href: "https://docs.topledger.xyz/data-tables/smart-tables",
        },
      ],
    },
  },
  {
    id: 4,
    tags: [{ text: "Everyone", color: "#D4996D" }],
    title: "Top Ledger AI: Your trusted data ally",
    titleMobile: "Top Ledger AI",
    description:
      "Top Ledger AI is set to transform data analysis on Solana, simplifying large-scale insight consumption and accelerating decision-making.",
    image: "/assets/images/landing/article-3.jpg",
    footer: {
      actionElements: [
        {
          type: "comingSoon",
          text: "Coming soon",
          style: {
            width: "100%",
            textAlign: "center",
            border: "1px solid rgba(29, 148, 34, 0.14)",
            background: "#DDF8E7",
          },
        },
      ],
    },
  },
];

const outcomes = [
  {
    id: 1,
    image: "/assets/images/landing/outcome-analysts.svg",
    title: "For analysts",
    description:
      "Run blazingly fast SQL queries and leave auto-scaling, replication of workloads, rollup aggregations and custom data decoding to us.",
    action: {
      type: "link",
      target: "_blank",
      text: "Start a free trial",
      onClick: () => QueryFormModal.show(),
    },
  },
  {
    id: 2,
    image: "/assets/images/landing/outcome-businesses.svg",
    title: "For business people",
    description:
      "Our user-friendly interface with upcoming AI capabilities accelerates data analysis, enabling quicker, more effective problem-solving and a stronger data-driven approach in business decision-making.",
    action: {
      type: "link",
      target: "_blank",
      text: "Select a time",
      href: "https://calendly.com/nitin_topledger/30min",
    },
  },
  {
    id: 3,
    image: "/assets/images/landing/outcome-developers.svg",
    title: "For developers",
    description:
      "Boost your development with Top Ledger APIs Designed for seamless data integration on the Solana blockchain, our API empowers you to efficiently manage and query hundreds of decoded data tables.",
    action: {
      type: "comingSoon",
      target: "_blank",
      text: "API guide",
      fullWidth: true,
    },
  },
];

const dataCultures = [
  {
    id: 1,
    title: "Uncompromising analytics - End to end solutions",
    description:
      "Our robust infrastructure, combined with our data indexing and decoding capabilities and enterprise support, ensures that you receive end-to-end analytics that are both broad and deep, without any interruption.",
    action: {
      type: "link",
      //target: "_blank",
      primary: true,
      text: "See details",
      href: "/web3-teams",
    },
    bottomContent: {
      text: "Indexing Helium's on-chain and oracle data",
    },
  },
  {
    id: 2,
    title: "Top Ledger is your partner in data culture",
    description:
      "We collaborate with various teams in an organization to identify their specific data and analytics needs, aiming to improve operational efficiency and decision-making across all verticals.",
    action: {
      type: "link",
      target: "_blank",
      text: "Success stories",
      href: "https://blogs.topledger.xyz/",
    },
    bottomContent: {
      text: "Multiple teams at Metaplex uses Top Ledger daily",
    },
  },
];

const testimonials = [
  {
    id: 1,
    text: "The Top Ledger team has been a key partner for Metaplex Foundation in creating real time dashboards that inform our most important strategic questions. I check Top Ledger regularly to track market movements and to understand the impact of new features and initiatives. It's become one of our most important tools and significantly improved the quality of our decision-making as a team.",
    name: "Stephen",
    credentials: "Director, Metaplex Foundation",
    logo: "/assets/images/logo/metaplex.svg",
    avatar: "/assets/images/avatar/stephen.png",
  },
  {
    id: 2,
    text: "Topledger is a top-notch team that ships fast and produces high quality results. I'd recommend them to anyone looking for great Solana data infrastructure or analytics.",
    name: "Anduril",
    credentials: "Data lead, Solana Foundation",
    logo: "/assets/images/logo/solana-foundation.svg",
    avatar: "/assets/images/avatar/anduril.png",
  },
  {
    id: 3,
    text: "Top Ledger has been an invaluable partner for Squads, providing us with on-chain data that would otherwise be hard to obtain. As a native crypto company, we use their dashboards daily for most of our business metrics, which help us understand how we are growing and make strategic decisions based on this data.",
    name: "Stepan",
    credentials: "CEO, Squads Labs",
    logo: "/assets/images/logo/squads-labs.svg",
    avatar: "/assets/images/avatar/stepan.png",
  },
  {
    id: 4,
    text: "Top Ledger has been instrumental in helping Drift analyze complex on-chain transactions with their real time dashboards. They are a highly responsive team, constantly iterating on their product and helping with feedback from the Drift team and users. Today, their dashboard helps to power analysis of the Drift platform through swaps, volume, and user data.",
    name: "Cindy",
    credentials: "Co-founder, Drift Protocol",
    logo: "/assets/images/logo/drift-protocol.svg",
    avatar: "/assets/images/avatar/cindy.png",
  },
];

const LandingPage = () => {
  return (
    <Page>
      <LandingHeroSection />
      <ArticleSection articles={articles} />
      <OutcomesSection outcomes={outcomes} />
      <DataCultureSection dataCultures={dataCultures} />
      <TestimonialsSection testimonials={testimonials} />
      <TrialSection />
    </Page>
  );
};

export default LandingPage;
