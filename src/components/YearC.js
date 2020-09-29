import React from "react";
import "./YearC.css";

function YearC() {
  return (
    <>
      <div className="container">
        <div
          id="carouselContents"
          class="carousel slide"
          data-ride="carousel"
          data-interval="false"
        >
          <div class="carousel-inner" role="listbox">
            <div class="carousel-item active text-center p-4">
              <h5>2020</h5>
            </div>
            <div class="carousel-item text-center p-4">
              <h5>2021</h5>
            </div>
            <div class="carousel-item text-center p-4">
              <h5>2022</h5>
            </div>
            <div class="carousel-item text-center p-4">
              <h5>2023</h5>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselContents"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselContents"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default YearC;
