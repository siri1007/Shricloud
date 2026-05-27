
// -----------------------------------------------




"use client";

import Image from "next/image";
import five from "@/public/img/hero/activity.png";
import dedicatedbanner from "@/public/img/dedicatedbanner.png";
import styles from "./dedicatedBanner.module.scss";

type Props = {
  scrollToPricing: () => void;
};

const DedicatedBanner = ({ scrollToPricing }: Props) => {
  return (
    <section
      className={styles.banner}
      style={{
        backgroundImage: "url(/img/hero/hero-bg-1.jpg)",
      }}
     >
      <div className={styles.container}>
        
        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <span className={styles.badge}>
            <Image src={five} alt="img" priority />
            Dedicated Server Solutions
          </span>

          <h1 className={styles.title}>
            The Server is Yours  Entirely.
          </h1>

          <p className={styles.desc}>
            Dedicated hardware, root-level control, and performance that never wavers.
          </p>

          <button onClick={scrollToPricing} className={styles.button}>
            View Plans →
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.right}>
          <Image
            src={dedicatedbanner}
            alt="Dedicated Server"
            priority
            className={styles.image}
          />
        </div>

      </div>
    </section>
  );
};

export default DedicatedBanner;