import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Loader from "pages/programs/components/Loader";
import styles from "./state-of-solana.module.scss";
import Page from "@/components/Page";
import Head from "next/head";

import Tabs from "@/components/Tabs";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import { userWalletDashboards } from "constants/constants";

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

const showThemeToggle = false;
const defaultTheme = "dark";

const StateOfSolana = () => {
    const [theme, setTheme] = useState(defaultTheme);
    const [loading, setLoading] = useState({});
    const router = useRouter();
    const activeTab =
        router.query.slug || userWalletDashboards[0]?.wallet_dashboard?.slug;
    const dashboardRef = useRef();

    const setActiveTab = useCallback((tabId) => {
        window.location = `/state-of-solana/${tabId}`;
    }, []);

    const setTabLoading = (dashboardId, isLoading) => {
        setLoading((prev) => ({
            ...prev,
            [dashboardId]: isLoading,
        }));
    };

    useEffect(() => {
        if (theme === "dark") {
            document.body.classList.add("theme-dark");
        } else {
            document.body.classList.remove("theme-dark");
        }

        return () => document.body.classList.remove("theme-dark");
    }, [theme]);

    return (
        <Page theme={theme} footer={false} header={false}>
            {/* enable theme switcher */}
            {showThemeToggle && (
                <div
                    style={{
                        position: "fixed",
                        top: 10,
                        right: 160,
                        zIndex: 999,
                        color: theme === "dark" ? "white" : "black",
                    }}
                >
                    <label htmlFor="default">
                        Default
                        <input
                            type="radio"
                            name="theme"
                            id="default"
                            checked={theme === "default"}
                            onClick={() => setTheme("default")}
                        />
                    </label>
                    <label htmlFor="dark">
                        Dark
                        <input
                            type="radio"
                            name="theme"
                            id="dark"
                            checked={theme === "dark"}
                            onClick={() => setTheme("dark")}
                        />
                    </label>
                </div>
            )}
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
            {/* <Header pageType="wide" /> */}
            <AppHeader pageType="wide" />
            <div className={styles.dashboardSection}>
                <h1 className={styles.pageTitle}>{pageTitle}</h1>
                <Tabs onChange={setActiveTab} activeKey={activeTab}>
                    {userWalletDashboards?.map(
                        ({ wallet_dashboard: wdashboard } = {}) => (
                            <Tabs.TabPane
                                tab={wdashboard.slug}
                                key={wdashboard?.slug}
                                title={wdashboard?.title}
                            >
                                <TLDashboards
                                    client={wdashboard?.org_slug}
                                    token={wdashboard?.api_key}
                                    className={styles.dashboard}
                                    loader={
                                        <Loader
                                            color={
                                                theme === "dark"
                                                    ? "#a4afd6"
                                                    : "#1a3989"
                                            }
                                        />
                                    }
                                    onDashboardLoad={(...params) => {
                                        // handleDashboardLoad(...params);
                                        setTabLoading(wdashboard?.id, false);
                                    }}
                                    // parameters={parametersRef.current}
                                    dashboardRef={dashboardRef}
                                />
                                {loading[wdashboard?.id] !== false && (
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
            <AppFooter />
        </Page>
    );
};

export default StateOfSolana;

export async function getStaticPaths() {
    const paths = userWalletDashboards.map(({ wallet_dashboard }) => ({
        params: { slug: wallet_dashboard.slug },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    // Find the dashboard that matches the slug
    const dashboard = userWalletDashboards.find(
        ({ wallet_dashboard }) => wallet_dashboard.slug === params.slug
    );

    if (!dashboard) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            initialActiveTab: params.slug,
        },
        revalidate: 86400, // 24 hours
    };
}
