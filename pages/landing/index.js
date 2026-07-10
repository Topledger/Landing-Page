import Head from "next/head";

import Page from "@/components/Page";
import Announceband from "@/components/announceband";

import HeroV2 from "./components/HeroV2";
import LogoBar from "./components/LogoBar";
import ProductShowcase from "./components/ProductShowcase";
import CoverageBand from "./components/CoverageBand";
import PersonasSection from "./components/PersonasSection";
import FeaturedResearch from "./components/FeaturedResearch";
import QuotesSection from "./components/QuotesSection";
import FinalCta from "./components/FinalCta";

const LandingPage = () => {
    return (
        <Page footer={true} pageType="landing-v2">
            <Head>
                <title>
                    Top Ledger — Solana Blockchain Analytics & Data
                    Infrastructure
                </title>
                <meta
                    name="description"
                    content="Top Ledger is the data infrastructure for Solana — SQL analytics, real-time feeds, decoded historical data, and APIs powering the best teams in the SVM ecosystem."
                />
                <meta
                    name="keywords"
                    content="Solana analytics, DePIN, perpetual trades, wallet balances, token balances, historic data, gaming data, account state data, data consultancy, liquidity data, LST data, staking, blockchain data, Solana insights, Top Ledger"
                />
                <meta name="author" content="Top Ledger Team" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                {/* Open Graph */}
                <meta
                    property="og:title"
                    content="Top Ledger — Solana Blockchain Analytics & Data Infrastructure"
                />
                <meta
                    property="og:description"
                    content="The data infrastructure for Solana. SQL analytics, real-time feeds, decoded historical data, and APIs."
                />
                <meta
                    property="og:image"
                    content="/assets/images/landing/og-image.jpg"
                />
                <meta property="og:url" content="https://www.topledger.xyz/" />
                <meta property="og:type" content="website" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Top Ledger — Solana Blockchain Analytics & Data Infrastructure"
                />
                <meta
                    name="twitter:description"
                    content="The data infrastructure for Solana. SQL analytics, real-time feeds, decoded historical data, and APIs."
                />
                <meta
                    name="twitter:image"
                    content="/assets/images/landing/twitter-card-image.jpg"
                />
                <meta name="twitter:site" content="@TopLedger" />

                <link rel="canonical" href="https://www.topledger.xyz/" />
            </Head>


            <HeroV2 />
            <LogoBar />
            <ProductShowcase />
            <CoverageBand />
            <PersonasSection />
            <FeaturedResearch />
            <QuotesSection />
            <FinalCta />
        </Page>
    );
};

export default LandingPage;
