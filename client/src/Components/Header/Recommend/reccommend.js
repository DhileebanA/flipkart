import React, { useState } from "react";

export function Recommend(){
  const[item, setItem] = useState(0)

    return(
        <>
        <div className="row mt-4">
            <div className="col-lg-12 col-md-12 col-12">
                <div className="row justify-content-evenly ">
                    <h3 className="text-white ms-5">Recommended Items</h3>
            <div class="card img col-lg-2 col-md-2 col-7 mt-3 card_bg">
  <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/stuffed-toy/e/t/t/huggable-cuddly-octopus-premium-quality-stuffed-soft-toys-for-original-imagvfgw8p8brgtm.jpeg?q=70&crop=false" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Huggable Cuddly Octopus</h5>
    <p class="card-text text-center">₹239</p>
    <button onClick={() => { setItem(item + 1) }} class="btn btn-outline-primary ms-4">Add Cart</button>
  </div>
</div>

<div class="card img col-lg-2 col-md-2 ms-2 col-7 mt-3">
  <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/digital-security-softwr/v/i/n/-original-imagt75z3g6zvgey.jpeg?q=70&crop=false" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">McAfee Anti-virus</h5>
    <p class="card-text text-center">₹660</p>
    <a href="#" class="btn btn-outline-primary ms-4">Add Cart</a>
  </div>
</div>

<div class="card img col-lg-2 col-md-2 col-7 ms-2 mt-3">
  <img src="https://rukminim2.flixcart.com/image/832/832/krtjgcw0/showpiece-figurine/q/8/d/sg-royalbox-original-imag5gy2rxubzkgq.jpeg?q=70&crop=false" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Meditating Buddha Statue</h5>
    <p class="card-text text-center">₹189</p>
    <a href="#" class="btn btn-outline-primary ms-4">Add Cart</a>
  </div>
</div>

<div class="card img col-lg-2 col-md-2 col-7 ms-2 mt-3">
  <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/wall-decoration/n/i/2/elegent-designer-wall-hanging-for-office-and-living-room-1-original-imagseyzy8hdggag.jpeg?q=70&crop=false" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Elegent designer</h5>
    <p class="card-text text-center">₹97</p>
    <a href="#" class="btn btn-outline-primary ms-4">Add Cart</a>
  </div>
</div>

<div class="card img col-lg-2 col-md-2 col-7 ms-2 mt-3">
  <img src="https://rukminim2.flixcart.com/image/832/832/kr58yvk0/plant-container-set/z/m/i/6-basket-6b-agami-original-imag5y5vxugpycqe.jpeg?q=70&crop=false" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Hanging Basket Plant</h5>
    <p class="card-text text-center">₹279</p>
    <a href="#" class="btn btn-outline-primary ms-4">Add Cart</a>
  </div>
</div>
</div>
            </div>
        </div>
        </>
    );
}
