import React from "react";
import Link from "next/link";

const Hero = () => (
  <section className="hero">
    <div className="heroMain">
      <div className="heroContent">
        <h3 className="heading">10X Better</h3>
        <h1 className="title">Blockchain Analytics</h1>

        <p className="description">
          on <img src="assets/images/solana.png" className="textLogo" />
        </p>

        <Link href="/get-started">
          <a className="getStart">Request demo</a>
        </Link>

        <Link href="/dashboards">
          <a className="getStartOutlined">View Dashboards</a>
        </Link>

        <a className="nextBtn">
          <div className="middle">
            <div className="mouse"></div>
          </div>
          {/* <img src="assets/images/nxtBtn.png" /> */}
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
