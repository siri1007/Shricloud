"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/arrow.png";
import two from "@/public/img/wing-shape.png";
import three from "@/public/img/pricing/icon-1.png";
import four from "@/public/img/pricing/pricing-shape.png";

const PricingHome = () => {
  const [tab, setTab] = useState(0);

  return (
    <section className="pricing-section fix section-padding section-bg">
      <div className="container">
        
        <div className="section-title text-center">
          <span className="style-border" data-aos="fade-up" data-aos-duration="800">
            Pricing Plans
          </span>
          <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
            Get the More Powerful With Hostech <br /> Website Hosting Plans
          </h2>
        </div>

        <div className="pricing-tab-header">
          <div className="arrow-shape">
            <Image src={one} alt="img" priority />
          </div>

          <ul className="nav" role="tablist">
            <li className="nav-item" data-aos="fade-up" data-aos-duration="800">
              <a
                onClick={() => setTab(0)}
                className={`nav-link ${tab === 0 ? "active" : ""}`}
              >
                Monthly
              </a>
            </li>

            <li className="nav-item" data-aos="fade-up" data-aos-duration="800">
              <a
                onClick={() => setTab(1)}
                className={`nav-link ${tab === 1 ? "active" : ""}`}
              >
                Yearly
              </a>
            </li>
          </ul>

          <div className="save-text">Save 25%</div>
        </div>

        <div className="tab-content">

          {/* MONTHLY */}
          <div className={`tab-pane fade ${tab === 0 ? "show active" : ""}`}>
            <div className="row">

              {/* STARTUP */}
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="pricing-card-items">
                  <div className="wing-shape">
                    <Image src={two} alt="img" />
                  </div>
                  <div className="icon">
                    <Image src={three} alt="img" />
                  </div>
                  <div className="pricing-bg">
                    <Image src={four} alt="img" />
                  </div>

                  <div className="pricing-header">
                    <h3>Startup</h3>
                    <h2>₹999/mo</h2>
                  </div>

                  <ul className="pricing-list">
                    <li>30 Hosting Accounts</li>
                    <li>50 GB Disk Space</li>
                    <li>Unlimited Websites</li>
                    <li>Unlimited Free SSL</li>
                    <li>Unlimited Databases</li>
                    <li>Private Nameservers</li>
                    <li>Cloud Infrastructure</li>
                    <li>100% White Labelled</li>
                    <li>Litespeed Webservers</li>
                    <li>Softaculous Auto Installer</li>
                  </ul>

                  <Link href="contact" className="theme-btn">Buy Now</Link>
                </div>
              </div>

              {/* GROWTH */}
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="pricing-card-items">
                  <div className="popular-badge">MOST POPULAR</div>

                  <div className="wing-shape">
                    <Image src={two} alt="img" />
                  </div>
                  <div className="icon">
                    <Image src={three} alt="img" />
                  </div>
                  <div className="pricing-bg">
                    <Image src={four} alt="img" />
                  </div>

                  <div className="pricing-header">
                    <h3>Growth</h3>
                    <h2>₹1899/mo</h2>
                  </div>

                  <ul className="pricing-list">
                    <li>60 Hosting Accounts</li>
                    <li>100 GB Disk Space</li>
                    <li>Unlimited Websites</li>
                    <li>Unlimited Free SSL</li>
                    <li>Unlimited Databases</li>
                    <li>Private Nameservers</li>
                    <li>Cloud Infrastructure</li>
                    <li>100% White Labeled</li>
                    <li>Litespeed Webservers</li>
                    <li>Softaculous Auto Installer</li>
                  </ul>

                  <Link href="contact" className="theme-btn">Buy Now</Link>
                </div>
              </div>

              {/* EXPAND */}
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="pricing-card-items">
                  <div className="wing-shape">
                    <Image src={two} alt="img" />
                  </div>
                  <div className="icon">
                    <Image src={three} alt="img" />
                  </div>
                  <div className="pricing-bg">
                    <Image src={four} alt="img" />
                  </div>

                  <div className="pricing-header">
                    <h3>Expand</h3>
                    <h2>₹2599/mo</h2>
                  </div>

                  <ul className="pricing-list">
                    <li>90 Hosting Accounts</li>
                    <li>150 GB Disk Space</li>
                    <li>Unlimited Websites</li>
                    <li>Unlimited Free SSL</li>
                    <li>Unlimited Databases</li>
                    <li>Private Nameservers</li>
                    <li>Cloud Infrastructure</li>
                    <li>100% White Labeled</li>
                    <li>Litespeed Webservers</li>
                    <li>Softaculous Auto Installer</li>
                  </ul>

                  <Link href="contact" className="theme-btn">Buy Now</Link>
                </div>
              </div>

            </div>
          </div>

          {/* YEARLY */}
          <div className={`tab-pane fade ${tab === 1 ? "show active" : ""}`}>
            <div className="row">

              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="pricing-card-items">
                  <h3>Shared Hosting</h3>
                  <h2>$29</h2>
                </div>
              </div>

              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="pricing-card-items">
                  <h3>VPS Hosting</h3>
                  <h2>$39</h2>
                </div>
              </div>

              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="pricing-card-items">
                  <h3>Cloud Hosting</h3>
                  <h2>$59</h2>
                </div>
              </div>

            </div>
          </div>

        </div>

        <div className="pricing-title">
          <p>Cost-effective hosting that delivers secure, reliable performance.</p>
          <Link href="pricing" className="theme-btn">
            See all plan & details
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PricingHome;