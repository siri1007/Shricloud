import Link from "next/link";
import Image from "next/image";
import five from "@/public/img/hero/activity.png";
// import resellerim
// resellerBanner
import resellerBanner from "@/public/img/resellerBanner.png";
// import resell from "@/public/img/resell.jpeg

import styles from "./wordpressBanner.module.scss";

const ResellerBanner = () => {
  return (
    <section
      className="hero-section hero-1 style-hosting bg-cover fix"
      style={{
        backgroundImage: "url(/img/hero/hero-bg-1.jpg)",
      }}
    >
      
      <div className="container"
        style={{ marginTop: "-70px" }}>
        <div className="row g-4 justify-content-between align-items-center">
          <div className="col-lg-6">
            <div className="hero-content">
              <span
                className="sub-text-2 "
               
              >
                <Image src={five} alt="img" priority className="me-2" />
                Reseller Hosting Plan - 12 months for $29/month
              </span>
              <h1
                
              >
                Reseller Hosting Windows & Linux
              </h1>
              <div
                className="hero-list-items "
                
                aria-errormessage=".5s"
              >
                <ul className="hero-list">
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Lifetime Free Wildcard SLL certificate
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    24/7 Chat, call & Ticket Support
                  </li>
                </ul>
                <ul className="hero-list">
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Free Domain 2 Years Billing
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    30-day money back guarantee
                  </li>
                </ul>
              </div>
              <Link
                href="pricing"
                className="theme-btn bg-color-2 "
              
              >
                view plan <i className="fas fa-long-arrow-alt-right"></i>
              </Link>
            </div>
          </div>

<div className={styles.Resellwrapper}>
            <Image src={resellerBanner} alt="wordpress hosting" priority />
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default ResellerBanner;
