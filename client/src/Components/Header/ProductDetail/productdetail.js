import React from "react";
import { useCart } from "react-use-cart";

const Detail = (props) => {
const {addItem} = useCart();
  return(
    <>
    <div className="">
     <div class="card row ">
      <div className="col-lg-3 col-md-3">
  <img src={props.img} class="card-img-top" alt="..."/>
  </div>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.price}</p>
    <button onClick={addItem(props.item)} class="btn btn-primary">
      Add to Cart</button>
  </div>
  </div>
</div>
    </>
  );
};

export default Detail;
