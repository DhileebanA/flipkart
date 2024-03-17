import React from "react";
import { Navbar } from "../Navbar/navbar";
import { Card } from "../Card/card";
import { Carousel } from "../Carousel/carousel";
import { Images } from "../Images/images";
import { Cart } from "../Cart/cart";
import { Footer } from "../Footer/footer";

export function Menu(){

return(
   <>
    <Navbar/>
    <div className="background">
    <Card/>
    <Carousel/>
    <Images/>
    <Cart/>
    <Footer/>
    </div>
    </>
);
}