import React from "react";
import { Link } from "react-router-dom";

export function Card() {

  return (
    <>
      <div class="container-fluid mb-3">
        <div class="row bg-white justify-content-center">
          <div class="active col-4 col-lg-2 col-md-2 card_img">
            <Link to={`/usermobile`}><img src="https://m.media-amazon.com/images/I/31VjlrbE3bL._SY445_SX342_QL70_FMwebp_.jpg" class="d-block w-50" alt="Mobiles"  /></Link>
            <h6>Mobiles</h6>
          </div>

          <div class="active col-4 col-lg-2 col-md-2 card_img">
            <Link to={`/userfashion`}><img src="https://m.media-amazon.com/images/I/71mifRi8j6L._SX679_.jpg" class="d-block w-50" alt="Fashion" /></Link>
            <h6>Fashion</h6>
          </div>

          <div class="active col-4 col-lg-2 col-md-2 card_img">
            <Link to={`/userelectronics`}><img src="https://m.media-amazon.com/images/I/51PPxZWH88L._SX300_SY300_QL70_FMwebp_.jpg" class="d-block w-50" alt="Electronics" /></Link>
            <h6>Electronics</h6>
          </div>

          <div class="active col-4 col-lg-2 col-md-2 card_img">
            <Link to={`/userfurniture`}><img src="https://m.media-amazon.com/images/I/41h7w5Xn0JL._SX300_SY300_QL70_FMwebp_.jpg" class="d-block w-50" alt="Furniture" /></Link>
            <h6>Furniture</h6>
          </div>

          <div class="active col-4 col-lg-2 col-md-2 card_img">
            <Link to={`/userkitchen`}><img src="https://m.media-amazon.com/images/I/61GOmZX6iNL._SX679_.jpg" class="d-block w-50" alt="Home & Furniture" /></Link>
            <h6>Kitchen Appliances</h6>
          </div>

          <div class="active col-4 col-lg-2 col-md-2 card_img">
            <Link to={`/usergroceries`}><img src="https://www.mobkart.co.in/wp-content/uploads/2020/10/20201024_1840361.jpg" class="d-block w-50" alt="Groceries" /></Link>
            <h6>Groceries</h6>
          </div>

        </div>
      </div>
    </>
  );
}