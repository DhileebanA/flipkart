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
import { faArrowRight, faCircleInfo, faGift, faStore } from "@fortawesome/free-solid-svg-icons";

export function Footer() {

  return (
    <>
      <div className="mt-3">
        <h5 className="text-white">Top Stories : Brand Directory</h5>
        <div className="productMain">
          <div className="productLink col-lg-12 text-decoration-none text-white">
            <p>CLOTHING: <a href="" className="text-decoration-none text-white">| Kurti |</a> <a href="" className="text-decoration-none text-white">| Kurta |</a> <a href="" className="text-decoration-none text-white">| Skirt |</a> <a href="" className="text-decoration-none text-white">| Shirt |</a> <a href="" className="text-decoration-none text-white">| Tops |</a> <a href="" className="text-decoration-none text-white">| Tees |</a> <a href="" className="text-decoration-none text-white">| Tunics |</a> <a href="" className="text-decoration-none text-white">| Tshirt |</a> <a href="" className="text-decoration-none text-white">| Jeans |</a>  <a href="" className="text-decoration-none text-white">| Jeggings |</a> <a href="" className="text-decoration-none text-white">| Leggings |</a>  <a href="" className="text-decoration-none text-white">| Patiala |</a>  <a href="" className="text-decoration-none text-white">| Palazo |</a> <a href="" className="text-decoration-none text-white">| Shorts |</a> <a href="" className="text-decoration-none  text-white">| Shawls |</a> <a href="" className="text-decoration-none text-white">| Dupatta |</a> <a href="" className="text-decoration-none text-white">| Scarf |</a> <a href="" className="text-decoration-none text-white">| Sarees |</a> <a href="" className="text-decoration-none text-white">| Dresses |</a> <a href="" className="text-decoration-none text-white">| One Pieces |</a> <a href="" className="text-decoration-none text-white">| Half saree blouse designs |</a> <a href="" className="text-decoration-none text-white">| Designer blouses |</a> <a href="" className="text-decoration-none text-white">| Cotton saree blouse |</a> <a href="" className="text-decoration-none text-white">| Track phant |</a>
            </p>
          </div>
          <div className="productLink col-lg-12">
            <p className="text-white">MOBILES: <a href="" className="text-decoration-none text-white">| Samsung Galaxy S24 5G |</a> <a href="" className="text-decoration-none text-white">| Samsung Galaxy S24+ 5G |</a> <a href="" className="text-decoration-none text-white">| iPhone 12 64GB |</a> <a href="" className="text-decoration-none text-white">| iPhone 12 Pro 512GB |</a> <a href="" className="text-decoration-none text-white">| iPhone 12 128GB |</a> <a href="" className="text-decoration-none text-white">| Vivo Y15 |</a> <a href="" className="text-decoration-none text-white">| Samsung Galaxy S21 FE 5G |</a> <a href="" className="text-decoration-none text-white">| Infinix HOT 30i |</a> <a href="" className="text-decoration-none text-white">| Realme 10 pro 5G |</a>  <a href="" className="text-decoration-none text-white">| MOTOROLA G62 5G |</a> <a href="" className="text-decoration-none text-white">| REDMI Note 12 Pro 5G |</a>  <a href="" className="text-decoration-none text-white">| Infinix Smart 7 |</a>  <a href="" className="text-decoration-none text-white">| Vivo Y12 |</a> <a href="" className="text-decoration-none text-white">| Oppo A12 |</a> <a href="" className="text-decoration-none text-white">| Motorola 5G phone |</a> <a href="" className="text-decoration-none text-white">| Realme 5g Smartphone |</a> <a href="" className="text-decoration-none text-white">| Nokia Mobile |</a> <a href="" className="text-decoration-none text-white">| Samsung Mobile |</a> <a href="" className="text-decoration-none text-white">| iPhone |</a> <a href="" className="text-decoration-none text-white">| Oppo |</a> <a href="" className="text-decoration-none text-white">| Vivo mobile |</a> <a href="" className="text-decoration-none  text-white">| iPhone 11 pro |</a> <a href="" className="text-decoration-none text-white">| iPhone 11 |</a> <a href="" className="text-decoration-none  text-white">| Samsung A51 |</a>
            </p>
          </div>
          <div className="productLink col-lg-12 text-white">
            <p>FURNITURE <a href="" className="text-decoration-none text-white">| Furniture |</a> <a href="" className="text-decoration-none text-white">| Sofas |</a> <a href="" className="text-decoration-none text-white">| Beds |</a> <a href="" className="text-decoration-none text-white">| Dining sets |</a> <a href="" className="text-decoration-none text-white">| Wardrobes |</a> <a href="" className="text-decoration-none text-white">| Mattresses |</a> <a href="" className="text-decoration-none text-white">| TV Units |</a> <a href="" className="text-decoration-none text-white">| Tables|</a> <a href="" className="text-decoration-none text-white">| Chairs |</a>  <a href="" className="text-decoration-none text-white">| Shelves |</a> <a href="" className="text-decoration-none text-white">| Bean Bags |</a>  <a href="" className="text-decoration-none text-white">| Office Chairs |</a>  <a href="" className="text-decoration-none text-white">| Computer Table |</a> <a href="" className="text-decoration-none text-white">| Office Tables |</a> <a href="" className="text-decoration-none text-white">| Red Sofa |</a> <a href="" className="text-decoration-none text-white">| Wakefit Beds |</a> <a href="" className="text-decoration-none text-white">| White Sofa |</a> <a href="" className="text-decoration-none text-white">| Wakefit Mattresses |</a> <a href="" className="text-decoration-none text-white">| Green Sofa |</a> <a href="" className="text-decoration-none text-white">| Black Sofa |</a> <a href="" className="text-decoration-none text-white">| Brown Sofa |</a>
            </p>
          </div>
        </div>
      </div>
      <MDBFooter className='text-center foot_bg' color='white'>
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
                <h6 className='text-uppercase'>ABOUT</h6>

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
                <h6 className='text-uppercase'>GROUP COMPANIES</h6>

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
                <h6 className='text-uppercase'>HELP</h6>

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
                <h6 className='text-uppercase'>CONSUMER POLICY</h6>

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

        <div className='text-center p-3 row' style={{ backgroundColor: 'rgb(0, 0, 40)' }}>
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