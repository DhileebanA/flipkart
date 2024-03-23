import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from "@fortawesome/free-solid-svg-icons";

export function Advertisement(){

    return(
        <>
             <div className="row justify-content-center mt-2">
        <div className="col-lg-5 col-md-5 top_bg mt-2">
       <div className="row justify-content-center">
        <h4>Season's Top Picks <FontAwesomeIcon icon={faArrowRight}/></h4>
        <div class="card col-lg-5 col-md-5 mt-3">
  <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/7/q/e/-original-imagg7sy793sz73b.jpeg?q=70&crop=false" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Sneakers For Men</p>
    <p class="card-text text-success">Min. 50% Off</p>
  </div>
</div>
<div class="card col-lg-5 col-md-5 ms-2 mt-3">
  <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/slipper-flip-flop/5/o/o/-original-imagz5kfmnmfxqtv.jpeg?q=70&crop=false" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Men Slippers</p>
    <p class="card-text text-success">Min. 50% Off</p>
  </div>
</div>
<div class="card col-lg-5 col-md-5 mt-3">
  <img src="https://rukminim2.flixcart.com/image/832/832/kbzergw0/instant-camera/r/m/h/instax-instant-camera-mini-11-fujifilm-original-imaft7fpbhhne8qr.jpeg?q=70&crop=false" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Instax Cameras</p>
    <p class="card-text text-success">Min. 50% Off</p>
  </div>
</div>
<div class="card col-lg-5 col-md-5 ms-2 mt-3">
  <img src="https://rukminim2.flixcart.com/image/832/832/krce64w0/mosquito-net/w/h/g/king-size-bed-double-bed-round-nre0164-neruti-enterprise-original-imag55nfkybatyxx.jpeg?q=70&crop=false" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Mosquito Nets</p>
    <p class="card-text text-success">Min. 50% Off</p>
  </div>
</div>
       </div>
       </div>
       <div className="col-lg-6 col-md-6 ms-3 background_slide mt-2">
       <div className="row mt-5 justify-content-center">
<h4 class="col-lg-9 col-md-9 text-center">Find Furnitures that speak to you</h4>
<h6 class="col-lg-9 col-md-9 text-center text-secondary">Discover our Premium Furniture Collection!</h6>
<div class="card col-lg-3 col-md-3 col-10 ms-2 mt-2">
  <img src="https://m.media-amazon.com/images/I/41V6EyavyHL._SX300_SY300_QL70_FMwebp_.jpg" class="card-img-top" alt="..."/>
</div>
<div class="card col-lg-3 col-md-3 col-10 ms-2  mt-2">
  <img src="https://m.media-amazon.com/images/I/71rnApMf+ZL._SX679_.jpg" class="card-img-top" alt="..."/>
</div>
<div class="card col-lg-3 col-md-3 col-10 ms-2  mt-2">
  <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/sofa-set/e/z/q/-original-imaggn8a2ymdqnpk.jpeg?q=70&crop=false" class="card-img-top" alt="..."/>
</div>
<div class="col-lg-10 col-md-10 col-10 mt-5">
  <img src="https://images.creativemarket.com/0.1.0/ps/8837469/1820/1214/m1/fpnw/wm0/creativemarket-.jpg?1596568136&s=83c2e0faeea7ad723bbf9b80061abac2" class="card-img-top" alt="..."/>
</div>
      </div>
       </div>
      </div>

        </>
    );
}