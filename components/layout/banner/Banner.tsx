// // --------------------

// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import one from "@/public/img/hero/hero-1-circle-left.png";
// import five from "@/public/img/hero/activity.png";
// import seven from "@/public/img/hero/hero-llustration.png";

// import styles from "./wordpressBanner.module.scss";

// type WordpressBannerProps = {
//   scrollToPricing: () => void;
// };

// const Banner = ( { scrollToPricing }: WordpressBannerProps) => {
//   return (
//     <section
//       className={`hero-section hero-1 bg-cover fix ${styles.bannerSection}`}
//       style={{
//         backgroundImage: "url(/img/hero/hero-bg-1.jpg)",
//       }}
//     >
//       <div className={`circle-shape-left ${styles.circleShape}`}>
//         <Image src={one} alt="shape-img" />
//       </div>

//       <div className="container">
//         <div className={`row g-4 justify-content-between ${styles.bannerRow}`}>
//           <div className={`col-lg-6 ${styles.leftContent}`}>
//             <div className={`hero-content ${styles.heroContent}`}>
//               <span className={`sub-text ${styles.subText}`}>
//                 <Image src={five} alt="img" priority className="me-2" />
//                 Everything You Need to Create a Website
//               </span>

//               <h1 className={styles.heading}>
//               Everything You Need to Build
//    Your Own Website

//               </h1>

//               <div className={styles.features}>
//                 <div className={styles.featureItem}>
//                   <span className={styles.check}>✔</span>
//                   <span>
//                     <strong>Domain:</strong> Free.
//                   </span>
//                 </div>

//                 <div className={styles.featureItem}>
//                   <span className={styles.check}>✔</span>
//                   <span>
//                     <strong>Migration:</strong> Seamless.
//                   </span>
//                 </div>

//                 <div className={styles.featureItem}>
//                   <span className={styles.check}>✔</span>
//                   <span>
//                     <strong>Support:</strong> Constant.
//                   </span>
//                 </div>
//               </div>

// <button onClick={scrollToPricing} className={styles.ctaBtn}>
//   View Plans →
// </button>

//             </div>
//           </div>

//           <div className={`col-lg-5 ${styles.rightContent}`}>
//             <div className={`hero-image ${styles.heroImage}`}>
//               <Image src={seven} alt="img" priority />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Banner;

// -------------------

"use client";

import Image from "next/image";
import styles from "./homeBanner.module.scss";

import circleShape from "@/public/img/hero/hero-1-circle-left.png";
import activityIcon from "@/public/img/hero/activity.png";
import heroImage from "@/public/img/hero/hero-llustration.png";

type HomeBannerProps = {
  scrollToPricing: () => void;
};

const HomeBanner = ({ scrollToPricing }: HomeBannerProps) => {
  return (
    <section
      className={styles.bannerSection}
      style={{
        backgroundImage: "url(/img/hero/hero-bg-1.jpg)",
      }}
    >
      <div className={styles.backgroundShape}>
        <Image src={circleShape} alt="shape" />
      </div>

      <div className="container">
        <div className={styles.bannerWrapper}>
          {/* LEFT CONTENT */}
          <div className={styles.contentContainer}>
            <div className={styles.saleBadge}>
              <span className={styles.saleTag}>SALE</span>

              <div className={styles.saleTextWrapper}>
                <span className={styles.saleText}>Get up to 60% OFF</span>

                <span className={styles.saleText}>For a limited time.</span>
               

                <span className={styles.saleText}>
                  Get premium hosting today.
                </span>
              </div>
            </div>

            {/* <h1 className={styles.heading}>
  Everything You Need to
  <span className={styles.secondLine}>
    Build Your Own Website
  </span>
</h1> */}

            <h1 className={styles.heading}>
              Everything You Need to
              <span className={styles.secondLine}>Build Your Own Website</span>
            </h1>

            {/* 
    <p className={styles.description}>
      Fast, secure, and affordable hosting solutions with free domain,
      seamless migration, and  support.
    </p> */}

            <div className={styles.features}>
              <div className={styles.featureItem}>
                <span className={styles.check}>✔</span>
                <span>
                  <p>Free Domain</p>
                </span>
              </div>

              <div className={styles.featureItem}>
                <span className={styles.check}>✔</span>
                <span>
                  <p>Easy Migration</p>
                </span>
              </div>

              <div className={styles.featureItem}>
                <span className={styles.check}>✔</span>
                <span>
                  <p>24/7 Support</p>
                </span>
              </div>
            </div>

            <button onClick={scrollToPricing} className={styles.ctaButton}>
              View Plans →
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className={styles.imageContainer}>
            <Image
              src={heroImage}
              alt="Website Hosting"
              priority
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
