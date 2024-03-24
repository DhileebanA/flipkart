import React, { useEffect } from "react";
import ReactCardSlider from 'react-card-slider-component';
import AOS from 'aos';
import 'aos/dist/aos.css';
 
export function RecentView(){
    useEffect(() => {
        AOS.init();
      }, []);

    const slides = [
        {image:"https://m.media-amazon.com/images/I/41JACWT-wWL._SX679_.jpg",title:"Sony WH-CH520",description:"From ₹3,990"},
        {image:"https://m.media-amazon.com/images/I/61P-aGTSCtL._SX679_.jpg",title:"Lenovo Legion 5 Pro AMD Ryzen",description:"From ₹96,890"},
        {image:"https://m.media-amazon.com/images/I/61AHiYyu3ZL._SX679_.jpg",title:"Fire-Boltt Ninja Call Pro Plus 1.83",description:"From ₹1,199"},
        {image:"https://m.media-amazon.com/images/I/81Tr3Jo8DvL._SX679_.jpg",title:"Sony Alpha ILCE-7M4K",description:"From ₹2,30,989"},
        {image:"https://m.media-amazon.com/images/I/61goypdjAYL._SX679_.jpg",title:"Apple iPad 10th Generation",description:"From ₹36,900"},
        {image:"https://m.media-amazon.com/images/I/715vosKfRkL._SX679_.jpg",title:"Zebronics MAX FURY Transparent RGB",description:"From ₹1,099"},
        {image:"https://m.media-amazon.com/images/I/61MUoISbzjL._SX679_.jpg",title:"Redgear A-15 Wired Gaming Mouse",description:"From ₹549"},
    ]
    return(
        <>
        <div data-aos="fade-right" className="mt-4">
        <h2 className="mt-2 text-white">Recently Viewed</h2>
<ReactCardSlider slides={slides}/>
        </div>
        </>
    );
}