"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/arrow.png";
import two from "@/public/img/wing-shape.png";
import three from "@/public/img/pricing/icon-1.png";
import four from "@/public/img/pricing/pricing-shape.png";

const PricingHome = () => {
  const [tab, setTab] = useState(1);

  return (
    <section className="pricing-section fix section-padding section-bg">
      <div className="container">
        <div className="section-title text-center">
          <span className="style-border ">Pricing Plans</span>
          <h2>
           Choose your reseller hosting plan
          </h2>
          <p>Select a reseller hosting plan tailored to your requirements and <br></br>budget for an enhanced hosting experience. </p>
        </div>
        <div className="pricing-tab-header">
          <div className="arrow-shape">
            <Image src={one} alt="img" priority />
          </div>
          <ul className="nav" role="tablist">
            <li className="nav-item " role="presentation">
              <a
                onClick={() => setTab(0)}
                data-bs-toggle="tab"
                className={`nav-link ${tab === 0 ? " active " : " "}`}
                aria-selected="true"
                role="tab"
              >
                Monthly
              </a>
            </li>
            <li className="nav-item " role="presentation">
              <a
                onClick={() => setTab(1)}
                data-bs-toggle="tab"
                className={`nav-link ${tab === 1 ? " active " : " "}`}
                aria-selected="false"
                role="tab"
              >
                Yearly
              </a>
            </li>
          </ul>
          <div className="save-text">Save 50%</div>
        </div>
        <div className="tab-content">
          {/* <div
            id="monthly"
            className={`tab-pane fade ${tab === 0 ? " show active " : " "}`}
            role="tabpanel"
          > */}

          <div
  id="monthly"
  className={`tab-pane ${tab === 0 ? "show active" : "d-none"}`}
  role="tabpanel"
>
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-6 ">
                <div className="pricing-card-items responsive-pricing-style">
                  <div className="wing-shape">
                    <Image src={two} alt="img" priority />
                  </div>
                  <div className="icon">
                    <Image src={three} alt="img" priority />
                  </div>
                  <div className="pricing-bg">
                    <Image src={four} alt="img" priority />
                  </div>
                  <div className="pricing-header">
                    <div className="price-content">
                      <h3>Startup</h3>
                      {/* <p> ₹999/mo</p> */}
                    </div>
                    <h2>₹999/mo</h2>
                  </div>
                  <ul className="pricing-list">
                    <li>
                      <i className="fa-solid fa-check"></i>
                      30 Hosting Accounts
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      50 GB Disk Space
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Unlimited Websites
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Unlimited Free SSL
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Unlimited Databases
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Private Nameservers
                    </li>

                    <li>
                      <i className="fa-solid fa-check"></i>
                      Cloud Infrastructure
                    </li>

                    <li>
                      <i className="fa-solid fa-check"></i>
                      100% White Labelled
                    </li>

                    <li>
                      <i className="fa-solid fa-check"></i>
                      Litespeed Webservers
                    </li>

                    <li>
                      <i className="fa-solid fa-check"></i>
                      Softaculous Auto Installer
                    </li>
                  </ul>
                  <div className="pricing-button">
                    <Link href="https://my.shricloud.com/?cmd=cart&action=add&id=24" className="theme-btn">
                      get Started Now{" "}
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 ">
                <div className="pricing-card-items responsive-pricing-style">
                  <div className="wing-shape">
                    <Image src={two} alt="img" priority />
                  </div>
                  <div className="icon">
                    <Image src={three} alt="img" priority />
                  </div>
                  <div className="pricing-bg">
                    <Image src={four} alt="img" priority />
                  </div>
                  <div className="pricing-header">
                    <div className="price-content">
                      <h3>Growth</h3>
                      {/* <p>Collaboratively formulate</p> */}
                    </div>
                    <h2>₹1899/mo</h2>
                  </div>
                  <ul className="pricing-list">
                    <li>
                      <i className="fa-solid fa-check"></i>
                      60 Hosting Accounts
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      100 GB Disk Space
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Unlimited Websites
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Unlimited Free SSL
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Unlimited Databases
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Private Nameservers
                    </li>

                    <li>
                      <i className="fa-solid fa-check"></i>
                      Cloud Infrastructure
                    </li>

                    <li>
                      <i className="fa-solid fa-check"></i>
                      100% White Labeled
                    </li>

                    <li>
                      <i className="fa-solid fa-check"></i>
                      Litespeed Webservers
                    </li>

                    <li>
                      <i className="fa-solid fa-check"></i>
                      Softaculous Auto Installer
                    </li>
                  </ul>
                  <div className="pricing-button">
                    <Link href="https://my.shricloud.com/?cmd=cart&action=add&id=25" className="theme-btn">
                      get Started Now{" "}
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 ">
                <div className="pricing-card-items responsive-pricing-style">
                  <div className="wing-shape">
                    <Image src={two} alt="img" priority />
                  </div>
                  <div className="icon">
                    <Image src={three} alt="img" priority />
                  </div>
                  <div className="pricing-bg">
                    <Image src={four} alt="img" priority />
                  </div>
                  <div className="pricing-header">
                    <div className="price-content">
                      <h3>Expand</h3>
                      {/* <p>₹2599/mo</p> */}
                    </div>
                    <h2>₹2599/mo</h2>
                  </div>
                  <ul className="pricing-list">
                    <li>
                      <i className="fa-solid fa-check"></i>
                      90 Hosting Accounts
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      150 GB Disk Space
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Unlimited Websites
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Unlimited Free SSL
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Unlimited Databases
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Private Nameservers
                    </li>

                    <li>
                      <i className="fa-solid fa-check"></i>
                      Cloud Infrastructure
                    </li>

                    <li>
                      <i className="fa-solid fa-check"></i>
                      100% White Labeled
                    </li>

                    <li>
                      <i className="fa-solid fa-check"></i>
                      Litespeed Webservers
                    </li>

                    <li>
                      <i className="fa-solid fa-check"></i>
                      Softaculous Auto Installer
                    </li>
                  </ul>
                  <div className="pricing-button">
                    <Link href="https://my.shricloud.com/?cmd=cart&action=add&id=26" className="theme-btn">
                      get Started Now{" "}
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div
            id="yearly"
            className={`tab-pane fade ${tab === 1 ? " show active " : " "}`}
            role="tabpanel"
          > */}


          <div
  id="yearly"
  className={`tab-pane ${tab === 1 ? "show active" : "d-none"}`}
  role="tabpanel"
>
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="pricing-card-items responsive-pricing-style">
                  <div className="wing-shape">
                    <Image src={two} alt="img" priority />
                  </div>
                  <div className="icon">
                    <Image src={three} alt="img" priority />
                  </div>
                  <div className="pricing-bg">
                    <Image src={four} alt="img" priority />
                  </div>
                  <div className="pricing-header">
                    <div className="price-content">
                      <h3>Startup</h3>
                      {/* <p>Collaboratively formulate</p> */}
                    </div>
                    <h2>₹999/mo</h2>
                  </div>
                  <ul className="pricing-list">
                    <li>
                      <i className="fa-solid fa-check"></i>
                      30 Hosting Accounts
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      50 GB Disk Space
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Unlimited Websites
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Unlimited Free SSL
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Unlimited Databases
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Private Nameservers
                    </li>

                    <li>
                      <i className="fa-solid fa-check"></i>
                      Cloud Infrastructure
                    </li>

                    <li>
                      <i className="fa-solid fa-check"></i>
                      100% White Labelled
                    </li>

                    <li>
                      <i className="fa-solid fa-check"></i>
                      Litespeed Webservers
                    </li>

                    <li>
                      <i className="fa-solid fa-check"></i>
                      Softaculous Auto Installer
                    </li>
                  </ul>
                  <div className="pricing-button">
                    <Link href="https://my.shricloud.com/?cmd=cart&action=add&id=24" className="theme-btn">
                      get Started Now{" "}
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="pricing-card-items responsive-pricing-style">
                  <div className="wing-shape">
                    <Image src={two} alt="img" priority />
                  </div>
                  <div className="icon">
                    <Image src={three} alt="img" priority />
                  </div>
                  <div className="pricing-bg">
                    <Image src={four} alt="img" priority />
                  </div>
                  <div className="pricing-header">
                    <div className="price-content">
                      <h3>Growth</h3>
                      {/* <p>Collaboratively formulate</p> */}
                    </div>
                    <h2>₹1899/mo</h2>
                  </div>
                   <ul className="pricing-list">
                    <li>
                      <i className="fa-solid fa-check"></i>
                      60 Hosting Accounts
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      100 GB Disk Space
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Unlimited Websites
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Unlimited Free SSL
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Unlimited Databases
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Private Nameservers
                    </li>

                    <li>
                      <i className="fa-solid fa-check"></i>
                      Cloud Infrastructure
                    </li>

                    <li>
                      <i className="fa-solid fa-check"></i>
                      100% White Labeled
                    </li>

                    <li>
                      <i className="fa-solid fa-check"></i>
                      Litespeed Webservers
                    </li>

                    <li>
                      <i className="fa-solid fa-check"></i>
                      Softaculous Auto Installer
                    </li>
                  </ul>
                  <div className="pricing-button">
                    <Link href="https://my.shricloud.com/?cmd=cart&action=add&id=25" className="theme-btn">
                      get Started Now{" "}
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="pricing-card-items responsive-pricing-style">
                  <div className="wing-shape">
                    <Image src={two} alt="img" priority />
                  </div>
                  <div className="icon">
                    <Image src={three} alt="img" priority />
                  </div>
                  <div className="pricing-bg">
                    <Image src={four} alt="img" priority />
                  </div>
                  <div className="pricing-header">
                    <div className="price-content">
                      <h3>Expand</h3>
                      {/* <p>Collaboratively formulate</p> */}
                    </div>
                    <h2>₹2599/mo</h2>
                  </div>
                <ul className="pricing-list">
                    <li>
                      <i className="fa-solid fa-check"></i>
                      90 Hosting Accounts
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      150 GB Disk Space
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Unlimited Websites
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Unlimited Free SSL
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Unlimited Databases
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Private Nameservers
                    </li>

                    <li>
                      <i className="fa-solid fa-check"></i>
                      Cloud Infrastructure
                    </li>

                    <li>
                      <i className="fa-solid fa-check"></i>
                      100% White Labeled
                    </li>

                    <li>
                      <i className="fa-solid fa-check"></i>
                      Litespeed Webservers
                    </li>

                    <li>
                      <i className="fa-solid fa-check"></i>
                      Softaculous Auto Installer
                    </li>
                  </ul>
                  <div className="pricing-button">
                    <Link href="https://my.shricloud.com/?cmd=cart&action=add&id=26" className="theme-btn">
                      get Started Now{" "}
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default PricingHome;
