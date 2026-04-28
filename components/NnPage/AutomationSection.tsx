"use client";

import styles from "./AutomationSection.module.scss";

export default function NoCodeAutomation() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>No-code automation</h2>

        <div className={styles.grid}>
          {/* LEFT LARGE CARD */}
          <div className={styles.cardLarge}>
  <div className={styles.cardContent}>
    <img
      src="/img/Nocode.png"
      alt="workflow"
      className={styles.imageLarge}
    />
  </div>
</div>

          {/* TOP RIGHT */}
          <div className={styles.card}>
            <h3>Smart Execution</h3>
            <p>
             Run workflows in real time with instant processing, live tracking, and clear status visibility across every step.
            </p>
           
          </div>

          {/* BOTTOM RIGHT */}
          <div className={styles.card}>
            <h3>Scale affordably</h3>
            <p>
             Self-host your automation stack and scale seamlessly with full control, optimized performance, and cost efficiency.
              cost.
            </p>

           
          </div>
        </div>
      </div>
    </section>
  );
}
