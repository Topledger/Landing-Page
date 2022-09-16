import Head from "next/head";

import BackedBy from "../components/BackedBy";
import ChainSection from "../components/ChainSection";
import Client from "../components/Client";
import Hero from "../components/Hero";
import Visual from "../components/Visual";
import WeOffer from "../components/WeOffer";

import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import CommunitySection from "../components/CommunitySection";

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="http://fonts.cdnfonts.com/css/helvetica-neue-9"
          rel="stylesheet"
        />
        <title>Top Ledger</title>
      </Head>

      <main>
        <div className="bg-blue sub-header">
          <p>Join our community of web3 data scientists and builders on  <a href="https://discord.gg/x3EYAHYP" target="_blank" rel="noreferrer">discord <img src="/assets/arrow-up.svg" alt="arrow-up" /></a></p>
        </div>
        <Hero />
        <Visual />
        <BackedBy />
        <WeOffer />
        <ChainSection />
        {/* <Client /> */}
        <CommunitySection />
      </main>
    </div>
  );
}
