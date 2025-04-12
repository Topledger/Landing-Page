import React from "react";
import Image from "next/image";

const Visual = () => {
  return (
    <section className="visual" id="visual">
      <div className="visualMain">
        <div className="visualBox">
          <Image
            src="/assets/images/visual_1.svg"
            alt="Visualization 1"
            width={200}
            height={200}
          />
        </div>
        <div className="visualBox">
          <Image
            src="/assets/images/visual_2.svg"
            alt="Visualization 2"
            width={200}
            height={200}
          />
        </div>
        <div className="visualBox">
          <Image
            src="/assets/images/visual_3.svg"
            alt="Visualization 3"
            width={200}
            height={200}
          />
        </div>
        <div className="visualBox">
          <Image
            src="/assets/images/visual_4.svg"
            alt="Visualization 4"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className="visualContent">
        <p>
          Top Ledger allows Web3 growth, analytics & data science teams to
          create powerful dashboards from decoded solana program data. Analyse
          auto-generated sentiment, narrative & tag cloud charts from Twitter,
          Telegram & Discord data.
        </p>
      </div>
    </section>
  );
};

export default Visual;
