import Link from "next/link";
import Image from "next/image";

import five from "@/public/img/hero/activity.png";

import dedicatedbanner from "@/public/img/dedicatedbanner.png"
import styles from "./wordpressBanner.module.scss";
const DedicatedBanner = () => {
  return (
    <section
      className="hero-section hero-1 style-hosting bg-cover fix"
      style={{
        backgroundImage: "url(/img/hero/hero-bg-1.jpg)",
      }}
    >
      {/* <div className="circle-shape-left">
        <Image src={one} alt="shape-img" priority />
      </div>
      <div className="circle-shape-right">
        <Image src={two} alt="shape-img" priority />
      </div>
      <div className="dot-left">
        <Image src={three} alt="img" priority />
      </div>
      <div className="dot-right">
        <Image src={four} alt="img" priority />
      </div> */}
      <div className="container">
        <div className="row g-4 justify-content-between align-items-center">
          <div className="col-lg-6">
            <div className="hero-content">
              <span
                className="sub-text-2 "
              
              >
                <Image src={five} alt="img" priority className="me-2" />
                Dedicated Starter Plan - 12 months for $99/month
              </span>
              <h1
            
              >
                Managed Dedicated Server Hosting
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
          <div className={styles.Dedicatedwrapper}>
            <div className={styles.Dedicatedwrapper}>
              <Image src={dedicatedbanner} alt="" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DedicatedBanner;
