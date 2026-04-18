import React from "react";
import styles from "./ChooseElite.module.scss";

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles["hero-container"]}>

        <p className={styles.tag}>WHY ELITE CLOUD</p>

        <h1 className={styles.title}>
          Built for sites that <br />
          can't afford to <span>slow down</span>
        </h1>

        <p className={styles.subtitle}>
          Engineered for ecommerce and high-traffic websites — every
          millisecond is deliberate.
        </p>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <h2>200%</h2>
            <p>Faster load times</p>
          </div>

          <div className={styles.divider} />

          <div className={styles.stat}>
            <h2>99.9%</h2>
            <p>Uptime guaranteed</p>
          </div>

          <div className={styles.divider} />

          <div className={styles.stat}>
            <h2>24/7</h2>
            <p>Expert support</p>
          </div>
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.icon}>🖥️</div>
            <h3>Best resources</h3>
            <p>
              Top-notch infrastructure ensures peak performance even under heavy load.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>{"</>"}</div>
            <h3>Modern technologies</h3>
            <p>
              Full support for PHP, WordPress, Node.js, and Python.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>💬</div>
            <h3>24/7 support</h3>
            <p>
              A team of real experts available around the clock.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;