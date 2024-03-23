import React from "react";
import Detail from "../ProductDetail/productdetail";
import add from "../AddProduct/addproduct";

export function Product(){
  console.warn(add.addProduct)

  return(
    <>
   <h1 className="text-center mt-3">All Items</h1>
   <section className="container">
    <div className="row justify-content-center">
      <div className="col-lg-3 col-md-3">
      {add.addProduct.map((item,index) => {
return(
<Detail img={item.img} 
title={item.title} 
price={item.price} 
item={item} 
key={index}/>
)
      })}
</div>
    </div>
   </section>
    </>
  );
}