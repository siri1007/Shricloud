"use client";

import Image from "next/image";
import styles from "./ResellerSection.module.scss";

import stackImg from "@/public/img/stack.png"; // replace with your image

const features = [
  "Tailor your resources with our best reseller hosting options, perfect for startups and established businesses alike.",
  "Enjoy transparent pricing and no hidden fees with our reseller hosting plans, helping you grow confidently.",
  "Whether you're starting or scaling, our best reseller hosting in India offers the tools and support you need for success.",
  "Leverage state-of-the-art cloud infrastructure and exceptional customer support with the best reseller hosting in India.",
  "Set your own prices, create bespoke hosting solutions, and succeed in a competitive market with our reseller hosting services.",
];

export default function ResellerSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* LEFT IMAGE */}
        <div className={styles.left}>
          <div className={styles.imageBox}>
            <Image src={stackImg} alt="stack" priority />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className={styles.right}>
          <h2 className={styles.heading}>
            Maximize Profits With Our <br />
            Reseller Hosting Plans
          </h2>

          <ul className={styles.list}>
            {features.map((item, index) => (
              <li key={index} className={styles.listItem}>
                <span className={styles.tick}></span>
                <p>{item}</p>
              </li>
            ))}
          </ul>

          <div className={styles.footerNote}>
            <span className={styles.dot}></span>
            Premium Cloud Hosting Infrastructure
          </div>
        </div>

      </div>
    </section>
  );
}