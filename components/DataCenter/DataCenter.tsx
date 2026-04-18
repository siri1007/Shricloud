import React from "react";
import styles from "./DataCenter.module.scss";

const DataCenter = () => {
  return (
    <section className={styles.dataCenter}>
      <div className={styles.container}>
        {/* Heading */}
        <div className={styles.header}>
          <h3>Data Centers All Around the World</h3>
          <p>
            Our web hosting plans offer server locations in the United States
            (Dallas or NC), Europe (Germany or Finland) and Asia (India)
          </p>
        </div>

        {/* Map Section */}
        <div className={styles.mapWrapper}>
          <img
            src="/assets/images/data__center.png"
            alt="data center map"
            className={styles.map}
          />


          {/* Flags */}
          <div className={`${styles.flag} ${styles.usa}`}>
            <img src="/assets/images/flag-04.svg" alt="USA" />
          </div>

          <div className={`${styles.flag} ${styles.germany}`}>
            <img src="/assets/images/flag-02.svg" alt="Germany" />
          </div>

          <div className={`${styles.flag} ${styles.india}`}>
            <img src="/assets/images/flag-06.svg" alt="India" />
          </div>



          {/* Animated Dots */}
<div className={`${styles.dot} ${styles.dotUsa}`}></div>
<div className={`${styles.dot} ${styles.dotGermany}`}></div>
<div className={`${styles.dot} ${styles.dotIndia}`}></div>
        </div>
      </div>



      {/* Counter Section */}
      <div className={styles.counterSection}>
        <div className={styles.counter}>
          <h2>10,000+</h2>
          <p>Websites Hosted</p>
        </div>

        <div className={styles.counter}>
          <h2>100+</h2>
          <p>Servers Deployed</p>
        </div>

        <div className={styles.counter}>
          <h2>10+</h2>
          <p>Team Members (as of 2025)</p>
        </div>

        <div className={styles.counter}>
          <h2>100 GBPS+</h2>
          <p>Total Network</p>
        </div>
      </div>
    </section>
  );
};

export default DataCenter;