import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faCartPlus, faCartShopping, faCreditCard, faGift, faHeart, faPlus, faStore, faUser } from "@fortawesome/free-solid-svg-icons";
import Avatar from 'react-avatar';
import { Link } from "react-router-dom";


export function Navbar() {
  const[item, setItem] = useState(0) 

  return (
    <>
      <nav class="navbar navbar-expand-lg logo_bg">
        <div class="container-fluid">
        <a class="navbar-brand text-white" href="#"> <span className="text-warning"><FontAwesomeIcon icon={faCartPlus} /></span> Flipkart<span className="text-warning">.com</span></a>
        <form class="d-flex" role="search">
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
                <a class="nav-link active text-white" href="#"> <FontAwesomeIcon icon={faCartShopping} />{item} Cart</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-white" href="#"><FontAwesomeIcon icon={faStore} /> Become a Seller</a>
              </li>
            </ul>
            </div>
        </div>
      </nav>

    </>
  );
}


