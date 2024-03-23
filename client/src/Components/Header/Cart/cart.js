import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactCardSlider from 'react-card-slider-component';
import { Advertisement } from "../Advertisement/advertisement";
import { Advertisement2 } from "../Advertisement2/advertisement2";


export function Cart() {
  useEffect(() => {
    AOS.init();
  }, []);

  const slides = [
    {image:"https://m.media-amazon.com/images/I/41JACWT-wWL._SX679_.jpg",title:"Sony WH-CH520",description:"From ₹3,990"},
    {image:"https://m.media-amazon.com/images/I/61P-aGTSCtL._SX679_.jpg",title:"Lenovo Legion 5 Pro AMD Ryzen",description:"From ₹96,890"},
    {image:"https://m.media-amazon.com/images/I/61AHiYyu3ZL._SX679_.jpg",title:"Fire-Boltt Ninja Call Pro Plus 1.83",description:"From ₹1,199"},
    {image:"https://m.media-amazon.com/images/I/81Tr3Jo8DvL._SX679_.jpg",title:"Sony Alpha ILCE-7M4K",description:"From ₹2,30,989"},
    {image:"https://m.media-amazon.com/images/I/61goypdjAYL._SX679_.jpg",title:"Apple iPad 10th Generation",description:"From ₹36,900"},
    {image:"https://m.media-amazon.com/images/I/715vosKfRkL._SX679_.jpg",title:"Zebronics MAX FURY Transparent RGB",description:"From ₹1,099"},
    {image:"https://m.media-amazon.com/images/I/61MUoISbzjL._SX679_.jpg",title:"Redgear A-15 Wired Gaming Mouse",description:"From ₹549"},
]

const slides1 = [
  {image:"https://m.media-amazon.com/images/I/61wKiLYyY+L._SY879_.jpg",title:"Glito Men's White V-Neck T-Shirt",description:"From ₹708"},
  {image:"https://m.media-amazon.com/images/I/51EH-LHAaYL.jpg",title:"STREETKING Men Denim Shirts",description:"From ₹589"},
  {image:"https://m.media-amazon.com/images/I/61NNnMLLD+L._SX679_.jpg",title:"GoSriKi Women's Cotton Blend",description:"From ₹679"},
  {image:"https://m.media-amazon.com/images/I/81mV5uxN3XL._SY879_.jpg",title:"Enthone Women's Banarasi Silk Saree",description:"From ₹899"},
  {image:"https://m.media-amazon.com/images/I/61SRj3IzD1L._SY879_.jpg",title:"Ben Martin Men's Casual Denim",description:"From ₹699"},
  {image:"https://m.media-amazon.com/images/I/71UkW9i6uRL._SX679_.jpg",title:"Lymio Casual Shirt for Men",description:"From ₹349"},
  {image:"https://m.media-amazon.com/images/I/819FbYV4U7L._SX679_.jpg",title:"Hangout-Hub-Couple Tshirts",description:"From ₹711"},
]

const slides2 = [
  {image:"https://m.media-amazon.com/images/I/915+sXcUY+L._SX679_.jpg",title:"Sony Bravia Smart LED Google TV",description:"From ₹15,890"},
  {image:"https://m.media-amazon.com/images/I/61nF5ekaaPL._SX679_.jpg",title:"Blue Star 1.5 Star Air Conditioner",description:"From ₹44,690"},
  {image:"https://m.media-amazon.com/images/I/71msFUl565L._SX679_.jpg",title:"LG 7 Kg 5 Star Washing Machine ",description:"From ₹28,990"},
  {image:"https://m.media-amazon.com/images/I/716ClembJvL._SX679_.jpg",title:"Leather Bean Bag",description:"From ₹5,199"},
  {image:"https://m.media-amazon.com/images/I/61vEZW3J1XL._SY879_.jpg",title:"Samsung 236 L 3 Star Refrigerator",description:"From ₹30,989"},
  {image:"https://m.media-amazon.com/images/I/618g6GM-ZgL._SX679_.jpg",title:"Bed Mattress, Double Bed Mattress",description:"From ₹5,900"},
  {image:"https://m.media-amazon.com/images/I/71J8Q-DGvTL._SX679_.jpg",title:"Solimo Picton Engineered Wood King Size Bed",description:"From ₹55,099"},
  {image:"https://m.media-amazon.com/images/I/511w-d1wp1L._SX679_.jpg",title:"Mattress with 5 Cushion Jute Fabric",description:"From ₹55,490"},
]

const slides3 = [
  {image:"https://m.media-amazon.com/images/I/717JX3femML._SX679_.jpg",title:"OnePlus 12R (Cool Blue, 8GB RAM, 128GB)",description:"From ₹39,999"},
  {image:"https://m.media-amazon.com/images/I/61Tl1z+Hn0L._SX679_.jpg",title:"Samsung Galaxy Flip (8GB RAM, 256GB)",description:"From ₹99,999"},
  {image:"https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg",title:"Apple iPhone 14 (128 GB) - Blue",description:"From ₹58,990"},
  {image:"https://m.media-amazon.com/images/I/619f09kK7tL._SX679_.jpg",title:"Apple iPhone 14 (128 GB) - Purple",description:"From ₹58,999"},
  {image:"https://m.media-amazon.com/images/I/91xdNu6S9DL._SX679_.jpg",title:"realme narzo 60 Pro (8GB+128GB)",description:"From ₹21,999"},
  {image:"https://m.media-amazon.com/images/I/71657TiFeHL._SX679_.jpg",title:"Apple iPhone 15 (128 GB) - Black",description:"From ₹71,290"},
  {image:"https://m.media-amazon.com/images/I/71i0Kpvi9tL._SX679_.jpg",title:"Oneplus Open (16GB RAM, 512GB)",description:"From ₹1,39,999"},
]
  return (
    <>
      <div>
        <h2 className="mt-2 text-white">Best of Electronics</h2>
<span className="img" data-aos="fade-right"><ReactCardSlider slides={slides}/></span>

        <div id="carouselExampleAutoplaying" class="carousel slide mt-4 mb-4" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Pantry/MARCH_2020/BAU/BANKSTRIPES/FOR_DESKTOP/AXIS_BANK_STRIPE_DESKTOP1500x300.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="https://www.ohhoexpress.online/image/website_image/1620672239_sbi.png" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/HSS/June22/Monsoon/bank/1400x282.jpg" class="d-block w-100" alt="..." />
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

{/* Best of Fashions */}
        <h2 className="mt-2 text-white">Best of Fashions</h2>
<span className="img" data-aos="fade-right"><ReactCardSlider slides={slides1}/></span>

      <Advertisement/>
{/* Best of Home & Furniture */}       
        <h2 className="mt-2 text-white">Best of Electronics</h2>
<span className="img" data-aos="fade-right"> <ReactCardSlider slides={slides2}/></span>
     
     <Advertisement2/>
{/* Best of Mobiles */}
        <h2 className="mt-2 text-white">Best of Mobiles</h2>
<span className="img" data-aos="fade-right"> <ReactCardSlider slides={slides3}/></span>
{/* <div className="row">
        <h2 className="mt-4 text-white">Best of Mobiles</h2>
        <div class="card col-10 col-md-2 col-sm-6 ms-2" data-aos="fade-right">
          <span className="text-end"><button onClick={() => { alert("Product added to your wishlist😍") }} className="btn btn-outline-danger"><FontAwesomeIcon icon={faHeart} /></button></span>
          <img src="" class="card-img-top w-100 img" alt="..." />
          <div class="card-body">
            <h6 class="card-title">OnePlus 12R (Cool Blue, 8GB RAM, 128GB Storage)</h6>
            <p class="card-text">From $39,999</p>
          </div>
        </div>
        <div class="card col-10 col-md-2 col-sm-6 ms-2" data-aos="fade-right">
          <span className="text-end"><button onClick={() => { alert("Product added to your wishlist😍") }} className="btn btn-outline-danger"><FontAwesomeIcon icon={faHeart} /></button></span>
          <img src="" class="card-img-top w-100 img" alt="..." />
          <div class="card-body">
            <h6 class="card-title"></h6>
            <p class="card-text">From ₹99,999</p>
          </div>
        </div>
        <div class="card col-10 col-md-2 col-sm-6 ms-2" data-aos="fade-right">
          <span className="text-end"><button onClick={() => { alert("Product added to your wishlist😍") }} className="btn btn-outline-danger"><FontAwesomeIcon icon={faHeart} /></button></span>
          <img src="" class="card-img-top w-100 img" alt="..." />
          <div class="card-body">
            <h6 class="card-title"></h6>
            <p class="card-text">From ₹58,999</p>
          </div>
        </div>
        <div class="card col-10 col-md-2 col-sm-6 ms-2" data-aos="fade-right">
          <span className="text-end"><button onClick={() => { alert("Product added to your wishlist😍") }} className="btn btn-outline-danger"><FontAwesomeIcon icon={faHeart} /></button></span>
          <img src="" class="card-img-top w-100 img" alt="..." />
          <div class="card-body">
            <h6 class="card-title"></h6>
            <p class="card-text">From ₹58,999</p>
          </div>
        </div>
        <div class="card col-10 col-md-2 col-sm-6 ms-2" data-aos="fade-right">
          <span className="text-end"><button onClick={() => { alert("Product added to your wishlist😍") }} className="btn btn-outline-danger"><FontAwesomeIcon icon={faHeart} /></button></span>
          <img src="" class="card-img-top w-100 img" alt="..." />
          <div class="card-body">
            <h6 class="card-title"></h6>
            <p class="card-text">From ₹21,999</p>
          </div>
        </div>
        </div> */}

      </div>
    </>
  );
}