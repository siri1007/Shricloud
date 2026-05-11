"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import two from "@/public/img/arrow.png";
import styles from "./WordpressPricing.module.scss";

const WordpressPricing = () => {
  const [tab, setTab] = useState(1);

  // ✅ ADD HERE (inside component)
  const [showMore, setShowMore] = useState(false);

  // PLAN 1 - Starter (1 Website)
  const plan1 = {
    website: "Host 1 website on this hosting package.",
    managedwp: "Fully managed WordPress hosting with automatic optimizations.",
    storage: "10 GB SSD storage for fast website loading and performance.",
    freedomain: "No free domain is included with this hosting plan.",
    subdomain: "Subdomains are not available in this hosting package.",
    businessmail: "Create up to 10 professional business email accounts.",
    ssl: "Free SSL certificates included for website security.",
    backups: "Automated backups are not included in this plan.",
    cloudflare: "Free Cloudflare CDN integration for faster global delivery.",
    migration: "Free website migration handled by our support team.",
    controlpanel: "Easy-to-use hosting control panel for website management.",
    malware: "Advanced malware scanning for website protection.",
    support: "Priority customer support with faster response times.",

    litespeed: "LiteSpeed servers deliver faster website performance.",
    redis: "Redis cache improves database and application speed.",
    lscache: "LSCache boosts WordPress page loading performance.",
    memcached: "MemCached accelerates dynamic content delivery.",
    wpoptimized: "Servers optimized specifically for WordPress websites.",
    turbophp: "Turbo PHP enhances PHP execution speed and stability.",

    oneclick: "Install WordPress instantly with one click.",
    staging: "Create a staging site to test changes safely.",
    cloning: "Clone your WordPress website in a single click.",
    ondemand: "Generate backups anytime whenever required.",
    multisite: "Run and manage multiple WordPress sites together.",
    inmemorycache: "In-memory cache for faster data retrieval and performance.",
    wpsecurity: "Built-in WordPress security tools to keep your site safe.",
  };

  // PLAN 2 - Business (100 Websites)
  const plan2 = {
    website: "Host up to 100 websites on this hosting package.",
    managedwp: "Fully managed WordPress hosting with automatic optimizations.",
    storage: "100 GB SSD storage for fast website loading and performance.",
    freedomain: "Free domain included for 1 year with this hosting plan.",
    subdomain: "Create up to 100 subdomains across your hosted websites.",
    businessmail: "Create up to 100 professional business email accounts.",
    ssl: "Free SSL certificates included for website security.",
    backups: "Automated daily backups to keep your website data safe.",
    cloudflare: "Free Cloudflare CDN integration for faster global delivery.",
    migration: "Free website migration handled by our support team.",
    controlpanel: "Easy-to-use hosting control panel for website management.",
    malware: "Advanced malware scanning for website protection.",
    support: "Priority customer support with faster response times.",

    litespeed: "LiteSpeed servers deliver faster website performance.",
    redis: "Redis cache improves database and application speed.",
    lscache: "LSCache boosts WordPress page loading performance.",
    memcached: "MemCached accelerates dynamic content delivery.",
    wpoptimized: "Servers optimized specifically for WordPress websites.",
    turbophp: "Turbo PHP enhances PHP execution speed and stability.",

    oneclick: "Install WordPress instantly with one click.",
    staging: "Create a staging site to test changes safely.",
    cloning: "Clone your WordPress website in a single click.",
    ondemand: "Generate backups anytime whenever required.",
    multisite: "Run and manage multiple WordPress sites together.",
    inmemorycache: "In-memory cache for faster data retrieval and performance.",
    wpsecurity: "Built-in WordPress security tools to keep your site safe.",
  };

  // PLAN 3 - Enterprise (300 Websites)
  const plan3 = {
    website: "Host up to 300 websites on this hosting package.",
    managedwp: "Fully managed WordPress hosting with automatic optimizations.",
    storage: "300 GB SSD storage for fast website loading and performance.",
    freedomain: "Free domain included for 1 year with this hosting plan.",
    subdomain: "Create unlimited subdomains across your hosted websites.",
    businessmail: "Create unlimited professional business email accounts.",
    ssl: "Unlimited free SSL certificates included for all your websites.",
    backups: "Automated daily backups to keep your website data safe.",
    cloudflare: "Free Cloudflare CDN integration for faster global delivery.",
    migration: "Free website migration handled by our support team.",
    controlpanel: "Easy-to-use hosting control panel for website management.",
    malware: "Advanced malware scanning for website protection.",
    support: "Priority customer support with faster response times.",

    litespeed: "LiteSpeed servers deliver faster website performance.",
    redis: "Redis cache improves database and application speed.",
    lscache: "LSCache boosts WordPress page loading performance.",
    memcached: "MemCached accelerates dynamic content delivery.",
    wpoptimized: "Servers optimized specifically for WordPress websites.",
    turbophp: "Turbo PHP enhances PHP execution speed and stability.",

    oneclick: "Install WordPress instantly with one click.",
    staging: "Create a staging site to test changes safely.",
    cloning: "Clone your WordPress website in a single click.",
    ondemand: "Generate backups anytime whenever required.",
    multisite: "Run and manage multiple WordPress sites together.",
    inmemorycache: "In-memory cache for faster data retrieval and performance.",
    wpsecurity: "Built-in WordPress security tools to keep your site safe.",
  };

  return (
    <section className="pricing-section fix section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span className="style-border ">Pricing Plans</span>
          <h2>Best WordPress Hosting Plans</h2>
        </div>
        <div className="pricing-tab-header">
          <div className="arrow-shape">
            <Image src={two} alt="img" priority />
          </div>
          <ul className="nav" role="tablist">
            <li className="nav-item " role="presentation">
              <a
                data-bs-toggle="tab"
                onClick={() => setTab(0)}
                className={`nav-link ${tab === 0 ? " active " : " "}`}
                aria-selected="true"
                role="tab"
              >
                Monthly
              </a>
            </li>
            <li className="nav-item " role="presentation">
              <a
                data-bs-toggle="tab"
                onClick={() => setTab(1)}
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
          <div
            id="monthly"
            className={`tab-pane fade ${tab === 0 ? " show active " : " "}`}
            role="tabpanel"
          >
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-6 ">
                <div className="pricing-box-items">
                  <div className="pricing-header">
                    <div className="price-content">
                      <h4>Starter</h4>
                      <p>Plan that helps you grow</p>
                    </div>

                    {/* <h4>
                      <span className={styles.oldPrice}>₹299 /mo</span>
                    </h4> */}
                    <h2>
                      ₹299 <sup>/ Month</sup>
                    </h2>
                  </div>
                  {/* <div className="pricing-button">
                    <Link href="https://my.shricloud.com/?cmd=cart&action=add&id=48&promocode=SALE50%OFF">
                      Get Started Now
                    </Link>
                  </div> */}

                  <div className="pricing-button">
                    <Link
                      href="https://my.shricloud.com/?cmd=cart&action=add&id=48&promocode=SALE50%OFF"
                      className="theme-btn"
                    >
                      Get Started Now
                    </Link>
                  </div>

                  <ul className="pricing-list">
                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>1 Website
                        {/* <i
  className="fa-solid fa-xmark"
  style={{ color: "#ef4444" }}
></i>1 Website */}
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan1.website}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Managed WordPress
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan1.managedwp}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        10 GB SSD Storage
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan1.storage}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i
                          className="fa-solid fa-xmark"
                          style={{ color: "#ef4444" }}
                        ></i>
                        No Free Domain
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>

                        <div className={styles["tooltip-box"]}>
                          {plan1.freedomain}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i
                          className="fa-solid fa-xmark"
                          style={{ color: "#ef4444" }}
                        ></i>
                        No Subdomain
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>

                        <div className={styles["tooltip-box"]}>
                          {plan1.subdomain}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        10 Business Email
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan1.businessmail}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Free SSL Certificates
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>{plan1.ssl}</div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        No Backups
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan1.backups}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i
                          className="fa-solid fa-xmark"
                          style={{ color: "#ef4444" }}
                        ></i>
                        Free Cloudflare CDN
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>

                        {/* <div className={styles["tooltip-box"]}>
      {plan1.subdomain}
    </div> */}
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Free Migration
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan1.migration}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Powerful Control panel
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan1.controlpanel}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Malware Scanning
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan1.malware}
                        </div>
                      </div>
                    </li>

                    {showMore && (
                      <>
                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            Priority Support
                          </span>
                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan1.support}
                            </div>
                          </div>
                        </li>

                        <h4>Speed & Performance</h4>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>Litespeed
                            Servers
                          </span>
                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan1.litespeed}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i
                              className="fa-solid fa-xmark"
                              style={{ color: "#ef4444" }}
                            ></i>
                            Redis Cache
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>

                            {/* <div className={styles["tooltip-box"]}>
      {tooltipText.redis}
    </div> */}
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i
                              className="fa-solid fa-xmark"
                              style={{ color: "#ef4444" }}
                            ></i>
                            LSCache
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>

                            {/* <div className={styles["tooltip-box"]}>
      {tooltipText.lscache}
    </div> */}
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i
                              className="fa-solid fa-xmark"
                              style={{ color: "#ef4444" }}
                            ></i>
                            MemCached
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            {/* 
    <div className={styles["tooltip-box"]}>
      {tooltipText.memcached}
    </div> */}
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>WordPress
                            Optimized
                          </span>
                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan1.wpoptimized}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i
                              className="fa-solid fa-xmark"
                              style={{ color: "#ef4444" }}
                            ></i>
                            Turbo PHP
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            {/* 
    <div className={styles["tooltip-box"]}>
      {tooltipText.memcached}
    </div> */}
                          </div>
                        </li>

                        <h4>WordPress Management</h4>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>1 Click
                            Installation
                          </span>
                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan1.oneclick}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i
                              className="fa-solid fa-xmark"
                              style={{ color: "#ef4444" }}
                            ></i>
                            Staging
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>

                            {/* <div className={styles["tooltip-box"]}>
      {tooltipText.staging}
    </div> */}
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i
                              className="fa-solid fa-xmark"
                              style={{ color: "#ef4444" }}
                            ></i>
                            Cloning
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>

                            {/* <div className={styles["tooltip-box"]}>
      {tooltipText.cloning}
    </div> */}
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i
                              className="fa-solid fa-xmark"
                              style={{ color: "#ef4444" }}
                            ></i>
                            On Demand Backups
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            {/* 
    <div className={styles["tooltip-box"]}>
      {tooltipText.ondemand}
    </div> */}
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i
                              className="fa-solid fa-xmark"
                              style={{ color: "#ef4444" }}
                            ></i>
                            WordPress Multisite
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>

                            {/* <div className={styles["tooltip-box"]}>
      {tooltipText.multisite}
    </div> */}
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>In Memory Cache
                          </span>
                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan1.inmemorycache}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>WordPress
                            Security
                          </span>
                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan1.wpsecurity}
                            </div>
                          </div>
                        </li>
                      </>
                    )}

                    <li className={styles["show-more-btn"]}>
                      <button onClick={() => setShowMore(!showMore)}>
                        {showMore ? "Show Less" : "Show More"}
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 ">
                <div className="pricing-box-items active">
                  <div className="pricing-header">
                    <div className="price-content">
                      <h4>Premium </h4>
                      <p>Quality Resources at a Great Price</p>
                    </div>

                    <h2>
                      ₹ 399<sup>/ Month</sup>
                    </h2>
                  </div>

                  <div className="pricing-button">
                    <Link
                      href="https://my.shricloud.com/?cmd=cart&action=add&id=49&promocode=SALE50%OFF"
                      className="theme-btn"
                    >
                      Get Started Now
                    </Link>
                  </div>

                  <ul className="pricing-list">
                    {/* BASIC FEATURES */}

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        100 Websites
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan2.website}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Managed WordPress
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan2.managedwp}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        100 GB SSD Storage
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan2.storage}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Free Domain
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan2.freedomain}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        100 Subdomains
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan2.subdomain}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        100 Business Email
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan2.businessmail}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Free SSL Certificates
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>{plan2.ssl}</div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Daily Backups
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan2.backups}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i
                          className="fa-solid fa-xmark"
                          style={{ color: "#ef4444" }}
                        ></i>
                        Free Cloudflare CDN
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan2.cloudflare}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Free Migration
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan2.migration}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Powerful Control panel
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan2.controlpanel}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Malware Scanning
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan2.malware}
                        </div>
                      </div>
                    </li>

                   

                    {/* SHOW MORE */}

                    {showMore && (



                      <>



                       <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Priority Support
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan2.support}
                        </div>
                      </div>
                    </li>


                        <h4>Speed & Performance</h4>




                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            Litespeed Servers
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan2.litespeed}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            Redis Cache
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan2.redis}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            LSCache
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan2.lscache}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i
                              className="fa-solid fa-xmark"
                              style={{ color: "#ef4444" }}
                            ></i>
                            MemCached
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan2.memcached}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            WordPress Optimized
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan2.wpoptimized}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            Turbo PHP
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan2.turbophp}
                            </div>
                          </div>
                        </li>

                        <h4>WordPress Management</h4>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>1 Click
                            Installation
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan2.oneclick}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            Staging
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan2.staging}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            Cloning
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan2.cloning}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            On Demand Backups
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan2.ondemand}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            WordPress Multisite
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan2.multisite}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            In Memory Cache
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan2.inmemorycache}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            WordPress Security
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan2.wpsecurity}
                            </div>
                          </div>
                        </li>
                      </>
                    )}

                    {/* BUTTON */}

                    <li className={styles["show-more-btn"]}>
                      <button onClick={() => setShowMore(!showMore)}>
                        {showMore ? "Show Less" : "Show More"}
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-4 col-lg-6 col-md-6 ">
                <div className="pricing-box-items">
                  <div className="pricing-header">
                    <div className="price-content">
                      <h4>Business</h4>
                      <p>Boost with power and features</p>
                    </div>

                    <h2>
                      ₹799<sup>/ Month</sup>
                    </h2>
                  </div>

                  <div className="pricing-button">
                    <Link
                      href="https://my.shricloud.com/?cmd=cart&action=add&id=50&promocode=SALE50%OFF"
                      className="theme-btn"
                    >
                      Get Started Now
                    </Link>
                  </div>

                  <ul className="pricing-list">
                    {/* BASIC FEATURES */}

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        300 Websites
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan3.website}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Managed WordPress
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan3.managedwp}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        300 GB SSD Storage
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan3.storage}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Free Domain
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan3.freedomain}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Unlimited Subdomains
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan3.subdomain}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Unlimited Business Email
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan3.businessmail}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Unlimited SSL Certificates
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>{plan3.ssl}</div>
                      </div>
                    </li>

                     <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            Daily Backups
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan3.backups}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            Free Cloudflare CDN
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan3.cloudflare}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            Free Migration
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan3.migration}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            Powerful Control panel
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan3.controlpanel}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            Malware Scanning
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan3.malware}
                            </div>
                          </div>
                        </li>

                    {/* SHOW MORE */}

                    {showMore && (
                      <>
                       

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            Priority Support
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan3.support}
                            </div>
                          </div>
                        </li>

                        <h4>Speed & Performance</h4>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            Litespeed Servers
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan3.litespeed}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            Redis Cache
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan3.redis}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            LSCache
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan3.lscache}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            MemCached
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan3.memcached}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            WordPress Optimized
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan3.wpoptimized}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            Turbo PHP
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan3.turbophp}
                            </div>
                          </div>
                        </li>

                        <h4>WordPress Management</h4>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>1 Click
                            Installation
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan3.oneclick}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            Staging
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan3.staging}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            Cloning
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan3.cloning}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            On Demand Backups
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan3.ondemand}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            WordPress Multisite
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan3.multisite}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            In Memory Cache
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan3.inmemorycache}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            WordPress Security
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan3.wpsecurity}
                            </div>
                          </div>
                        </li>
                      </>
                    )}

                    {/* BUTTON */}

                    <li className={styles["show-more-btn"]}>
                      <button onClick={() => setShowMore(!showMore)}>
                        {showMore ? "Show Less" : "Show More"}
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            id="yearly"
            className={`tab-pane fade ${tab === 1 ? " show active " : " "}`}
            role="tabpanel"
          >
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="pricing-box-items">
                  <div className="pricing-header">
                    <div className="price-content">
                      <h4>Starter</h4>
                      <p>Plan that helps you grow</p>
                    </div>
                    <h4>
                      <span className={styles.oldPrice}>₹299/Month</span>
                    </h4>
                    <h2>
                      ₹99<sup>/ Month</sup>
                    </h2>
                  </div>

                  <div className="pricing-button">
                    <Link
                      href="https://my.shricloud.com/?cmd=cart&action=add&id=48&promocode=SALE50%OFF"
                      className="theme-btn"
                    >
                      Get Started Now
                    </Link>
                  </div>

                  {/* <div className="pricing-button">
                    <Link href="https://my.shricloud.com/index.php?/cart/&step=1" className="theme-btn">
                      Get Started Now
                    </Link>
                  </div> */}

                  <ul className="pricing-list">
                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>1 Website
                        {/* <i
  className="fa-solid fa-xmark"
  style={{ color: "#ef4444" }}
></i>1 Website */}
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan1.website}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Managed WordPress
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan1.managedwp}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        10 GB SSD Storage
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan1.storage}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i
                          className="fa-solid fa-xmark"
                          style={{ color: "#ef4444" }}
                        ></i>
                        No Free Domain
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>

                        <div className={styles["tooltip-box"]}>
                          {plan1.freedomain}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i
                          className="fa-solid fa-xmark"
                          style={{ color: "#ef4444" }}
                        ></i>
                        No Subdomain
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>

                        <div className={styles["tooltip-box"]}>
                          {plan1.subdomain}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        10 Business Email
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan1.businessmail}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Free SSL Certificates
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>{plan1.ssl}</div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        No Backups
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan1.backups}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i
                          className="fa-solid fa-xmark"
                          style={{ color: "#ef4444" }}
                        ></i>
                        Free Cloudflare CDN
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>

                        {/* <div className={styles["tooltip-box"]}>
      {plan1.subdomain}
    </div> */}
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Free Migration
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan1.migration}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Powerful Control panel
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan1.controlpanel}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Malware Scanning
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan1.malware}
                        </div>
                      </div>
                    </li>

                    {showMore && (
                      <>
                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            Priority Support
                          </span>
                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan1.support}
                            </div>
                          </div>
                        </li>

                        <h4>Speed & Performance</h4>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>Litespeed
                            Servers
                          </span>
                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan1.litespeed}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i
                              className="fa-solid fa-xmark"
                              style={{ color: "#ef4444" }}
                            ></i>
                            Redis Cache
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>

                            {/* <div className={styles["tooltip-box"]}>
      {tooltipText.redis}
    </div> */}
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i
                              className="fa-solid fa-xmark"
                              style={{ color: "#ef4444" }}
                            ></i>
                            LSCache
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>

                            {/* <div className={styles["tooltip-box"]}>
      {tooltipText.lscache}
    </div> */}
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i
                              className="fa-solid fa-xmark"
                              style={{ color: "#ef4444" }}
                            ></i>
                            MemCached
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            {/* 
    <div className={styles["tooltip-box"]}>
      {tooltipText.memcached}
    </div> */}
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>WordPress
                            Optimized
                          </span>
                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan1.wpoptimized}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i
                              className="fa-solid fa-xmark"
                              style={{ color: "#ef4444" }}
                            ></i>
                            Turbo PHP
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            {/* 
    <div className={styles["tooltip-box"]}>
      {tooltipText.memcached}
    </div> */}
                          </div>
                        </li>

                        <h4>WordPress Management</h4>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>1 Click
                            Installation
                          </span>
                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan1.oneclick}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i
                              className="fa-solid fa-xmark"
                              style={{ color: "#ef4444" }}
                            ></i>
                            Staging
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>

                            {/* <div className={styles["tooltip-box"]}>
      {tooltipText.staging}
    </div> */}
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i
                              className="fa-solid fa-xmark"
                              style={{ color: "#ef4444" }}
                            ></i>
                            Cloning
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>

                            {/* <div className={styles["tooltip-box"]}>
      {tooltipText.cloning}
    </div> */}
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i
                              className="fa-solid fa-xmark"
                              style={{ color: "#ef4444" }}
                            ></i>
                            On Demand Backups
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            {/* 
    <div className={styles["tooltip-box"]}>
      {tooltipText.ondemand}
    </div> */}
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i
                              className="fa-solid fa-xmark"
                              style={{ color: "#ef4444" }}
                            ></i>
                            WordPress Multisite
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>

                            {/* <div className={styles["tooltip-box"]}>
      {tooltipText.multisite}
    </div> */}
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>In Memory Cache
                          </span>
                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan1.inmemorycache}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>WordPress
                            Security
                          </span>
                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan1.wpsecurity}
                            </div>
                          </div>
                        </li>
                      </>
                    )}

                    <li className={styles["show-more-btn"]}>
                      <button onClick={() => setShowMore(!showMore)}>
                        {showMore ? "Show Less" : "Show More"}
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="pricing-box-items active">
                  <div className="pricing-header">
                    <div className="price-content">
                      <h4>Premium</h4>
                      <p>Quality Resources at a Great Price</p>
                    </div>

                    <h4>
                      <span className={styles.oldPrice}>₹399 /Month</span>
                    </h4>

                    <h2>
                      ₹ 199<sup>/ Month</sup>
                    </h2>
                  </div>
                  <div className="pricing-button">
                    <Link
                      href="https://my.shricloud.com/?cmd=cart&action=add&id=49&promocode=SALE50%OFF"
                      className="theme-btn"
                    >
                      Get Started Now
                    </Link>
                  </div>
                 <ul className="pricing-list">
                    {/* BASIC FEATURES */}

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        100 Websites
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan2.website}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Managed WordPress
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan2.managedwp}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        100 GB SSD Storage
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan2.storage}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Free Domain
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan2.freedomain}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        100 Subdomains
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan2.subdomain}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        100 Business Email
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan2.businessmail}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Free SSL Certificates
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>{plan2.ssl}</div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Daily Backups
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan2.backups}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i
                          className="fa-solid fa-xmark"
                          style={{ color: "#ef4444" }}
                        ></i>
                        Free Cloudflare CDN
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan2.cloudflare}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Free Migration
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan2.migration}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Powerful Control panel
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan2.controlpanel}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Malware Scanning
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan2.malware}
                        </div>
                      </div>
                    </li>

                    

                    {/* SHOW MORE */}

                    {showMore && (
                      <>

                       <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Priority Support
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan2.support}
                        </div>
                      </div>
                    </li>


                        <h4>Speed & Performance</h4>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            Litespeed Servers
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan2.litespeed}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            Redis Cache
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan2.redis}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            LSCache
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan2.lscache}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i
                              className="fa-solid fa-xmark"
                              style={{ color: "#ef4444" }}
                            ></i>
                            MemCached
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan2.memcached}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            WordPress Optimized
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan2.wpoptimized}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            Turbo PHP
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan2.turbophp}
                            </div>
                          </div>
                        </li>

                        <h4>WordPress Management</h4>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>1 Click
                            Installation
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan2.oneclick}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            Staging
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan2.staging}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            Cloning
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan2.cloning}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            On Demand Backups
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan2.ondemand}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            WordPress Multisite
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan2.multisite}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            In Memory Cache
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan2.inmemorycache}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            WordPress Security
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan2.wpsecurity}
                            </div>
                          </div>
                        </li>
                      </>
                    )}

                    {/* BUTTON */}

                    <li className={styles["show-more-btn"]}>
                      <button onClick={() => setShowMore(!showMore)}>
                        {showMore ? "Show Less" : "Show More"}
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="pricing-box-items">
                  <div className="pricing-header">
                    <div className="price-content">
                      <h4>Business</h4>
                      <p>Boost with power and features</p>
                    </div>
                    <h4>
                      <span className={styles.oldPrice}>₹799 /Month</span>
                    </h4>

                    <h2>
                      ₹349<sup>/ Month</sup>
                    </h2>
                  </div>
                  <div className="pricing-button">
                    <Link
                      href="https://my.shricloud.com/?cmd=cart&action=add&id=50&promocode=SALE50%OFF"
                      className="theme-btn"
                    >
                      Get Started Now
                    </Link>
                  </div>
                  <ul className="pricing-list">
                    {/* BASIC FEATURES */}

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        300 Websites
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan3.website}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Managed WordPress
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan3.managedwp}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        300 GB SSD Storage
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan3.storage}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Free Domain
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan3.freedomain}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Unlimited Subdomains
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan3.subdomain}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Unlimited Business Email
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {plan3.businessmail}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Unlimited SSL Certificates
                      </span>

                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>{plan3.ssl}</div>
                      </div>
                    </li>


 <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            Daily Backups
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan3.backups}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            Free Cloudflare CDN
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan3.cloudflare}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            Free Migration
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan3.migration}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            Powerful Control panel
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan3.controlpanel}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            Malware Scanning
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan3.malware}
                            </div>
                          </div>
                        </li>

                    {/* SHOW MORE */}

                    {showMore && (
                      <>
                       

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            Priority Support
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan3.support}
                            </div>
                          </div>
                        </li>

                        <h4>Speed & Performance</h4>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            Litespeed Servers
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan3.litespeed}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            Redis Cache
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan3.redis}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            LSCache
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan3.lscache}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            MemCached
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan3.memcached}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            WordPress Optimized
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan3.wpoptimized}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            Turbo PHP
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan3.turbophp}
                            </div>
                          </div>
                        </li>

                        <h4>WordPress Management</h4>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>1 Click
                            Installation
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan3.oneclick}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            Staging
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan3.staging}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            Cloning
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan3.cloning}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            On Demand Backups
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan3.ondemand}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            WordPress Multisite
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan3.multisite}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            In Memory Cache
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan3.inmemorycache}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            WordPress Security
                          </span>

                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {plan3.wpsecurity}
                            </div>
                          </div>
                        </li>
                      </>
                    )}

                    {/* BUTTON */}

                    <li className={styles["show-more-btn"]}>
                      <button onClick={() => setShowMore(!showMore)}>
                        {showMore ? "Show Less" : "Show More"}
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WordpressPricing;
