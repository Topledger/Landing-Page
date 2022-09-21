import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from "./index.module.css";

const thanks = () => {
  const onBack = () => {
    // router.push("/");
    window.location.assign("/")
    
  };
  return (
    <>
    <Head>
        <title>Register for the demonstration | Top Ledger</title>
        <meta
          name="description"
          content="Contact us and schedule a time to get a quick walk through our solution. "
        ></meta>
        <meta
          name="keywords"
          content="Solana Analytics, Solana Blockchain, Dune Analytics, Crypto Analytics,
          Ledger Analytics, On-Chain Data, Off-Chain Data, NFT Analytics, DeFi Analytics, Crypto Dashboard,
          Solana Dashboard, P2E Games, Magic Eden, Web3, SQL"
        ></meta>
      </Head>
      <div className={styles.demoMain}>
        <div className={styles.demoImg}>
          <img src="/assets/images/Group 19800.png" alt="about-solana" />
        </div>

        <div className={styles.mainThanks}>
          <div className={styles.thankYou}>
            <div className={styles.container}>
              <div className={styles.thanksHeading}>
                <h1>Thank you for requesting a demo! </h1>
                <p>Our team will get back to you within 24 hours!</p>
              </div>
              <div onClick={onBack} style={{cursor: "pointer"}}>
                <div className={styles.thanksText}>
                  <img src="/assets/images/shape.svg" alt="about-solana" />
                  <h6>
                    Back to <span className={styles.homeBack}>Home</span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          className={styles.lastDemo}
          src="/assets/images/Group 19900.png"
          alt="about-solana"
        />
      </div>
    </>
  );
};
export default thanks;
