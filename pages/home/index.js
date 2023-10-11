import Head from "next/head";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BackedBy from "@/components/BackedBy";
import ChainSection from "@/components/ChainSection";
import CommunitySection from "@/components/CommunitySection";
import Visual from "@/components/Visual";
import WeOffer from "@/components/WeOffer";

import Hero from "./components/Hero";

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
        <Hero />
        <Visual />
        <BackedBy />
        <WeOffer />
        <ChainSection />
        {/* <Client /> */}
        {/* <CommunitySection /> */}
      </main>
    </div>
  );
}
