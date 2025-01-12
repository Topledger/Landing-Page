import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Loader from "pages/programs/components/Loader";
import styles from "./state-of-solana.module.scss";
import Page from "@/components/Page";
import Head from "next/head";
import Header from "@/components/Header";
import Tabs from "@/components/Tabs";

const pageTitle = "State of Solana";
const pageDescription =
    "Explore the latest insights and analytics on the Solana blockchain. Discover the current state of Solana's ecosystem, DEXs, NFTs, and more.";

const TLDashboards = dynamic(
    async () => {
        const DashboardModule = await import("tl-dashboards");
        console.log("DashboardModule", DashboardModule);

        return DashboardModule;
    },
    {
        loading: () => (
            <div className={styles.dashboardLoader}>
                <Loader />
            </div>
        ),
        ssr: false,
    }
);

// Overview, DEXs, NFT Ecosystem, DePINs, DEXs
// https://analytics.topledger.xyz/tl/public/dashboards/0Cm9R8K8xu4vq93Ljb88UJDtWr6jwTM1V9AGMQQo
const userWalletDashboards = [
    {
        wallet_dashboard: {
            id: 1,
            title: "DEX Overview",
            org_slug: "tl",
            api_key: "Jix7XZI0p41oMZ7pEVhcW1vCydMvgIsdy5Q7ma4D",
        },
    },
    {
        wallet_dashboard: {
            id: 2,
            title: "NFT Overview",
            org_slug: "tl",
            api_key: "kDQ2VM88nre4oLa3qwhotrCXB5ZeCg4yiDWKC48d",
        },
    },
    {
        wallet_dashboard: {
            id: 3,
            title: "REV",
            org_slug: "tl",
            api_key: "0Cm9R8K8xu4vq93Ljb88UJDtWr6jwTM1V9AGMQQo",
        },
    },
    {
        wallet_dashboard: {
            id: 3,
            title: "Block Rewards",
            org_slug: "tl",
            api_key: "JHrjYsFXzCEcSgpBS6RCCpZqV6dQMCKyn3sgGJon",
        },
    },
    
];

const StateOfSolana = () => {
    const [loading, setLoading] = useState({});
    const [activeTab, setActiveTab] = useState(
        userWalletDashboards[0]?.wallet_dashboard?.id
    );
    const dashboardRef = useRef();

    const setTabLoading = (dashboardId, isLoading) => {
        setLoading((prev) => ({
            ...prev,
            [dashboardId]: isLoading,
        }));
    };

    return (
        <Page>
            <Head>
                <title>Top Ledger - {pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta
                    name="keywords"
                    content="Top Ledger privacy policy, data privacy, personal data handling, service data, SaaS privacy, data retention policy, data security, global data compliance, privacy rights, blockchain privacy, data sharing policy, GDPR compliance, data protection, cookie policies"
                />
                <meta name="author" content="Top Ledger Team" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                {/* Open Graph Tags for Social Media */}
                <meta
                    property="og:title"
                    content={`Top Ledger - ${pageTitle}`}
                />
                <meta
                    property="og:description"
                    content="Understand how Top Ledger collects, uses, and protects your data. Learn about our commitment to data privacy, security, and compliance with international standards."
                />
                <meta
                    property="og:image"
                    content="/assets/images/privacy-policy/og-image.jpg"
                />
                <meta
                    property="og:url"
                    content="https://www.topledger.xyz/privacy-policy"
                />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Top Ledger - Privacy Policy"
                />
                <meta
                    name="twitter:description"
                    content="Explore how Top Ledger manages your data securely and transparently. Learn about our data collection, retention, and sharing practices."
                />
                <meta
                    name="twitter:image"
                    content="/assets/images/privacy-policy/twitter-card-image.jpg"
                />
                <meta name="twitter:site" content="@TopLedger" />

                {/* Extended Meta Tags */}
                <meta name="robots" content="index, follow" />
                <meta name="rating" content="General" />
                <meta name="distribution" content="global" />
                <meta name="application-name" content="Top Ledger" />
                <meta name="theme-color" content="#FFFFFF" />

                {/* Canonical Link */}
                <link
                    rel="canonical"
                    href="https://www.topledger.xyz/privacy-policy"
                />
            </Head>
            <Header pageType="wide" />
            <div className={styles.dashboardSection}>
                <h1 className={styles.pageTitle}>{pageTitle}</h1>
                <Tabs
                    onChange={(tabId) => setActiveTab(tabId)}
                    activeKey={activeTab}
                >
                    {userWalletDashboards?.map(
                        ({ wallet_dashboard: dashboard } = {}) => (
                            <Tabs.TabPane
                                tab={dashboard.id}
                                key={dashboard?.id}
                                title={dashboard?.title}
                            >
                                <TLDashboards
                                    client={dashboard?.org_slug}
                                    token={dashboard?.api_key}
                                    className={styles.dashboard}
                                    loader={<Loader />}
                                    onDashboardLoad={() =>
                                        setTabLoading(dashboard?.id, false)
                                    }
                                    // parameters={parametersRef.current}
                                    dashboardRef={dashboardRef}
                                />
                                {loading[dashboard?.id] !== false && (
                                    <div className="loading">
                                        <div className="loading-indicator">
                                            <div id="shadow"></div>
                                            <img
                                                id="css-logo"
                                                style={{ height: "0px" }}
                                                src="/static/images/brand-logo.svg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                )}
                            </Tabs.TabPane>
                        )
                    )}
                </Tabs>
            </div>
        </Page>
    );
};

export default StateOfSolana;
