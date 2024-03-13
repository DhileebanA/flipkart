import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export function Cart(){
  useEffect(() => {
    AOS.init();
  }, []);
    return(
        <>
        <div class="row" >
<h2>Best of Electronics</h2>
<div class="card col-12 col-md-2 col-sm-6" data-aos="fade-right">
  <img src="https://th.bing.com/th/id/OIP.3TPkHvQYn8CAfkF1nNQxegHaHa?w=500&h=500&rs=1&pid=ImgDetMain" class="card-img-top w-100 img" alt="..."/>
  <div class="card-body">
    <h6 class="card-title">Printers</h6>
    <p class="card-text">From $5000</p>
  </div>
</div>
<div class="card col-12 col-md-2 col-sm-6 ms-2 " data-aos="fade-right">
  <img src="https://m.media-amazon.com/images/I/71uPymc2ngL._SX679_.jpg" class="card-img-top w-100 img" alt="..."/>
  <div class="card-body">
    <h6 class="card-title">Laptop</h6>
    <p class="card-text">From $25,599</p>
  </div>
</div>
<div class="card col-12 col-md-2 col-sm-6 ms-2" data-aos="fade-right">
  <img src="https://m.media-amazon.com/images/I/71aTghUQfqL._SX679_.jpg" class="card-img-top w-100 img" alt="..."/>
  <div class="card-body">
    <h6 class="card-title">NoiseFit Halo 1.43</h6>
    <p class="card-text">From $2,499</p>
  </div>
</div>
<div class="card col-12 col-md-2 col-sm-6 ms-2" data-aos="fade-right">
  <img src="https://m.media-amazon.com/images/I/81Tr3Jo8DvL._SX679_.jpg" class="card-img-top w-100 img" alt="..."/>
  <div class="card-body">
    <h6 class="card-title">Sony Alpha ILCE-7M4K</h6>
    <p class="card-text">From $70,000</p>
  </div>
</div>

<div class="col-12 col-md-3 col-sm-6">
  <img src="https://www.gizchina.com/wp-content/uploads/images/2021/08/Fire-Boltt-Ninja-On-Flipkart-1024x1024.jpg" class="card-img-top" alt="..."/>
</div>

<div id="carouselExampleAutoplaying" class="carousel slide mt-4 mb-4" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Pantry/MARCH_2020/BAU/BANKSTRIPES/FOR_DESKTOP/AXIS_BANK_STRIPE_DESKTOP1500x300.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.ohhoexpress.online/image/website_image/1620672239_sbi.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/HSS/June22/Monsoon/bank/1400x282.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<h2>Best of Fashions</h2>
<div class="card col-10 col-md-2 col-sm-6 " data-aos="fade-right">
  <img src="https://m.media-amazon.com/images/I/71teiu5GqNL._SY879_.jpg" class="card-img-top w-100 img" alt="..."/>
  <div class="card-body">
    <h6 class="card-title">rytras Women's Floral Printed Cotton Top</h6>
    <p class="card-text">From $469</p>
  </div>
</div>
<div class="card col-10 col-md-2 col-sm-6 ms-2" data-aos="fade-right">
  <img src="https://m.media-amazon.com/images/I/81kU-VFzKgL._SY879_.jpg" class="card-img-top w-100 img" alt="..."/>
  <div class="card-body">
    <h6 class="card-title"> House & Shields Men's Skinny Jeanst</h6>
    <p class="card-text">From $599</p>
  </div>
</div>
<div class="card col-10 col-md-2 col-sm-6 ms-2" data-aos="fade-right">
  <img src="https://m.media-amazon.com/images/I/61wKiLYyY+L._SY879_.jpg" class="card-img-top w-100 img" alt="..."/>
  <div class="card-body">
    <h6 class="card-title">Glito Men's White Colour V-Neck T-Shirt for Men</h6>
    <p class="card-text">From $708</p>
  </div>
</div>
<div class="card col-10 col-md-2 col-sm-6 ms-2" data-aos="fade-right">
  <img src="https://m.media-amazon.com/images/I/9117U3htP5L._SY879_.jpg" class="card-img-top w-100 img" alt="..."/>
  <div class="card-body">
    <h6 class="card-title">Zeel Clothing Women's Silk Semi stitched Lehenga Choli</h6>
    <p class="card-text">From $6,598</p>
  </div>
</div>
<div class="card col-10 col-md-2 col-sm-6 ms-2" data-aos="fade-right">
  <img src="https://m.media-amazon.com/images/I/51EH-LHAaYL.jpg" class="card-img-top w-100 img" alt="..."/>
  <div class="card-body">
    <h6 class="card-title">STREETKING Street King Men Denim Double Pocket Casual Shirts</h6>
    <p class="card-text">From $589</p>
  </div>
</div>

<div class="row mt-4 mb-4">
        <div class="col-3">
       <img src="https://assets.mspimages.in/gear/wp-content/uploads/2023/05/Upcoming-Flipkart-sale-2048x1075.png" class="img-fluid d-block" alt="..."/>
       </div>
       <div class="col-3">
       <img src="https://cdn.grabon.in/gograbon/images/merchant/1598961749272.jpg" class="img-fluid d-block" alt="..."/>
       </div>
       <div class="col-3">
       <img src="https://cdn1.desidime.com/SEO/Flipkart-BigSavingDays-NoDates-Desidime-Festival-Banner-SEO-2ndApril2023.jpg" class="img-fluid d-block" alt="..."/>
       </div>
       <div class="col-3">
       <img src="https://s3b.cashify.in/gpro/uploads/2022/05/04130722/Flipkart-Big-Saving-Days-Amazing-Tablet-Deals-You-Must-Look.jpg" class="img-fluid d-block" alt="..."/>
       </div>
</div>
<h2>Best of Home & Furniture</h2>
<div class="card col-10 col-md-2 col-sm-6 ms-2" data-aos="fade-right">
  <img src="https://m.media-amazon.com/images/I/81MRU+3RJLL._SX679_.jpg" class="card-img-top w-100 img" alt="..."/>
  <div class="card-body">
    <h6 class="card-title">Sony Bravia 139 cm (55 inches) 4K Ultra HD Smart LED Google TV KD-55X74L (Black)</h6>
    <p class="card-text">From $15,890</p>
  </div>
</div>

<div class="card col-10 col-md-2 col-sm-6 ms-2" data-aos="fade-right">
  <img src="https://m.media-amazon.com/images/I/61nF5ekaaPL._SX679_.jpg" class="card-img-top w-100 img" alt="..."/>
  <div class="card-body">
    <h6 class="card-title">Blue Star 1.5 Ton 5 Star Convertible 5 in 1 Cooling Inverter Split Air Conditioner</h6>
    <p class="card-text">From $44,690</p>
  </div>
</div>
<div class="card col-10 col-md-2 col-sm-6 ms-2" data-aos="fade-right">
  <img src="https://m.media-amazon.com/images/I/51m4NsZau4L._SX679_.jpg" class="card-img-top w-100 img" alt="..."/>
  <div class="card-body">
    <h6 class="card-title">Sony HT-S40R Real 5.1ch Dolby Audio Soundbar </h6>
    <p class="card-text">From $24,990</p>
  </div>
</div>
<div class="card col-10 col-md-2 col-sm-6 ms-2" data-aos="fade-right">
  <img src="https://m.media-amazon.com/images/I/41VDBgpOPWL.jpg" class="card-img-top w-100 img" alt="..."/>
  <div class="card-body">
    <h6 class="card-title">Blue Black Bean Bag Cover Without Beans- True 2f</h6>
    <p class="card-text">From $998</p>
  </div>
</div>
<div class="card col-10 col-md-2 col-sm-6 ms-2" data-aos="fade-right">
  <img src="https://m.media-amazon.com/images/I/316QwtijW3L.jpg" class="card-img-top w-100 img" alt="..."/>
  <div class="card-body">
    <h6 class="card-title">SELLER ZONE Humidifiers With Colorful Light For Room</h6>
    <p class="card-text">From $495</p>
  </div>
</div>

<div className="row mt-4">
<div className="col-2"></div>
<div class="col-12 col-lg-8">
       <img src="https://i.ytimg.com/vi/6MBQizq4eX0/maxresdefault.jpg" class="img-fluid d-block" alt="..."/>
       </div>
       </div>


<h2 className="mt-4">Best of Mobiles</h2>
<div class="card col-10 col-md-2 col-sm-6 ms-2" data-aos="fade-right">
  <img src="https://m.media-amazon.com/images/I/717JX3femML._SX679_.jpg" class="card-img-top w-100 img" alt="..."/>
  <div class="card-body">
    <h6 class="card-title">OnePlus 12R (Cool Blue, 8GB RAM, 128GB Storage)</h6>
    <p class="card-text">From $39,999</p>
  </div>
</div>
<div class="card col-10 col-md-2 col-sm-6 ms-2" data-aos="fade-right">
  <img src="https://m.media-amazon.com/images/I/61Tl1z+Hn0L._SX679_.jpg" class="card-img-top w-100 img" alt="..."/>
  <div class="card-body">
    <h6 class="card-title">Samsung Galaxy Z Flip5 5G (Mint, 8GB RAM, 256GB Storage)</h6>
    <p class="card-text">From $99,999</p>
  </div>
</div>
<div class="card col-10 col-md-2 col-sm-6 ms-2" data-aos="fade-right">
  <img src="https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg" class="card-img-top w-100 img" alt="..."/>
  <div class="card-body">
    <h6 class="card-title">Apple iPhone 14 (128 GB) - Blue</h6>
    <p class="card-text">From $58,999</p>
  </div>
</div>
<div class="card col-10 col-md-2 col-sm-6 ms-2" data-aos="fade-right">
  <img src="https://m.media-amazon.com/images/I/619f09kK7tL._SX679_.jpg" class="card-img-top w-100 img" alt="..."/>
  <div class="card-body">
    <h6 class="card-title">Apple iPhone 14 (128 GB) - Purple</h6>
    <p class="card-text">From $58,999</p>
  </div>
</div>
<div class="card col-10 col-md-2 col-sm-6 ms-2" data-aos="fade-right">
  <img src="https://m.media-amazon.com/images/I/61-I2QGRTnL._SX679_.jpg" class="card-img-top w-100 img" alt="..."/>
  <div class="card-body">
    <h6 class="card-title">Vivo Y200 5G (Jungle Green, 8GB RAM, 128GB Storage)</h6>
    <p class="card-text">From $21,999</p>
  </div>
</div>

<div class="row mt-4 mb-3">
        <div class="col-12 col-lg-6">
       <img src="https://hotdealszone.in/wp-content/uploads/2019/09/Big-Billion-Days-Furniture-Offers.jpg" class="img-fluid d-block" alt="..."/>
       </div>
        <div class="col-12 col-lg-6">
       <img src="https://s3b.cashify.in/gpro/uploads/2021/09/15140000/Best-Smartphone-Deals-on-Flipkart-Big-Billion-Day-Sale.jpg" class="img-fluid d-block" alt="..."/>
       </div>
       </div>

</div>
        </>
    );
}