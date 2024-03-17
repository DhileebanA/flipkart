import React from "react";

export function Carousel() {

  return (
    <>
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner advertisement">
          <div class="carousel-item active">
            <img src="https://rukminim1.flixcart.com/flap/1800/1800/image/b82668b67d89e8db.jpg?q=80" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://images-static.nykaa.com/uploads/d2800a65-78e5-41c0-bf8a-819efcaafad8.jpg?tr=w-2400" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://rukminim1.flixcart.com/flap/2500/2500/image/9afc8fcc45204945.jpg?q=80" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}