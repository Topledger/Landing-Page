import "../styles/globals.css";

import { useEffect } from "react";
import { useRouter } from "next/router";

import Header from "../components/Header";
import Footer from "../components/Footer";
import {DarkModeProvider} from "../providers/DarkMode";
import Head from "next/head";


function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname.includes("about-us")) {
      document.body.style.background = "white";
    }
  }, []);

  return (
    <>
     <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </Head>
      <DarkModeProvider>
      {(() => {
        if (router.pathname.includes("get-started") ) {
          return <Component {...pageProps} />;

        }

        return (
         <>
           {(router.pathname.includes("thanks"))? null: <Header />}
            <Component {...pageProps} />
            {(router.pathname.includes("thanks") || router.pathname.includes("dashboard") )? null:<Footer />}
            </>
        );
      })()}
   </DarkModeProvider>
    </>
   
  );
}

export default MyApp;
