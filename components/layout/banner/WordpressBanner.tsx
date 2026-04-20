


// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import styles from "./wordpressBanner.module.scss";

// import leftShape from "@/public/img/hero/hero-1-circle-left.png";
// import rightShape from "@/public/img/hero/hero-1-circle-right.png";
// import icon from "@/public/img/hero/activity.png";
// import bannerImg from "@/public/img/WP-image.png";

// const WordpressBanner = () => {
//   return (
//     <section className={styles.wordpressBanner}>
//       {/* Background Shapes */}
//       <div className={styles.leftShape}>
//         <Image src={leftShape} alt="shape" priority />
//       </div>

//       <div className={styles.rightShape}>
//         <Image src={rightShape} alt="shape" priority />
//       </div>

//       <div className="container">
//         <div className={styles.bannerWrapper}>
          
//           {/* LEFT CONTENT */}
//           <div className={styles.content}>
//             <span className={styles.subText}>
//               <Image src={icon} alt="icon" />
//               Premium WordPress Hosting in India
//             </span>

//             <h1>
//               Energize your website with limitless and high-speed hosting.
//             </h1>

//             <div className={styles.features}>
//               <ul>
//                 <li>✔ Scalable Plans for Growing Websites</li>
//                 <li>✔ 24/7 Chat, & Ticket Support</li>
//               </ul>

//               <ul>
//                 <li>✔ Automated Daily Backups</li>
//                 <li>✔ 99.99% Uptime Guarantee</li>
//               </ul>
//             </div>

//             <Link href="#Wordpresspricing" className={styles.ctaBtn}>
//               View Plans →
//             </Link>
//           </div>

//           {/* RIGHT IMAGE */}
//           <div className={styles.imageWrapper}>
//             <Image src={bannerImg} alt="wordpress hosting" priority />
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default WordpressBanner;




// above working code scrolling


// -----------------------



"use client";

import Image from "next/image";
import styles from "./wordpressBanner.module.scss";

import leftShape from "@/public/img/hero/hero-1-circle-left.png";
import rightShape from "@/public/img/hero/hero-1-circle-right.png";
import icon from "@/public/img/hero/activity.png";
import bannerImg from "@/public/img/WP-image.png";

type WordpressBannerProps = {
  scrollToPricing: () => void;
};

const WordpressBanner = ({ scrollToPricing }: WordpressBannerProps) => {
  return (
    <section className={styles.wordpressBanner}>
      <div className={styles.leftShape}>
        <Image src={leftShape} alt="shape" priority />
      </div>

      <div className={styles.rightShape}>
        <Image src={rightShape} alt="shape" priority />
      </div>

      <div className="container">
        <div className={styles.bannerWrapper}>
          
          <div className={styles.content}>
            <span className={styles.subText}>
              <Image src={icon} alt="icon" />
              Premium WordPress Hosting in India
            </span>

            <h1>
              Energize your website with limitless and high-speed hosting.
            </h1>

            <div className={styles.features}>
              <ul>
                <li>✔ Scalable Plans for Growing Websites</li>
                <li>✔ 24/7 Chat, & Ticket Support</li>
              </ul>

              <ul>
                <li>✔ Automated Daily Backups</li>
                <li>✔ 99.99% Uptime Guarantee</li>
              </ul>
            </div>

            <button onClick={scrollToPricing} className={styles.ctaBtn}>
              View Plans →
            </button>
          </div>

          <div className={styles.imageWrapper}>
            <Image src={bannerImg} alt="wordpress hosting" priority />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WordpressBanner;