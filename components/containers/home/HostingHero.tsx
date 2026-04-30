"use client";

import Image from "next/image";
import styles from "./HostingHero.module.scss";
import heroImg from "@/public/img/hero-character.png"; // replace with your image

const HostingHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        
        {/* LEFT IMAGE */}
        <div className={styles.left}>
          <Image
            src={heroImg}
            alt="hosting"
            className={styles.image}
            priority
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className={styles.right}>
          <h1 className={styles.title}>
            Web Hosting that is faster <br /> & superior
            <span className={styles.plus}>+</span>
          </h1>

          <ul className={styles.features}>
            <li>
              <span className={styles.check}>✔</span>
              Attain loading 10x times faster with LiteSpeed WebServer + LSCache.
            </li>

            <li>
              <span className={styles.check}>✔</span>
              Optimal website speed equals positive business outcomes.
            </li>

            <li>
              <span className={styles.check}>✔</span>
              Improve your website's core web vital scores, enhance search engine
              rankings, and elevate user experience with LiteSpeed Cache.
            </li>

            <li>
              <span className={styles.check}>✔</span>
              Benefit from significantly faster server response times and reduced
              latency powered by high-speed servers.
            </li>
          </ul>

          {/* STATS */}
          <div className={styles.stats}>
            <div>
              <h2>99%</h2>
              <p>Faster response</p>
            </div>

            <div>
              <h2>100%</h2>
              <p>Better performance</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HostingHero;