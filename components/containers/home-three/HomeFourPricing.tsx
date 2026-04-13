




"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import two from "@/public/img/arrow.png";
import styles from "./HomeFourPricing.module.scss";





const HomeFourPricing = () => {
  const [tab, setTab] = useState(0);

   // ✅ ADD HERE (inside component)
  const [showMore, setShowMore] = useState(false);

  const tooltipText: any = {
    freedomain: "Free Domain for 1 Year when you purchsae Premium Cloud For 1 Year or More.",
    storage: "Fast SSD storage for better performance.",
    backup: "Daily Backups Retained for a Period of 14 Days.",
    ssl: "Free SSL certificates from Lets Encrypt.",
    monitoring: "24/7 monitoring ensures uptime.",
    domain: "Free domain included for 1 year.",
    ip: "Dedicated IP gives better control & security.",
    payment: "Supports multiple payment gateways.",
    web:"Create Upto 100 Websites on this Package.",
    gb:"2 GB of RAM for Handling Realtime Traffic" ,
    vcpu:"2 vCPU cores to handle website backend efficiently",
    cloudflare:"Get Free Cloudflare CDN configured by our team for your website.",
    nvme:"100 GB of NVMe SSD Storage for fast data processing.",
    subdomian:"Create as many subdomains as you would like.",
    databse:"Create as many databases as you would like.",
    tenmigrations:"Claim 10 Free Migrations within 14 days of the purchase.",
    litespeed:"Litespeed Webservers Offer upto 300x faster WordPress Performance and handle more load than regular webservers.",
    redis:"Redis Object Cache for Making the SQL queries of your website faster.",
    lscache:"Litespeed Cache as the Page Cache from Litespeed Webserver Enterprise.",
    mem:"Memcached for Object Caching on your WordPress or PHP applications.",
    wordpress:"Enhance your website's security with Hostie's Web Application Firewall, protecting against online threats and ensuring a safe online environment.",
    oneclick:"Install WordPress and 100+ apps in a single click.",
    staging:"1 Click Staging with Softaculous Apps Installer.",
    cloning:"1 Click Cloning with Softaculous Apps Installer.",
    ondemand:"Softaculous Manager lets your create On Demand Backups when required by you.",
    wpmulti:"Utilise the features of Multisite effortlessly.",
    wpsecurity:"Tightened Security for your WordPress websites with Imunify360 Protection.",
    threewebsites:"Create upto 300 websites in this package.",
    sixgb:"Create upto 300 websites in this package.",
    fourcpv:"4 vCPU cores to handle website backend efficiently",
    pocntrlpanel:"Powerful Control panel to manage your hosting account with ease.",
     twowebsites:"Create upto 200 websites in this package.",
     fourgb:"4 GB of RAM for Handling Realtime Traffic" ,
     



    

  };






  return (
    <section className="pricing-section fix section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span
            className="style-border "
           
          >
            Pricing Plans
          </span>
          <h2 >
            Get the More Powerful With Shricloud <br /> Website Hosting Plans
          </h2>
        </div>
        <div className="pricing-tab-header">
          <div className="arrow-shape">
            <Image src={two} alt="img" priority />
          </div>
          <ul className="nav" role="tablist">
            <li
              className="nav-item "
             
              role="presentation"
            >
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
            <li
              className="nav-item "
              
              role="presentation"
            >
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
          <div className="save-text">Save 25%</div>
        </div>
       
        <div className="tab-content">
          <div
            id="monthly"
            className={`tab-pane fade ${tab === 0 ? " show active " : " "}`}
            role="tabpanel"
           >
            <div className="row">
              <div
                className="col-xl-4 col-lg-6 col-md-6 "
               
              >
                <div className="pricing-box-items">
                  <div className="pricing-header">
                    <div className="price-content">
                      <h4>
LITE</h4>
                      <p>
                       Package to Kickstart your Idea
                      </p>
                    </div>

<h4>
  <span className={styles.oldPrice}>₹559 /mo</span>
</h4>
                    <h2>
                       ₹199 <sup>/ Month</sup>

                      
                    </h2>
                  </div>
                  <div className="pricing-button">
                    <Link href="contact" className="theme-btn">
                      Get Started Now
                    </Link>
                  </div>
              
              <ul className="pricing-list">



 





    <li className={styles["tooltip-item"]}>
  <span>
    <i className="fa-solid fa-check"></i>
100 Websites
  </span>

  <div className={styles["tooltip-wrapper"]}>
    <i className="fa-light fa-circle-question"></i>
    <div className={styles["tooltip-box"]}>
      {tooltipText.freedomain}
    </div>
  </div>
</li>


  <li className={styles["tooltip-item"]}>
  <span>
    <i className="fa-solid fa-check"></i>
2 GB RAM
  </span>

  <div className={styles["tooltip-wrapper"]}>
    <i className="fa-light fa-circle-question"></i>
    <div className={styles["tooltip-box"]}>
      {tooltipText.gb}
    </div>
  </div>
</li>


  <li className={styles["tooltip-item"]}>
  <span>
    <i className="fa-solid fa-check"></i>
2 vCPU
  </span>

  <div className={styles["tooltip-wrapper"]}>
    <i className="fa-light fa-circle-question"></i>
    <div className={styles["tooltip-box"]}>
      {tooltipText.vcpu}
    </div>
  </div>
</li>

    {/* <li className={styles["tooltip-item"]}>
  <span>
    <i className="fa-solid fa-check"></i>
1 Million Inodes
  </span>

  <div className={styles["tooltip-wrapper"]}>
    <i className="fa-light fa-circle-question"></i>
    <div className={styles["tooltip-box"]}>
      {tooltipText.storage}
    </div>
  </div>
</li> */}


    <li className={styles["tooltip-item"]}>
  <span>
    <i className="fa-solid fa-check"></i>
Free SSL Certificates
  </span>

  <div className={styles["tooltip-wrapper"]}>
    <i className="fa-light fa-circle-question"></i>
    <div className={styles["tooltip-box"]}>
      {tooltipText.ssl}
    </div>
  </div>
</li>


 <li className={styles["tooltip-item"]}>
  <span>
    <i className="fa-solid fa-check"></i>
 Free Domain (worth ₹849)
  </span>

  <div className={styles["tooltip-wrapper"]}>
    <i className="fa-light fa-circle-question"></i>
    <div className={styles["tooltip-box"]}>
      {tooltipText.storage}
    </div>
  </div>
</li>

  
      <li className={styles["tooltip-item"]}>
  <span>
    <i className="fa-solid fa-check"></i>
100 GB NVMe Storage
  </span>

  <div className={styles["tooltip-wrapper"]}>
    <i className="fa-light fa-circle-question"></i>
    <div className={styles["tooltip-box"]}>
      {tooltipText.nvme}
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
      {tooltipText.subdomian}
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
      {tooltipText.databse}
    </div>
  </div>
</li>


{/* SHOW MORE */}
  {showMore && (
    <>

<li className={styles["tooltip-item"]}>
  <span>
    <i className="fa-solid fa-check"></i>
Daily Backups
  </span>

  <div className={styles["tooltip-wrapper"]}>
    <i className="fa-light fa-circle-question"></i>
    <div className={styles["tooltip-box"]}>
      {tooltipText.backup}
    </div>
  </div>
</li>


<li className={styles["tooltip-item"]}>
  <span>
    <i className="fa-solid fa-check"></i>
10 Free Migrations
  </span>

  <div className={styles["tooltip-wrapper"]}>
    <i className="fa-light fa-circle-question"></i>
    <div className={styles["tooltip-box"]}>
      {tooltipText.tenmigrations}
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
      {tooltipText.litespeed}
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
      {tooltipText.redis}
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
      {tooltipText.lscache}
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
      {tooltipText.mem}
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
      {tooltipText.wordpress}
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
      {tooltipText.oneclick}
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
      {tooltipText.staging}
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
      {tooltipText.cloning}
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
      {tooltipText.ondemand}
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
      {tooltipText.wpmulti}
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
      {tooltipText.storage}
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
      {tooltipText.wpsecurity}
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
              <div
                className="col-xl-4 col-lg-6 col-md-6 "
               
              >
                <div className="pricing-box-items active">
                  <div className="pricing-header">
                    <div className="price-content">
                      <h4>TURBO</h4>
                      <p>
                       Unmatched power, flexibility & performance.
                      </p>
                    </div>


<h4>
  <span className={styles.oldPrice}>₹959 /mo</span>
</h4>
                    
                    <h2>
                      ₹ 429<sup>/ Month</sup>
                    </h2>
                  </div>
                  <div className="pricing-button">
                    <Link href="contact" className="theme-btn">
                      Get Started Now
                    </Link>
                  </div>





                 <ul className="pricing-list">



  <li className={styles["tooltip-item"]}>
  <span>
    <i className="fa-solid fa-check"></i>
300 Websites
  </span>

  <div className={styles["tooltip-wrapper"]}>
    <i className="fa-light fa-circle-question"></i>
    <div className={styles["tooltip-box"]}>
      {tooltipText.threewebsites}
    </div>
  </div>
</li>



    <li className={styles["tooltip-item"]}>
  <span>
    <i className="fa-solid fa-check"></i>
6 GB RAM
  </span>

  <div className={styles["tooltip-wrapper"]}>
    <i className="fa-light fa-circle-question"></i>
    <div className={styles["tooltip-box"]}>
      {tooltipText.sixgb}
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
      {tooltipText.fourcpv}
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
      {tooltipText.ssl}
    </div>
  </div>
</li>


  <li className={styles["tooltip-item"]}>
  <span>
    <i className="fa-solid fa-check"></i>
300 GB NVMe Storage

  </span>

  <div className={styles["tooltip-wrapper"]}>
    <i className="fa-light fa-circle-question"></i>
    <div className={styles["tooltip-box"]}>
      {tooltipText.nvme}
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
      {tooltipText.storage}
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
      {tooltipText.subdomian}
    </div>
  </div>
</li>


  {/* SHOW MORE */}
  {showMore && (
    <>
      <li className={styles["tooltip-item"]}>
  <span>
    <i className="fa-solid fa-check"></i>
Unlimited Databases

  </span>

  <div className={styles["tooltip-wrapper"]}>
    <i className="fa-light fa-circle-question"></i>
    <div className={styles["tooltip-box"]}>
      {tooltipText.databse}
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
      {tooltipText.pocntrlpanel}
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
      {tooltipText.backup}
    </div>
  </div>
</li>


<li className={styles["tooltip-item"]}>
  <span>
    <i className="fa-solid fa-check"></i>
30 Free Migrations
  </span>

  <div className={styles["tooltip-wrapper"]}>
    <i className="fa-light fa-circle-question"></i>
    <div className={styles["tooltip-box"]}>
      {tooltipText.storage}
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
      {tooltipText.litespeed}
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
      {tooltipText.redis}
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
      {tooltipText.lscache}
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
      {tooltipText.mem}
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
      {tooltipText.wordpress}
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
      {tooltipText.oneclick}
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
      {tooltipText.staging}
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
      {tooltipText.cloning}
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
      {tooltipText.ondemand}
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
      {tooltipText.wpmulti}
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
      {tooltipText.storage}
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
      {tooltipText.wpsecurity}
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


              <div
                className="col-xl-4 col-lg-6 col-md-6 "
               
              >
                <div className="pricing-box-items">
                  <div className="pricing-header">
                    <div className="price-content">
                      <h4>PRO</h4>
                      <p>
                        Ideal for individuals who need quick access to basic
                        features.
                      </p>
                    </div>

                    <h4>
  <span className={styles.oldPrice}>₹759 /mo</span>
</h4>
                    
                    <h2>
                      ₹329<sup>/ Month</sup>
                    </h2>
                  </div>
                  <div className="pricing-button">
                    <Link href="contact" className="theme-btn">
                      Get Started Now
                    </Link>
                  </div>
                <ul className="pricing-list">



  <li className={styles["tooltip-item"]}>
  <span>
    <i className="fa-solid fa-check"></i>
200 Websites
  </span>

  <div className={styles["tooltip-wrapper"]}>
    <i className="fa-light fa-circle-question"></i>
    <div className={styles["tooltip-box"]}>
      {tooltipText.twowebsites}
    </div>
  </div>
</li>



    <li className={styles["tooltip-item"]}>
  <span>
    <i className="fa-solid fa-check"></i>
4 GB RAM
  </span>

  <div className={styles["tooltip-wrapper"]}>
    <i className="fa-light fa-circle-question"></i>
    <div className={styles["tooltip-box"]}>
      {tooltipText.fourgb}
    </div>
  </div>
</li>



    <li className={styles["tooltip-item"]}>
  <span>
    <i className="fa-solid fa-check"></i>
3 vCPU

  </span>

  <div className={styles["tooltip-wrapper"]}>
    <i className="fa-light fa-circle-question"></i>
    <div className={styles["tooltip-box"]}>
      {tooltipText.storage}
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
      {tooltipText.ssl}
    </div>
  </div>
</li>


  <li className={styles["tooltip-item"]}>
  <span>
    <i className="fa-solid fa-check"></i>
200 GB NVMe Storage

  </span>

  <div className={styles["tooltip-wrapper"]}>
    <i className="fa-light fa-circle-question"></i>
    <div className={styles["tooltip-box"]}>
      {tooltipText.nvme}
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
      {tooltipText.storage}
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
      {tooltipText.subdomian}
    </div>
  </div>
</li>


  {/* SHOW MORE */}
  {showMore && (
    <>
      <li className={styles["tooltip-item"]}>
  <span>
    <i className="fa-solid fa-check"></i>
Unlimited Databases

  </span>

  <div className={styles["tooltip-wrapper"]}>
    <i className="fa-light fa-circle-question"></i>
    <div className={styles["tooltip-box"]}>
      {tooltipText.databse}
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
      {tooltipText.pocntrlpanel}
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
      {tooltipText.backup}
    </div>
  </div>
</li>


<li className={styles["tooltip-item"]}>
  <span>
    <i className="fa-solid fa-check"></i>
20 Free Migrations
  </span>

  <div className={styles["tooltip-wrapper"]}>
    <i className="fa-light fa-circle-question"></i>
    <div className={styles["tooltip-box"]}>
      {tooltipText.storage}
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
      {tooltipText.litespeed}
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
      {tooltipText.redis}
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
      {tooltipText.lscache}
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
      {tooltipText.mem}
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
      {tooltipText.wordpress}
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
      {tooltipText.oneclick}
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
      {tooltipText.staging}
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
      {tooltipText.cloning}
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
      {tooltipText.ondemand}
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
      {tooltipText.wpmulti}
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
      {tooltipText.storage}
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
      {tooltipText.wpsecurity}
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
                      <h4>Regular Plans</h4>
                      <p>
                        Ideal for individuals who need quick access to basic
                        features.
                      </p>
                    </div>
                    <h2>
                      $49<sup>/ Month</sup>
                    </h2>
                  </div>
                  <div className="pricing-button">
                    <Link href="contact" className="theme-btn">
                      Get Started Now
                    </Link>
                  </div>
                  <ul className="pricing-list">
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        100 GB SSD Storage
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Weekly Backups
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Unlimited Free SSL
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        24/7 system Monitoring
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Free Domain ($9.99 value)
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li className="color-2">
                      <span>
                        <i className="fa-solid fa-xmark"></i>
                        Dedicated IP Address
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li className="color-2">
                      <span>
                        <i className="fa-solid fa-xmark"></i>
                        20+ Payment Methods
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="pricing-box-items active">
                  <div className="pricing-header">
                    <div className="price-content">
                      <h4>Premium Plans</h4>
                      <p>
                        Ideal for individuals who need quick access to basic
                        features.
                      </p>
                    </div>
                    <h2>
                      $69<sup>/ Month</sup>
                    </h2>
                  </div>
                  <div className="pricing-button">
                    <Link href="contact" className="theme-btn">
                      Get Started Now
                    </Link>
                  </div>
                  <ul className="pricing-list">
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        100 GB SSD Storage
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Weekly Backups
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Unlimited Free SSL
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        24/7 system Monitoring
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Free Domain ($9.99 value)
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li className="color-2">
                      <span>
                        <i className="fa-solid fa-xmark"></i>
                        Dedicated IP Address
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li className="color-2">
                      <span>
                        <i className="fa-solid fa-xmark"></i>
                        20+ Payment Methods
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="pricing-box-items">
                  <div className="pricing-header">
                    <div className="price-content">
                      <h4>Cloud Startup</h4>
                      <p>
                        Ideal for individuals who need quick access to basic
                        features.
                      </p>
                    </div>
                    <h2>
                      $79<sup>/ Month</sup>
                    </h2>
                  </div>
                  <div className="pricing-button">
                    <Link href="contact" className="theme-btn">
                      Get Started Now
                    </Link>
                  </div>
                  <ul className="pricing-list">
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        100 GB SSD Storage
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Weekly Backups
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Unlimited Free SSL
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        24/7 system Monitoring
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Free Domain ($9.99 value)
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li className="color-2">
                      <span>
                        <i className="fa-solid fa-xmark"></i>
                        Dedicated IP Address
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li className="color-2">
                      <span>
                        <i className="fa-solid fa-xmark"></i>
                        20+ Payment Methods
                      </span>
                      <i className="fa-light fa-circle-question"></i>
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

export default HomeFourPricing;
