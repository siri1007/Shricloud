// "use client";

// import Link from "next/link";
// import Image from "next/image";

// import five from "@/public/img/hero/activity.png";

// import styles from "./wordpressBanner.module.scss";
// import Vpsimg from "@/public/img/VpsBannerimg.png";type EliteBannerProps = {
//   scrollToPricing: () => void;
// };
// const VpsBanner = ({ scrollToPricing }: EliteBannerProps) => {
//   return (
//     <section
//       className="hero-section hero-1 style-hosting bg-cover fix"
//       style={{
//         backgroundImage: "url(/img/hero/hero-bg-1.jpg)",
       
//       }}
//     >
      
//       <div className="container">
//         <div className="row g-4 justify-content-between align-items-center">
//           <div className="col-lg-6">
//             <div className="hero-content">
//               <span className="sub-text-2 ">
//                 <Image src={five} alt="img" priority className="me-2" />
//                 VPS Cloud 
//               </span>
//               <h1>Fully Managed VPS Cloud Hosting</h1>
//               <div className="hero-list-items " aria-errormessage=".5s">
//                 <ul className="hero-list">
//                   <li>
//                     <i className="fa-solid fa-check"></i>
//                     Free SSL Certificate for Lifetime Security
//                   </li>
//                   <li>
//                     <i className="fa-solid fa-check"></i>
//                     24/7 Chat & Ticket Support
//                   </li>
//                 </ul>
//                 <ul className="hero-list">
//                   <li>
//                     <i className="fa-solid fa-check"></i>
//                     Free Domain with Long-Term VPS Plans
//                   </li>
//                   <li>
//                     <i className="fa-solid fa-check"></i>
//                     30-day money back guarantee
//                   </li>
//                 </ul>
//               </div>
//               <button onClick={scrollToPricing} className={styles.ctaBtn}>
//                 View Plans →
//               </button>
//             </div>
//           </div>


// <div className={styles.imageWrapper}>
//             <Image src={Vpsimg} alt="wordpress hosting" priority />
//           </div>

//           {/* <div className="col-lg-3 ">
//             <div className="hero-image">
//               <Image 
//   src={Vpsimg} 
//   alt="img" 
//   priority 
   
// />
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VpsBanner;

// -------------------------



"use client";

import Image from "next/image";
import five from "@/public/img/hero/activity.png";
import Vpsimg from "@/public/img/VpsBannerimg.png";

import styles from "./Vpsmediaqueries.module.scss";

type EliteBannerProps = {
  scrollToPricing: () => void;
};

const VpsBanner = ({ scrollToPricing }: EliteBannerProps) => {
  return (
    <section
      className={`hero-section hero-1 style-hosting bg-cover fix ${styles.bannerSection}`}
      style={{
        backgroundImage: "url(/img/hero/hero-bg-1.jpg)",
      }}
    >
      <div className="container">
        <div className={`row g-4 ${styles.bannerRow}`}>
          
          {/* LEFT CONTENT */}
          <div className={`col-lg-6 ${styles.leftContent}`}>
            <div className={`hero-content ${styles.heroContent}`}>
              
              <span className={`sub-text-2 ${styles.subText}`}>
                <Image src={five} alt="img" priority className="me-2" />
                VPS Cloud
              </span>

              <h1 className={styles.heading}>
                Fully Managed VPS Cloud Hosting
              </h1>

              <div className={styles.heroListWrapper}>
                <ul className={styles.heroList}>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Free SSL Certificate for Lifetime Security
                  </li>

                  <li>
                    <i className="fa-solid fa-check"></i>
                    24/7 Chat & Ticket Support
                  </li>
                </ul>

                <ul className={styles.heroList}>
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

              <button
                onClick={scrollToPricing}
                className={styles.ctaBtn}
              >
                View Plans →
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className={`col-lg-6 ${styles.rightContent}`}>
            <div className={styles.imageWrapper}>
              <Image src={Vpsimg} alt="wordpress hosting" priority />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VpsBanner;
