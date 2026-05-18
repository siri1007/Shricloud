
// --------------------




"use client";

import { useState } from "react";
import Link from "next/link";
// import Image from "next/image";
import styles from "./HomeThreepricing.module.scss";
import two from "@/public/img/arrow.png";

import Image from "next/image";
import arrow from "@/public/img/arrow.png";
/* ================= TYPES ================= */
type Feature = {
  title: string;
  value: boolean;
  tooltip: string;
  heading?: boolean;
};

type Plan = {
  title: string;
  subtitle: string;
  price: string;
  duration: string;
  active: boolean;
  buttonLink: string;
  secondButtonLink: string;
  features: Feature[];
  oldPrice?: string;
  save?: string;
};

const HomeThreePricing = () => {
  const [tab, setTab] = useState(1);
  const [showAll, setShowAll] = useState(false);

  const toggleFeatures = () => setShowAll((prev) => !prev);

  /* ================= MONTHLY PLANS ================= */
  const monthlyPlans: Plan[] = [
    {
      title: "Starter",
      subtitle: "Plan that helps you grow",
      price: "₹299",
      duration: "/Month",
      active: false,
      buttonLink:
        "https://my.shricloud.com/?cmd=cart&action=add&id=48&promocode=SALE50%OFF",
      secondButtonLink: "/pricing",
      features: [
        { title: "1 Website", value: true, tooltip: "Host 1 website on this hosting package." },
        { title: "Managed WordPress", value: true, tooltip: "Fully managed WordPress hosting with automatic optimizations." },
        { title: "10 GB SSD Storage", value: true, tooltip: "10 GB SSD storage for fast website loading and performance." },
        { title: "No Free Domain", value: false, tooltip: "No free domain is included with this hosting plan." },
        { title: "No Subdomain", value: false, tooltip: "Subdomains are not available in this hosting package." },
        { title: "10 Business Email", value: true, tooltip: "Create up to 10 professional business email accounts." },
        { title: "Free SSL Certificates", value: true, tooltip: "Free SSL certificates included for website security." },
        { title: "No Backups", value: true, tooltip: "Automated backups are not included in this plan." },
        { title: "Free Cloudflare CDN", value: false, tooltip: "Free Cloudflare CDN integration for faster global delivery." },
        { title: "Free Migration", value: true, tooltip: "Free website migration handled by our support team." },
        { title: "Powerful Control Panel", value: true, tooltip: "Easy-to-use hosting control panel for website management." },
        { title: "Malware Scanning", value: true, tooltip: "Advanced malware scanning for website protection." },
        { title: "Priority Support", value: true, tooltip: "Priority customer support with faster response times." },

        {
          title: "Speed & Performance",
          value: true,
          heading: true,
          tooltip: "Performance stack.",
        },
        { title: "LiteSpeed Servers", value: true, tooltip: "LiteSpeed servers deliver faster website performance." },
        { title: "Redis Cache", value: false, tooltip: "Redis cache improves database and application speed." },
        { title: "LSCache", value: false, tooltip: "LSCache boosts WordPress page loading performance." },
        { title: "MemCached", value: true, tooltip: "MemCached accelerates dynamic content delivery." },
        { title: "WordPress Optimized", value: true, tooltip: "Servers optimized specifically for WordPress websites." },
        { title: "Turbo PHP", value: false, tooltip: "Turbo PHP enhances PHP execution speed and stability." },

        {
          title: "WordPress Management",
          value: true,
          heading: true,
          tooltip: "WP tools.",
        },
        { title: "1 Click Installation", value: true, tooltip: "Install WordPress instantly with one click." },
        { title: "Staging", value: false, tooltip: "Create a staging site to test changes safely" },
        { title: "Cloning", value: false, tooltip: "Clone your WordPress website in a single click." },
        { title: "On Demand Backups", value: false, tooltip: "Generate backups anytime whenever required." },
        { title: "WordPress Multisite", value: false, tooltip: "Run and manage multiple WordPress sites together." },
        { title: "In Memory Cache", value: true, tooltip: "In-memory cache for faster data retrieval and performance." },
        { title: "WordPress Security", value: true, tooltip: "Built-in WordPress security tools to keep your site safe." },
      ],
    },

    {
      title: "Premium",
      subtitle: "Quality Resources at a Great Price",
      price: "₹399",
      duration: "/Month",
      save: "SAVE 40%",
      active: true,
      buttonLink:
        "https://my.shricloud.com/?cmd=cart&action=add&id=49&promocode=SALE50%OFF",
      secondButtonLink: "/pricing",
      features: [
        { title: "50 Websites", value: true, tooltip: "Host up to 50 websites on this hosting package." },
        { title: "Managed WordPress", value: true, tooltip: "Fully managed WordPress hosting with automatic optimizations." },
        { title: "100 GB SSD Storage", value: true, tooltip: "100 GB SSD storage for fast website loading and performance." },
        { title: "Free Domain", value: true, tooltip: "1 year free domain." },
        { title: "100 Subdomains", value: true, tooltip: "Create up to 100 subdomains across your hosted websites." },
        { title: "100 Business Email", value: true, tooltip: "Emails." },
        { title: "Free SSL Certificates", value: true, tooltip: "SSL." },
        { title: "Daily Backups", value: true, tooltip: "Daily backup." },
        { title: "Free Cloudflare CDN", value: false, tooltip: "Free Cloudflare CDN integration for faster global delivery" },
        { title: "Free Migration", value: true, tooltip: "Migration free." },
        { title: "Powerful Control Panel", value: true, tooltip: "Easy-to-use hosting control panel for website management." },
       { title: "Malware Scanning", value: true, tooltip: "Advanced malware scanning for website protection." },
        { title: "Priority Support", value: true, tooltip: "Priority customer support with faster response times." },
        {
          title: "Speed & Performance",
          value: true,
          heading: true,
          tooltip: "Speed stack.",
        },
        { title: "LiteSpeed Servers", value: true, tooltip: "LiteSpeed servers deliver faster website performance." },
        { title: "Redis Cache", value: true, tooltip: "Redis cache improves database and application speed." },
        { title: "LSCache", value: true, tooltip: "LSCache boosts WordPress page loading performance." },
        { title: "MemCached", value: true, tooltip: "MemCached accelerates dynamic content delivery." },
        { title: "WordPress Optimized", value: true, tooltip: "Servers optimized specifically for WordPress websites." },
        { title: "Turbo PHP", value: true, tooltip: "Turbo PHP enhances PHP execution speed and stability." },

        {
          title: "WordPress Management",
          value: true,
          heading: true,
          tooltip: "WP tools.",
        },
      { title: "1 Click Installation", value: true, tooltip: "Install WordPress instantly with one click." },
        { title: "Staging", value: true, tooltip: "Create a staging site to test changes safely" },
        { title: "Cloning", value: true, tooltip: "Clone your WordPress website in a single click." },
        { title: "On Demand Backups", value: true, tooltip: "Generate backups anytime whenever required." },
        { title: "WordPress Multisite", value: true, tooltip: "Run and manage multiple WordPress sites together." },
        { title: "In Memory Cache", value: true, tooltip: "In-memory cache for faster data retrieval and performance." },
        { title: "WordPress Security", value: true, tooltip: "Built-in WordPress security tools to keep your site safe." },
      ],
    },

    {
      title: "Business",
      subtitle: "Boost with power and features",
      price: "₹799",
      duration: "/Month",
      save: "SAVE 50%",
      active: false,
      buttonLink:
        "https://my.shricloud.com/?cmd=cart&action=add&id=50&promocode=SALE50%OFF",
      secondButtonLink: "/pricing",
      features: [
        { title: "100 Websites", value: true, tooltip: "Host up to 100 websites on this hosting package.." },
        { title: "Managed WordPress", value: true, tooltip: "Fully managed WordPress hosting with automatic optimizations." },
        { title: "300 GB SSD Storage", value: true, tooltip: "300 GB SSD storage for fast website loading and performance." },
        { title: "Free Domain", value: true, tooltip: "Free domain included for 1 year with this hosting plan." },
        { title: "Unlimited Subdomains", value: true, tooltip: "Create unlimited subdomains across your hosted websites." },
        { title: "Unlimited Business Email", value: true, tooltip: "Create unlimited professional business email accounts." },
        { title: "Unlimited SSL Certificates", value: true, tooltip: "Unlimited free SSL certificates included for all your websites." },
        { title: "Daily Backups", value: true, tooltip: "Automated daily backups to keep your website data safe.." },
        { title: "Free Cloudflare CDN", value: true, tooltip: "Free Cloudflare CDN integration for faster global delivery." },
         { title: "Free Migration", value: true, tooltip: "Free website migration handled by our support team." },
        { title: "Powerful Control Panel", value: true, tooltip: "Easy-to-use hosting control panel for website management." },
        { title: "Malware Scanning", value: true, tooltip: "Advanced malware scanning for website protection." },
        { title: "Priority Support", value: true, tooltip: "Priority customer support with faster response times." },

        {
          title: "Speed & Performance",
          value: true,
          heading: true,
          tooltip: "Speed.",
        },
       { title: "LiteSpeed Servers", value: true, tooltip: "LiteSpeed servers deliver faster website performance." },
        { title: "Redis Cache", value: false, tooltip: "Redis cache improves database and application speed." },
        { title: "LSCache", value: false, tooltip: "LSCache boosts WordPress page loading performance." },
        { title: "MemCached", value: true, tooltip: "MemCached accelerates dynamic content delivery." },
        { title: "WordPress Optimized", value: true, tooltip: "Servers optimized specifically for WordPress websites." },
        { title: "Turbo PHP", value: false, tooltip: "Turbo PHP enhances PHP execution speed and stability." },


        {
          title: "WordPress Management",
          value: true,
          heading: true,
          tooltip: "Tools.",
        },
       { title: "1 Click Installation", value: true, tooltip: "Install WordPress instantly with one click." },
        { title: "Staging", value: false, tooltip: "Create a staging site to test changes safely" },
        { title: "Cloning", value: false, tooltip: "Clone your WordPress website in a single click." },
        { title: "On Demand Backups", value: false, tooltip: "Generate backups anytime whenever required." },
        { title: "WordPress Multisite", value: false, tooltip: "Run and manage multiple WordPress sites together." },
        { title: "In Memory Cache", value: true, tooltip: "In-memory cache for faster data retrieval and performance." },
        { title: "WordPress Security", value: true, tooltip: "Built-in WordPress security tools to keep your site safe." },
      ],
    },

    {
      title: "Startup",
      subtitle: "Plan that helps you grow",
      price: "₹1759",
      duration: "/Month",
      save: "SAVE 60%",
      active: false,
      buttonLink:
        "https://my.shricloud.com/?cmd=cart&action=add&id=21&promocode=SALE35%OFF",
      secondButtonLink: "/pricing",
      features: [
        { title: "Unlimited Websites", value: true, tooltip: "Host unlimited websites on this hosting package." },
        { title: "8 GB RAM", value: true, tooltip: "8 GB RAM for handling real-time traffic efficiently." },
        { title: "4 vCPU", value: true, tooltip: "4 vCPU cores to handle your website backend efficiently.." },
        { title: "Free & Auto SSL", value: true, tooltip: "Free and automatically renewed SSL certificates for all your websites." },
        { title: "Unlimited NVMe  Storage", value: true, tooltip: "Unlimited NVMe SSD storage for fast data processing and performance." },
        { title: "Free Domain  (worth $10)", value: true, tooltip: "Free domain included worth $10 with this hosting plan.." },
        { title: "Unlimited Subdomains", value: true, tooltip: "Create unlimited subdomains across your hosted websites." },
        { title: "Unlimited Databases", value: true, tooltip: "Create unlimited databases for your websites and applications." },
        { title: " Powerful  Control Panel", value: true, tooltip: "Easy-to-use hosting control panel for website management.." },
        { title: "Daily Backups", value: true, tooltip: "Automated daily backups to keep your website data safe." },
        { title: " Unlimited  Migration", value: true, tooltip: "Unlimited free website migrations handled by our support team." },
       



        {
          title: "eCommerce Optimized",
          value: true,
          heading: true,
          tooltip: "Speed.",
        },


           { title: "Woocommerce Optimized", value: true, tooltip: "Servers optimized specifically for WooCommerce and online stores." },
        { title: "Premium CDN", value: true, tooltip: "Premium CDN for ultra-fast global content delivery." },

        
           { title: "Boosted CPU", value: true, tooltip: "Boosted CPU resources for handling high-traffic spikes." },
        { title: "High Memory Pool", value: true, tooltip: "High memory pool for smooth performance under heavy load." },



        {
          title: "Speed & Performance",
          value: true,
          heading: true,
          tooltip: "Speed.",
        },
    { title: "LiteSpeed Servers", value: true, tooltip: "LiteSpeed servers deliver faster website performance." },
        { title: "Redis Cache", value: true, tooltip: "Redis cache improves database and application speed." },
        { title: "LSCache", value: true, tooltip: "LSCache boosts WordPress page loading performance." },
        { title: "MemCached", value: true, tooltip: "MemCached accelerates dynamic content delivery." },
         
        { title: "WordPress Optimized", value: true, tooltip: "Servers optimized specifically for WordPress websites." },
        // { title: "Turbo PHP", value: true, tooltip: "Fast PHP." },


        {
          title: "WordPress Management",
          value: true,
          heading: true,
          tooltip: "WP tools.",
        },
       { title: "1 Click Installation", value: true, tooltip: "Install." },
        { title: "Staging", value: true, tooltip: "Staging." },
        { title: "Cloning", value: true, tooltip: "Clone." },
        { title: "On Demand Backups", value: true, tooltip: "Backup." },
          { title: "WordPress Multisite", value: true, tooltip: "Multi." },
        { title: "In Memory Cache", value: true, tooltip: "Cache." },
        { title: "WordPress Security", value: true, tooltip: "Secure." },
      ],
    },
  ];

  /* ================= YEARLY (ONLY OLD PRICE HERE) ================= */
  const yearlyPlans: Plan[] = monthlyPlans.map((plan, i) => ({
    ...plan,
    oldPrice: [
      "₹299/Month",
      "₹399/Month",
      "₹799/Month",
      "₹1759/Month",
    ][i],
    price: ["₹99", "₹199", "₹349", "₹714"][i],
    duration: "/Month",
  }));

  const plans = tab === 0 ? monthlyPlans : yearlyPlans;

  const renderTooltip = (text: string) => (
    <div className={styles.tooltipItem}>
      <i className="fa-light fa-circle-question"></i>
      <div className={styles.tooltipBox}>{text}</div>
    </div>
  );

  return (
    <section className={styles.pricingSection}>
      <div className="container">
        <div className={styles.sectionTitle}>
          <span>Pricing Plans</span>
          <h2>
Choose plan for your business </h2>

<p>Explore our selection of cloud hosting packages that provide the best and most affordable web hosting Plans.</p>
        </div>

        {/* <div className={styles.pricingTab}>
          <button onClick={() => setTab(0)} className={tab === 0 ? styles.activeTab : ""}>
            Monthly
          </button>
          <button onClick={() => setTab(1)} className={tab === 1 ? styles.activeTab : ""}>
            Yearly
          </button>

          <div className="save-text">Save 50%</div>
        </div> */}


<div className={styles.pricingTabWrapper}>
  {/* CURVED ARROW IMAGE */}
  <div className={styles.arrowShape}>
    <Image
      src={arrow}
      alt="arrow"
      width={100}
      height={60}
      priority
    />
  </div>

  {/* TAB BUTTONS */}
  <div className={styles.pricingTab}>
    <button
      onClick={() => setTab(0)}
      className={tab === 0 ? styles.activeTab : ""}
    >
      Monthly
    </button>

    <button
      onClick={() => setTab(1)}
      className={tab === 1 ? styles.activeTab : ""}
    >
      Yearly
    </button>
  </div>

  {/* SAVE TEXT */}
  <div className={styles.saveText}>Save 50%</div>
</div>
         

        <div className="row">
          {plans.map((item, index) => (
            <div className="col-xl-3 col-lg-6 col-md-6" key={index}>
              <div className={`${styles.pricingCard} ${item.active ? styles.activeCard : ""}`}>
                
                <div className={styles.planTop}>
                  <h4>{item.title}</h4>
                  <p className={styles.subtitle}>{item.subtitle}</p>
                </div>

                {/* PRICE */}
                <div className={styles.priceHeader}>
                  <div className={styles.priceList}>
                    {tab === 1 && item.oldPrice && (
                      <del style={{ opacity: 0.6, fontWeight: 600 }}>
                        {item.oldPrice}
                      </del>
                    )}
                  </div>

                  <h2>
                    <span style={{ fontWeight: 500 }}>{item.price}</span>
                    <sub>{item.duration}</sub>
                  </h2>
                </div>

                {/* FEATURES */}
                <ul className={styles.pricingList}>
                  {(showAll ? item.features : item.features.slice(0, 8)).map(
                    (feature, featureIndex) => (
                      <li key={featureIndex} className={feature.heading ? styles.featureHeading : ""}>
                        <span>
                          {!feature.heading && (
                            <i
                              className={feature.value ? "fa-solid fa-check" : "fa-solid fa-xmark"}
                              style={{ color: feature.value ? "#384BFF" : "#ff4d4f" }}
                            />
                          )}

                          {feature.heading ? <h4>{feature.title}</h4> : feature.title}
                        </span>

                        {!feature.heading && renderTooltip(feature.tooltip)}
                      </li>
                    )
                  )}
                </ul>

                <button className={styles.showMoreBtn} onClick={toggleFeatures}>
                  {showAll ? "Show Less" : "Show More"}
                </button>

                <div className={styles.pricingButton}>
                  <Link href={item.buttonLink} className={styles.pricingBtn}>
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HomeThreePricing;