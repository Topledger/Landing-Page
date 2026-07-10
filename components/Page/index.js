import Head from "next/head";
import cx from "classnames";

import Footer from "../Footer";
import Header from "../Header";
import HeaderV2 from "../HeaderV2";
import FooterV2 from "../FooterV2";

import styles from "./index.module.scss";

const Body = ({ children, header }) => (
    <div className={cx(styles.pageBody, { [styles.withHeader]: header })}>
        {children}
    </div>
);

const Page = ({
    title,
    children,
    header = true,
    footer = true,
    theme: themeName = "default",
    pageType = "normal",
}) => (
    <div className={cx("page", styles.page)}>
        <Head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            {/* <link
          href="http://fonts.cdnfonts.com/css/helvetica-neue-9"
          rel="stylesheet"
        /> */}
            <title>
                {title ?? "Top Ledger | End-to-End Blockchain Analytics"}
            </title>
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
        <div
            className={cx(
                "page-content",
                styles[`theme-${themeName}`],
                styles.pageContent
            )}
        >
            {header &&
                (pageType === "landing-v2" ? (
                    <HeaderV2 />
                ) : (
                    <Header pageType={pageType} />
                ))}
            <Body header={header}>{children}</Body>
        </div>
        {footer && (pageType === "landing-v2" ? <FooterV2 /> : <Footer />)}
    </div>
);

export default Page;
