import React, { useEffect, useLayoutEffect, useState } from "react";
import { Navbar } from "../Navbar/navbar";
import { Footer } from "../Footer/footer";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faCartPlus, faCartShopping, faCreditCard, faGift, faHeart, faPlus, faStore, faUser } from "@fortawesome/free-solid-svg-icons";
import Avatar from 'react-avatar';

export function UserFurniture() {

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
            <div className="row mb-4 bg_card justify-content-center" data-aos="fade-down">
                <div className="col-lg-1 col-md-1"></div>
                <div class="card col-lg-3 col-md-3 col-12 mt-4">
                    <img src="https://m.media-amazon.com/images/I/41ZAq7XTR2L._SX300_SY300_QL70_FMwebp_.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">SleepyCat Original Ortho 3-Layered Medium Firm 6-inch</h5>
                        <p class="card-text">⭐⭐⭐⭐ 4.1 </p> <button onClick={() => { setItem(item + 1) }} className="btn btn-outline-primary">Add to cart</button>
                        <Link to={`/payment`}><button className="btn btn-outline-success ms-4">Buy Now</button></Link>
                    </div>
                </div>

                <div class="card col-12 col-lg-3 col-md-3 ms-2 mt-4">
                    <img src="https://m.media-amazon.com/images/I/71Ku1E56GzL._SX679_.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">PAZANO Multi-Purpose Portable & Foldable Wooden Table</h5>
                        <p class="card-text">⭐⭐⭐⭐ 4.2 </p> <button onClick={() => { setItem(item + 1) }} className="btn btn-outline-primary">Add to cart</button>
                        <Link to={`/payment`}><button className="btn btn-outline-success ms-4">Buy Now</button></Link>
                    </div>
                </div>

                <div class="card col-12 col-lg-3 col-md-3 ms-2 mt-4">
                    <img src="https://m.media-amazon.com/images/I/41r19RwfHqL._SX300_SY300_QL70_FMwebp_.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Nilkamal Freedom Mini Medium (FMM) Plastic Cabinet for Storage</h5>
                        <p class="card-text">⭐⭐⭐ 3.5 </p> <button onClick={() => { setItem(item + 1) }} className="btn btn-outline-primary">Add to cart</button>
                        <Link to={`/payment`}><button className="btn btn-outline-success ms-4">Buy Now</button></Link>
                    </div>
                </div>

                <div className="col-lg-1 col-md-1"></div>
                <div className="col-lg-1 col-md-1"></div>
                <div class="card col-12 col-lg-3 col-md-3 mt-4">
                    <img src="https://m.media-amazon.com/images/I/418wEqLwKLL._SX300_SY300_QL70_FMwebp_.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Nilkamal Freedom Mini Small (FMS) Plastic Kids Mini Storage Cabinet</h5>
                        <p class="card-text">⭐⭐⭐⭐ 4.0 </p> <button onClick={() => { setItem(item + 1) }} className="btn btn-outline-primary">Add to cart</button>
                        <Link to={`/payment`}><button className="btn btn-outline-success ms-4">Buy Now</button></Link>
                    </div>
                </div>

                <div class="card col-12 col-lg-3 col-md-3 ms-2 mt-4">
                    <img src="https://m.media-amazon.com/images/I/51soyoAaDYL.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">SAI Foam House 2 Seater Sofa Cum Bed Furniture Home & Living Room</h5>
                        <p class="card-text">⭐⭐⭐⭐ 4.0 </p> <button onClick={() => { setItem(item + 1) }} className="btn btn-outline-primary">Add to cart</button>
                        <Link to={`/payment`}><button className="btn btn-outline-success ms-4">Buy Now</button></Link>
                    </div>
                </div>

                <div class="card col-12 col-lg-3 col-md-3 ms-2 mt-4">
                    <img src="https://m.media-amazon.com/images/I/41pX-CPwGLL._SX300_SY300_QL70_FMwebp_.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">The Sleep Company Luxe Motorised Standard Recliner</h5>
                        <p class="card-text">⭐⭐⭐⭐ 4.0 </p> <button onClick={() => { setItem(item + 1) }} className="btn btn-outline-primary">Add to cart</button>
                        <Link to={`/payment`}><button className="btn btn-outline-success ms-4">Buy Now</button></Link>
                    </div>
                </div>

                <div className="col-lg-1 col-md-1"></div>
                <div class="card col-12 col-lg-3 col-md-3 mt-4">
                    <img src="https://m.media-amazon.com/images/I/51w0PbABViL._SX300_SY300_QL70_FMwebp_.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Amazon Brand - Solimo Ross Engineered Wood Entertainment</h5>
                        <p class="card-text">⭐⭐⭐⭐ 4.3 </p> <button onClick={() => { setItem(item + 1) }} className="btn btn-outline-primary">Add to cart</button>
                        <Link to={`/payment`}><button className="btn btn-outline-success ms-4">Buy Now</button></Link>
                    </div>
                </div>

                <div class="card col-12 col-lg-3 col-md-3 ms-2 mt-4">
                    <img src="https://m.media-amazon.com/images/I/41bch0Yq66L._SX300_SY300_QL70_FMwebp_.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">FURNIVOX MAKERS Apple Patio Chair & Table Set for Balcony</h5>
                        <p class="card-text">⭐⭐⭐ 3.9 </p> <button onClick={() => { setItem(item + 1) }} className="btn btn-outline-primary">Add to cart</button>
                        <Link to={`/payment`}><button className="btn btn-outline-success ms-4">Buy Now</button></Link>
                    </div>
                </div>

                <div class="card col-12 col-lg-3 col-md-3 ms-2 mt-4">
                    <img src="https://m.media-amazon.com/images/I/51QEvZeti9L._SX300_SY300_QL70_FMwebp_.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">WOODLAB Furniture Solid Sheesham Wood King Size Double Bed</h5>
                        <p class="card-text">⭐⭐⭐⭐ 4.0 </p> <button onClick={() => { setItem(item + 1) }} className="btn btn-outline-primary">Add to cart</button>
                        <Link to={`/payment`}><button className="btn btn-outline-success ms-4">Buy Now</button></Link>
                    </div>
                </div>
                <div className="col-12"></div>
                <Footer />
            </div>
        </>
    );
}