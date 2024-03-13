import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping, faStore} from "@fortawesome/free-solid-svg-icons";
import Avatar from 'react-avatar';

export function Navbar(){

    return(
        <>
         <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <img src="https://th.bing.com/th/id/R.727acb15283ad9d7fe83e4bd186ff522?rik=YgyLQlEG92J8Og&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f09%2fFlipkart_logo.png&ehk=tQmj4xmGM%2b4QpYCOiLjmNoqcAvTf0YvQqLUYj%2bD7trE%3d&risl=&pid=ImgRaw&r=0" class="d-block w-25" alt="..."/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
      <Avatar facebookId="100008343750912" size="35" round={true} href="/signup"/>
      <li class="nav-item">
     
          <a class="nav-link active" aria-current="page" href="/signup">Signup</a>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link active" href="#">Profile</a>
        </li> */}
        <li class="nav-item">
        <a class="nav-link active" href="#"><FontAwesomeIcon icon={faCartShopping}/> Cart</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" href="#"><FontAwesomeIcon icon={faStore} /> Become a Seller</a>
        </li>
      </ul> 
         <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

        </>
    );
}


