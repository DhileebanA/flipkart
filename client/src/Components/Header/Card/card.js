import React from "react";
import { Link } from "react-router-dom";

export function Card() {

  return (
    <>
      <div class="container-fluid">
        <div class="row justify-content-evenly">
          <div class="active col-2 col-lg-2 col-md-2 card_img mt-3">
            <Link to={`/usermobile`}><img src="https://m.media-amazon.com/images/I/31VjlrbE3bL._SY445_SX342_QL70_FMwebp_.jpg" class="d-block w-50 rounded-circle border border-5 border-warning" alt="Mobiles"  /></Link>
            <h6 className="text-white">Mobiles</h6>
          </div>

          <div class="active col-2 col-lg-2 col-md-2 card_img mt-3">
            <Link to={`/userfashion`}><img src="https://m.media-amazon.com/images/I/71mifRi8j6L._SX679_.jpg" class="d-block w-50 rounded-circle border border-5 border-warning" alt="Fashion" /></Link>
            <h6 className="text-white">Fashion</h6>
          </div>

          <div class="active col-2 col-lg-2 col-md-2 card_img mt-3">
            <Link to={`/userelectronics`}><img src="https://m.media-amazon.com/images/I/51PPxZWH88L._SX300_SY300_QL70_FMwebp_.jpg" class="d-block w-50 rounded-circle border border-5 border-warning" alt="Electronics" /></Link>
            <h6 className="text-white">Electronics</h6>
          </div>

          <div class="active col-2 col-lg-2 col-md-2 card_img mt-3">
            <Link to={`/userfurniture`}><img src="https://m.media-amazon.com/images/I/41h7w5Xn0JL._SX300_SY300_QL70_FMwebp_.jpg" class="d-block w-50 rounded-circle border border-5 border-warning" alt="Furniture" /></Link>
            <h6 className="text-white">Furniture</h6>
          </div>

          <div class="active col-2 col-lg-2 col-md-2 card_img mt-3">
            <Link to={`/userkitchen`}><img src="https://m.media-amazon.com/images/I/61GOmZX6iNL._SX679_.jpg" class="d-block w-50 rounded-circle border border-5 border-warning" alt="Home & Furniture" /></Link>
            <h6 className="text-white">Kitchen Appliances</h6>
          </div>

          <div class="active col-2 col-lg-2 col-md-2 card_img mt-3">
            <Link to={`/usergroceries`}><img src="https://www.mobkart.co.in/wp-content/uploads/2020/10/20201024_1840361.jpg" class="d-block w-50 rounded-circle border border-5 border-warning" alt="Groceries" /></Link>
            <h6 className="text-white">Groceries</h6>
          </div>

        </div>
      </div>
    </>
  );
}