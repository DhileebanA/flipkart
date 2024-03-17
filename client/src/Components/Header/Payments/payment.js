import React from "react";
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
  } from 'mdb-react-ui-kit';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCircleInfo, faGift, faStore } from "@fortawesome/free-solid-svg-icons";

export function Payment(){

    return(
        <>
        <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"> <img src="https://th.bing.com/th/id/R.727acb15283ad9d7fe83e4bd186ff522?rik=YgyLQlEG92J8Og&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f09%2fFlipkart_logo.png&ehk=tQmj4xmGM%2b4QpYCOiLjmNoqcAvTf0YvQqLUYj%2bD7trE%3d&risl=&pid=ImgRaw&r=0" class="d-block w-25" alt="..." /></a>
  </div>
</nav>
<div className="form_bg">
<form className="row mt-4 ms-3" >
    <div className="col-lg-8 col-md-8 col-8">
    <div className="bg-primary text-white text-center p-1"><h5>LOGIN OR SIGNUP</h5></div>
    <div className="mt-4 col-lg-6 col-md-6 col-6 ms-2" >
    <input type="text" class="form-control" id="validationCustom01" placeholder="Enter Email/ Mobile Number" required></input></div>
    <p className="text-secondary mt-3 col-lg-6 col-md-6 col-6 ms-2">By continuing, you agree to Flipkart's <span className="text-primary">Terms of Use</span> and <span className="text-primary">Privacy Policy.</span></p>
    <button type="button" class="btn btn-warning text-white col-lg-6 col-md-6 col-6 ms-2">CONTINUE</button>
    
    </div>
</form>
</div>
<MDBFooter className='text-center mt-4' color='white' bgColor='dark'>
        <MDBContainer className='p-4'>
          <section className='mb-4'>
            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <FontAwesomeIcon icon={faInstagram} />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <FontAwesomeIcon icon={faXTwitter} />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <FontAwesomeIcon icon={faFacebookF} />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <FontAwesomeIcon icon={faYoutube} />
            </MDBBtn>

          </section>

          <section className=''>
            <MDBRow>
              <MDBCol lg='3' md='6' className='mb-4 mb-md-0 col-3'>
                <h6 className='text-uppercase text-secondary'>ABOUT</h6>

                <ul className='list-unstyled mb-0'>
                  <li>
                    <a href='#!' className='text-white link-opacity-50-hover link-offset-2 link-underline link-underline-opacity-0'>
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white link-opacity-50-hover link-offset-2 link-underline link-underline-opacity-0'>
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white link-opacity-50-hover link-offset-2 link-underline link-underline-opacity-0'>
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white link-opacity-50-hover link-offset-2 link-underline link-underline-opacity-0'>
                      Flipkart Stories
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white link-opacity-50-hover link-offset-2 link-underline link-underline-opacity-0'>
                      Press
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white link-opacity-50-hover link-offset-2 link-underline link-underline-opacity-0'>
                      Corporate
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white link-opacity-50-hover link-offset-2 link-underline link-underline-opacity-0'>
                      Information
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg='3' md='6' className='mb-4 mb-md-0 col-3'>
                <h6 className='text-uppercase text-secondary'>GROUP COMPANIES</h6>

                <ul className='list-unstyled mb-0'>
                  <li>
                    <a href='#!' className='text-white link-offset-2 link-underline link-underline-opacity-0'>
                      Myntra
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white link-offset-2 link-underline link-underline-opacity-0'>
                      Flipkart Wholesale
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white link-offset-2 link-underline link-underline-opacity-0'>
                      Cleartrip
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white link-offset-2 link-underline link-underline-opacity-0'>
                      Shopsy
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg='3' md='6' className='mb-4 mb-md-0 col-3'>
                <h6 className='text-uppercase text-secondary'>HELP</h6>

                <ul className='list-unstyled mb-0'>
                  <li>
                    <a href='#!' className='text-white link-offset-2 link-underline link-underline-opacity-0'>
                      Payments
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white link-offset-2 link-underline link-underline-opacity-0'>
                      Shipping
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white link-offset-2 link-underline link-underline-opacity-0'>
                      Cancellation & Returns
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white link-offset-2 link-underline link-underline-opacity-0'>
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white link-offset-2 link-underline link-underline-opacity-0'>
                      Report Infringement
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg='3' md='6' className='mb-4 mb-md-0 col-3'>
                <h6 className='text-uppercase text-secondary'>CONSUMER POLICY</h6>

                <ul className='list-unstyled mb-0'>
                  <li>
                    <a href='#!' className='text-white link-offset-2 link-underline link-underline-opacity-0'>
                      Cancellation & Returns
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white link-offset-2 link-underline link-underline-opacity-0'>
                      Terms of Use
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white link-offset-2 link-underline link-underline-opacity-0'>
                      Security
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white link-offset-2 link-underline link-underline-opacity-0'>
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white link-offset-2 link-underline link-underline-opacity-0'>
                      Sitemap
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white link-offset-2 link-underline link-underline-opacity-0'>
                      Grievance Redressal
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white link-offset-2 link-underline link-underline-opacity-0'>
                      EPR Compliance
                    </a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </section>
        </MDBContainer>

        <div className='text-center p-3 row' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <a class="text-white col-4 link-offset-2 link-underline link-underline-opacity-0" href="#"><FontAwesomeIcon icon={faStore} style={{ color: "#FFD43B", }} /> Become a Seller</a>
          <a class="text-white col-4 link-offset-2 link-underline link-underline-opacity-0" href="#"><FontAwesomeIcon icon={faGift} style={{ color: "#FFD43B", }} /> Gift Cards</a>
          <a class="text-white col-4 link-offset-2 link-underline link-underline-opacity-0" href="#"><FontAwesomeIcon icon={faCircleInfo} style={{ color: "#FFD43B", }} /> Help Center</a>
          <span>© 2024 Copyright:
            <a className='text-white' href='/'>
              flipkart.com
            </a></span>
        </div>
      </MDBFooter>
        </>
    );
}