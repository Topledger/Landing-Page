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
// import styles from "./index.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link
          href="http://fonts.cdnfonts.com/css/helvetica-neue-9"
          rel="stylesheet"
        /> */}
        <title>Top Ledger | End-to-End Blockchain Analytics</title>
        <meta
          name="description"
          content="Top Ledger is SQL-based data discovery and analytics platform for  in-house growth, analytics & data science teams of Web3 projects & institutions."
        ></meta>
        <meta
          name="keywords"
          content="Solana Analytics, Solana Blockchain, Dune Analytics, Crypto Analytics,
  Ledger Analytics, On-Chain Data, Off-Chain Data, NFT Analytics, DeFi Analytics, Crypto Dashboard,
  Solana Dashboard, P2E Games, Magic Eden, Web3, SQL"
        ></meta>
      </Head>

      <main>
        <div className="bg-blue sub-header">
          <p>
            Join our community of web3 data scientists and builders on
            <a
              title="discord"
              href="https://discord.gg/q5bHa2rXmu"
              target="_blank"
              rel="noreferrer"
            >
              discord <img src="/assets/arrow-up.svg" alt="arrow-up" />
            </a>
          </p>
        </div>
        <Hero />
        <Visual />
        <BackedBy />
        <WeOffer />
        <ChainSection />
        <div className="main-Section">
          <div className="trustedText">
            <p>Trusted by</p>
          </div>
          <div className="bottomImages">
            <div className="icon">
            <a href="https://www.metaplex.com/" target="_blank" ><img src="/assets/images/metaplex-logo.svg" alt="discord" /></a>
            </div>
            <div className="icon">
            <a href="https://gari.network/" target="_blank" ><img src="/assets/images/gari-logo.svg" alt="discord" /></a>
            </div>
            <div className="icon">
            <a href="https://squads.so/" target="_blank" ><img src="/assets/images/squads-logo.svg" alt="discord" /></a>
            </div>
            
            <div className="icon">
            <a href="https://invariant.app/" target="_blank" ><img src="/assets/images/invariant-logo.svg" alt="discord" /></a>
            </div>
<div className="icon">
            <a href="https://tulip.garden/" target="_blank" ><img src="/assets/images/tulip-logo.svg" alt="discord" /></a>
            </div>
          </div>
          {/* <div className="bottomImages">
            <div className="icon">
              <img src="/assets/images/Component.svg" alt="discord" />
            </div>
            <div className="icon">
              <img src="/assets/images/solana-lab.svg" alt="discord" />
            </div>
            <div className="icon">
              <img src="/assets/images/solana-lab.svg" alt="discord" />
            </div>
            <div className="icon">
              <img src="/assets/images/solana-lab.svg" alt="discord" />
            </div>
            <div className="icon">
              <img src="/assets/images/solana-lab.svg" alt="discord" />
            </div>
          </div>
          <div className="bottomImages">
            <div className="icon">
              <img src="/assets/images/Component.svg" alt="discord" />
            </div>
            <div className="icon">
              <img src="/assets/images/solana-lab.svg" alt="discord" />
            </div>
            <div className="icon">
              <img src="/assets/images/solana-lab.svg" alt="discord" />
            </div>
            <div className="icon">
              <img src="/assets/images/solana-lab.svg" alt="discord" />
            </div>
          </div> */}
        </div>
        {/* <Client /> */}
        <CommunitySection />
      </main>
    </div>
  );
}
