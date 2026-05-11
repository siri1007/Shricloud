"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import two from "@/public/img/arrow.png";
import styles from "./ElitePricing.module.scss";

// import styles from

const ElitePricing = () => {
  const [tab, setTab] = useState(1);

  // ✅ ADD HERE (inside component)
  const [showMore, setShowMore] = useState(false);

// PLAN 1 - (Unlimited Websites, 8 GB RAM, 4 vCPU)
const plan1 = {
  website: "Host unlimited websites on this hosting package.",
  ram: "8 GB RAM for handling real-time traffic efficiently.",
  vcpu: "4 vCPU cores to handle your website backend efficiently.",
  ssl: "Free and automatically renewed SSL certificates for all your websites.",
  storage: "Unlimited NVMe SSD storage for fast data processing and performance.",
  freedomain: "Free domain included worth $10 with this hosting plan.",
  subdomain: "Create unlimited subdomains across your hosted websites.",
  databases: "Create unlimited databases for your websites and applications.",
  controlpanel: "Easy-to-use hosting control panel for website management.",
  backups: "Automated daily backups to keep your website data safe.",
  migration: "Unlimited free website migrations handled by our support team.",

  woocommerce: "Servers optimized specifically for WooCommerce and online stores.",
  premiumcdn: "Premium CDN for ultra-fast global content delivery.",
  boostedcpu: "Boosted CPU resources for handling high-traffic spikes.",
  highmemory: "High memory pool for smooth performance under heavy load.",

  litespeed: "LiteSpeed servers deliver faster website performance.",
  redis: "Redis cache improves database and application speed.",
  lscache: "LSCache boosts WordPress page loading performance.",
  memcached: "MemCached accelerates dynamic content delivery.",
  wpoptimized: "Servers optimized specifically for WordPress websites.",

  oneclick: "Install WordPress instantly with one click.",
  staging: "Create a staging site to test changes safely.",
  cloning: "Clone your WordPress website in a single click.",
  ondemand: "Generate backups anytime whenever required.",
  multisite: "Run and manage multiple WordPress sites together.",
  inmemorycache: "In-memory cache for faster data retrieval and performance.",
  wpsecurity: "Built-in WordPress security tools to keep your site safe.",
};

// PLAN 2 - (Unlimited Websites, 12 GB RAM, 6 vCPU)
const plan2 = {
  website: "Host unlimited websites on this hosting package.",
  ram: "12 GB RAM for handling real-time traffic efficiently.",
  vcpu: "6 vCPU cores to handle your website backend efficiently.",
  ssl: "Free and automatically renewed SSL certificates for all your websites.",
  storage: "Unlimited NVMe SSD storage for fast data processing and performance.",
  freedomain: "Free domain included worth $10 with this hosting plan.",
  subdomain: "Create unlimited subdomains across your hosted websites.",
  databases: "Create unlimited databases for your websites and applications.",
  controlpanel: "Easy-to-use hosting control panel for website management.",
  backups: "Automated daily backups to keep your website data safe.",
  migration: "Unlimited free website migrations handled by our support team.",

  woocommerce: "Servers optimized specifically for WooCommerce and online stores.",
  premiumcdn: "Premium CDN for ultra-fast global content delivery.",
  boostedcpu: "Boosted CPU resources for handling high-traffic spikes.",
  highmemory: "High memory pool for smooth performance under heavy load.",

  litespeed: "LiteSpeed servers deliver faster website performance.",
  redis: "Redis cache improves database and application speed.",
  lscache: "LSCache boosts WordPress page loading performance.",
  memcached: "MemCached accelerates dynamic content delivery.",
  wpoptimized: "Servers optimized specifically for WordPress websites.",

  oneclick: "Install WordPress instantly with one click.",
  staging: "Create a staging site to test changes safely.",
  cloning: "Clone your WordPress website in a single click.",
  ondemand: "Generate backups anytime whenever required.",
  multisite: "Run and manage multiple WordPress sites together.",
  inmemorycache: "In-memory cache for faster data retrieval and performance.",
  wpsecurity: "Built-in WordPress security tools to keep your site safe.",
};

// PLAN 3 - (Unlimited Websites, 16 GB RAM, 8 vCPU)
const plan3 = {
  website: "Host unlimited websites on this hosting package.",
  ram: "16 GB RAM for handling real-time traffic efficiently.",
  vcpu: "8 vCPU cores to handle your website backend efficiently.",
  ssl: "Free and automatically renewed SSL certificates for all your websites.",
  storage: "Unlimited NVMe SSD storage for fast data processing and performance.",
  freedomain: "Free domain included worth $10 with this hosting plan.",
  subdomain: "Create unlimited subdomains across your hosted websites.",
  databases: "Create unlimited databases for your websites and applications.",
  controlpanel: "Easy-to-use hosting control panel for website management.",
  backups: "Automated daily backups to keep your website data safe.",
  migration: "Unlimited free website migrations handled by our support team.",

  woocommerce: "Servers optimized specifically for WooCommerce and online stores.",
  premiumcdn: "Premium CDN for ultra-fast global content delivery.",
  boostedcpu: "Boosted CPU resources for handling high-traffic spikes.",
  highmemory: "High memory pool for smooth performance under heavy load.",

  litespeed: "LiteSpeed servers deliver faster website performance.",
  redis: "Redis cache improves database and application speed.",
  lscache: "LSCache boosts WordPress page loading performance.",
  memcached: "MemCached accelerates dynamic content delivery.",
  wpoptimized: "Servers optimized specifically for WordPress websites.",

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
          <h2>Best Elite Hosting Plans</h2>
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
                      <h4>Startup</h4>
                      <p>Plan that helps you grow</p>
                    </div>

                    <h2>
                      ₹1759 <sup>/ Month</sup>
                    </h2>
                  </div>

                  <div className="pricing-button">
                    <Link
                      href="https://my.shricloud.com/?cmd=cart&action=add&id=21&promocode=SALE35%OFF"
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
      Unlimited Websites
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
      8 GB RAM
    </span>

    <div className={styles["tooltip-wrapper"]}>
      <i className="fa-light fa-circle-question"></i>
      <div className={styles["tooltip-box"]}>
        {plan1.ram}
      </div>
    </div>
  </li>

  <li className={styles["tooltip-item"]}>
    <span>
      <i className="fa-solid fa-check"></i>
      4 vCPU
    </span>

    <div className={styles["tooltip-wrapper"]}>
      <i className="fa-light fa-circle-question"></i>
      <div className={styles["tooltip-box"]}>
        {plan1.vcpu}
      </div>
    </div>
  </li>

  <li className={styles["tooltip-item"]}>
    <span>
      <i className="fa-solid fa-check"></i>
      Free & Auto SSL
    </span>

    <div className={styles["tooltip-wrapper"]}>
      <i className="fa-light fa-circle-question"></i>
      <div className={styles["tooltip-box"]}>
        {plan1.ssl}
      </div>
    </div>
  </li>

  <li className={styles["tooltip-item"]}>
    <span>
      <i className="fa-solid fa-check"></i>
      Unlimited NVMe Storage
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
      <i className="fa-solid fa-check"></i>
      Free Domain (worth $10)
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
      <i className="fa-solid fa-check"></i>
      Unlimited Subdomains
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
      Unlimited Databases
    </span>

    <div className={styles["tooltip-wrapper"]}>
      <i className="fa-light fa-circle-question"></i>
      <div className={styles["tooltip-box"]}>
        {plan1.databases}
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
      Daily Backups
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
      <i className="fa-solid fa-check"></i>
      Unlimited Migration
    </span>

    <div className={styles["tooltip-wrapper"]}>
      <i className="fa-light fa-circle-question"></i>
      <div className={styles["tooltip-box"]}>
        {plan1.migration}
      </div>
    </div>
  </li>

  {/* SHOW MORE */}

  {showMore && (
    <>
      <h4>eCommerce Optimized</h4>

      <li className={styles["tooltip-item"]}>
        <span>
          <i className="fa-solid fa-check"></i>
          Woocommerce Optimized
        </span>

        <div className={styles["tooltip-wrapper"]}>
          <i className="fa-light fa-circle-question"></i>
          <div className={styles["tooltip-box"]}>
            {plan1.woocommerce}
          </div>
        </div>
      </li>

      <li className={styles["tooltip-item"]}>
        <span>
          <i className="fa-solid fa-check"></i>
          Premium CDN
        </span>

        <div className={styles["tooltip-wrapper"]}>
          <i className="fa-light fa-circle-question"></i>
          <div className={styles["tooltip-box"]}>
            {plan1.premiumcdn}
          </div>
        </div>
      </li>

      <li className={styles["tooltip-item"]}>
        <span>
          <i className="fa-solid fa-check"></i>
          Boosted CPU
        </span>

        <div className={styles["tooltip-wrapper"]}>
          <i className="fa-light fa-circle-question"></i>
          <div className={styles["tooltip-box"]}>
            {plan1.boostedcpu}
          </div>
        </div>
      </li>

      <li className={styles["tooltip-item"]}>
        <span>
          <i className="fa-solid fa-check"></i>
          High Memory Pool
        </span>

        <div className={styles["tooltip-wrapper"]}>
          <i className="fa-light fa-circle-question"></i>
          <div className={styles["tooltip-box"]}>
            {plan1.highmemory}
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
            {plan1.litespeed}
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
            {plan1.redis}
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
            {plan1.lscache}
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
            {plan1.memcached}
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
            {plan1.wpoptimized}
          </div>
        </div>
      </li>

      <h4>WordPress Management</h4>

      <li className={styles["tooltip-item"]}>
        <span>
          <i className="fa-solid fa-check"></i>
          1 Click Installation
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
          <i className="fa-solid fa-check"></i>
          Staging
        </span>

        <div className={styles["tooltip-wrapper"]}>
          <i className="fa-light fa-circle-question"></i>
          <div className={styles["tooltip-box"]}>
            {plan1.staging}
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
            {plan1.cloning}
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
            {plan1.ondemand}
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
            {plan1.multisite}
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
            {plan1.inmemorycache}
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
            {plan1.wpsecurity}
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
                <div className="pricing-box-items active">
                  <div className="pricing-header">
                    <div className="price-content">
                      <h4>Business </h4>
                      <p>Quality Resources at a Great Price</p>
                    </div>

                    <h2>
                      ₹2759<sup>/ Month</sup>
                    </h2>
                  </div>
                  <div className="pricing-button">
                    <Link
                      href="https://my.shricloud.com/?cmd=cart&action=add&id=22&promocode=SALE35%OFF"
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
      Unlimited Websites
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
      12 GB RAM
    </span>

    <div className={styles["tooltip-wrapper"]}>
      <i className="fa-light fa-circle-question"></i>
      <div className={styles["tooltip-box"]}>
        {plan2.ram}
      </div>
    </div>
  </li>

  <li className={styles["tooltip-item"]}>
    <span>
      <i className="fa-solid fa-check"></i>
      6 vCPU
    </span>

    <div className={styles["tooltip-wrapper"]}>
      <i className="fa-light fa-circle-question"></i>
      <div className={styles["tooltip-box"]}>
        {plan2.vcpu}
      </div>
    </div>
  </li>

  <li className={styles["tooltip-item"]}>
    <span>
      <i className="fa-solid fa-check"></i>
      Free & Auto SSL
    </span>

    <div className={styles["tooltip-wrapper"]}>
      <i className="fa-light fa-circle-question"></i>
      <div className={styles["tooltip-box"]}>
        {plan2.ssl}
      </div>
    </div>
  </li>

  <li className={styles["tooltip-item"]}>
    <span>
      <i className="fa-solid fa-check"></i>
      Unlimited NVMe Storage
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
      Free Domain (worth $10)
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
      Unlimited Subdomains
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
      Unlimited Databases
    </span>

    <div className={styles["tooltip-wrapper"]}>
      <i className="fa-light fa-circle-question"></i>
      <div className={styles["tooltip-box"]}>
        {plan2.databases}
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
      <i className="fa-solid fa-check"></i>
      Unlimited Migration
    </span>

    <div className={styles["tooltip-wrapper"]}>
      <i className="fa-light fa-circle-question"></i>
      <div className={styles["tooltip-box"]}>
        {plan2.migration}
      </div>
    </div>
  </li>

  {/* SHOW MORE */}

  {showMore && (
    <>
      <h4>eCommerce Optimized</h4>

      <li className={styles["tooltip-item"]}>
        <span>
          <i className="fa-solid fa-check"></i>
          Woocommerce Optimized
        </span>

        <div className={styles["tooltip-wrapper"]}>
          <i className="fa-light fa-circle-question"></i>
          <div className={styles["tooltip-box"]}>
            {plan2.woocommerce}
          </div>
        </div>
      </li>

      <li className={styles["tooltip-item"]}>
        <span>
          <i className="fa-solid fa-check"></i>
          Premium CDN
        </span>

        <div className={styles["tooltip-wrapper"]}>
          <i className="fa-light fa-circle-question"></i>
          <div className={styles["tooltip-box"]}>
            {plan2.premiumcdn}
          </div>
        </div>
      </li>

      <li className={styles["tooltip-item"]}>
        <span>
          <i className="fa-solid fa-check"></i>
          Boosted CPU
        </span>

        <div className={styles["tooltip-wrapper"]}>
          <i className="fa-light fa-circle-question"></i>
          <div className={styles["tooltip-box"]}>
            {plan2.boostedcpu}
          </div>
        </div>
      </li>

      <li className={styles["tooltip-item"]}>
        <span>
          <i className="fa-solid fa-check"></i>
          High Memory Pool
        </span>

        <div className={styles["tooltip-wrapper"]}>
          <i className="fa-light fa-circle-question"></i>
          <div className={styles["tooltip-box"]}>
            {plan2.highmemory}
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
          <i className="fa-solid fa-check"></i>
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

      <h4>WordPress Management</h4>

      <li className={styles["tooltip-item"]}>
        <span>
          <i className="fa-solid fa-check"></i>
          1 Click Installation
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
                      <h4>Enterprise</h4>
                      <p>Boost with power and features</p>
                    </div>

                    <h2>
                      ₹3159 <sup>/ Month</sup>
                    </h2>
                  </div>
                  <div className="pricing-button">
                    <Link
                      href="https://my.shricloud.com/?cmd=cart&action=add&id=23&promocode=SALE35%OFF"
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
      Unlimited Websites
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
      16 GB RAM
    </span>

    <div className={styles["tooltip-wrapper"]}>
      <i className="fa-light fa-circle-question"></i>
      <div className={styles["tooltip-box"]}>
        {plan3.ram}
      </div>
    </div>
  </li>

  <li className={styles["tooltip-item"]}>
    <span>
      <i className="fa-solid fa-check"></i>
      8 vCPU
    </span>

    <div className={styles["tooltip-wrapper"]}>
      <i className="fa-light fa-circle-question"></i>
      <div className={styles["tooltip-box"]}>
        {plan3.vcpu}
      </div>
    </div>
  </li>

  <li className={styles["tooltip-item"]}>
    <span>
      <i className="fa-solid fa-check"></i>
      Free & Auto SSL
    </span>

    <div className={styles["tooltip-wrapper"]}>
      <i className="fa-light fa-circle-question"></i>
      <div className={styles["tooltip-box"]}>
        {plan3.ssl}
      </div>
    </div>
  </li>

  <li className={styles["tooltip-item"]}>
    <span>
      <i className="fa-solid fa-check"></i>
      Unlimited NVMe Storage
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
      Free Domain (worth $10)
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
      Unlimited Databases
    </span>

    <div className={styles["tooltip-wrapper"]}>
      <i className="fa-light fa-circle-question"></i>
      <div className={styles["tooltip-box"]}>
        {plan3.databases}
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
      Unlimited Migration
    </span>

    <div className={styles["tooltip-wrapper"]}>
      <i className="fa-light fa-circle-question"></i>
      <div className={styles["tooltip-box"]}>
        {plan3.migration}
      </div>
    </div>
  </li>

  {/* SHOW MORE */}

  {showMore && (
    <>
      <h4>eCommerce Optimized</h4>

      <li className={styles["tooltip-item"]}>
        <span>
          <i className="fa-solid fa-check"></i>
          Woocommerce Optimized
        </span>

        <div className={styles["tooltip-wrapper"]}>
          <i className="fa-light fa-circle-question"></i>
          <div className={styles["tooltip-box"]}>
            {plan3.woocommerce}
          </div>
        </div>
      </li>

      <li className={styles["tooltip-item"]}>
        <span>
          <i className="fa-solid fa-check"></i>
          Premium CDN
        </span>

        <div className={styles["tooltip-wrapper"]}>
          <i className="fa-light fa-circle-question"></i>
          <div className={styles["tooltip-box"]}>
            {plan3.premiumcdn}
          </div>
        </div>
      </li>

      <li className={styles["tooltip-item"]}>
        <span>
          <i className="fa-solid fa-check"></i>
          Boosted CPU
        </span>

        <div className={styles["tooltip-wrapper"]}>
          <i className="fa-light fa-circle-question"></i>
          <div className={styles["tooltip-box"]}>
            {plan3.boostedcpu}
          </div>
        </div>
      </li>

      <li className={styles["tooltip-item"]}>
        <span>
          <i className="fa-solid fa-check"></i>
          High Memory Pool
        </span>

        <div className={styles["tooltip-wrapper"]}>
          <i className="fa-light fa-circle-question"></i>
          <div className={styles["tooltip-box"]}>
            {plan3.highmemory}
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

      <h4>WordPress Management</h4>

      <li className={styles["tooltip-item"]}>
        <span>
          <i className="fa-solid fa-check"></i>
          1 Click Installation
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
                      <h4>Startup</h4>
                      <p>Plan that helps you grow</p>
                    </div>
                    <h4>
                      <span className={styles.oldPrice}>₹1759 /Month</span>
                    </h4>
                    <h2>
                      ₹714<sup>/ Month</sup>
                    </h2>
                  </div>

                  <div className="pricing-button">
                    <Link
                      href="https://my.shricloud.com/?cmd=cart&action=add&id=21&promocode=SALE35%OFF"
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
      Unlimited Websites
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
      8 GB RAM
    </span>

    <div className={styles["tooltip-wrapper"]}>
      <i className="fa-light fa-circle-question"></i>
      <div className={styles["tooltip-box"]}>
        {plan1.ram}
      </div>
    </div>
  </li>

  <li className={styles["tooltip-item"]}>
    <span>
      <i className="fa-solid fa-check"></i>
      4 vCPU
    </span>

    <div className={styles["tooltip-wrapper"]}>
      <i className="fa-light fa-circle-question"></i>
      <div className={styles["tooltip-box"]}>
        {plan1.vcpu}
      </div>
    </div>
  </li>

  <li className={styles["tooltip-item"]}>
    <span>
      <i className="fa-solid fa-check"></i>
      Free & Auto SSL
    </span>

    <div className={styles["tooltip-wrapper"]}>
      <i className="fa-light fa-circle-question"></i>
      <div className={styles["tooltip-box"]}>
        {plan1.ssl}
      </div>
    </div>
  </li>

  <li className={styles["tooltip-item"]}>
    <span>
      <i className="fa-solid fa-check"></i>
      Unlimited NVMe Storage
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
      <i className="fa-solid fa-check"></i>
      Free Domain (worth $10)
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
      <i className="fa-solid fa-check"></i>
      Unlimited Subdomains
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
      Unlimited Databases
    </span>

    <div className={styles["tooltip-wrapper"]}>
      <i className="fa-light fa-circle-question"></i>
      <div className={styles["tooltip-box"]}>
        {plan1.databases}
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
      Daily Backups
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
      <i className="fa-solid fa-check"></i>
      Unlimited Migration
    </span>

    <div className={styles["tooltip-wrapper"]}>
      <i className="fa-light fa-circle-question"></i>
      <div className={styles["tooltip-box"]}>
        {plan1.migration}
      </div>
    </div>
  </li>

  {/* SHOW MORE */}

  {showMore && (
    <>
      <h4>eCommerce Optimized</h4>

      <li className={styles["tooltip-item"]}>
        <span>
          <i className="fa-solid fa-check"></i>
          Woocommerce Optimized
        </span>

        <div className={styles["tooltip-wrapper"]}>
          <i className="fa-light fa-circle-question"></i>
          <div className={styles["tooltip-box"]}>
            {plan1.woocommerce}
          </div>
        </div>
      </li>

      <li className={styles["tooltip-item"]}>
        <span>
          <i className="fa-solid fa-check"></i>
          Premium CDN
        </span>

        <div className={styles["tooltip-wrapper"]}>
          <i className="fa-light fa-circle-question"></i>
          <div className={styles["tooltip-box"]}>
            {plan1.premiumcdn}
          </div>
        </div>
      </li>

      <li className={styles["tooltip-item"]}>
        <span>
          <i className="fa-solid fa-check"></i>
          Boosted CPU
        </span>

        <div className={styles["tooltip-wrapper"]}>
          <i className="fa-light fa-circle-question"></i>
          <div className={styles["tooltip-box"]}>
            {plan1.boostedcpu}
          </div>
        </div>
      </li>

      <li className={styles["tooltip-item"]}>
        <span>
          <i className="fa-solid fa-check"></i>
          High Memory Pool
        </span>

        <div className={styles["tooltip-wrapper"]}>
          <i className="fa-light fa-circle-question"></i>
          <div className={styles["tooltip-box"]}>
            {plan1.highmemory}
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
            {plan1.litespeed}
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
            {plan1.redis}
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
            {plan1.lscache}
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
            {plan1.memcached}
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
            {plan1.wpoptimized}
          </div>
        </div>
      </li>

      <h4>WordPress Management</h4>

      <li className={styles["tooltip-item"]}>
        <span>
          <i className="fa-solid fa-check"></i>
          1 Click Installation
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
          <i className="fa-solid fa-check"></i>
          Staging
        </span>

        <div className={styles["tooltip-wrapper"]}>
          <i className="fa-light fa-circle-question"></i>
          <div className={styles["tooltip-box"]}>
            {plan1.staging}
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
            {plan1.cloning}
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
            {plan1.ondemand}
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
            {plan1.multisite}
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
            {plan1.inmemorycache}
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
            {plan1.wpsecurity}
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
                <div className="pricing-box-items active">
                  <div className="pricing-header">
                    <div className="price-content">
                      <h4>Business</h4>
                      <p>Quality Resources at a Great Price</p>
                    </div>

                    <h4>
                      <span className={styles.oldPrice}>₹2759 /Month</span>
                    </h4>

                    <h2>
                      ₹ 1259<sup>/ Month</sup>
                    </h2>
                  </div>
                  <div className="pricing-button">
                    <Link
                      href="https://my.shricloud.com/?cmd=cart&action=add&id=22&promocode=SALE35%OFF"
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
      Unlimited Websites
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
      12 GB RAM
    </span>

    <div className={styles["tooltip-wrapper"]}>
      <i className="fa-light fa-circle-question"></i>
      <div className={styles["tooltip-box"]}>
        {plan2.ram}
      </div>
    </div>
  </li>

  <li className={styles["tooltip-item"]}>
    <span>
      <i className="fa-solid fa-check"></i>
      6 vCPU
    </span>

    <div className={styles["tooltip-wrapper"]}>
      <i className="fa-light fa-circle-question"></i>
      <div className={styles["tooltip-box"]}>
        {plan2.vcpu}
      </div>
    </div>
  </li>

  <li className={styles["tooltip-item"]}>
    <span>
      <i className="fa-solid fa-check"></i>
      Free & Auto SSL
    </span>

    <div className={styles["tooltip-wrapper"]}>
      <i className="fa-light fa-circle-question"></i>
      <div className={styles["tooltip-box"]}>
        {plan2.ssl}
      </div>
    </div>
  </li>

  <li className={styles["tooltip-item"]}>
    <span>
      <i className="fa-solid fa-check"></i>
      Unlimited NVMe Storage
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
      Free Domain (worth $10)
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
      Unlimited Subdomains
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
      Unlimited Databases
    </span>

    <div className={styles["tooltip-wrapper"]}>
      <i className="fa-light fa-circle-question"></i>
      <div className={styles["tooltip-box"]}>
        {plan2.databases}
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
      <i className="fa-solid fa-check"></i>
      Unlimited Migration
    </span>

    <div className={styles["tooltip-wrapper"]}>
      <i className="fa-light fa-circle-question"></i>
      <div className={styles["tooltip-box"]}>
        {plan2.migration}
      </div>
    </div>
  </li>

  {/* SHOW MORE */}

  {showMore && (
    <>
      <h4>eCommerce Optimized</h4>

      <li className={styles["tooltip-item"]}>
        <span>
          <i className="fa-solid fa-check"></i>
          Woocommerce Optimized
        </span>

        <div className={styles["tooltip-wrapper"]}>
          <i className="fa-light fa-circle-question"></i>
          <div className={styles["tooltip-box"]}>
            {plan2.woocommerce}
          </div>
        </div>
      </li>

      <li className={styles["tooltip-item"]}>
        <span>
          <i className="fa-solid fa-check"></i>
          Premium CDN
        </span>

        <div className={styles["tooltip-wrapper"]}>
          <i className="fa-light fa-circle-question"></i>
          <div className={styles["tooltip-box"]}>
            {plan2.premiumcdn}
          </div>
        </div>
      </li>

      <li className={styles["tooltip-item"]}>
        <span>
          <i className="fa-solid fa-check"></i>
          Boosted CPU
        </span>

        <div className={styles["tooltip-wrapper"]}>
          <i className="fa-light fa-circle-question"></i>
          <div className={styles["tooltip-box"]}>
            {plan2.boostedcpu}
          </div>
        </div>
      </li>

      <li className={styles["tooltip-item"]}>
        <span>
          <i className="fa-solid fa-check"></i>
          High Memory Pool
        </span>

        <div className={styles["tooltip-wrapper"]}>
          <i className="fa-light fa-circle-question"></i>
          <div className={styles["tooltip-box"]}>
            {plan2.highmemory}
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
          <i className="fa-solid fa-check"></i>
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

      <h4>WordPress Management</h4>

      <li className={styles["tooltip-item"]}>
        <span>
          <i className="fa-solid fa-check"></i>
          1 Click Installation
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
                      <h4>Enterprise</h4>
                      <p>Boost with power and features</p>
                    </div>
                    <h4>
                      <span className={styles.oldPrice}>₹3159 /mo</span>
                    </h4>

                    <h2>
                      ₹1659 <sup>/ Month</sup>
                    </h2>
                  </div>
                  <div className="pricing-button">
                    <Link
                      href="https://my.shricloud.com/?cmd=cart&action=add&id=23&promocode=SALE35%OFF"
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
      Unlimited Websites
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
      16 GB RAM
    </span>

    <div className={styles["tooltip-wrapper"]}>
      <i className="fa-light fa-circle-question"></i>
      <div className={styles["tooltip-box"]}>
        {plan3.ram}
      </div>
    </div>
  </li>

  <li className={styles["tooltip-item"]}>
    <span>
      <i className="fa-solid fa-check"></i>
      8 vCPU
    </span>

    <div className={styles["tooltip-wrapper"]}>
      <i className="fa-light fa-circle-question"></i>
      <div className={styles["tooltip-box"]}>
        {plan3.vcpu}
      </div>
    </div>
  </li>

  <li className={styles["tooltip-item"]}>
    <span>
      <i className="fa-solid fa-check"></i>
      Free & Auto SSL
    </span>

    <div className={styles["tooltip-wrapper"]}>
      <i className="fa-light fa-circle-question"></i>
      <div className={styles["tooltip-box"]}>
        {plan3.ssl}
      </div>
    </div>
  </li>

  <li className={styles["tooltip-item"]}>
    <span>
      <i className="fa-solid fa-check"></i>
      Unlimited NVMe Storage
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
      Free Domain (worth $10)
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
      Unlimited Databases
    </span>

    <div className={styles["tooltip-wrapper"]}>
      <i className="fa-light fa-circle-question"></i>
      <div className={styles["tooltip-box"]}>
        {plan3.databases}
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
      Unlimited Migration
    </span>

    <div className={styles["tooltip-wrapper"]}>
      <i className="fa-light fa-circle-question"></i>
      <div className={styles["tooltip-box"]}>
        {plan3.migration}
      </div>
    </div>
  </li>

  {/* SHOW MORE */}

  {showMore && (
    <>
      <h4>eCommerce Optimized</h4>

      <li className={styles["tooltip-item"]}>
        <span>
          <i className="fa-solid fa-check"></i>
          Woocommerce Optimized
        </span>

        <div className={styles["tooltip-wrapper"]}>
          <i className="fa-light fa-circle-question"></i>
          <div className={styles["tooltip-box"]}>
            {plan3.woocommerce}
          </div>
        </div>
      </li>

      <li className={styles["tooltip-item"]}>
        <span>
          <i className="fa-solid fa-check"></i>
          Premium CDN
        </span>

        <div className={styles["tooltip-wrapper"]}>
          <i className="fa-light fa-circle-question"></i>
          <div className={styles["tooltip-box"]}>
            {plan3.premiumcdn}
          </div>
        </div>
      </li>

      <li className={styles["tooltip-item"]}>
        <span>
          <i className="fa-solid fa-check"></i>
          Boosted CPU
        </span>

        <div className={styles["tooltip-wrapper"]}>
          <i className="fa-light fa-circle-question"></i>
          <div className={styles["tooltip-box"]}>
            {plan3.boostedcpu}
          </div>
        </div>
      </li>

      <li className={styles["tooltip-item"]}>
        <span>
          <i className="fa-solid fa-check"></i>
          High Memory Pool
        </span>

        <div className={styles["tooltip-wrapper"]}>
          <i className="fa-light fa-circle-question"></i>
          <div className={styles["tooltip-box"]}>
            {plan3.highmemory}
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

      <h4>WordPress Management</h4>

      <li className={styles["tooltip-item"]}>
        <span>
          <i className="fa-solid fa-check"></i>
          1 Click Installation
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

export default ElitePricing;
