import "../styles/globals.css";
import "@/assets/styles/fonts.scss";

import { useEffect, useMemo } from "react";
import { useRouter } from "next/router";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { DarkModeProvider } from "../providers/DarkMode";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
// import ReactQueryDevtools from "react-query/devtools";

const footerExcludePaths = ["thanks", "dashboard", "programs"];
const headerExcludePaths = ["thanks"];

function isExcludedPath(pathList, currentPath) {
  return pathList.findIndex((path) => currentPath.includes(path)) === -1;
}

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

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <DarkModeProvider>
          {(() => {
            if (router.pathname.includes("get-started")) {
              return <Component {...pageProps} />;
            }

            return (
              <>
                {showHeader && <Header />}
                <Component {...pageProps} />
                {showFooter && <Footer />}
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
