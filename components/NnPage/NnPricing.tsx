



// ---------------



"use client";

import React from "react";
import styles from "./N8nPricing.module.scss";

const plans = [
  {
    title: "N8N Launch",
    price: "₹399",
    ram: "4GB",
    vcpu: "2",
  },
  {
    title: "N8N Flow",
    price: "₹599",
    ram: "8GB",
    vcpu: "4",
    highlight: true,
  },
  {
    title: "N8N Scale",
    price: "₹899",
    ram: "16GB",
    vcpu: "8",
  },
];

const Pricing = () => {
  return (
    <section className={styles.pricing}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`${styles.card} ${
                plan.highlight ? styles.active : ""
              }`}
            >
              {/* Top Blue Header */}
              <div className={styles.top}>
                <h3>{plan.title}</h3>

                <div className={styles.price}>
                  {plan.price}
                  <span> /  Month</span>
                </div>

                {/* Custom Curve */}
                <div className={styles.curve}></div>
              </div>

              {/* Features */}
              <div className={styles.features}>
                <div className={styles.featureRow}>
                  <span>
                    Memory
                  
                    (RAM)
                  </span>
                  <strong>{plan.ram}</strong>
                </div>

                <div className={styles.featureRow}>
                  <span>vCPU</span>
                  <strong>{plan.vcpu}</strong>
                </div>

                <div className={styles.featureRow}>
                  <span>Workflows</span>
                  <strong>Unlimited</strong>
                </div>

                <div className={styles.featureRow}>
                  <span>Storage</span>
                  <strong>Unlimited</strong>
                </div>

                <div className={styles.featureRow}>
                  <span>
                    Automatic
                    <br />
                    Update
                  </span>
                  <strong>Included</strong>
                </div>

                <div className={styles.featureRow}>
                  <span>Bandwidth</span>
                  <strong>Unlimited</strong>
                </div>

                <div className={styles.featureRow}>
                  <span>Executions</span>
                  <strong>Unlimited</strong>
                </div>
              </div>

              <button className={styles.btn}>Order</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;