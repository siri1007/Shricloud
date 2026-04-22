"use client";

import styles from "./WhyChoose.module.scss";

export default function WhyChoose() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>
        Why Choose <span>Shricloud VPS Cloud</span>
      </h2>

      {/* Top 3 Cards */}
      <div className={styles.cards}>
        {/* Card 1 */}
        <div className={styles.card}>
          <span className={styles.number}>01 —</span>

          <div className={styles.icon}>🔒</div>

          <h3>Super Secure</h3>
          <p>
            Free DDoS protection, SSL certificates, and daily automated backups
            across every VPS plan. Your data stays locked down, always.
          </p>

          <span className={styles.tagGreen}>Always-on protection</span>
        </div>

        {/* Card 2 */}
        <div className={styles.card}>
          <span className={styles.number}>02 —</span>

          <div className={styles.icon}>⚡</div>

          <h3>User-Friendly Panel</h3>
          <p>
            An intuitive VPS panel paired with a super-simple control panel.
            Manage your website without the usual complexity.
          </p>

          <span className={styles.tagBlue}>Zero learning curve</span>
        </div>

        {/* Card 3 */}
        <div className={styles.card}>
          <span className={styles.number}>03 —</span>

          <div className={styles.icon}>📈</div>

          <h3>Highly Scalable</h3>
          <p>
            Get the performance, flexibility, and control you need to grow.
            Scale your resources anytime with ease.
          </p>

          <span className={styles.tagRed}>Scale on demand</span>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomBox}>
        {/* Left */}
        <div className={styles.left}>
          <div className={styles.globe}>🌐</div>

          <h3>
            Global Infrastructure,
            <br />
            Local Spe
            ed
          </h3>

          <p>
            Our VPS nodes are strategically distributed across data centers
            worldwide — ensuring ultra-low latency and maximum uptime.
          </p>
        </div>

        {/* Right */}
        <div className={styles.right}>
          <div className={styles.stat}>
            <h2>99.9%</h2>
            <p>Uptime SLA</p>
          </div>

          <div className={styles.stat}>
            <h2>24/7</h2>
            <p>Expert Support</p>
          </div>

          <div className={styles.stat}>
            <h2>10x</h2>
            <p>Faster Deploy</p>
          </div>
        </div>
      </div>
    </section>
  );
}