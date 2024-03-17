import React, { useEffect, useLayoutEffect } from "react";
import { Navbar } from "../Navbar/navbar";
import { Footer } from "../Footer/footer";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

export function UserFurniture() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <Navbar />
            <div className="row mb-4 bg_card" data-aos="fade-down">
                <div className="col-12"></div>
                <div className="col-lg-1 col-md-1"></div>
                <div class="card col-lg-3 col-md-3 col-12">
                    <img src="https://m.media-amazon.com/images/I/910HwEnB6KL._SX679_.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">SleepyCat Original Ortho 3-Layered Medium Firm 6-inch</h5>
                        <p class="card-text">⭐⭐⭐⭐ 4.1 </p> <button onClick={() => { alert("Product added to your cart😍") }} className="btn btn-outline-primary">Add to cart</button>
                        <Link to={`/payment`}><button className="btn btn-outline-success ms-4">Buy Now</button></Link>
                    </div>
                </div>

                <div class="card col-12 col-lg-3 col-md-3 ms-2">
                    <img src="https://m.media-amazon.com/images/I/71Ku1E56GzL._SX679_.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">PAZANO Multi-Purpose Portable & Foldable Wooden Table</h5>
                        <p class="card-text">⭐⭐⭐⭐ 4.2 </p> <button onClick={() => { alert("Product added to your cart😍") }} className="btn btn-outline-primary">Add to cart</button>
                        <Link to={`/payment`}><button className="btn btn-outline-success ms-4">Buy Now</button></Link>
                    </div>
                </div>

                <div class="card col-12 col-lg-3 col-md-3 ms-2">
                    <img src="https://m.media-amazon.com/images/I/41r19RwfHqL._SX300_SY300_QL70_FMwebp_.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Nilkamal Freedom Mini Medium (FMM) Plastic Cabinet for Storage</h5>
                        <p class="card-text">⭐⭐⭐ 3.5 </p> <button onClick={() => { alert("Product added to your cart😍") }} className="btn btn-outline-primary">Add to cart</button>
                        <Link to={`/payment`}><button className="btn btn-outline-success ms-4">Buy Now</button></Link>
                    </div>
                </div>

                <div className="col-lg-1 col-md-1"></div>
                <div className="col-lg-1 col-md-1"></div>
                <div class="card col-12 col-lg-3 col-md-3 mt-2">
                    <img src="https://m.media-amazon.com/images/I/418wEqLwKLL._SX300_SY300_QL70_FMwebp_.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Nilkamal Freedom Mini Small (FMS) Plastic Kids Mini Storage Cabinet</h5>
                        <p class="card-text">⭐⭐⭐⭐ 4.0 </p> <button onClick={() => { alert("Product added to your cart😍") }} className="btn btn-outline-primary">Add to cart</button>
                        <Link to={`/payment`}><button className="btn btn-outline-success ms-4">Buy Now</button></Link>
                    </div>
                </div>

                <div class="card col-12 col-lg-3 col-md-3 ms-2 mt-2">
                    <img src="https://m.media-amazon.com/images/I/51soyoAaDYL.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">SAI Foam House 3x6 2 Seater Sofa Cum Bed Furniture Home & Living Room</h5>
                        <p class="card-text">⭐⭐⭐⭐ 4.0 </p> <button onClick={() => { alert("Product added to your cart😍") }} className="btn btn-outline-primary">Add to cart</button>
                        <Link to={`/payment`}><button className="btn btn-outline-success ms-4">Buy Now</button></Link>
                    </div>
                </div>

                <div class="card col-12 col-lg-3 col-md-3 ms-2 mt-2">
                    <img src="https://m.media-amazon.com/images/I/41pX-CPwGLL._SX300_SY300_QL70_FMwebp_.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">The Sleep Company Luxe Motorised Standard Recliner</h5>
                        <p class="card-text">⭐⭐⭐⭐ 4.0 </p> <button onClick={() => { alert("Product added to your cart😍") }} className="btn btn-outline-primary">Add to cart</button>
                        <Link to={`/payment`}><button className="btn btn-outline-success ms-4">Buy Now</button></Link>
                    </div>
                </div>

                <div className="col-lg-1 col-md-1"></div>
                <div className="col-lg-1 col-md-1"></div>
                <div class="card col-12 col-lg-3 col-md-3 mt-2">
                    <img src="https://m.media-amazon.com/images/I/51w0PbABViL._SX300_SY300_QL70_FMwebp_.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Amazon Brand - Solimo Ross Engineered Wood Entertainment</h5>
                        <p class="card-text">⭐⭐⭐⭐ 4.3 </p> <button onClick={() => { alert("Product added to your cart😍") }} className="btn btn-outline-primary">Add to cart</button>
                        <Link to={`/payment`}><button className="btn btn-outline-success ms-4">Buy Now</button></Link>
                    </div>
                </div>

                <div class="card col-12 col-lg-3 col-md-3 ms-2 mt-2">
                    <img src="https://m.media-amazon.com/images/I/41bch0Yq66L._SX300_SY300_QL70_FMwebp_.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">FURNIVOX MAKERS Apple Patio Chair & Table Set for Balcony</h5>
                        <p class="card-text">⭐⭐⭐ 3.9 </p> <button onClick={() => { alert("Product added to your cart😍") }} className="btn btn-outline-primary">Add to cart</button>
                        <Link to={`/payment`}><button className="btn btn-outline-success ms-4">Buy Now</button></Link>
                    </div>
                </div>

                <div class="card col-12 col-lg-3 col-md-3 ms-2 mt-2">
                    <img src="https://m.media-amazon.com/images/I/51QEvZeti9L._SX300_SY300_QL70_FMwebp_.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">WOODLAB Furniture Solid Sheesham Wood King Size Double Bed</h5>
                        <p class="card-text">⭐⭐⭐⭐ 4.0 </p> <button onClick={() => { alert("Product added to your cart😍") }} className="btn btn-outline-primary">Add to cart</button>
                        <Link to={`/payment`}><button className="btn btn-outline-success ms-4">Buy Now</button></Link>
                    </div>
                </div>
                <div className="col-12"></div>
                <Footer />
            </div>
        </>
    );
}