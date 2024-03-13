import React from "react";
import { Link } from "react-router-dom";

export function Card(){
    
    return(
    <>
    <div></div>
  <div class="container-fluid mb-3">
    <div class="row"> 
        <div class="active col-3 col-lg-3">
  <Link to ={`/usermobile`}><img src="https://th.bing.com/th/id/R.65a4137376936ae9be364a44431c9348?rik=0STdQSU%2b2wHJeg&riu=http%3a%2f%2fwww.learningcomputer.com%2fblog%2fwp-content%2fuploads%2f2016%2f11%2fCell-Phone-Plans-topic-page-graphic.png&ehk=gkxu1Dk7B1f91j369HRMYQapfTwy7hxrk%2ftwAM80wcY%3d&risl=&pid=ImgRaw&r=0" class="d-block w-25" alt="Mobiles"/></Link>
            Mobiles
          </div>
          
        <div class="active col-3 col-lg-3">
        <Link to ={`/userfashion`}><img src="https://i.pinimg.com/originals/9a/4a/12/9a4a12ff22aa447a57a712b840d9611c.jpg" class="d-block w-25" alt="Fashion"/></Link>
            Fashion
          </div>
         
        <div class="active col-3 col-lg-3">
        <Link to ={`/userelectronics`}><img src="https://th.bing.com/th/id/OIP.iAgyydPGwY4Qem6TPsNQJgHaHa?pid=ImgDet&w=474&h=474&rs=1" class="d-block w-25" alt="Electronics"/></Link>
            Electronics
          </div>
            
        <div class="active col-3 col-lg-3">
        <Link to ={`/userfurniture`}><img src="https://th.bing.com/th/id/OIP.Wy57-ghL26Sod84ide53tQHaFd?pid=ImgDet&w=474&h=349&rs=1" class="d-block w-25" alt="Home & Furniture"/></Link>
            Furniture
          </div>
         
        {/* <div class="active col-3 col-lg-2">
  <Link to ={`/usertoy`}><img src="https://i5.walmartimages.com/asr/679cadc1-80b6-45d2-b998-d6213859e251_1.69749f5612626f33c395fbd58fe8b9b7.jpeg" class="d-block w-25" alt="Toy"/></Link>
            Beauty,Toy & More
          </div> */}
          
        {/* <div class="active col-3 col-lg-2">
  <Link to ={`/usergrocery`}><img src="https://freepngimg.com/thumb/grocery/41624-7-groceries-hd-download-hd-png.png" class="d-block w-25" alt="Grocery"/></Link>
            Grocery
          </div> */}
    </div>
  </div>
    </>
    );
}