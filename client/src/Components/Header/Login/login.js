import React from "react";
import { Link } from "react-router-dom";

export function Login() {

  return (
    <>
      <div className="login_background">
        <form>
          <div class="row">
            <div class="col-5"></div>
            <h2 class="col-2 mt-5">Login</h2>
            <div class="col-5"></div>
            <div class="col-4"></div>
            <div class="mb-3 col-lg-4">
              <input type="text" class="form-control" id="email" placeholder="Email" />
            </div>
            <div class="col-4"></div>
            <div class="col-4"></div>
            <div class="mb-3 col-lg-4">
              <input type="text" class="form-control" id="password" placeholder="Password" />
            </div>
            <div class="col-4"></div>
            <div class="col-5"></div>
            <div class="col-lg-2">
              <Link to="/"> <button type="submit" class="btn btn-primary">LOGIN</button></Link>
            </div>
            <div class="col-5"></div>
          </div>
        </form>
      </div>
    </>
  );
}