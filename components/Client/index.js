import React, { useRef } from "react";
import Slider from "react-slick";

const Client = () => {
  const slider = useRef(null);
  const settings = {
    infinite: true,
    swipeToSlide: false,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <section className="clientSays">
      <div className="clientHeading">
        <h1>What our clients say</h1>
      </div>
      <Slider {...settings} ref={slider}>
        <div>
          <div className="clientMain">
            <div className="clientImage">
              <img src="assets/images/clientSays1.png" />
            </div>
            <div className="clientContent">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Elementum non quam. consectetur adipiscing elit. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Elementum non quam.
                consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Elementum non quam. consectetur
                adipiscing elit.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "50px",
                }}
              >
                <div className="clientName">
                  <h3>Ankush Kedia</h3>
                  <p>Engg Manager, Gari Networks</p>
                </div>
                <img
                  src="/assets/images/arrow.png"
                  style={{ width: "56px", height: "10px", zIndex: 1 }}
                  onClick={() => slider.current.slickNext()}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="clientMain">
            <div className="clientImage">
              <img src="assets/images/clientSays2.svg" />
            </div>
            <div className="clientContent">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Elementum non quam. consectetur adipiscing elit. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Elementum non quam.
                consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Elementum non quam. consectetur
                adipiscing elit. ugugughug ygjygj.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "50px",
                }}
              >
                <div className="clientName">
                  <h3>Client 2</h3>
                  <p>Chingari, India</p>
                </div>
                <img
                  src="/assets/images/arrow.png"
                  style={{ width: "56px", height: "10px", zIndex: 1 }}
                  onClick={() => slider.current.slickNext()}
                />
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Client;
