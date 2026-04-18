


"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./wordpressBanner.module.scss";

import leftShape from "@/public/img/hero/hero-1-circle-left.png";
import rightShape from "@/public/img/hero/hero-1-circle-right.png";
import icon from "@/public/img/hero/activity.png";
import bannerImg from "@/public/img/WP-image.png";

const EliteBanner = () => {
  return (
    <section className={styles.wordpressBanner}>
      {/* Background Shapes */}
      <div className={styles.leftShape}>
        <Image src={leftShape} alt="shape" priority />
      </div>

      <div className={styles.rightShape}>
        <Image src={rightShape} alt="shape" priority />
      </div>

      <div className="container">
        <div className={styles.bannerWrapper}>
          
          {/* LEFT CONTENT */}
          <div className={styles.content}>
            <span className={styles.subText}>
              <Image src={icon} alt="icon" />
             Elite WordPress Hosting in India
            </span>

            <h1>
             Power your website with ultra-fast, enterprise-grade hosting built for excellence.
            </h1>

            <div className={styles.features}>
              <ul>
                <li>✔ Seamless Scalability for High-Growth Brands</li>
                <li>✔ 24/7 Chat, Call & Ticket Support</li>
              </ul>

              <ul>
                <li>✔ Automated Daily Backups</li>
                <li>✔ 99.99% Uptime Guarantee</li>
              </ul>
            </div>

            <Link href="/pricing" className={styles.ctaBtn}>
              View Plans →
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className={styles.imageWrapper}>
            <Image src={bannerImg} alt="wordpress hosting" priority />
          </div>

        </div>
      </div>
    </section>
  );
};

export default EliteBanner;
