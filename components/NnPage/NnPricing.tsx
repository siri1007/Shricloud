import React from "react";
import styles from "./N8nPricing.module.scss";

const plans = [
  {
    title: "KVM 1",
    oldPrice: "$19.49",
    price: "$6.49",
    off: "67% off",
    features: ["1 vCPU core", "4 GB RAM", "50 GB NVMe disk space", "4 TB bandwidth"],
    highlight: false,
  },
  {
    title: "KVM 2",
    oldPrice: "$24.49",
    price: "$8.99",
    off: "63% off",
    features: ["2 vCPU cores", "8 GB RAM", "100 GB NVMe disk space", "8 TB bandwidth"],
    highlight: true,
  },
  {
    title: "KVM 4",
    oldPrice: "$42.99",
    price: "$12.99",
    off: "70% off",
    features: ["4 vCPU cores", "16 GB RAM", "200 GB NVMe disk space", "16 TB bandwidth"],
    highlight: false,
  },
  {
    title: "KVM 8",
    oldPrice: "$73.99",
    price: "$25.99",
    off: "65% off",
    features: ["8 vCPU cores", "32 GB RAM", "400 GB NVMe disk space", "32 TB bandwidth"],
    highlight: false,
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
              {plan.highlight && (
                <div className={styles.popular}>MOST POPULAR</div>
              )}

              <div className={styles.badge}>{plan.off}</div>

              <h3>{plan.title}</h3>

              <div className={styles.oldPrice}>{plan.oldPrice}</div>

              <div className={styles.price}>
                {plan.price}
                <span>/mo</span>
              </div>

              <button
                className={`${styles.btn} ${
                  plan.highlight ? styles.primaryBtn : ""
                }`}
              >
                Choose plan
              </button>

              <p className={styles.note}>
                Renews at $14.99/mo for 2 years. Cancel anytime.
              </p>

              <ul>
                {plan.features.map((f, i) => (
                  <li key={i}>✓ {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className={styles.bottom}>
          <h2>
            Every plan has <span>everything you need</span> and more
          </h2>

          <div className={styles.features}>
            <ul>
              <li>✓ Unlimited workflows</li>
              <li>✓ Unlimited concurrent executions</li>
            </ul>

            <ul>
              <li>✓ n8n with queue mode</li>
              <li>✓ n8n with 100+ pre-made workflows</li>
            </ul>

            <ul>
              <li>✓ Hostinger API n8n community node</li>
              <li>✓ AI assistant powered by MCP</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;