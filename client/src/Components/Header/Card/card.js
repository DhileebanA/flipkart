import React from "react";
import { Link } from "react-router-dom";

export function Card() {

  return (
    <>
      <div class="container-fluid mb-3">
        <div class="row bg-white">
          <div class="active col-3 col-lg-3 card_img">
            <Link to={`/usermobile`}><img src="https://th.bing.com/th/id/R.65a4137376936ae9be364a44431c9348?rik=0STdQSU%2b2wHJeg&riu=http%3a%2f%2fwww.learningcomputer.com%2fblog%2fwp-content%2fuploads%2f2016%2f11%2fCell-Phone-Plans-topic-page-graphic.png&ehk=gkxu1Dk7B1f91j369HRMYQapfTwy7hxrk%2ftwAM80wcY%3d&risl=&pid=ImgRaw&r=0" class="d-block w-25" alt="Mobiles" /></Link>
            Mobiles
          </div>

          <div class="active col-3 col-lg-3 card_img">
            <Link to={`/userfashion`}><img src="https://i.pinimg.com/originals/9a/4a/12/9a4a12ff22aa447a57a712b840d9611c.jpg" class="d-block w-25" alt="Fashion" /></Link>
            Fashion
          </div>

          <div class="active col-3 col-lg-3 card_img">
            <Link to={`/userelectronics`}><img src="https://th.bing.com/th/id/OIP.iAgyydPGwY4Qem6TPsNQJgHaHa?pid=ImgDet&w=474&h=474&rs=1" class="d-block w-25" alt="Electronics" /></Link>
            Electronics
          </div>

          <div class="active col-3 col-lg-3 card_img">
            <Link to={`/userfurniture`}><img src="https://th.bing.com/th/id/OIP.Wy57-ghL26Sod84ide53tQHaFd?pid=ImgDet&w=474&h=349&rs=1" class="d-block w-25" alt="Home & Furniture" /></Link>
            Furniture
          </div>
        </div>
      </div>
    </>
  );
}