import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from "@fortawesome/free-solid-svg-icons";

export function Advertisement2(){

    return(
        <>
             <div className="row justify-content-center mt-2">
        <div className="col-lg-4 col-md-4 top_background mt-2">
       <div className="row justify-content-center">
        <h4>Season's Top Picks <FontAwesomeIcon icon={faArrowRight}/></h4>
        <div class="card col-lg-5 col-md-5 mt-3">
  <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/track-suit/e/o/a/xxl-thc-f2-tracksuit-navyblue-the-himalayan-original-imagtr4hy2p2yvgs.jpeg?q=70&crop=false" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Tracksuits</p>
    <p class="card-text text-success">Min. 50% Off</p>
  </div>
</div>
<div class="card col-lg-5 col-md-5 ms-2 mt-3">
  <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/3/t/d/36-vb-blue-combraided-original-imagmmgsyx3brxrv.jpeg?q=70&crop=false" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Men Trousers</p>
    <p class="card-text text-success">Min. 50% Off</p>
  </div>
</div>
<div class="card col-lg-5 col-md-5 mt-3">
  <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/i/b/p/s-st2-vebnor-original-imagpv8vufgg5egp.jpeg?q=70&crop=false" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Kids' Dresses</p>
    <p class="card-text text-success">Min. 70% Off</p>
  </div>
</div>
<div class="card col-lg-5 col-md-5 ms-2 mt-3">
  <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/k/8/b/-original-imagyk8qaafzmfbc.jpeg?q=70&crop=false" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">T -shirts</p>
    <p class="card-text text-success">Top Sellers</p>
  </div>
</div>
       </div>
       </div>
       <div className="col-lg-6 col-md-6 ms-3 bg_slide mt-2">
       <div className="row mt-5 justify-content-center">
<h4 class="col-lg-9 col-md-9 text-center">Fop Selling Smartphones</h4>
<h6 class="col-lg-9 col-md-9 text-center text-secondary">Latest Technology, Best Brands</h6>
<button class="col-lg-6 col-md-6 btn btn-outline-light">Explore Now</button>
<div class="col-lg-10 col-md-10 col-10 mt-5">
  <img src="https://thumbs.dreamstime.com/z/sale-smartphone-poster-design-vector-illustration-eps-72000652.jpg" class="card-img-top" alt="..."/>
</div>
      </div>
       </div>
      </div>

        </>
    );
}