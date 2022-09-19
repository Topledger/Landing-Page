import React, { useEffect, useRef, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import Slider from "react-slick";

const time = 0.1;

const BackedBy = () => {
  const [progress, setProgress] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const tick = useRef(null);
  const slider = useRef(null);

  const settings = {
    infinite: true,
    swipeToSlide: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setActiveSlide(current),
  };

  useEffect(() => {
    tick.current = setInterval(() => {
      setProgress((prev) => prev + 1);
    }, 100);
  }, [activeSlide]);

  useEffect(() => {
    if (progress > 110) {
      slider.current.slickNext();
      setProgress(0);

      if (tick.current) clearInterval(tick.current);
    }
  }, [progress]);

  function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    setTick(setInterval(interval, 10));
  }

  function interval() {
    if (
      $(
        '.slider .slick-track div[data-slick-index="' + progressBarIndex + '"]'
      ).attr("aria-hidden") === "true"
    ) {
      progressBarIndex = $(
        '.slider .slick-track div[aria-hidden="false"]'
      ).data("slickIndex");

      startProgressbar();
    } else {
      percentTime += 1 / (time + 5);

      $(".inProgress" + progressBarIndex).css({
        width: percentTime + "%",
      });

      if (percentTime >= 100) {
        $(".single-item").slick("slickNext");
        progressBarIndex++;

        if (progressBarIndex > 2) {
          progressBarIndex = 0;
        }

        startProgressbar();
      }
    }
  }

  return (
    <>
      <section className="backedBy">
        <div className="backedHeading">
          <h3 className="title">Backed by</h3>
        </div>

        <div className="backedContent">
          <img className="backedImg" />
          <img className="backedImg2" />
          <img className="backedImg3" />
          {/* <img
            src="/assets/images/Property 1.png"
            alt="Brain"
            width="auto"
            height="100%"
          />
          <img
            src="/assets/images/Property 2.png"
            alt="Labs"
            width="auto"
            height="100%"
          />
          <img
            src="/assets/images/Property 3.png"
            alt="One more"
            width="auto"
            height="100%"
          /> */}
        </div>
      </section>

      <section className="power">
        <Slider {...settings} ref={slider}>
          <div className="powerContent">
            <img src="assets/images/Frame 201.svg" />
            <h3>Richer analysis with unified datasets</h3>
          </div>
          <div className="powerContent">
            <img src="assets/images/Frame 2012.svg" />
            <h3>Top Ledger smart alerts</h3>
          </div>
          <div className="powerContent">
            <img src="assets/images/Frame 2013.svg" />
            <h3>Query with GraphQL</h3>
          </div>
        </Slider>
      </section>

      <ProgressBar
        completed={progress}
        height="5px"
        bgColor="#eff2fd"
        borderRadius="0"
        isLabelVisible={false}
        baseBgColor="#fff"
        labelColor="#e80909"
        transitionDuration="100ms"
      />
    </>
  );
};

export default BackedBy;
