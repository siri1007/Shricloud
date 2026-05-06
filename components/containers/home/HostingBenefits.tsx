import React from "react";
import styles from "./HostingBenefits.module.scss";

const HostingBenefits: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <h2 className={styles.heading}>
            Discover the reasons you’ll enjoy hosting with us
            <span className={styles.plus}>+</span>
          </h2>

          <div className={styles.feature}>
            <div className={`${styles.icon} ${styles.pink}`}>
              👍
            </div>
            <div>
              <h3>Affordability</h3>
              <p>
                Get budget-friendly web hosting that doesn’t sacrifice quality,
                ensuring you receive the best value in the market.
              </p>
            </div>
          </div>

          <div className={styles.feature}>
            <div className={`${styles.icon} ${styles.purple}`}>
              ➜➜
            </div>
            <div>
              <h3>Speed</h3>
              <p>
                Experience unmatched speed and dependability with India’s best
                web hosting services, keeping your website running smoothly at
                all times.
              </p>
            </div>
          </div>

          <div className={styles.feature}>
            <div className={`${styles.icon} ${styles.violet}`}>
              🔒
            </div>
            <div>
              <h3>Safe & Secure</h3>
              <p>
                Your website’s security is our top priority. We implement
                advanced security measures in our affordable web hosting
                packages to protect your data and give you peace of mind.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.right}>
         <img
  src="/img/cloud-person.png"
  alt="Person sitting on cloud"
  className={styles.image}
/>


          {/* Decorative Elements */}
          <div className={styles.cloud}></div>
          <div className={styles.dots}></div>
        </div>
      </div>
    </section>
  );
};

export default HostingBenefits;