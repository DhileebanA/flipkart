import React from "react";

export function Signup(){
    return(
        <>
        <form class="sign_background">
        <div class="row">
            <div class="col-2"></div>
            <div class="col-2 mt-5">
            <h2>Sign up</h2>
            </div>
            <div class="col-8"></div>
            <div class="col-1"></div>
        <div class="mb-3 col-4">
  <input type="text" class="form-control" id="fname" placeholder="First Name"/>
</div>
<div class="col-7"></div>
<div class="col-1"></div>
<div class="mb-3 col-4">
  <input type="text" class="form-control" id="lname" placeholder="Last Name"/>
</div>
<div class="col-7"></div>
<div class="col-1"></div>
<div class="mb-3 col-4">
  <input type="text" class="form-control" id="mobileno" placeholder="Mobile Number"/>
</div>
<div class="col-7"></div>
<div class="col-1"></div>
<div class="mb-3 col-4">
  <input type="text" class="form-control" id="email" placeholder="Email"/>
</div>
<div class="col-7"></div>
<div class="col-1"></div>
<div class="mb-3 col-4">
  <input type="text" class="form-control" id="password" placeholder="Password"/>
</div>
<div class="col-7"></div>
<div class="col-2"></div>
<div class="col-2">
    <button type="submit" class="btn btn-primary">SIGN UP</button>
  </div>
  <div class="col-8"></div>
  <div class="col-1"></div>
  <div class="mt-2 col-4">
  <p>Already have an account? <a class="link-opacity-100" href="/login">Login</a></p>
  </div>
</div>
</form>
        </>
    );
}