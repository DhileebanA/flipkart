import React from "react";
import { Navbar } from "../Navbar/navbar";
import { Card } from "../Card/card";
import { Carousel } from "../Carousel/carousel";
import { Images } from "../Images/images";
import { Cart } from "../Cart/cart";
import { Footer } from "../Footer/footer";
// import { Product } from "../Product/product";
// import { View } from "../ProductView/productview";
// import { CartProvider } from "react-use-cart";

export function Menu(){
 

return(
   <>
   <div className="menuContainer">
    <Navbar/>
    <div className="background">
    <Card/>
    <Carousel/>
    {/* <CartProvider>
    <Product/>
    <View/>
    </CartProvider> */}
    <div className="col-12"></div>
    <div className="col-12"></div>
    <Cart/>
    <Images/>
    <div className="col-12"></div>
    <div className="col-12 col-lg-12 col-md-12"></div>
    <Footer/>
    </div>
    </div>
    </>
);
}