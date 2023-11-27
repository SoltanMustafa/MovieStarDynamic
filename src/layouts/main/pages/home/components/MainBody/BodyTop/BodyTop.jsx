import React from "react";
import "./_BodyTop.scss";
import SlideItem from "./slideItem";
import CarouselIndicators from "./carouselIndicators";

export default function BodyTop() {
  return (
    <>
      <section className="BodyTop">
        <div className="fw-container-fluid">
          <div className="fw-row">
            <div className="fw-col-xs-12">
              <div id="hero" className="carousel slide carousel-fade">
                <img
                  src="https://xenothemes.co.uk/specto/wp-content/themes/specto/images/scroll-arrow.svg"
                  alt="Scroll down"
                  className="scroll"
                />
                <div id="carousel" className="carousel slide">
                  <div className="container">
                    <CarouselIndicators />
                  </div>
                  <div className="carousel-inner">
                    <SlideItem />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
