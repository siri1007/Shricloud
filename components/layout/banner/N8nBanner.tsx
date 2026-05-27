// import Link from "next/link";
// import Image from "next/image";

// import five from "@/public/img/hero/activity.png";
// import six from "@/public/img/N8n-banner.png";
// // import N8nBanner from "@/public/img/N8n-banner.png";

// const N8nBanner = () => {
//   return (
//     <section
//       className="hero-section hero-1 style-hosting bg-cover fix"
//       style={{
//   backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/img/hero/hero-bg-1.jpg)",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
// }}
//     >
     
//       <div className="container">
//         <div className="row g-4 justify-content-between align-items-center">
//           <div className="col-lg-7">
//             <div className="hero-content">
//               <span
//                 className="sub-text-2 "
                
//               >
//                 <Image src={five} alt="img" priority className="me-2" />
//               Power Your Automation Infrastructure

//               </span>
//               <h1
               
//               >
//                 Build, Run, and Scale
//  <br />
//                 AI Workflows 
//               </h1>
//               <div
//                 className="hero-list-items "
              
//                 aria-errormessage=".5s"
//               >
//                 <ul className="hero-list">
//                   <li>
//                     <i className="fa-solid fa-check"></i>
//                    Unlimited workflow executions — zero throttle
//                   </li>
//                   <li>
//                     <i className="fa-solid fa-check"></i>
//                    Full data privacy & sovereign control
//                   </li>

//                    <li>
//                     <i className="fa-solid fa-check"></i>
//                     Seamless integrations with any API or toolchain
//                   </li>
//                 </ul>
                
//               </div>
//               {/* <Link
//                 href="pricing"
//                 className="theme-btn bg-color-2 "
               
//               >
//                 view plan <i className="fas fa-long-arrow-alt-right"></i>
//               </Link> */}

//               <Link
//   href="pricing"
//   className="theme-btn bg-color-2"
//   style={{ backgroundColor: "#0E3CD8" }}
// >
//   view plan <i className="fas fa-long-arrow-alt-right"></i>
// </Link>
//             </div>
//           </div>
//           <div
//             className="col-lg-3 "
//           >
//             {/* <div className="hero-image">
//               <Image src={six} alt="img" priority />
//             </div> */}
//             <div className="hero-image" style={{ marginLeft: "-375px" }}>
//   <Image src={six} alt="img" priority />
// </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default N8nBanner;



// -------------------------




import Link from "next/link";
import Image from "next/image";

import five from "@/public/img/hero/activity.png";
import six from "@/public/img/N8n-banner.png";

import styles from "./N8nBannermedia.module.scss";

const N8nBanner = () => {
  return (
    <section
      className={`hero-section hero-1 style-hosting bg-cover fix ${styles.bannerSection}`}
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/img/hero/hero-bg-1.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className={`row g-4 ${styles.bannerRow}`}>
          
          {/* LEFT CONTENT */}
          <div className={`col-lg-7 ${styles.contentColumn}`}>
            <div className={styles.heroContent}>
              
              <span className={styles.subText}>
                <Image src={five} alt="img" priority className="me-2" />
                Power Your Automation Infrastructure
              </span>

              <h1 className={styles.heading}>
                Build, Run, and Scale
                <br />
                AI Workflows
              </h1>

              <div className={styles.featureWrapper}>
                <ul className={styles.featureList}>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Unlimited workflow executions — zero throttle
                  </li>

                  <li>
                    <i className="fa-solid fa-check"></i>
                    Full data privacy & sovereign control
                  </li>

                  <li>
                    <i className="fa-solid fa-check"></i>
                    Seamless integrations with any API or toolchain
                  </li>
                </ul>
              </div>

              {/* <Link
                href="pricing"
                className={`theme-btn bg-color-2 ${styles.ctaBtn}`}
                >
                view plan{" "}
                <i className="fas fa-long-arrow-alt-right"></i>
              </Link> */}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className={`col-lg-5 ${styles.imageColumn}`}>
            <div className={styles.bannerImageWrapper}>
              <Image src={six} alt="img" priority />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default N8nBanner;