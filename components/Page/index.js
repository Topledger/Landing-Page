import Head from "next/head";
import cx from "classnames";

import Footer from "../Footer";
import Header from "../Header";

import styles from "./index.module.scss";

const Body = ({ children, header }) => (
  <div className={cx(styles.pageBody, { [styles.withHeader]: header })}>
    {children}
  </div>
);

const Page = ({ title, children, header = true }) => (
  <div className="page">
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* <link
          href="http://fonts.cdnfonts.com/css/helvetica-neue-9"
          rel="stylesheet"
        /> */}
      <title>{title ?? "Top Ledger | End-to-End Blockchain Analytics"}</title>
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
    <div className="page-content">
      {header && <Header />}
      <Body header={header}>{children}</Body>
    </div>
    <Footer />
  </div>
);

export default Page;
