"use client";

import styles from "./SupportSection.module.scss";

export default function SupportSection() {
  return (
    <section className={styles.supportSection}>
      <div className={styles.overlay}></div>
      <div className={styles.glow}></div>

      <div className={styles.container}>
        {/* LEFT SIDE */}
        <div className={styles.left}>
          {/* <div className={styles.badge}>
            <span className={styles.dot}></span>
            Experts online now
          </div> */}

          <h2 className={styles.title}>
            Need Help With   <span>Hosting?</span>
           
          </h2>

          <p className={styles.description}>
            Our cloud experts are available 24/7 to assist you instantly —
            no wait times, no tickets, just fast solutions.
          </p>

       
        </div>

        {/* CENTER LINE */}
        <div className={styles.divider}></div>

        {/* RIGHT SIDE */}
        <div className={styles.right}>
         <a
  href="https://www.shricloud.com/starter-cloud/"
  target="_blank"
  rel="noopener noreferrer"
  className={styles.primaryBtn}
>
  <i className="fa-regular fa-message"></i>
  Get Started
</a>

        
        </div>
      </div>
    </section>
  );
}