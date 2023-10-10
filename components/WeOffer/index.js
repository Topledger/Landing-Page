import Link from "next/link";
import React from "react";

const WeOffer = () => {
  return (
    <>
      <section className="offer_head">
        <div className="offerHeading">
          <h5>What we offer</h5>
        </div>
      </section>

      <section className="weOffer">
        <div className="offerMain">
          <div className="offerContent">
            <h1>Build custom dashboards using plain SQL</h1>
            <p>
              Create successful business strategies, generate meaningful graphs
              and do powerful analysis on the decoded Solana program data. Our
              backend infra pulls in raw data from the Solana blockchain and
              labels and indexes them into different tables on a daily basis.
            </p>
            <p>
              Run blazingly fast SQL queries and leave auto-scaling, replication
              of workloads, rollup aggregations and data compression to us.
            </p>
            <Link href="/get-started">
              <span className="signUp">Start a free trial</span>
            </Link>
          </div>
          <div className="offerImage">
            <img src="assets/images/offer.png" />
          </div>
        </div>
      </section>

      {/* <section className="sources">
        <div className="sourcesMain">
          <div className="sourcesImage">
            <img src="assets/images/weOffer.png" />
          </div>
          <div className="sourcesContent">
            <h1>Unlock the power of alternative data sources</h1>
            <p>
              Access deeper and actionable insights about your project from
              alternative data sources like Twitter, Telegram & Discord. We
              unify on-chain and relevant alternative data to give you superior
              market intelligence and a head start against your competitors.
            </p>
            <p>
              Enhance your journey as a data driven company and leave the
              processing of alternative data sources to us.
            </p>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default WeOffer;
