import React from "react";

const Visual = () => {
  return (
    <section className="visual" id="visual">
      <div className="visualMain">
        <div className="visualBox">
          <img src="assets/images/visual_1.svg" />
        </div>
        <div className="visualBox">
          <img src="assets/images/visual_2.svg" />
        </div>
        <div className="visualBox">
          <img src="assets/images/visual_3.svg" />
        </div>
        <div className="visualBox">
          <img src="assets/images/visual_4.svg" />
        </div>
      </div>
      <div className="visualContent">
        <p>
          Top Ledger allows Web3 growth, analytics & data science teams to
          create powerful dashboards from decoded Solana program data. Analyse
          auto-generated sentiment, narrative & tag cloud charts from Twitter,
          Telegram & Discord data.
        </p>
      </div>
    </section>
  );
};

export default Visual;
