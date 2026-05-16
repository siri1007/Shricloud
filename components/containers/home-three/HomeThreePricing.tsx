"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./HomeThreepricing.module.scss";

const HomeThreePricing = () => {
  const [tab, setTab] = useState(1);

  // SHOW MORE / LESS
  const [showAll, setShowAll] = useState(false);

  const toggleFeatures = () => {
    setShowAll((prev) => !prev);
  };

  const monthlyPlans = [
    {
      title: "Starter",
      subtitle: "Plan that helps you grow",
      // oldPrice: "₹299/Month",
      price: "₹299",
      duration: "/Month",
      // save: "SAVE 75%",
      active: false,
      // buttonLink: "/contact",
      buttonLink: "https://my.shricloud.com/?cmd=cart&action=add&id=48&promocode=SALE50%OFF",
      secondButtonLink: "/pricing",

      features: [
        {
          title: "1 Website",
          value: true,
          tooltip: "Host 1 website on this hosting package.",
        },
        {
          title: "Managed WordPress",
          value: true,
          tooltip:
            "Fully managed WordPress hosting with automatic optimizations.",
        },
        {
          title: "10 GB SSD Storage",
          value: true,
          tooltip:
            "10 GB SSD storage for fast website loading and performance.",
        },
        {
          title: "No Free Domain",
          value: false,
          tooltip: "No free domain is included with this hosting plan.",
        },
        {
          title: "No Subdomain",
          value: false,
          tooltip: "Subdomains are not available in this hosting package.",
        },
        {
          title: "10 Business Email",
          value: true,
          tooltip: "Create up to 10 professional business email accounts.",
        },
        {
          title: "Free SSL Certificates",
          value: true,
          tooltip: "Free SSL certificates included for website security.",
        },
        {
          title: "No Backups",
          value: false,
          tooltip: "Automated backups are not included in this plan.",
        },
        {
          title: "Free Cloudflare CDN",
          value: true,
          tooltip:
            "Free Cloudflare CDN integration for faster global delivery.",
        },
        {
          title: "Free Migration",
          value: true,
          tooltip: "Free website migration handled by our support team.",
        },
        {
          title: "Powerful Control panel",
          value: true,
          tooltip: "Easy-to-use hosting control panel for website management.",
        },
        {
          title: "Malware Scanning",
          value: true,
          tooltip: "Advanced malware scanning for website protection.",
        },
        {
          title: "Priority Support",
          value: true,
          tooltip: "Priority customer support with faster response times.",
        },
        {
          title: "Speed & Performance",
          value: true,
            heading: true,
          tooltip:
            "Optimized infrastructure for maximum website speed and performance.",
        },
        {
          title: "Litespeed Servers",
          value: true,
          tooltip: "LiteSpeed servers deliver faster website performance.",
        },
        {
          title: "Redis Cache",
          value: true,
          tooltip: "Redis cache improves database and application speed.",
        },
        {
          title: "LSCache",
          value: true,
          tooltip: "LSCache boosts WordPress page loading performance.",
        },
        {
          title: "MemCached",
          value: true,
          tooltip: "MemCached accelerates dynamic content delivery.",
        },
        {
          title: "WordPress Optimized",
          value: true,
          tooltip: "Servers optimized specifically for WordPress websites.",
        },
        {
          title: "Turbo PHP",
          value: true,
          tooltip: "Turbo PHP enhances PHP execution speed and stability.",
        },
        {
          title: "WordPress Management",
          value: true,
            heading: true,
          tooltip: "Advanced WordPress management tools included.",
        },
        {
          title: "1 Click Installation",
          value: true,
          tooltip: "Install WordPress instantly with one click.",
        },
        {
          title: "Staging",
          value: false,
          tooltip: "Create a staging site to test changes safely.",
        },
        {
          title: "Cloning",
          value: false,
          tooltip: "Clone your WordPress website in a single click.",
        },
        {
          title: "On Demand Backups",
          value: false,
          tooltip: "Generate backups anytime whenever required.",
        },
        {
          title: "WordPress Multisite",
          value: false,
          tooltip: "Run and manage multiple WordPress sites together.",
        },
        {
          title: "In Memory Cache",
          value: true,
          tooltip: "In-memory cache for faster data retrieval and performance.",
        },
        {
          title: "WordPress Security",
          value: true,
          tooltip: "Built-in WordPress security tools to keep your site safe.",
        },
      ],
    },

    {
      title: "Premium ",
      subtitle: "Quality Resources at a Great Price",
      // oldPrice: "₹399 /Month",
      price: "₹399",
      duration: "/Month",
      save: "SAVE 40%",
      active: true,
      buttonLink: "https://my.shricloud.com/?cmd=cart&action=add&id=49&promocode=SALE50%OFF",
      secondButtonLink: "/pricing",

      features: [
        {
          title: "50 Websites",
          value: true,
          tooltip: "Host up to 50 websites on this hosting package.",
        },
        {
          title: "Managed WordPress",
          value: true,
          tooltip:
            "Fully managed WordPress hosting with automatic optimizations.",
        },
        {
          title: "100 GB SSD Storage",
          value: true,
          tooltip:
            "100 GB SSD storage for fast website loading and performance.",
        },
        {
          title: "Free Domain",
          value: true,
          tooltip: "Free domain included for 1 year with this hosting plan.",
        },
        {
          title: "100 Subdomains",
          value: true,
          tooltip: "Create up to 100 subdomains across your hosted websites.",
        },
        {
          title: "100 Business Email",
          value: true,
          tooltip: "Create up to 100 professional business email accounts.",
        },
        {
          title: "Free SSL Certificates",
          value: true,
          tooltip: "Free SSL certificates included for website security.",
        },
        {
          title: "Daily Backups",
          value: true,
          tooltip: "Automated daily backups to keep your website data safe.",
        },

        // SHOW MORE STARTS HERE

        {
          title: "Free Cloudflare CDN",
          value: false,
          tooltip:
            "Free Cloudflare CDN integration for faster global delivery.",
        },
        {
          title: "Free Migration",
          value: true,
          tooltip: "Free website migration handled by our support team.",
        },
        {
          title: "Powerful Control panel",
          value: true,
          tooltip: "Easy-to-use hosting control panel for website management.",
        },
        {
          title: "Malware Scanning",
          value: true,
          tooltip: "Advanced malware scanning for website protection.",
        },
        {
          title: "Priority Support",
          value: true,
          tooltip: "Priority customer support with faster response times.",
        },

        // HEADING STYLE ITEM
        {
          title: "Speed & Performance",
          value: true,
          heading: true,
          tooltip:
            "Optimized infrastructure for maximum website speed and performance.",
        },

        {
          title: "Litespeed Servers",
          value: true,
          tooltip: "LiteSpeed servers deliver faster website performance.",
        },
        {
          title: "Redis Cache",
          value: true,
          tooltip: "Redis cache improves database and application speed.",
        },
        {
          title: "LSCache",
          value: true,
          tooltip: "LSCache boosts WordPress page loading performance.",
        },
        {
          title: "MemCached",
          value: false,
          tooltip: "MemCached accelerates dynamic content delivery.",
        },
        {
          title: "WordPress Optimized",
          value: true,
          tooltip: "Servers optimized specifically for WordPress websites.",
        },
        {
          title: "Turbo PHP",
          value: true,
          tooltip: "Turbo PHP enhances PHP execution speed and stability.",
        },

        // HEADING STYLE ITEM
        {
          title: "WordPress Management",
          value: true,
          heading: true,
          tooltip: "Advanced WordPress management tools included.",
        },

        {
          title: "1 Click Installation",
          value: true,
          tooltip: "Install WordPress instantly with one click.",
        },
        {
          title: "Staging",
          value: true,
          tooltip: "Create a staging site to test changes safely.",
        },
        {
          title: "Cloning",
          value: true,
          tooltip: "Clone your WordPress website in a single click.",
        },
        {
          title: "On Demand Backups",
          value: true,
          tooltip: "Generate backups anytime whenever required.",
        },
        {
          title: "WordPress Multisite",
          value: true,
          tooltip: "Run and manage multiple WordPress sites together.",
        },
        {
          title: "In Memory Cache",
          value: true,
          tooltip: "In-memory cache for faster data retrieval and performance.",
        },
        {
          title: "WordPress Security",
          value: true,
          tooltip: "Built-in WordPress security tools to keep your site safe.",
        },
      ],
    },

    {
      title: "Business",
      subtitle: "Boost with power and features",
      // oldPrice: "₹799 /Month",
      price: "₹799",
      duration: "/Month",
      save: "SAVE 50%",
      active: false,
      buttonLink: "https://my.shricloud.com/?cmd=cart&action=add&id=50&promocode=SALE50%OFF",
      secondButtonLink: "/pricing",

      features: [
        {
          title: "100 Websites",
          value: true,
          tooltip: "Host up to 100 websites on this hosting package.",
        },
        {
          title: "Managed WordPress",
          value: true,
          tooltip:
            "Fully managed WordPress hosting with automatic optimizations.",
        },
        {
          title: "300 GB SSD Storage",
          value: true,
          tooltip:
            "300 GB SSD storage for fast website loading and performance.",
        },
        {
          title: "Free Domain",
          value: true,
          tooltip: "Free domain included for 1 year with this hosting plan.",
        },
        {
          title: "Unlimited Subdomains",
          value: true,
          tooltip: "Create unlimited subdomains across your hosted websites.",
        },
        {
          title: "Unlimited Business Email",
          value: true,
          tooltip: "Create unlimited professional business email accounts.",
        },
        {
          title: "Unlimited SSL Certificates",
          value: true,
          tooltip:
            "Unlimited free SSL certificates included for all your websites.",
        },
        {
          title: "Daily Backups",
          value: true,
          tooltip: "Automated daily backups to keep your website data safe.",
        },
        {
          title: "Free Cloudflare CDN",
          value: true,
          tooltip:
            "Free Cloudflare CDN integration for faster global delivery.",
        },
        {
          title: "Free Migration",
          value: true,
          tooltip: "Free website migration handled by our support team.",
        },
        {
          title: "Powerful Control panel",
          value: true,
          tooltip: "Easy-to-use hosting control panel for website management.",
        },
        {
          title: "Malware Scanning",
          value: true,
          tooltip: "Advanced malware scanning for website protection.",
        },
        {
          title: "Priority Support",
          value: true,
          tooltip: "Priority customer support with faster response times.",
        },

        {
          title: "Speed & Performance",
          value: true,
          heading: true,
          tooltip:
            "Optimized infrastructure for maximum website speed and performance.",
        },

        {
          title: "Litespeed Servers",
          value: true,
          tooltip: "LiteSpeed servers deliver faster website performance.",
        },
        {
          title: "Redis Cache",
          value: true,
          tooltip: "Redis cache improves database and application speed.",
        },
        {
          title: "LSCache",
          value: true,
          tooltip: "LSCache boosts WordPress page loading performance.",
        },
        {
          title: "MemCached",
          value: true,
          tooltip: "MemCached accelerates dynamic content delivery.",
        },
        {
          title: "WordPress Optimized",
          value: true,
          tooltip: "Servers optimized specifically for WordPress websites.",
        },
        {
          title: "Turbo PHP",
          value: true,
          tooltip: "Turbo PHP enhances PHP execution speed and stability.",
        },

        {
          title: "WordPress Management",
          value: true,
          heading: true,
          tooltip: "Advanced WordPress management tools included.",
        },

        {
          title: "1 Click Installation",
          value: true,
          tooltip: "Install WordPress instantly with one click.",
        },
        {
          title: "Staging",
          value: true,
          tooltip: "Create a staging site to test changes safely.",
        },
        {
          title: "Cloning",
          value: true,
          tooltip: "Clone your WordPress website in a single click.",
        },
        {
          title: "On Demand Backups",
          value: true,
          tooltip: "Generate backups anytime whenever required.",
        },
        {
          title: "WordPress Multisite",
          value: true,
          tooltip: "Run and manage multiple WordPress sites together.",
        },
        {
          title: "In Memory Cache",
          value: true,
          tooltip: "In-memory cache for faster data retrieval and performance.",
        },
        {
          title: "WordPress Security",
          value: true,
          tooltip: "Built-in WordPress security tools to keep your site safe.",
        },
      ],
    },

    {
      title: "Startup",
      subtitle: "Plan that helps you grow",
      // oldPrice: "₹714 /Month",
      price: "₹1759",
      duration: "/Month",
      save: "SAVE 60%",
      active: false,
      buttonLink: "https://my.shricloud.com/?cmd=cart&action=add&id=21&promocode=SALE35%OFF",
      secondButtonLink: "/pricing",

      features: [
        {
          title: "Unlimited Websites",
          value: true,
          tooltip: "Host unlimited websites on this hosting package.",
        },
        {
          title: "8 GB RAM",
          value: true,
          tooltip: "8 GB RAM for handling real-time traffic efficiently.",
        },
        {
          title: "4 vCPU",
          value: true,
          tooltip: "4 vCPU cores to handle backend workloads efficiently.",
        },
        {
          title: "Free & Auto SSL",
          value: true,
          tooltip: "Free and automatically renewed SSL certificates.",
        },
        {
          title: "Unlimited NVMe Storage",
          value: true,
          tooltip: "Unlimited NVMe SSD storage for ultra-fast performance.",
        },
        {
          title: "Free Domain (worth $10)",
          value: true,
          tooltip: "Free domain included worth $10 with this hosting plan.",
        },
        {
          title: "Unlimited Subdomains",
          value: true,
          tooltip: "Create unlimited subdomains across your hosted websites.",
        },
        {
          title: "Unlimited Databases",
          value: true,
          tooltip: "Create unlimited databases for your websites and apps.",
        },
        {
          title: "Powerful Control Panel",
          value: true,
          tooltip: "Easy-to-use hosting control panel for management.",
        },
        {
          title: "Daily Backups",
          value: true,
          tooltip: "Automated daily backups to keep your data safe.",
        },
        {
          title: "Unlimited Migration",
          value: true,
          tooltip: "Unlimited free website migrations handled by support.",
        },

        {
          title: "eCommerce Optimized",
          value: true,
          tooltip: "Optimized infrastructure for online stores.",
        },
        {
          title: "WooCommerce Optimized",
          value: true,
          tooltip: "Special optimization for WooCommerce performance.",
        },
        {
          title: "Premium CDN",
          value: true,
          tooltip: "Premium CDN for ultra-fast global content delivery.",
        },
        {
          title: "Boosted CPU",
          value: true,
          tooltip: "Boosted CPU resources for traffic spikes.",
        },
        {
          title: "High Memory Pool",
          value: true,
          tooltip: "High memory allocation for stable performance.",
        },

        {
          title: "Speed & Performance",
          value: true,
          heading: true,
          tooltip: "Optimized infrastructure for maximum speed.",
        },

        {
          title: "LiteSpeed Servers",
          value: true,
          tooltip: "LiteSpeed servers deliver faster performance.",
        },
        {
          title: "Redis Cache",
          value: true,
          tooltip: "Redis cache improves database speed.",
        },
        {
          title: "LSCache",
          value: true,
          tooltip: "LSCache boosts WordPress performance.",
        },
        {
          title: "MemCached",
          value: true,
          tooltip: "MemCached accelerates dynamic content delivery.",
        },
        {
          title: "WordPress Optimized",
          value: true,
          tooltip: "Servers optimized specifically for WordPress.",
        },

        {
          title: "WordPress Management",
          value: true,
          heading: true,
          tooltip: "Advanced WordPress management tools included.",
        },

        {
          title: "1 Click Installation",
          value: true,
          tooltip: "Install WordPress instantly with one click.",
        },
        {
          title: "Staging",
          value: true,
          tooltip: "Create a staging site to test changes safely.",
        },
        {
          title: "Cloning",
          value: true,
          tooltip: "Clone your WordPress website instantly.",
        },
        {
          title: "On Demand Backups",
          value: true,
          tooltip: "Generate backups anytime when needed.",
        },
        {
          title: "WordPress Multisite",
          value: true,
          tooltip: "Manage multiple WordPress sites together.",
        },
        {
          title: "In Memory Cache",
          value: true,
          tooltip: "Fast in-memory caching system.",
        },
        {
          title: "WordPress Security",
          value: true,
          tooltip: "Advanced security for WordPress sites.",
        },
      ],
    },
  ];

  const yearlyPlans = [
    {
      ...monthlyPlans[0],
      oldPrice: "₹299/Year",
      price: "₹99",
      duration: "/Year",
    },

    {
      ...monthlyPlans[1],
      oldPrice: "₹399/Year",
      price: "₹199",
      duration: "/Year",
    },

    {
      ...monthlyPlans[2],
      oldPrice: "₹799/Year",
      price: "₹349",
      duration: "/Year",
    },

    {
      ...monthlyPlans[3],
      oldPrice: "₹1759/Year",
      price: "₹714",
      duration: "/Year",
    },
  ];

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
            Choose Awesome Plan <br />
            for your Needs
          </h2>
        </div>

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

        <div className="row">
          {plans.map((item, index) => (
            <div className="col-xl-3 col-lg-6 col-md-6" key={index}>
              <div
                className={`${styles.pricingCard} ${
                  item.active ? styles.activeCard : ""
                }`}
              >
                <div className={styles.planTop}>
                  <h4>{item.title}</h4>

                  <p className={styles.subtitle}>{item.subtitle}</p>
                </div>

                <div className={styles.priceHeader}>
                  <div className={styles.priceList}>
                    <del style={{ opacity: 0.6, fontWeight: 600 }}>
                      {item.oldPrice}
                    </del>

                    {/* <span>{item.save}</span> */}
                  </div>

                 <h2>
  <span style={{ fontWeight: 500 }}>{item.price}</span>
  <sub>{item.duration}</sub>
</h2>
                </div>

                <ul className={styles.pricingList}>
                  {(showAll ? item.features : item.features.slice(0, 8)).map(
                    (feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className={feature.heading ? styles.featureHeading : ""}
                      >
                        <span>
                          {!feature.heading && (
                            <i
                              className={
                                feature.value
                                  ? "fa-solid fa-check"
                                  : "fa-solid fa-xmark"
                              }
                              style={{
                                color: feature.value ? "#384BFF" : "#ff4d4f",
                              }}
                            />
                          )}

                          {feature.heading ? (
                            <h4>{feature.title}</h4>
                          ) : (
                            feature.title
                          )}
                        </span>

                        {!feature.heading && renderTooltip(feature.tooltip)}
                      </li>
                    ),
                  )}
                </ul>

                {/* SHOW MORE BUTTON */}
                <button className={styles.showMoreBtn} onClick={toggleFeatures}>
                  {showAll ? "Show Less" : "Show More"}
                </button>

                <div className={styles.pricingButton}>
                  <Link href={item.buttonLink} className={styles.pricingBtn}>
                    Get Started
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>

                  {/* <Link
                    href={item.secondButtonLink}
                    className={styles.secondBtn}
                  >
                    View Full Features
                  </Link> */}
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
