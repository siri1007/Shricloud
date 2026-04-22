"use client";

import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/hero/hero-1-circle-left.png";
import two from "@/public/img/hero/hero-1-circle-right.png";
import three from "@/public/img/hero/hero-1-dot-left.png";
import four from "@/public/img/hero/hero-1-dot-right.png";
import five from "@/public/img/hero/activity.png";
import six from "@/public/img/breadcrumb.png";
import styles from "./wordpressBanner.module.scss";

type EliteBannerProps = {
  scrollToPricing: () => void;
};
const VpsBanner = ({ scrollToPricing }: EliteBannerProps) => {
  return (
    <section
      className="hero-section hero-1 style-hosting bg-cover fix"
      style={{
        backgroundImage: "url(/img/hero/hero-bg-1.jpg)",
      }}
    >
      <div className="circle-shape-left">
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
      </div>
      <div className="container">
        <div className="row g-4 justify-content-between align-items-center">
          <div className="col-lg-6">
            <div className="hero-content">
              <span className="sub-text-2 ">
                <Image src={five} alt="img" priority className="me-2" />
                VPS Cloud Starter Plan – Just $99/month (12 Months)
              </span>
              <h1>Fully Managed VPS Cloud Hosting</h1>
              <div className="hero-list-items " aria-errormessage=".5s">
                <ul className="hero-list">
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Free SSL Certificate for Lifetime Security
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    24/7 Chat & Ticket Support
                  </li>
                </ul>
                <ul className="hero-list">
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Free Domain with Long-Term VPS Plans
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    30-day money back guarantee
                  </li>
                </ul>
              </div>
              <button onClick={scrollToPricing} className={styles.ctaBtn}>
                View Plans →
              </button>
            </div>
          </div>
          <div className="col-lg-3 ">
            <div className="hero-image">
              <Image src={six} alt="img" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VpsBanner;
