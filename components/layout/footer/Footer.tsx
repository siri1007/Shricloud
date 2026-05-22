import Link from "next/link";
import Image from "next/image";
import ScrollTop from "./ScrollTop";

import one from "@/public/img/visa-logo.png";
import two from "@/public/img/mastercard-logo.png";
// import three from "@/public/img/payoneer-logo.png";
import four from "@/public/img/affirm-logo.png";
import shricloudwhitelogo from "@/public/img/logo/shricloud logo white 186x35.svg";

// import upi from"@/public/img/upi-icon.png"
import upi from "@/public/img/upi.png";
import paypal from "@/public/img/Paypal-Logo.jpeg";

import amex from "@/public/img/amex.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="footer-section fix bg-cover"
      style={{
        backgroundImage: "url(/img/hero/hero-bg-1.jpg)",
      }}
    >
      <div className="footer-widgets-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 ">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <Link href="/">
                    <Image
                      src={shricloudwhitelogo}
                      alt="logo-img"
                      width={244} // increase this
                      height={60}
                      priority
                    />
                  </Link>
                </div>
                <div className="footer-content">
                  <p>
                    We aim to empower individuals, developers, and businesses
                    through secure, dependable, and budget-friendly web hosting
                    solutions.
                  </p>

                   <h3>Payment Methods</h3>



                  <ul className="brand-logo" style={{ marginTop: "10px" }}>
                   
                    <li>
                      <Image src={one} alt="img" priority />
                    </li>
                    <li>
                      <Image src={two} alt="img" priority />
                    </li>
                    <li>
                      <Image
                        src={upi}
                        alt="img"
                        priority
                        style={{ width: "40px", height: "15px" }}
                      />
                    </li>

                    <li>
                      <Image
                        src={paypal}
                        alt="img"
                        priority
                        style={{ width: "40px", height: "15px" }}
                      />
                    </li>

                    
                    <li>
                      <Image
                        src={amex}
                        alt="img"
                        priority
                        style={{ width: "40px", height: "15px" }}
                      />
                    </li>

                 
                  </ul>

                  
                </div>
              </div>
            </div>

          <div className="col-xl-2 col-lg-4 col-md-3 ps-lg-3 mobile-half">
              <div className="single-footer-widget style-margin">
                <div className="widget-head">
                  <h3>Hosting</h3>
                </div>
                <ul className="list-area">
                  <li>
                    <Link href="Wordpress-cloud-Hosting">
                      <i className="fa-regular fa-chevrons-right"></i>
                      Premium Cloud
                    </Link>
                  </li>
                  <li>
                    <Link href="reseller-hosting">
                      <i className="fa-regular fa-chevrons-right"></i>
                      Reseller Hosting
                    </Link>
                  </li>

                  <li>
                    <Link href="Elite-cloud">
                      <i className="fa-regular fa-chevrons-right"></i>
                      Elite Cloud
                    </Link>
                  </li>

                  <li>
                    <Link href="dedicated-hosting">
                      <i className="fa-regular fa-chevrons-right"></i>
                      Dedicated Hosting
                    </Link>
                  </li>

                  <li>
                    <Link href="vps-hosting">
                      <i className="fa-regular fa-chevrons-right"></i>
                      VPS Hosting
                    </Link>
                  </li>

                  <li>
                    <Link href="N8n-hosting">
                      <i className="fa-regular fa-chevrons-right"></i>
                      N8n-Hosting
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

      <div className="col-xl-2 col-lg-4 col-md-3 ps-lg-3 mobile-half">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3>Quick Links</h3>
                </div>
                <ul className="list-area">
                  <li>
                    <Link href="https://my.shricloud.com/index.php?/clientarea/">
                      <i className="fa-regular fa-chevrons-right"></i>
                      Login Account
                    </Link>
                  </li>
                  <li>
                    <Link href="https://my.shricloud.com/index.php?/signup/">
                      <i className="fa-regular fa-chevrons-right"></i>
                      Register Account
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa-regular fa-chevrons-right"></i>
                      Submit Ticket
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa-regular fa-chevrons-right"></i>
                      Support Center
                    </Link>
                  </li>
                  <li>
                    <Link href="https://tawk.to/chat/65cb0abb8d261e1b5f5f80c0/1hmgi3rb6">
                      <i className="fa-regular fa-chevrons-right"></i>
                      Live Chat
                    </Link>
                  </li>

                  <li>
                    <Link href="contact">
                      <i className="fa-regular fa-chevrons-right"></i>Contact Us
                    </Link>
                  </li>

                  
                </ul>
              </div>
            </div>

          <div className="col-xl-2 col-lg-4 col-md-3 ps-lg-3 mobile-half">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3>Company</h3>
                </div>
                <ul className="list-area">
                  <li>
                    <Link href="about">
                      <i className="fa-regular fa-chevrons-right"></i>
                      Shricloud About
                    </Link>
                  </li>
                  <li>
                    <Link href="terms-of-service">
                      <i className="fa-regular fa-chevrons-right"></i>
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="refund-policy">
                      <i className="fa-regular fa-chevrons-right"></i>
                      Refund Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="privacy-policy">
                      <i className="fa-regular fa-chevrons-right"></i>
                      Privacy Policy
                    </Link>
                  </li>

                  <li>
                    <Link href="affiliate-policy">
                      <i className="fa-regular fa-chevrons-right"></i>
                      Affiliate Policy
                    </Link>
                  </li>

                  <li>
                    <Link href="cookie-policy">
                      <i className="fa-regular fa-chevrons-right"></i>
                      Cookie Policy
                    </Link>
                  </li>

                  {/* <li>
                    <Link href="contact">
                      <i className="fa-regular fa-chevrons-right"></i>Contact Us
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>

          <div className="col-xl-2 col-lg-4 col-md-3 ps-lg-3 mobile-half">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3>Support</h3>
                </div>
                <ul className="list-area">
                  {/* <li>
                    <Link href="/">
                      <i className="fa-regular fa-chevrons-right"></i>
                      Support
                    </Link>
                  </li> */}

                  
                  <li>
                    <Link href="https://shricloud.com/kb/">
                      <i className="fa-regular fa-chevrons-right"></i>
                      Knowledge Base
                    </Link>
                  </li>



                  <li>
                    <Link href="https://my.shricloud.com/index.php?/tickets/new/&dept_id=1">
                      <i className="fa-regular fa-chevrons-right"></i>
                      Technical
                    </Link>
                  </li>


                    <li>
                    <Link href="
                  https://my.shricloud.com/index.php?/tickets/new/">
                      <i className="fa-regular fa-chevrons-right"></i>
Sales                    </Link>
                  </li>




       <li>
                    <Link href="
                  https://my.shricloud.com/index.php?/tickets/new/&dept_id=2">
                      <i className="fa-regular fa-chevrons-right"></i>
Migration                    </Link>
                  </li>


   <li>
                    <Link href="
                 https://my.shricloud.com/index.php?/tickets/new/&dept_id=3">
                      <i className="fa-regular fa-chevrons-right"></i>
Billing                    </Link>
                  </li>







                  <li>
                    <Link href="
                  https://my.shricloud.com/index.php?/tickets/new/&dept_id=5">
                      <i className="fa-regular fa-chevrons-right"></i>
                    Affiliate
                    </Link>
                  </li>



                 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div
            className="footer-wrapper d-flex align-items-center justify-content-center"
            style={{ textAlign: "center" }}
          >
            <p>
              &copy; All Copyright {currentYear} by{" "}
              <Link href="/">ShriCloud Pvt Ltd. All rights reserved.</Link>
            </p>
          </div>
        </div>
        <ScrollTop />
      </div>
    </footer>
  );
};

export default Footer;
