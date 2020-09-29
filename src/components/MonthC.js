import React from "react";
import "./MonthC.css";

function MonthC() {
  return (
    <>
      <div className="container">
        <div
          id="carouselContent"
          class="carousel slide"
          data-ride="carousel"
          data-interval="false"
        >
          <div class="carousel-inner" role="listbox">
            <div class="carousel-item active text-center p-4">
              <h5>January</h5>
            </div>
            <div class="carousel-item text-center p-4">
              <h5>February</h5>
            </div>
            <div class="carousel-item text-center p-4">
              <h5>March</h5>
            </div>
            <div class="carousel-item text-center p-4">
              <h5>April</h5>
            </div>
            <div class="carousel-item text-center p-4">
              <h5>May</h5>
            </div>
            <div class="carousel-item text-center p-4">
              <h5>June</h5>
            </div>
            <div class="carousel-item text-center p-4">
              <h5>July</h5>
            </div>
            <div class="carousel-item text-center p-4">
              <h5>August</h5>
            </div>
            <div class="carousel-item text-center p-4">
              <h5>September</h5>
            </div>
            <div class="carousel-item text-center p-4">
              <h5>October</h5>
            </div>
            <div class="carousel-item text-center p-4">
              <h5>November</h5>
            </div>
            <div class="carousel-item text-center p-4">
              <h5>December</h5>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselContent"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselContent"
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

export default MonthC;
