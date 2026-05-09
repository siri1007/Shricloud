// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import one from "@/public/img/pricing-shape.png";
// import two from "@/public/img/arrow.png";

// const HomeThreePricing = () => {
//   const [tab, setTab] = useState(0);

//   return (
//     <section className="pricing-section fix section-padding section-bg">
//       <div className="pricing-shape">
//         <Image src={one} alt="img" priority />
//       </div>
//       <div className="container">
//         <div className="section-title text-center">
//           <span data-aos="fade-up" data-aos-duration="800">
//             Pricing Plans
//           </span>
//           <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
//             Choose Awesome Plan for <br /> your Needs
//           </h2>
//         </div>
//         <div className="pricing-tab-header">
//           <div className="arrow-shape">
//             <Image src={two} alt="img" priority />
//           </div>
//           <ul className="nav" role="tablist">
//             <li
//               className="nav-item "
//               data-aos="fade-up"
//               data-aos-duration="800"
//               data-aos-delay="300"
//               role="presentation"
//             >
//               <a
//                 data-bs-toggle="tab"
//                 onClick={() => setTab(0)}
//                 className={`nav-link ${tab === 0 ? " active " : " "}`}
//                 aria-selected="true"
//                 role="tab"
//               >
//                 Monthly
//               </a>
//             </li>
//             <li
//               className="nav-item "
//               data-aos="fade-up"
//               data-aos-duration="800"
//               data-aos-delay="500"
//               role="presentation"
//             >
//               <a
//                 data-bs-toggle="tab"
//                 onClick={() => setTab(1)}
//                 className={`nav-link ${tab === 1 ? " active " : " "}`}
//                 aria-selected="false"
//                 role="tab"
//               >
//                 Yearly
//               </a>
//             </li>
//           </ul>
//           <div className="save-text">Save 25%</div>
//         </div>
//         <div className="tab-content">
//           <div
//             id="monthly"
//             className={`tab-pane fade ${tab === 0 ? " show active " : " "}`}
//             role="tabpanel"
//           >
//             <div className="row">
//               <div
//                 className="col-xl-3 col-lg-4 col-md-6 "
//                 data-aos="fade-up"
//                 data-aos-duration="800"
//                 data-aos-delay="200"
//               >
//                 <div className="pricing-items style-2">
//                   <h6 className="top-text">Regular Plans</h6>
//                   <div className="pricing-header-2">
//                     <div className="price-list">
//                       <del>120.99</del>
//                       <span>SAVE 75%</span>
//                     </div>
//                     <h2>
//                       $99 <sub>/mo</sub>
//                     </h2>
//                   </div>
//                   <p className="text-center">
//                     Lnteger sapien nec sapien sollicitudin ultrices Cras tempor
//                     id lorem et
//                   </p>
//                   <ul className="pricing-list">
//                     <li>
//                       <span>
//                         <i className="fa-solid fa-check"></i>
//                         100 GB SSD Storage
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li>
//                       <span>
//                         <i className="fa-solid fa-check"></i>
//                         Weekly Backups
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li>
//                       <span>
//                         <i className="fa-solid fa-check"></i>
//                         Unlimited Free SSL
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li>
//                       <span>
//                         <i className="fa-solid fa-check"></i>
//                         24/7 system Monitoring
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li>
//                       <span>
//                         <i className="fa-solid fa-xmark"></i>
//                         Free Domain ($9.99 value)
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li className="color-2">
//                       <span>
//                         <i className="fa-solid fa-xmark"></i>
//                         Dedicated IP Address
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li className="color-2">
//                       <span>
//                         <i className="fa-solid fa-xmark"></i>
//                         20+ Payment Methods
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                   </ul>
//                   <div className="pricing-button">
//                     <Link href="contact" className="pricing-btn">
//                       get Started Now
//                       <i className="fa-solid fa-arrow-right-long"></i>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//               <div
//                 className="col-xl-3 col-lg-4 col-md-6 "
//                 data-aos="fade-up"
//                 data-aos-duration="800"
//                 data-aos-delay="400"
//               >
//                 <div className="pricing-items style-2 active">
//                   <h6 className="top-text">Premium Plans</h6>
//                   <div className="pricing-header-2">
//                     <div className="price-list">
//                       <del>120.99</del>
//                       <span>SAVE 75%</span>
//                     </div>
//                     <h2>
//                       $59 <sub>/mo</sub>
//                     </h2>
//                   </div>
//                   <p className="text-center">
//                     Lnteger sapien nec sapien sollicitudin ultrices Cras tempor
//                     id lorem et
//                   </p>
//                   <ul className="pricing-list">
//                     <li>
//                       <span>
//                         <i className="fa-solid fa-check"></i>
//                         100 GB SSD Storage
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li>
//                       <span>
//                         <i className="fa-solid fa-check"></i>
//                         Weekly Backups
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li>
//                       <span>
//                         <i className="fa-solid fa-check"></i>
//                         Unlimited Free SSL
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li>
//                       <span>
//                         <i className="fa-solid fa-check"></i>
//                         24/7 system Monitoring
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li>
//                       <span>
//                         <i className="fa-solid fa-xmark"></i>
//                         Free Domain ($9.99 value)
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li className="color-2">
//                       <span>
//                         <i className="fa-solid fa-xmark"></i>
//                         Dedicated IP Address
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li className="color-2">
//                       <span>
//                         <i className="fa-solid fa-xmark"></i>
//                         20+ Payment Methods
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                   </ul>
//                   <div className="pricing-button">
//                     <Link href="contact" className="pricing-btn">
//                       get Started Now
//                       <i className="fa-solid fa-arrow-right-long"></i>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//               <div
//                 className="col-xl-3 col-lg-4 col-md-6 "
//                 data-aos="fade-up"
//                 data-aos-duration="800"
//                 data-aos-delay="600"
//               >
//                 <div className="pricing-items style-2">
//                   <h6 className="top-text">Business</h6>
//                   <div className="pricing-header-2">
//                     <div className="price-list">
//                       <del>120.99</del>
//                       <span>SAVE 75%</span>
//                     </div>
//                     <h2>
//                       $39 <sub>/mo</sub>
//                     </h2>
//                   </div>
//                   <p className="text-center">
//                     Lnteger sapien nec sapien sollicitudin ultrices Cras tempor
//                     id lorem et
//                   </p>
//                   <ul className="pricing-list">
//                     <li>
//                       <span>
//                         <i className="fa-solid fa-check"></i>
//                         100 GB SSD Storage
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li>
//                       <span>
//                         <i className="fa-solid fa-check"></i>
//                         Weekly Backups
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li>
//                       <span>
//                         <i className="fa-solid fa-check"></i>
//                         Unlimited Free SSL
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li>
//                       <span>
//                         <i className="fa-solid fa-check"></i>
//                         24/7 system Monitoring
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li>
//                       <span>
//                         <i className="fa-solid fa-xmark"></i>
//                         Free Domain ($9.99 value)
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li className="color-2">
//                       <span>
//                         <i className="fa-solid fa-xmark"></i>
//                         Dedicated IP Address
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li className="color-2">
//                       <span>
//                         <i className="fa-solid fa-xmark"></i>
//                         20+ Payment Methods
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                   </ul>
//                   <div className="pricing-button">
//                     <Link href="contact" className="pricing-btn">
//                       get Started Now
//                       <i className="fa-solid fa-arrow-right-long"></i>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//               <div
//                 className="col-xl-3 col-lg-4 col-md-6 "
//                 data-aos="fade-up"
//                 data-aos-duration="800"
//                 data-aos-delay="800"
//               >
//                 <div className="pricing-items style-2">
//                   <h6 className="top-text">Cloud Startup</h6>
//                   <div className="pricing-header-2">
//                     <div className="price-list">
//                       <del>120.99</del>
//                       <span>SAVE 75%</span>
//                     </div>
//                     <h2>
//                       $29 <sub>/mo</sub>
//                     </h2>
//                   </div>
//                   <p className="text-center">
//                     Lnteger sapien nec sapien sollicitudin ultrices Cras tempor
//                     id lorem et
//                   </p>
//                   <ul className="pricing-list">
//                     <li>
//                       <span>
//                         <i className="fa-solid fa-check"></i>
//                         100 GB SSD Storage
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li>
//                       <span>
//                         <i className="fa-solid fa-check"></i>
//                         Weekly Backups
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li>
//                       <span>
//                         <i className="fa-solid fa-check"></i>
//                         Unlimited Free SSL
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li>
//                       <span>
//                         <i className="fa-solid fa-check"></i>
//                         24/7 system Monitoring
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li>
//                       <span>
//                         <i className="fa-solid fa-xmark"></i>
//                         Free Domain ($9.99 value)
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li className="color-2">
//                       <span>
//                         <i className="fa-solid fa-xmark"></i>
//                         Dedicated IP Address
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li className="color-2">
//                       <span>
//                         <i className="fa-solid fa-xmark"></i>
//                         20+ Payment Methods
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                   </ul>
//                   <div className="pricing-button">
//                     <Link href="contact" className="pricing-btn">
//                       get Started Now
//                       <i className="fa-solid fa-arrow-right-long"></i>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div
//             id="yearly"
//             className={`tab-pane fade ${tab === 1 ? " show active " : " "}`}
//             role="tabpanel"
//           >
//             <div className="row">
//               <div className="col-xl-3 col-lg-4 col-md-6">
//                 <div className="pricing-items style-2">
//                   <h6 className="top-text">Regular Plans</h6>
//                   <div className="pricing-header-2">
//                     <div className="price-list">
//                       <del>120.99</del>
//                       <span>SAVE 75%</span>
//                     </div>
//                     <h2>
//                       $99 <sub>/mo</sub>
//                     </h2>
//                   </div>
//                   <p className="text-center">
//                     Lnteger sapien nec sapien sollicitudin ultrices Cras tempor
//                     id lorem et
//                   </p>
//                   <ul className="pricing-list">
//                     <li>
//                       <span>
//                         <i className="fa-solid fa-check"></i>
//                         100 GB SSD Storage
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li>
//                       <span>
//                         <i className="fa-solid fa-check"></i>
//                         Weekly Backups
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li>
//                       <span>
//                         <i className="fa-solid fa-check"></i>
//                         Unlimited Free SSL
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li>
//                       <span>
//                         <i className="fa-solid fa-check"></i>
//                         24/7 system Monitoring
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li>
//                       <span>
//                         <i className="fa-solid fa-xmark"></i>
//                         Free Domain ($9.99 value)
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li className="color-2">
//                       <span>
//                         <i className="fa-solid fa-xmark"></i>
//                         Dedicated IP Address
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li className="color-2">
//                       <span>
//                         <i className="fa-solid fa-xmark"></i>
//                         20+ Payment Methods
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                   </ul>
//                   <div className="pricing-button">
//                     <Link href="contact" className="pricing-btn">
//                       get Started Now
//                       <i className="fa-solid fa-arrow-right-long"></i>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-xl-3 col-lg-4 col-md-6">
//                 <div className="pricing-items style-2 active">
//                   <h6 className="top-text">Premium Plans</h6>
//                   <div className="pricing-header-2">
//                     <div className="price-list">
//                       <del>120.99</del>
//                       <span>SAVE 75%</span>
//                     </div>
//                     <h2>
//                       $59 <sub>/mo</sub>
//                     </h2>
//                   </div>
//                   <p className="text-center">
//                     Lnteger sapien nec sapien sollicitudin ultrices Cras tempor
//                     id lorem et
//                   </p>
//                   <ul className="pricing-list">
//                     <li>
//                       <span>
//                         <i className="fa-solid fa-check"></i>
//                         100 GB SSD Storage
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li>
//                       <span>
//                         <i className="fa-solid fa-check"></i>
//                         Weekly Backups
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li>
//                       <span>
//                         <i className="fa-solid fa-check"></i>
//                         Unlimited Free SSL
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li>
//                       <span>
//                         <i className="fa-solid fa-check"></i>
//                         24/7 system Monitoring
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li>
//                       <span>
//                         <i className="fa-solid fa-xmark"></i>
//                         Free Domain ($9.99 value)
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li className="color-2">
//                       <span>
//                         <i className="fa-solid fa-xmark"></i>
//                         Dedicated IP Address
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li className="color-2">
//                       <span>
//                         <i className="fa-solid fa-xmark"></i>
//                         20+ Payment Methods
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                   </ul>
//                   <div className="pricing-button">
//                     <Link href="contact" className="pricing-btn">
//                       get Started Now
//                       <i className="fa-solid fa-arrow-right-long"></i>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-xl-3 col-lg-4 col-md-6">
//                 <div className="pricing-items style-2">
//                   <h6 className="top-text">Business</h6>
//                   <div className="pricing-header-2">
//                     <div className="price-list">
//                       <del>120.99</del>
//                       <span>SAVE 75%</span>
//                     </div>
//                     <h2>
//                       $39 <sub>/mo</sub>
//                     </h2>
//                   </div>
//                   <p className="text-center">
//                     Lnteger sapien nec sapien sollicitudin ultrices Cras tempor
//                     id lorem et
//                   </p>
//                   <ul className="pricing-list">
//                     <li>
//                       <span>
//                         <i className="fa-solid fa-check"></i>
//                         100 GB SSD Storage
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li>
//                       <span>
//                         <i className="fa-solid fa-check"></i>
//                         Weekly Backups
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li>
//                       <span>
//                         <i className="fa-solid fa-check"></i>
//                         Unlimited Free SSL
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li>
//                       <span>
//                         <i className="fa-solid fa-check"></i>
//                         24/7 system Monitoring
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li>
//                       <span>
//                         <i className="fa-solid fa-xmark"></i>
//                         Free Domain ($9.99 value)
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li className="color-2">
//                       <span>
//                         <i className="fa-solid fa-xmark"></i>
//                         Dedicated IP Address
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li className="color-2">
//                       <span>
//                         <i className="fa-solid fa-xmark"></i>
//                         20+ Payment Methods
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                   </ul>
//                   <div className="pricing-button">
//                     <Link href="contact" className="pricing-btn">
//                       get Started Now
//                       <i className="fa-solid fa-arrow-right-long"></i>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-xl-3 col-lg-4 col-md-6">
//                 <div className="pricing-items style-2">
//                   <h6 className="top-text">Cloud Startup</h6>
//                   <div className="pricing-header-2">
//                     <div className="price-list">
//                       <del>120.99</del>
//                       <span>SAVE 75%</span>
//                     </div>
//                     <h2>
//                       $29 <sub>/mo</sub>
//                     </h2>
//                   </div>
//                   <p className="text-center">
//                     Lnteger sapien nec sapien sollicitudin ultrices Cras tempor
//                     id lorem et
//                   </p>
//                   <ul className="pricing-list">
//                     <li>
//                       <span>
//                         <i className="fa-solid fa-check"></i>
//                         100 GB SSD Storage
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li>
//                       <span>
//                         <i className="fa-solid fa-check"></i>
//                         Weekly Backups
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li>
//                       <span>
//                         <i className="fa-solid fa-check"></i>
//                         Unlimited Free SSL
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li>
//                       <span>
//                         <i className="fa-solid fa-check"></i>
//                         24/7 system Monitoring
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li>
//                       <span>
//                         <i className="fa-solid fa-xmark"></i>
//                         Free Domain ($9.99 value)
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li className="color-2">
//                       <span>
//                         <i className="fa-solid fa-xmark"></i>
//                         Dedicated IP Address
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                     <li className="color-2">
//                       <span>
//                         <i className="fa-solid fa-xmark"></i>
//                         20+ Payment Methods
//                       </span>
//                       <i className="fa-light fa-circle-question"></i>
//                     </li>
//                   </ul>
//                   <div className="pricing-button">
//                     <Link href="contact" className="pricing-btn">
//                       get Started Now
//                       <i className="fa-solid fa-arrow-right-long"></i>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomeThreePricing;

// -----------

"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import two from "@/public/img/arrow.png";
import styles from "./WordpressPricing.module.scss";

const HomePricing = () => {
  const [tab, setTab] = useState(1);

  // ✅ ADD HERE (inside component)
  const [showMore, setShowMore] = useState(false);

  // const tooltipText: any = {
  //   freedomain:
  //     "Free Domain for 1 Year when you purchsae Premium Cloud For 1 Year or More.",
  //   storage: "Fast SSD storage for better performance.",
  //   backup: "Daily Backups Retained for a Period of 14 Days.",
  //   ssl: "Free SSL certificates from Lets Encrypt.",
  //   monitoring: "24/7 monitoring ensures uptime.",
  //   domain: "Free domain included for 1 year.",
  //   ip: "Dedicated IP gives better control & security.",
  //   payment: "Supports multiple payment gateways.",
  //   web: "Create Upto 100 Websites on this Package.",
  //   gb: "2 GB of RAM for Handling Realtime Traffic",
  //   vcpu: "2 vCPU cores to handle website backend efficiently",
  //   cloudflare:
  //     "Get Free Cloudflare CDN configured by our team for your website.",
  //   nvme: "100 GB of NVMe SSD Storage for fast data processing.",
  //   subdomian: "Create as many subdomains as you would like.",
  //   databse: "Create as many databases as you would like.",
  //   tenmigrations: "Claim 10 Free Migrations within 14 days of the purchase.",
  //   litespeed:
  //     "Litespeed Webservers Offer upto 300x faster WordPress Performance and handle more load than regular webservers.",
  //   redis:
  //     "Redis Object Cache for Making the SQL queries of your website faster.",
  //   lscache:
  //     "Litespeed Cache as the Page Cache from Litespeed Webserver Enterprise.",
  //   mem: "Memcached for Object Caching on your WordPress or PHP applications.",
  //   wordpress:
  //     "Enhance your website's security with Hostie's Web Application Firewall, protecting against online threats and ensuring a safe online environment.",
  //   oneclick: "Install WordPress and 100+ apps in a single click.",
  //   staging: "1 Click Staging with Softaculous Apps Installer.",
  //   cloning: "1 Click Cloning with Softaculous Apps Installer.",
  //   ondemand:
  //     "Softaculous Manager lets your create On Demand Backups when required by you.",
  //   wpmulti: "Utilise the features of Multisite effortlessly.",
  //   wpsecurity:
  //     "Tightened Security for your WordPress websites with Imunify360 Protection.",
  //   threewebsites: "Create upto 300 websites in this package.",
  //   sixgb: "Create upto 300 websites in this package.",
  //   fourcpv: "4 vCPU cores to handle website backend efficiently",
  //   pocntrlpanel:
  //     "Powerful Control panel to manage your hosting account with ease.",
  //   twowebsites: "Create upto 200 websites in this package.",
  //   fourgb: "4 GB of RAM for Handling Realtime Traffic",
  // };


  const tooltipText: any = {
  // ✅ STARTER CLOUD
  oneWebsite: "Host a single website on this plan.",
  starterStorage: "10 GB SSD RAID storage for reliable performance.",
  starterSSL: "Free SSL certificate with automatic renewal.",
  litespeed: "LiteSpeed server for faster loading and better performance.",
  email10: "Create up to 10 email accounts.",
  db10: "Create up to 10 MySQL databases.",
  controlPanel: "Easy-to-use control panel to manage hosting.",
  migration: "Free website migration from your old host.",

  // ✅ PREMIUM CLOUD
  websites50: "Host up to 50 websites on this plan.",
  ram2gb: "2 GB RAM for handling moderate traffic.",
  cpu2: "2 vCPU cores for backend processing.",
  ssl: "Free SSL certificates from Let's Encrypt.",
  nvme100: "100 GB NVMe SSD storage for ultra-fast speed.",
  email100: "Create up to 100 email accounts.",
  freeDomain: "Free domain for 1 year included.",
  backup: "Daily backups with 14-day retention.",
  wordpress: "Optimized environment for WordPress performance.",
  speed2x: "Improved performance with 2x faster speeds.",

  // ✅ BUSINESS CLOUD
  websites100: "Host up to 100 websites on this plan.",
  ram4gb: "4 GB RAM for high traffic handling.",
  cpu3: "3 vCPU cores for better performance.",
  storage200: "200 GB high-speed storage.",
  ecommerce: "Optimized for eCommerce platforms.",
  lscache: "LiteSpeed Cache for faster page loading.",
  speed4x: "Up to 4x faster performance.",
  cloudflare: "Free Cloudflare CDN for global speed boost.",
  security: "Advanced malware scanning and protection.",
  prioritySupport: "Get faster response with priority support.",
};

  return (
    <section className="pricing-section fix section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span className="style-border ">Pricing Plans</span>
          <h2>Choose plan for your business</h2>
          <p>
            Explore our selection of cloud hosting packages that provide the
            best and most affordable web hosting Plans
          </p>
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
                      <h4>Starter Cloud </h4>
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
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {tooltipText.oneWebsite}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        10 GB SSD Raid Storage
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {tooltipText.starterStorage}
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
                          {tooltipText.starterSSL}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Free LiteSpeed
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
                        10 Email Accounts
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {tooltipText.email10}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        10 MySQL Database
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {tooltipText.db10}
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
                          {tooltipText.controlPanel}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Free migration
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {tooltipText.migration}
                        </div>
                      </div>
                    </li>
                  </ul>
                  
                </div>
              </div>


              <div className="col-xl-4 col-lg-6 col-md-6 ">
                <div className="pricing-box-items active">
                  <div className="pricing-header">
                    <div className="price-content">
                      <h4>Premium Cloud </h4>
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
                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        50 Websites
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {tooltipText.websites50}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i> 2 GB RAM
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {tooltipText.ram2gb}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i> 2 vCPU
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {tooltipText.cpu2}
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

                    {/* UPDATED STORAGE */}
                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        100 GB NVMe Storage
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {tooltipText.nvme100}
                        </div>
                      </div>
                    </li>

                    {/* NEW: FREE DOMAIN */}
                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Free Domain (worth ₹1k)
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {tooltipText.freeDomain}
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
                          {tooltipText.email100}
                        </div>
                      </div>
                    </li>

                    {/* KEEP DAILY BACKUPS */}
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

                    {showMore && (
                      <>
                        {/* WORDPRESS OPTIMIZED */}
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

                        {/* FREE MIGRATION */}
                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            Free Migration
                          </span>
                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {tooltipText.migration}
                            </div>
                          </div>
                        </li>

                        {/* NEW: SPEED */}
                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            2x More Speed
                          </span>
                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {tooltipText.speed2x}
                            </div>
                          </div>
                        </li>
                      </>
                    )}

                    <li className={styles["show-more-btn-turbo"]}>
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
                      <h4>Business Cloud </h4>
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
                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        100 Websites
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {tooltipText.websites100}
                        </div>
                      </div>
                    </li>

                    {/* UPDATED RAM */}
                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i> 4 GB RAM
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {tooltipText.ram4gb}
                        </div>
                      </div>
                    </li>

                    {/* UPDATED CPU */}
                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i> 3 vCPU
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {tooltipText.cpu3}
                        </div>
                      </div>
                    </li>

                    {/* SSL FIX */}
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

                    {/* STORAGE UPDATED */}
                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        200 GB Storage
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {tooltipText.storage200}
                        </div>
                      </div>
                    </li>

                    {/* DOMAIN UPDATED */}
                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Free Domain (worth ₹1k)
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {tooltipText.freeDomain}
                        </div>
                      </div>
                    </li>

                    {/* KEEP BACKUPS */}
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

                    {/* NEW: ECOMMERCE */}
                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        eCommerce Optimized
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {tooltipText.ecommerce}
                        </div>
                      </div>
                    </li>

                    {showMore && (
                      <>
                        {/* KEEP YOUR EXISTING ADVANCED FEATURES EXACTLY */}

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

                        {/* KEEP LSCACHE */}
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

                        {/* WORDPRESS OPTIMIZED */}
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

                        {/* SPEED */}
                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            4x More Speed
                          </span>
                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {tooltipText.speed4x}
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
                              {tooltipText.cloudflare}
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
                              {tooltipText.migration}
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
                              {tooltipText.controlPanel}
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
                              {tooltipText.security}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            Priority Support
                          </span>
                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {tooltipText.prioritySupport}
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
                      <h4>Starter Cloud </h4>
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
                      href="https://my.shricloud.com/index.php?/cart/&step=1"
                      className="theme-btn"
                    >
                      Get Started Now
                    </Link>
                  </div>

                  <ul className="pricing-list">
                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>1 Website
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {tooltipText.oneWebsite}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        10 GB SSD Raid Storage
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {tooltipText.starterStorage}
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
                          {tooltipText.starterSSL}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Free LiteSpeed
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
                        10 Email Accounts
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {tooltipText.email10}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        10 MySQL Database
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {tooltipText.db10}
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
                          {tooltipText.controlPanel}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Free migration
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {tooltipText.migration}
                        </div>
                      </div>
                    </li>
                  </ul>
                  
                </div>
              </div>

              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="pricing-box-items active">
                  <div className="pricing-header">
                    <div className="price-content">
                      <h4>Premium Cloud </h4>
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
                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        50 Websites
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {tooltipText.websites50}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i> 2 GB RAM
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {tooltipText.ram2gb}
                        </div>
                      </div>
                    </li>

                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i> 2 vCPU
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {tooltipText.cpu2}
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

                    {/* UPDATED STORAGE */}
                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        100 GB NVMe Storage
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {tooltipText.nvme100}
                        </div>
                      </div>
                    </li>

                    {/* NEW: FREE DOMAIN */}
                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Free Domain (worth ₹1k)
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {tooltipText.freeDomain}
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
                          {tooltipText.email100}
                        </div>
                      </div>
                    </li>

                    {/* KEEP DAILY BACKUPS */}
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

                    {showMore && (
                      <>
                        {/* WORDPRESS OPTIMIZED */}
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

                        {/* FREE MIGRATION */}
                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            Free Migration
                          </span>
                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {tooltipText.migration}
                            </div>
                          </div>
                        </li>

                        {/* NEW: SPEED */}
                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            2x More Speed
                          </span>
                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {tooltipText.speed2x}
                            </div>
                          </div>
                        </li>
                      </>
                    )}

                    <li className={styles["show-more-btn-turbo"]}>
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
                      <h4>Business Cloud </h4>
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
                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        100 Websites
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {tooltipText.websites100}
                        </div>
                      </div>
                    </li>

                    {/* UPDATED RAM */}
                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i> 4 GB RAM
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {tooltipText.ram4gb}
                        </div>
                      </div>
                    </li>

                    {/* UPDATED CPU */}
                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i> 3 vCPU
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {tooltipText.cpu3}
                        </div>
                      </div>
                    </li>

                    {/* SSL FIX */}
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

                    {/* STORAGE UPDATED */}
                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        200 GB Storage
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {tooltipText.storage200}
                        </div>
                      </div>
                    </li>

                    {/* DOMAIN UPDATED */}
                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Free Domain (worth ₹1k)
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {tooltipText.freeDomain}
                        </div>
                      </div>
                    </li>

                    {/* KEEP BACKUPS */}
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

                    {/* NEW: ECOMMERCE */}
                    <li className={styles["tooltip-item"]}>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        eCommerce Optimized
                      </span>
                      <div className={styles["tooltip-wrapper"]}>
                        <i className="fa-light fa-circle-question"></i>
                        <div className={styles["tooltip-box"]}>
                          {tooltipText.ecommerce}
                        </div>
                      </div>
                    </li>

                    {showMore && (
                      <>
                        {/* KEEP YOUR EXISTING ADVANCED FEATURES EXACTLY */}

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

                        {/* KEEP LSCACHE */}
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

                        {/* WORDPRESS OPTIMIZED */}
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

                        {/* SPEED */}
                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            4x More Speed
                          </span>
                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {tooltipText.speed4x}
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
                              {tooltipText.cloudflare}
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
                              {tooltipText.migration}
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
                              {tooltipText.controlPanel}
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
                              {tooltipText.security}
                            </div>
                          </div>
                        </li>

                        <li className={styles["tooltip-item"]}>
                          <span>
                            <i className="fa-solid fa-check"></i>
                            Priority Support
                          </span>
                          <div className={styles["tooltip-wrapper"]}>
                            <i className="fa-light fa-circle-question"></i>
                            <div className={styles["tooltip-box"]}>
                              {tooltipText.prioritySupport}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePricing;
