import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Image from "next/image";
import Loader from "pages/programs/components/Loader";
import styles from "./state-of-solana1.module.scss";
import Page from "@/components/Page";
import Head from "next/head";

import Tabs from "@/components/Tabs";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import { userWalletDashboards } from "constants/constants1";
import PasswordForm from "./PasswordForm";

const pageTitle = "State of Solana1";
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

const StateOfSolana1 = (props) => {
  const router = useRouter();
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [themeToggle, setThemeToggle] = useState(1);
  const [theme, setTheme] = useState(defaultTheme);
  const [loading, setLoading] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const activeTab =
    router.query.slug || userWalletDashboards[0]?.wallet_dashboard?.slug;
  const dashboardRef = useRef();

  // Check authentication on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const auth = sessionStorage.getItem("solana1-auth");
      setIsAuthenticated(auth === "true");
      setIsCheckingAuth(false);
    }
  }, []);

  const setActiveTab = useCallback((tabId) => {
    window.location = `/state-of-solana1/${tabId}`;
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

  // Handle tab changes
  const handleTabChange = useCallback((tabId) => {
    // Mark this as navigation between tabs
    if (typeof window !== "undefined") {
      sessionStorage.setItem("solana1-nav", "true");
    }
    setActiveTab(tabId);
  }, [setActiveTab]);

  // Handle logout click
  const handleLogout = useCallback(() => {
    if (typeof window !== "undefined") {
      // Clear authentication and navigation data
      sessionStorage.removeItem("solana1-auth");
      sessionStorage.removeItem("solana1-nav");
      // Redirect to the password page with logout parameter
      window.location.href = "/state-of-solana1?logout=true";
    }
  }, []);

  // Show loading state while checking authentication
  if (isCheckingAuth) {
    return (
      <Page theme="dark" footer={false} header={false}>
        <div className={styles.dashboardLoader}>
          <Loader color="#a4afd6" />
        </div>
      </Page>
    );
  }

  // If not authenticated, show password form
  if (!isAuthenticated) {
    return <PasswordForm onAuthenticate={setIsAuthenticated} />;
  }

  // Main component render
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
          content="https://www.topledger.xyz/state-of-solana1"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Top Ledger - State of Solana1"
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
          href="https://www.topledger.xyz/state-of-solana1"
        />
      </Head>
      {/* <Header pageType="wide" /> */}
      <AppHeader pageType="wide" />
      <div className={styles.dashboardSection}>
        <div className={styles.dashboardHeader}>
          <h1 className={styles.pageTitle}>{pageTitle}</h1>
          <button onClick={handleLogout} className={styles.logoutButton} aria-label="Logout">
            Logout
          </button>
        </div>
        <Tabs onChange={handleTabChange} activeKey={activeTab}>
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
                      <Image
                        id="css-logo"
                        style={{ height: "0px" }}
                        src="/assets/images/brand-logo.svg"
                        alt="Loading logo"
                        width={150}
                        height={0}
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

export async function getStaticPaths() {
  return {
    paths: userWalletDashboards?.map((dashboard) => ({
      params: { slug: dashboard.wallet_dashboard.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  if (!params?.slug) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      dashboardSlug: params.slug,
    },
  };
}

export default StateOfSolana1; 