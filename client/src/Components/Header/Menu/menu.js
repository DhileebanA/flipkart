import React from "react";
import { Navbar } from "../Navbar/navbar";
import { Card } from "../Card/card";
import { Carousel } from "../Carousel/carousel";
import { Images } from "../Images/images";
import { Cart } from "../Cart/cart";
import { Footer } from "../Footer/footer";
import { Recommend } from "../Recommend/reccommend";
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
    <Recommend/>
    {/* <CartProvider>
    <Product/>
    <View/>
    </CartProvider> */}
    <Cart/>
    <Images/>
    <Footer/>
    </div>
    </div>
    </>
);
}