// "use client";

// import styles from "./CloudVpsPlans.module.scss";

// const plans = [
//   {
//     name: "M1",
//     price: "320",
//     features: ["1 vCPU", "2 GB RAM", "25 GB NVMe Storage", "1 TB Bandwidth"],
//   },
//   {
//     name: "M2",
//     price: "640",
//     tag: "POPULAR",
//     features: ["2 vCPU", "4 GB RAM", "50 GB NVMe Storage", "2 TB Bandwidth"],
//   },
//   {
//     name: "M3",
//     price: "1280",
//     features: ["4 vCPU", "8 GB RAM", "100 GB NVMe Storage", "3 TB Bandwidth"],
//   },
//   {
//     name: "M4",
//     price: "2560",
//     features: ["8 vCPU", "16 GB RAM", "200 GB NVMe Storage", "4 TB Bandwidth"],
//   },
// ];

// export default function CloudVpsPlans() {
//   return (
//     <section className={styles.section}>
//       <div className={styles.container}>
        
//         {/* Heading */}
//         <h1 className={styles.heading}>
//           Cloud VPS <span>Hosting Plans</span>
//         </h1>

//         <p className={styles.subtext}>
//           From 2 GB to 16 GB RAM VPS Hosting Plans, we have got you covered.
//           <br />
//           Choose the right plan according to your requirements and budget.
//         </p>

//         {/* Cards */}
//         <div className={styles.grid}>
//           {plans.map((plan, index) => (
//             <div
//               key={index}
//               className={`${styles.card} ${
//                 plan.tag ? styles.popularCard : ""
//               }`}
//             >
//               {plan.tag && <div className={styles.tag}>{plan.tag}</div>}

//               <h3 className={styles.planName}>{plan.name}</h3>

//               <div className={styles.price}>
//                 ₹{plan.price}
//                 <span>/month</span>
//               </div>

//               <button className={styles.button}>Add To Cart</button>

//               <ul className={styles.features}>
//                 {plan.features.map((f, i) => (
//                   <li key={i}>{f}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }












// -------------




"use client";

import styles from "./CloudVpsPlans.module.scss";
import { useState } from "react";

type Feature = {
  label: string;
  info: string;
};

type Plan = {
  name: string;
  price: string;
  popular?: boolean;
  features: Feature[];
};

const plans: Plan[] = [
  {
    name: "M1",
    price: "320",
    features: [
      { label: "1 vCPU", info: "Single core CPU for basic workloads" },
      { label: "2 GB RAM", info: "Suitable for small applications" },
      { label: "25 GB NVMe Storage", info: "High-speed SSD storage" },
      { label: "1 TB Bandwidth", info: "Monthly data transfer limit" },
    ],
  },
  {
    name: "M2",
    price: "640",
    popular: true,
    features: [
      { label: "2 vCPU", info: "Improved performance for growing apps" },
      { label: "4 GB RAM", info: "Handles moderate traffic smoothly" },
      { label: "50 GB NVMe Storage", info: "Faster and larger storage" },
      { label: "2 TB Bandwidth", info: "Higher data transfer capacity" },
    ],
  },
  {
    name: "M3",
    price: "1280",
    features: [
      { label: "4 vCPU", info: "High performance for scaling apps" },
      { label: "8 GB RAM", info: "Ideal for heavy workloads" },
      { label: "100 GB NVMe Storage", info: "Large and fast storage" },
      { label: "3 TB Bandwidth", info: "Supports high traffic usage" },
    ],
  },
  {
    name: "M4",
    price: "2560",
    features: [
      { label: "8 vCPU", info: "Maximum compute performance" },
      { label: "16 GB RAM", info: "Enterprise-grade memory" },
      { label: "200 GB NVMe Storage", info: "Massive fast storage" },
      { label: "4 TB Bandwidth", info: "Very high data transfer limit" },
    ],
  },
];

export default function CloudVpsPlans() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>
        Cloud VPS <span>Hosting Plans</span>
      </h1>

      <p className={styles.subtitle}>
        From 2 GB to 16 GB RAM VPS Hosting Plans, we have got you covered.
        <br />
        Choose the right plan according to your requirements and budget.
      </p>

      <div className={styles.grid}>
        {plans.map((plan, planIndex) => (
          <div
            key={planIndex}
            className={`${styles.card} ${
              plan.popular ? styles.popular : ""
            }`}
          >
            {plan.popular && <div className={styles.badge}>POPULAR</div>}

            <h3 className={styles.planName}>{plan.name}</h3>

            <div className={styles.price}>₹ {plan.price} 

                <span className={styles.per}>/ month</span>
            </div>
            

            <button className={styles.button}>Add To Cart</button>

            <ul className={styles.features}>
              {plan.features.map((feature, index) => {
                const id = `${planIndex}-${index}`;

                return (
                  <li key={id} className={styles.featureItem}>
                    <div className={styles.left}>
                      <span className={styles.check}>✔</span>
                      {feature.label}
                    </div>

                    <div
                      className={styles.infoWrapper}
                      onMouseEnter={() => setHovered(id)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <span className={styles.info}>?</span>

                      {hovered === id && (
                        <div className={styles.tooltip}>
                          {feature.info}
                        </div>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}