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
          <div className={styles.badge}>
            <span className={styles.dot}></span>
            Experts online now
          </div>

          <h2 className={styles.title}>
            Need Help With <br></br>
            <span>Hosting?</span>
          </h2>

          <p className={styles.description}>
            Our cloud experts are available 24/7 to assist you instantly —
            no wait times, no tickets, just fast solutions.
          </p>

          <div className={styles.features}>
            <div className={styles.feature}>
              <i className="fa-regular fa-clock"></i>
              <span>Avg. reply &lt; 2 min</span>
            </div>

            <div className={styles.feature}>
              <i className="fa-regular fa-comments"></i>
              <span>Live chat & tickets</span>
            </div>
          </div>
        </div>

        {/* CENTER LINE */}
        <div className={styles.divider}></div>

        {/* RIGHT SIDE */}
        <div className={styles.right}>
          <button className={styles.primaryBtn}>
            <i className="fa-regular fa-message"></i>
            Start Live Chat
          </button>

          <button className={styles.secondaryBtn}>
            <i className="fa-solid fa-headphones"></i>
            Contact Support
          </button>

          <p className={styles.responseText}>
            Typical response in under 2 minutes
          </p>
        </div>
      </div>
    </section>
  );
}