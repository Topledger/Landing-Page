import React from "react";
import Introduction from "../Introduction";
import SearchDashboards from "../SearchDashboards";

const Hero = () => (
  <section className="hero">
    <div className="heroMain">
      <div className="heroContent">
        <SearchDashboards />

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
