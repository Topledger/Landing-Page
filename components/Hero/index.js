import React from "react";
import Link from "next/link";

const Hero = () => (
  <section className="hero">
    <div className="heroMain">
      <div className="heroContent">
        <h3 className="heading">10X Better</h3>
        <h1 className="title">Blockchain Analytics</h1>

        <p className="description">
          on <img src="assets/images/solana.png" className="textLogo" alt="solana" />
        </p>

        <Link href="/get-started">
          <span  className="getStart">Request demo</span>
        </Link>

        <Link href="/dashboards">
          <span className="getStartOutlined">View Dashboards</span>
        </Link>

        <div className="nextBtn">
          <div className="middle">
            <div className="mouse"></div>
          </div>
          {/* <img src="assets/images/nxtBtn.png" /> */}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
