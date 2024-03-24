import React, { useContext, useEffect, useState } from "react";
import { Navbar } from "../Navbar/navbar";
import { Footer } from "../Footer/footer";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faCartPlus, faCartShopping, faCreditCard, faGift, faHeart, faPlus, faStore, faUser } from "@fortawesome/free-solid-svg-icons";
import Avatar from 'react-avatar';

export function UserMobile() {

const[item, setItem] = useState(0)

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
        <div className="mobileNav">
        <nav class="navbar navbar-expand-lg logo_bg">
        <div class="container-fluid">
        <a class="navbar-brand text-white" href="#"> <span className="text-warning"><FontAwesomeIcon icon={faCartPlus} /></span> Flipkart<span className="text-warning">.com</span></a>
          <form class="d-flex ms-4" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <Link to={`/usermobile`}> <button class="btn btn-success me-2" type="submit">Search</button></Link>
            </form>
            <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon text-white"></span>
          </button>
          <div class="collapse navbar-collapse row" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 col-lg-10 justify-content-end ms-lg-5">
              <Avatar facebookId="100008343750912" size="35" round={true} href="/signup" />
              <li class="nav-item dropdown">
                <a class="nav-link active dropdown-toggle text-white" type="button" data-bs-toggle="dropdown" aria-current="page" href="/signup">Login</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/signup">New Customer? Signup</a></li>
                  <li><a class="dropdown-item" href="/login"><FontAwesomeIcon icon={faUser} />  My Profile</a></li>
                  <li><a class="dropdown-item" href="#"><FontAwesomeIcon icon={faPlus} />  Flipkart Plus Zone</a></li>
                  <li><a class="dropdown-item" href="#"><FontAwesomeIcon icon={faBox} />  Orders</a></li>
                  <li><a class="dropdown-item" href="#"><FontAwesomeIcon icon={faHeart} />  Wishlist</a></li>
                  <li><a class="dropdown-item" href="#"><FontAwesomeIcon icon={faGift} />  Rewards</a></li>
                  <li><a class="dropdown-item" href="#"><FontAwesomeIcon icon={faCreditCard} />  Gift Cards</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-white" href="#"> <FontAwesomeIcon icon={faCartShopping} /> {item} Cart</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-white" href="#"><FontAwesomeIcon icon={faStore} /> Become a Seller</a>
              </li>
            </ul>
            </div>
        </div>
      </nav>
        </div>
            <div className="row bg_card justify-content-center" data-aos="zoom-out-right">
                <div className="col-lg-1 col-md-1"></div>
                <div class="card col-lg-3 col-md-3 col-12 mt-4">
                    <img src="https://m.media-amazon.com/images/I/61CEiTA5WWL._SX679_.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">OnePlus 12 (Flowy Emerald, 12GB RAM, 256GB Storage)</h5>
                        <p class="card-text">⭐⭐⭐⭐ 4.0 </p> <button onClick={() => { setItem(item + 1) }} className="btn btn-outline-primary">Add to cart</button>
                        <Link to={`/payment`}><button className="btn btn-outline-success ms-4" >Buy Now</button></Link>
                    </div>
                </div>
                <div class="card col-12 col-lg-3 col-md-3 ms-2 mt-4">
                    <img src="https://m.media-amazon.com/images/I/71tCOhEigtL._SX679_.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Redmi 12 5G Jade Black 4GB RAM 128GB ROM</h5>
                        <p class="card-text">⭐⭐⭐⭐ 4.0 </p>  <button  onClick={() => { setItem(item + 1) }} className="btn btn-outline-primary">Add to cart</button>
                        <Link to={`/payment`}><button className="btn btn-outline-success ms-4">Buy Now</button></Link>
                    </div>
                </div>

                <div class="card col-12 col-lg-3 col-md-3 ms-2 mt-4">
                    <img src="https://m.media-amazon.com/images/I/61pt59LW-lL._SX679_.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">IQOO Z9 5G (Brushed Green, 8GB RAM, 128GB)</h5>
                        <p class="card-text">⭐⭐⭐ 3.0 </p>  <button onClick={() => { setItem(item + 1) }} className="btn btn-outline-primary">Add to cart</button>
                        <Link to={`/payment`}><button className="btn btn-outline-success ms-4">Buy Now</button></Link>
                    </div>
                </div>

                <div className="col-lg-1 col-md-1"></div>
                <div className="col-lg-1 col-md-1"></div>
                <div class="card col-12 col-lg-3 col-md-3 mt-4">
                    <img src="https://m.media-amazon.com/images/I/81ZhcsXgKtL._SX679_.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Samsung Galaxy M14 5G (Berry Blue,4GB,128GB)</h5>
                        <p class="card-text">⭐⭐⭐⭐ 4.0 </p>  <button onClick={() => { setItem(item + 1) }} className="btn btn-outline-primary">Add to cart</button>
                        <Link to={`/payment`}><button className="btn btn-outline-success ms-4">Buy Now</button></Link>
                    </div>
                </div>

                <div class="card col-12 col-lg-3 col-md-3 ms-2 mt-4">
                    <img src="https://m.media-amazon.com/images/I/61iI4i1KmqL._SX679_.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">TECNO Spark 20C | Mystery White, (16GB*+128GB)</h5>
                        <p class="card-text">⭐⭐⭐⭐ 4.0 </p>  <button onClick={() => { setItem(item + 1) }} className="btn btn-outline-primary">Add to cart</button>
                        <Link to={`/payment`}><button className="btn btn-outline-success ms-4">Buy Now</button></Link>
                    </div>
                </div>

                <div class="card col-12 col-lg-3 col-md-3 ms-2 mt-4">
                    <img src="https://m.media-amazon.com/images/I/61UDI-pyP7L._SX679_.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Motorola razr 40 Ultra (8GB RAM, 256GB)</h5>
                        <p class="card-text">⭐⭐⭐⭐ 4.0 </p>  <button onClick={() => { setItem(item + 1) }} className="btn btn-outline-primary">Add to cart</button>
                        <Link to={`/payment`}><button className="btn btn-outline-success ms-4">Buy Now</button></Link>
                    </div>
                </div>

                <div className="col-lg-1 col-md-1"></div>
                <div class="card col-12 col-lg-3 col-md-3 mt-4">
                    <img src="https://m.media-amazon.com/images/I/71CXhVhpM0L._SX679_.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Samsung Galaxy S24 Ultra Black (12GB, 256GB)</h5>
                        <p class="card-text">⭐⭐⭐⭐ 4.3 </p>  <button onClick={() => { setItem(item + 1) }} className="btn btn-outline-primary">Add to cart</button>
                        <Link to={`/payment`}><button className="btn btn-outline-success ms-4">Buy Now</button></Link>
                    </div>
                </div>

                <div class="card col-12 col-lg-3 col-md-3 ms-2 mt-4">
                    <img src="https://m.media-amazon.com/images/I/91xdNu6S9DL._SX679_.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">realme narzo 60 Pro (Mars Orange,8GB+128GB)</h5>
                        <p class="card-text">⭐⭐⭐ 3.9 </p>  <button onClick={() => { setItem(item + 1) }} className="btn btn-outline-primary">Add to cart</button>
                        <Link to={`/payment`}><button className="btn btn-outline-success ms-4">Buy Now</button></Link>
                    </div>
                </div>

                <div class="card col-12 col-lg-3 col-md-3 ms-2 mt-4">
                    <img src="https://m.media-amazon.com/images/I/71VW8LmqqPL._SX679_.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Redmi Note 13 5G (Arctic White, 6GB RAM, 128GB)</h5>
                        <p class="card-text">⭐⭐⭐⭐ 4.0 </p>  <button onClick={() => { setItem(item + 1) }} className="btn btn-outline-primary">Add to cart</button>
                        <Link to={`/payment`}><button className="btn btn-outline-success ms-4">Buy Now</button></Link>
                    </div>
                </div>
                <div className="col-12"></div>
                <Footer />
            </div>
        </>
    );
}