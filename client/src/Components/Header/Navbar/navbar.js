import React from "react"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';

export function Navbar(){

    return(
        <>
         <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <img src="https://i0.wp.com/goushrestha.com/wp-content/uploads/2020/01/flipkart-logo-vector-png-flipkart-vector-logo-720-3.png?ssl=1" class="d-block w-25" alt="..."/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
      <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/signup">Signup</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Profile</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<div class="container-fluid">
    <div class="row"> 
      <table>
        <thead>
        <tr>
            <th>
        <div class="active col ms-3">
  <Link to ={`/usermobile`}><img src="https://th.bing.com/th/id/R.65a4137376936ae9be364a44431c9348?rik=0STdQSU%2b2wHJeg&riu=http%3a%2f%2fwww.learningcomputer.com%2fblog%2fwp-content%2fuploads%2f2016%2f11%2fCell-Phone-Plans-topic-page-graphic.png&ehk=gkxu1Dk7B1f91j369HRMYQapfTwy7hxrk%2ftwAM80wcY%3d&risl=&pid=ImgRaw&r=0" class="d-block w-25" alt="Mobiles"/></Link>
            Mobiles
          </div>
          </th>
          <th>
        <div class="active">
        <Link to ={`/userfashion`}><img src="https://i.pinimg.com/originals/9a/4a/12/9a4a12ff22aa447a57a712b840d9611c.jpg" class="d-block w-25" alt="..."/></Link>
            Fashion
          </div>
          </th>
          <th>
        <div class="active">
        <Link to ={`/userelectronics`}><img src="https://th.bing.com/th/id/OIP.iAgyydPGwY4Qem6TPsNQJgHaHa?pid=ImgDet&w=474&h=474&rs=1" class="d-block w-25" alt="..."/></Link>
            Electronics
          </div>
            </th>
            <th>
        <div class="active col">
        <Link to ={`/userfurniture`}><img src="https://th.bing.com/th/id/OIP.Wy57-ghL26Sod84ide53tQHaFd?pid=ImgDet&w=474&h=349&rs=1" class="d-block w-25" alt="..."/></Link>
            Furniture
          </div>
          </th>
          <th>
        <div class="active col ms-3">
  <Link to ={`/usertoy`}><img src="https://i5.walmartimages.com/asr/679cadc1-80b6-45d2-b998-d6213859e251_1.69749f5612626f33c395fbd58fe8b9b7.jpeg" class="d-block w-25" alt="Toy"/></Link>
            Beauty,Toy & More
          </div>
          </th>
          <th>
        <div class="active col ms-3">
  <Link to ={`/usergrocery`}><img src="https://freepngimg.com/thumb/grocery/41624-7-groceries-hd-download-hd-png.png" class="d-block w-25" alt="Grocery"/></Link>
            Grocery
          </div>
          </th>
          </tr>
          </thead>
      </table>
    </div>
  </div>

  <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" class="active" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" class="active" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner advertisement">
    <div class="carousel-item active">
      <img src="https://i.pinimg.com/originals/50/69/cc/5069cce8187bfb5b9d3ad528586cc85e.jpg" class=" w-100" alt="..."/>
    </div>
    <div class="carousel-item active">
      <img src="https://www.inventiva.co.in/wp-content/uploads/2022/08/how-to-increase-sales-on-flipkart.jpeg" class=" w-100" alt="..."/>
    </div>
    <div class="carousel-item active">
      <img src="https://www.findprix.com/blog/wp-content/uploads/2022/03/Flipkart-Upcoming-Sale-788x443-1.jpg" class=" w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div class="row">
  <table>
    <tbody>
    <tr>
      <td>
<div class="col-12">
      <img src="https://infobeamsolution.com/wp-content/uploads/2020/04/maxresdefault-1.jpg" class="w-100" alt="..."/>
    </div>
    </td>
    <td>
    <div class="col-8">
      <img src="https://techstory.in/wp-content/uploads/2021/08/Flipkart-Big-Saving-Days-Sale-starting-August-6.png" class="w-100" alt="..."/>
    </div>
    </td>
    <td>
    <div class="col-9">
      <img src="https://assets.mspimages.in/gear/wp-content/uploads/2023/05/Upcoming-Flipkart-sale-1920x1008.png" class="w-100" alt="..."/>
    </div>
    </td>
    <td>
    <div class="col-10">
      <img src="https://images.news18.com/ibnlive/uploads/2021/10/flipkart-sale-163315209316x9.jpg" class="w-100" alt="..."/>
    </div>
    </td>
    </tr>
  </tbody>
    </table>
    </div>

    
<div class="row">
<h2>Best of Electronics</h2>
<div class="card col-3">
  <img src="https://th.bing.com/th/id/OIP.3TPkHvQYn8CAfkF1nNQxegHaHa?w=500&h=500&rs=1&pid=ImgDetMain" class="card-img-top w-25" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Printers</h5>
    <p class="card-text">From $5000</p>
  </div>
</div>
<div class="card col-3">
  <img src="https://m.media-amazon.com/images/I/71uPymc2ngL._SX679_.jpg" class="card-img-top w-25" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Laptop</h5>
    <p class="card-text">From $25,599</p>
  </div>
</div>
<div class="card col-3">
  <img src="https://m.media-amazon.com/images/I/71aTghUQfqL._SX679_.jpg" class="card-img-top w-25" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">NoiseFit Halo 1.43</h5>
    <p class="card-text">From $2,499</p>
  </div>
</div>
<div class="card col-3">
  <img src="https://m.media-amazon.com/images/I/81Tr3Jo8DvL._SX679_.jpg" class="card-img-top w-25" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Sony Alpha ILCE-7M4K</h5>
    <p class="card-text">From $70,000</p>
  </div>
</div>

<h2>Best of Fashions</h2>
<div class="card col-3">
  <img src="https://m.media-amazon.com/images/I/71dcavJFVkL._SY879_.jpg" class="card-img-top w-25 col-1" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Tavasya Women Salwar suit</h5>
    <p class="card-text">From $1,499</p>
  </div>
</div>
<div class="card col-3">
  <img src="https://m.media-amazon.com/images/I/81kU-VFzKgL._SY879_.jpg" class="card-img-top w-25 col-1" alt="..."/>
  <div class="card-body">
    <h5 class="card-title"> House & Shields Men's Skinny Jeanst</h5>
    <p class="card-text">From $599</p>
  </div>
</div>
<div class="card col-3">
  <img src="https://m.media-amazon.com/images/I/41YSqRAqkrL._SX679_.jpg" class="card-img-top w-75 col-1" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">VINCENT CHASE EYEWEAR</h5>
    <p class="card-text">From $708</p>
  </div>
</div>
<div class="card col-3">
  <img src="https://m.media-amazon.com/images/I/512l456jMvL._SY695_.jpg" class="card-img-top w-25 col-1" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Red Tape Casual Sneaker Shoes for Men</h5>
    <p class="card-text">From $1,059</p>
  </div>
</div>

<h2>Best of Home & Furniture</h2>
<div class="card col-3">
  <img src="https://m.media-amazon.com/images/I/61GnCWqoz9L._SY879_.jpg" class="card-img-top w-25 col-1" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Samsung 183 L, 4 Star, Digital Inverter, Direct-Cool Single Door Refrigerator</h5>
    <p class="card-text">From $15,890</p>
  </div>
</div>

<div class="card col-3">
  <img src="https://m.media-amazon.com/images/I/61nF5ekaaPL._SX679_.jpg" class="card-img-top w-50 col-1" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Blue Star 1.5 Ton 5 Star Convertible 5 in 1 Cooling Inverter Split Air Conditioner</h5>
    <p class="card-text">From $44,690</p>
  </div>
</div>
<div class="card col-3">
  <img src="https://m.media-amazon.com/images/I/61Md+j4GC3L._SX679_.jpg" class="card-img-top w-75 col-1" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Panasonic 20L Solo Microwave Oven</h5>
    <p class="card-text">From $5,890</p>
  </div>
</div>
<div class="card col-3">
  <img src="https://m.media-amazon.com/images/I/61iQRax3uyL._SY879_.jpg" class="card-img-top w-25 col-1" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Whirlpool 7.5 Kg 5 Star Royal Fully-Automatic Top Load Washing Machine </h5>
    <p class="card-text">From $16,490</p>
  </div>
</div>

<h2>Best of Mobiles</h2>
<div class="card col-3">
  <img src="https://m.media-amazon.com/images/I/717JX3femML._SX679_.jpg" class="card-img-top w-25 col-1" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">OnePlus 12R (Cool Blue, 8GB RAM, 128GB Storage)</h5>
    <p class="card-text">From $39,999</p>
  </div>
</div>
<div class="card col-3">
  <img src="https://m.media-amazon.com/images/I/61Tl1z+Hn0L._SX679_.jpg" class="card-img-top w-25 col-1" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Samsung Galaxy Z Flip5 5G (Mint, 8GB RAM, 256GB Storage)</h5>
    <p class="card-text">From $99,999</p>
  </div>
</div>
<div class="card col-3">
  <img src="https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg" class="card-img-top w-25 col-1" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Apple iPhone 14 (128 GB) - Blue</h5>
    <p class="card-text">From $58,999</p>
  </div>
</div>
<div class="card col-3">
  <img src="https://m.media-amazon.com/images/I/619f09kK7tL._SX679_.jpg" class="card-img-top w-25 col-1" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Apple iPhone 14 (128 GB) - Purple</h5>
    <p class="card-text">From $58,999</p>
  </div>
</div>
</div>

<div>
<div>
    <h5>Flipkart Terms of Use</h5>
    <p>

This document is an electronic record in terms of Information Technology Act, 2000 and rules there under as applicable and the amended provisions pertaining to electronic records in various statutes as amended by the Information Technology Act, 2000. This electronic record is generated by a computer system and does not require any physical or digital signatures.

This document is published in accordance with the provisions of Rule 3 (1) of the Information Technology (Intermediaries guidelines) Rules, 2011 that require publishing the rules and regulations, privacy policy and Terms of Use for access or usage of domain name [www.flipkart.com] (“Website”), including the related mobile site and mobile application (hereinafter referred to as “Platform”)

The Platform is owned by Flipkart Internet Private Limited, a company incorporated under the Companies Act, 1956 with its registered office at Buildings Alyssa, Begonia & Clover, Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village, Bengaluru – 560103, Karnataka, India and its branch offices at 2nd Floor, Block F (Flora), Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village, Bengaluru-560103, Karnataka, India and; 447/C, 12th Main, 4th Block, Koramangala, Bengaluru-560034, Karnataka, India (hereinafter referred to as "Flipkart").

Your use of the Platform and services and tools are governed by the following terms and conditions ("Terms of Use") as applicable to the Platform including the applicable policies which are incorporated herein by way of reference. If You transact on the Platform, You shall be subject to the policies that are applicable to the Platform for such transaction. By mere use of the Platform, You shall be contracting with Flipkart Internet Private Limited and these terms and conditions including the policies constitute Your binding obligations, with Flipkart.

For the purpose of these Terms of Use, wherever the context so requires "You" or "User" shall mean any natural or legal person who has agreed to become a buyer on the Platform by providing Registration Data while registering on the Platform as Registered User using the computer systems. Flipkart allows the User to surf the Platform or making purchases without registering on the Platform. The term "We", "Us", "Our" shall mean Flipkart Internet Private Limited.</p>
</div>

<div class="footer">
<table class="table table-dark table-borderless">
  <thead>
    <tr>
      <th scope="col">ABOUT</th>
      <th scope="col">GROUP COMPANIES</th>
      <th scope="col">HELP</th>
      <th scope="col">CONSUMER POLICY</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row"><a href="#" class="link-underline link-underline-opacity-0 link-light" >Contact Us</a> </td>
      <td scope="row"><a href="#" class="link-underline link-underline-opacity-0 link-light" >Myntra</a> </td>
      <td scope="row"><a href="#" class="link-underline link-underline-opacity-0 link-light" >Payments</a> </td>
      <td scope="row"><a href="#" class="link-underline link-underline-opacity-0 link-light" >Cancellation & Returns</a> </td>
      
      
    </tr>
    <tr>
    <td scope="row"><a href="#" class="link-underline link-underline-opacity-0 link-light" >About Us</a> </td>
    <td scope="row"><a href="#" class="link-underline link-underline-opacity-0 link-light" >Flipkart Wholesale</a> </td>
    <td scope="row"><a href="#" class="link-underline link-underline-opacity-0 link-light" >Shipping</a> </td>  
    <td scope="row"><a href="#" class="link-underline link-underline-opacity-0 link-light" >Terms of Use</a> </td>
    </tr>
    <tr>
      <td scope="row"><a href="#" class="link-underline link-underline-opacity-0 link-light" >Careers</a> </td>
      <td scope="row"><a href="#" class="link-underline link-underline-opacity-0 link-light" >Cleartrip</a> </td>
      <td scope="row"><a href="#" class="link-underline link-underline-opacity-0 link-light" >Cancellation & Returns</a> </td>
      <td scope="row"><a href="#" class="link-underline link-underline-opacity-0 link-light" >Security</a> </td>
    </tr>
    <tr>
    <td scope="row"><a href="#" class="link-underline link-underline-opacity-0 link-light" >Flipkart Stories</a> </td>
    <td scope="row"><a href="#" class="link-underline link-underline-opacity-0 link-light"  >Shopsy</a> </td>
    <td scope="row"><a href="#" class="link-underline link-underline-opacity-0 link-light" >FAQ</a> </td>
    <td scope="row"><a href="#" class="link-underline link-underline-opacity-0 link-light" >Privacy</a> </td>
    </tr>
    <tr>
    <td scope="row"><a href="#" class="link-underline link-underline-opacity-0 link-light" >Press</a> </td>
    <td scope="row"></td>
    <td scope="row"><a href="#" class="link-underline link-underline-opacity-0 link-light" >Report Infringement</a> </td>
    <td scope="row"><a href="#" class="link-underline link-underline-opacity-0 link-light" >Sitemap</a> </td>
    </tr>
    <tr>
    <td scope="row"><a href="#" class="link-underline link-underline-opacity-0 link-light" >Corporate Information</a> </td>
    <td scope="row"></td>
    <td scope="row"></td>
    <td scope="row"><a href="#" class="link-underline link-underline-opacity-0 link-light" >Grievance Redressal</a> </td>
    </tr>
    <tr>
    <td scope="row"></td>
    <td scope="row"></td>
    <td scope="row"></td>
    <td scope="row"><a href="#" class="link-underline link-underline-opacity-0 link-light" >EPR Compliance</a> </td>
    </tr>
    </tbody>
    </table>
<div class="text-center">
    <FontAwesomeIcon icon={faInstagram} size="2xl"/>
    <FontAwesomeIcon icon={faXTwitter} size="2xl" />
    <FontAwesomeIcon icon={faFacebookF} size="2xl" />
    <FontAwesomeIcon icon={faYoutube} size="2xl" />
    </div>
 

</div>
</div>
        </>
    );
}