import Link from "next/link";
import Image from "next/image";
import five from "@/public/img/hero/activity.png";
// import resellerim
// resellerBanner
import resellerBanner from "@/public/img/resellerBanner.png";
// import resell from "@/public/img/resell.jpeg

import styles from "./wordpressBanner.module.scss";


type WordpressBannerProps = {
  scrollToPricing: () => void;
};

const ResellerBanner = ({ scrollToPricing }: WordpressBannerProps) => {
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
           CLOUD BASED RESELLER HOSTING
              </span>
              <h1
                
              >
               Best Reseller Hosting Solutions
              </h1>
              <div
                className="hero-list-items "
                
                aria-errormessage=".5s"
              >
                <ul className="hero-list">
                  <li>
                    <i className="fa-solid fa-check"></i>
                   Custom Branded Nameservers
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                   24/7 Expert Reseller Support
                  </li>
                </ul>
                <ul className="hero-list">
                  <li>
                    <i className="fa-solid fa-check"></i>
                Control Panel Access
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                  High-Performance Cloud Infrastructure
                  </li>
                </ul>
              </div>
               <button onClick={scrollToPricing} className={styles.ctaBtn}>
              View Plans →
            </button>
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
