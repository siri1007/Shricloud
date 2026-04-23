// CloudVpsHero.tsx
"use client";

import styles from "./CloudVpsHero.module.scss";

export default function CloudVpsHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <span className={styles.badge}>CLOUD VPS</span>

          <h1 className={styles.title}>
            Scale without the <br />
            <span>complexity</span>
          </h1>

          <p className={styles.desc}>
            Deploy isolated virtual servers in seconds. Full root access,
            guaranteed resources, and the performance your workloads actually
            need.
          </p>

          <div className={styles.tabs}>
            <button>Web Hosting</button>
            <button>VPS</button>
            <button>Cloud</button>
          </div>

          <div className={styles.features}>
            <div>
              <span>✔</span> SSD storage included
            </div>
            <div>
              <span>✔</span> One-click installs
            </div>
            <div>
              <span>✔</span> Free SSL certificates
            </div>
            <div>
              <span>✔</span> Daily backups
            </div>
          </div>

          <div className={styles.actions}>
            <button className={styles.primary}>Deploy now →</button>
            <button className={styles.secondary}>View pricing</button>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className={styles.right}>
          <div className={styles.cardPrimary}>
            <span className={styles.cardBadge}>PRIMARY NODE</span>
            <p>CPU usage</p>
            <h3>30%</h3>
            <div className={styles.bar}><span style={{ width: "30%" }} /></div>

            <p>RAM</p>
            <div className={styles.barGreen}><span style={{ width: "60%" }} /></div>

            <div className={styles.status}>
              <span className={styles.dot} /> Running <span className={styles.tag}>us-east-1</span>
            </div>
          </div>

          <div className={styles.cardReplica}>
            <span className={styles.cardBadge}>REPLICA</span>
            <p><span className={styles.dot} /> 99.99% uptime</p>
          </div>

          <div className={styles.cardBandwidth}>
            <span className={styles.cardBadge}>BANDWIDTH</span>
            <p>This month</p>
            <h3>2.4 TB</h3>
            <div className={styles.barYellow}><span style={{ width: "50%" }} /></div>
            <small>4.9 TB remaining</small>
          </div>
        </div>
      </div>
    </section>
  );
}

