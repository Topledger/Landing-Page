import "../styles/globals.scss";
import "@/assets/styles/fonts.scss";

import { useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import Header from "../components/Header1";
import Footer from "../components/Footer1";
import { DarkModeProvider } from "../providers/DarkMode";
import { QueryClient, QueryClientProvider } from "react-query";
import { initGa } from "helpers/gaHelper";
import { TRACKING_ID } from "constants/app.constants";
// import ReactQueryDevtools from "react-query/devtools";

const footerExcludePaths = ["thanks", "dashboard", "programs"];
const headerExcludePaths = ["thanks"];

function isExcludedPath(pathList, currentPath) {
  return pathList.findIndex((path) => currentPath.includes(path)) === -1;
}

const NO_HEADER_FOOTER_PATHS = [
  "/",
  "/get-started",
  "/landing",
  "/web3-teams",
  "/pricing",
  "/dashboards",
  "/research",
  "/privacy-policy",
  "/tnc",
];

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const queryClient = useMemo(() => new QueryClient(), []);

  useEffect(() => {
    if (router.pathname.includes("about-us")) {
      document.body.style.background = "white";
    }
  }, []);

  const showFooter = isExcludedPath(footerExcludePaths, router.pathname);
  const showHeader = isExcludedPath(headerExcludePaths, router.pathname);

  useEffect(() => {
    initGa({ trackingId: TRACKING_ID });
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/favicon.svg" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <DarkModeProvider>
          {(() => {
            if (NO_HEADER_FOOTER_PATHS.includes(router.pathname)) {
              return <Component {...pageProps} />;
            }

            return (
              <>
                {router.pathname.includes("thanks") ? null : <Header />}
                <Component {...pageProps} />
                {router.pathname.includes("thanks") ||
                router.pathname.includes("dashboard") ? null : (
                  <Footer />
                )}
              </>
            );
          })()}
        </DarkModeProvider>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
