"use client";

import Image from "next/image";
import styles from "./HostingEnterprise.module.scss";
import cubeImg from "@/public/img/enterprise.png"; // replace with your image
// import shieldImg from "@/public/shield.png"; // replace with your image

const features = [
  "Easily expand your hosting services as your business grows without any downtime or limitations.",
  "Offer your clients dependable and stable hosting with minimal downtime, ensuring their websites are always accessible.",
  "Benefit from affordable pricing that allows you to maximize your profits while delivering top-notch services.",
  "Enjoy an intuitive control panel that simplifies managing multiple client accounts, making your business operations smoother.",
];

export default function HostingEnterprise() {
  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        
        {/* LEFT SIDE */}
        <div className={styles.left}>
          <Image src={cubeImg} alt="cube" className={styles.cube} />
          {/* <Image src={shieldImg} alt="shield" className={styles.shield} /> */}
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.right}>
          <h1>
            Launch Your Own Hosting  Enterprise
          </h1>

          <ul>
            {features.map((item, index) => (
              <li key={index}>
                <span className={styles.tick}>✔</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}