import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar/navbar";
import { Footer } from "../Footer/footer";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faCartPlus, faCartShopping, faCreditCard, faGift, faHeart, faPlus, faStore, faUser } from "@fortawesome/free-solid-svg-icons";
import Avatar from 'react-avatar';

export function UserGroceries() {
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
            <div className="row mb-4 bg_card justify-content-center" data-aos="fade-right">
                <div className="col-lg-1 col-md-1"></div>
                <div class="card col-lg-3 col-md-3 col-12 mt-4">
                    <img src="https://m.media-amazon.com/images/I/61d+WbpFCiL._SX679_.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Tata Sampann Unpolished Toor Dal/Arhar Dal, 1kg</h5>
                        <p class="card-text">⭐⭐⭐⭐ 4.1 </p> <button onClick={() => { setItem(item + 1) }} className="btn btn-outline-primary">Add to cart</button>
                        <Link to={`/payment`}><button className="btn btn-outline-success ms-4">Buy Now</button></Link>
                    </div>
                </div>
                <div class="card col-12 col-lg-3 col-md-3 ms-2 mt-4">
                    <img src="https://m.media-amazon.com/images/I/510O7shLZyL._SX679_.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Nutella Hazelnut Spread with Cocoa, 12.35 oz / 350g</h5>
                        <p class="card-text">⭐⭐⭐⭐ 4.2 </p> <button onClick={() => { setItem(item + 1) }} className="btn btn-outline-primary">Add to cart</button>
                        <Link to={`/payment`}><button className="btn btn-outline-success ms-4">Buy Now</button></Link>
                    </div>
                </div>

                <div class="card col-12 col-lg-3 col-md-3 ms-2 mt-4">
                    <img src="https://m.media-amazon.com/images/I/71qFWpcwJNL._SX679_.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">DiSano Pastalicious 100% Durum Wheat Fusilli Pasta</h5>
                        <p class="card-text">⭐⭐⭐ 3.0 </p> <button onClick={() => { setItem(item + 1) }} className="btn btn-outline-primary">Add to cart</button>
                        <Link to={`/payment`}><button className="btn btn-outline-success ms-4">Buy Now</button></Link>
                    </div>
                </div>

                <div className="col-lg-1 col-md-1"></div>
                <div className="col-lg-1 col-md-1"></div>
                <div class="card col-12 col-lg-3 col-md-3 mt-4 ">
                    <img src="https://m.media-amazon.com/images/I/61ogjUGE6aL._SX679_.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Boost Energy & Nutrition Drink Refill Pack, 750g</h5>
                        <p class="card-text">⭐⭐⭐⭐ 4.0 </p> <button onClick={() => { setItem(item + 1) }} className="btn btn-outline-primary">Add to cart</button>
                        <Link to={`/payment`}><button className="btn btn-outline-success ms-4">Buy Now</button></Link>
                    </div>
                </div>

                <div class="card col-12 col-lg-3 col-md-3 ms-2 mt-4">
                    <img src="https://m.media-amazon.com/images/I/91MZComV1xL._SX679_.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">India Gate Basmati Rice Bag, Super, 5kg</h5>
                        <p class="card-text">⭐⭐⭐⭐ 4.0 </p> <button onClick={() => { setItem(item + 1) }} className="btn btn-outline-primary">Add to cart</button>
                        <Link to={`/payment`}><button className="btn btn-outline-success ms-4">Buy Now</button></Link>
                    </div>
                </div>

                <div class="card col-12 col-lg-3 col-md-3 mt-4 ms-2">
                    <img src="https://m.media-amazon.com/images/I/81N3S6g7FDL._SX679_.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Kellogg's Multigrain Chocos Moons & Stars</h5>
                        <p class="card-text">⭐⭐⭐⭐ 4.0 </p> <button onClick={() => { setItem(item + 1) }} className="btn btn-outline-primary">Add to cart</button>
                        <Link to={`/payment`}><button className="btn btn-outline-success ms-4">Buy Now</button></Link>
                    </div>
                </div>

                <div className="col-lg-1 col-md-1"></div>
                <div class="card col-12 col-lg-3 col-md-3 mt-4">
                    <img src="https://m.media-amazon.com/images/I/71c4XM58udL._SX679_.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Dairy Milk Silk Fruit and Nut Chocolate Bar</h5>
                        <p class="card-text">⭐⭐⭐⭐ 4.3 </p> <button onClick={() => { setItem(item + 1) }} className="btn btn-outline-primary">Add to cart</button>
                        <Link to={`/payment`}><button className="btn btn-outline-success ms-4">Buy Now</button></Link>
                    </div>
                </div>

                <div class="card col-12 col-lg-3 col-md-3 ms-2 mt-4">
                    <img src="https://m.media-amazon.com/images/I/7153tGVmtyL._SX679_.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Oreo Vanilla Flavour Crème Sandwich Biscuit</h5>
                        <p class="card-text">⭐⭐⭐⭐ 4.6 </p> <button onClick={() => { setItem(item + 1) }} className="btn btn-outline-primary">Add to cart</button>
                        <Link to={`/payment`}><button className="btn btn-outline-success ms-4">Buy Now</button></Link>
                    </div>
                </div>

                <div class="card col-12 col-lg-3 col-md-3 ms-2 mt-4">
                    <img src="https://m.media-amazon.com/images/I/71dcNjK2x8L._SX679_.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Oreo Chocolate Pie with Strawberry Marshmallow</h5>
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