import React, { useEffect } from "react";
import { Navbar } from "../Navbar/navbar";
import { Footer } from "../Footer/footer";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

export function UserElectronics() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <Navbar />
            <div className="row mb-4 bg_card" data-aos="fade-up">
                <div className="col-12"></div>
                <div className="col-lg-1 col-md-1"></div>
                <div class="card col-lg-3 col-md-3 col-12">
                    <img src="https://m.media-amazon.com/images/I/31pkoZ0UgAL._SX300_SY300_QL70_FMwebp_.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">V-Guard Divino DG 5 Star Water Heater</h5>
                        <p class="card-text">⭐⭐⭐⭐ 4.1 </p> <button onClick={() => { alert("Product added to your cart😍") }} className="btn btn-outline-primary">Add to cart</button>
                        <Link to={`/payment`}><button className="btn btn-outline-success ms-4">Buy Now</button></Link>
                    </div>
                </div>
                <div class="card col-12 col-lg-3 col-md-3 ms-2">
                    <img src="https://m.media-amazon.com/images/I/7152-mn8mKL._SX679_.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Acrylonitrile Butadiene Styrene Juicer Mixer</h5>
                        <p class="card-text">⭐⭐⭐⭐ 4.2 </p> <button onClick={() => { alert("Product added to your cart😍") }} className="btn btn-outline-primary">Add to cart</button>
                        <Link to={`/payment`}><button className="btn btn-outline-success ms-4">Buy Now</button></Link>
                    </div>
                </div>

                <div class="card col-12 col-lg-3 col-md-3 ms-2">
                    <img src="https://m.media-amazon.com/images/I/61nlH93oiJL._SX679_.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Bajaj PX97 Torque New 36L Personal Air Cooler</h5>
                        <p class="card-text">⭐⭐⭐ 3.5 </p> <button onClick={() => { alert("Product added to your cart😍") }} className="btn btn-outline-primary">Add to cart</button>
                        <Link to={`/payment`}><button className="btn btn-outline-success ms-4">Buy Now</button></Link>
                    </div>
                </div>

                <div className="col-lg-1 col-md-1"></div>
                <div className="col-lg-1 col-md-1"></div>
                <div class="card col-12 col-lg-3 col-md-3 mt-2">
                    <img src="https://m.media-amazon.com/images/I/31ZnKKkOyTL._SX300_SY300_QL70_FMwebp_.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Ambrane 10000mAh Power Bank, 20W Charging</h5>
                        <p class="card-text">⭐⭐⭐⭐ 4.0 </p> <button onClick={() => { alert("Product added to your cart😍") }} className="btn btn-outline-primary">Add to cart</button>
                        <Link to={`/payment`}><button className="btn btn-outline-success ms-4">Buy Now</button></Link>
                    </div>
                </div>

                <div class="card col-12 col-lg-3 col-md-3 ms-2 mt-2">
                    <img src="https://m.media-amazon.com/images/I/61T1Z4mwdgL._SX679_.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">boAt Rockerz 245 v2 Pro Wireless in Ear Neckband</h5>
                        <p class="card-text">⭐⭐⭐⭐ 4.0 </p> <button onClick={() => { alert("Product added to your cart😍") }} className="btn btn-outline-primary">Add to cart</button>
                        <Link to={`/payment`}><button className="btn btn-outline-success ms-4">Buy Now</button></Link>
                    </div>
                </div>

                <div class="card col-12 col-lg-3 col-md-3 ms-2 mt-2">
                    <img src="https://m.media-amazon.com/images/I/61giWajD6xL._SX679_.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">boAt Stone 352 Bluetooth Speaker with 10W RMS</h5>
                        <p class="card-text">⭐⭐⭐⭐ 4.3 </p> <button onClick={() => { alert("Product added to your cart😍") }} className="btn btn-outline-primary">Add to cart</button>
                        <Link to={`/payment`}><button className="btn btn-outline-success ms-4">Buy Now</button></Link>
                    </div>
                </div>

                <div className="col-lg-1 col-md-1"></div>
                <div className="col-lg-1 col-md-1"></div>
                <div class="card col-12 col-lg-3 col-md-3 mt-2">
                    <img src="https://m.media-amazon.com/images/I/416rkFI4uPL._SX300_SY300_QL70_FMwebp_.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Sony PS5 Console - Cricket 24 Bundle</h5>
                        <p class="card-text">⭐⭐⭐⭐ 4.6 </p> <button onClick={() => { alert("Product added to your cart😍") }} className="btn btn-outline-primary">Add to cart</button>
                        <Link to={`/payment`}><button className="btn btn-outline-success ms-4">Buy Now</button></Link>
                    </div>
                </div>

                <div class="card col-12 col-lg-3 col-md-3 ms-2 mt-2">
                    <img src="https://m.media-amazon.com/images/I/61jnOd8rSmL._SX679_.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Zlade Ballistic TURBO 3.0 Body Trimmer for Men</h5>
                        <p class="card-text">⭐⭐⭐ 3.9 </p> <button onClick={() => { alert("Product added to your cart😍") }} className="btn btn-outline-primary">Add to cart</button>
                        <Link to={`/payment`}><button className="btn btn-outline-success ms-4">Buy Now</button></Link>
                    </div>
                </div>

                <div class="card col-12 col-lg-3 col-md-3 ms-2 mt-2">
                    <img src="https://m.media-amazon.com/images/I/71Iiu7KDOEL._SX679_.jpg" class="card-img-top img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Juarez Lindenwood Acoustic Guitar Kit</h5>
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