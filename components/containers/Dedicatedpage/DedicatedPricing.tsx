



// "use client";

// import React, { useState } from "react";
// import styles from "./DedicatedPricing.module.scss";

// /* MONTHLY (discounted values you gave) */

// const yearlyPlans = [
//   { name: "E3-123x v3", cores: "4 Cores", ram: "32 GB RAM", storage: "2 x 480 GB SSD", bandwidth: "10 TB Bandwidth", price: 4000 },
//   { name: "E3-123x v5/v6", cores: "4 Cores", ram: "64 GB RAM", storage: "2 x 480 GB SSD", bandwidth: "10 TB Bandwidth", price: 4731 },
//   { name: "E-2136", cores: "6 Cores", ram: "64 GB RAM", storage: "2 x 480 GB SSD", bandwidth: "10 TB Bandwidth", price: 6116 },
//   { name: "E-2286G", cores: "6 Cores", ram: "64 GB RAM", storage: "2 x 480 GB SSD", bandwidth: "10 TB Bandwidth", price: 8039 },
//   { name: "E5-2667v4", cores: "8 Cores", ram: "32 GB RAM", storage: "4 x 480 GB SSD", bandwidth: "10 TB Bandwidth", price: 7155 },
//   { name: "Dual E5-2667v4", cores: "16 Cores", ram: "64 GB RAM", storage: "4 x 480 GB SSD", bandwidth: "10 TB Bandwidth", price: 7963 },
//   { name: "E5-2680v4", cores: "14 Cores", ram: "128 GB RAM", storage: "4 x 480 GB SSD", bandwidth: "10 TB Bandwidth", price: 7847 },
//   { name: "Dual E5-2680v4", cores: "28 Cores", ram: "256 GB RAM", storage: "4 x 480 GB SSD", bandwidth: "10 TB Bandwidth", price: 9270 },
//   { name: "EPYC 7313", cores: "16 Cores", ram: "64 GB RAM", storage: "2 x 960 GB SSD", bandwidth: "10 TB Bandwidth", price: 18467 },
//   { name: "EPYC 7543", cores: "32 Cores", ram: "128 GB RAM", storage: "2 x 960 GB SSD", bandwidth: "10 TB Bandwidth", price: 23680 },
//   { name: "EPYC 7763", cores: "64 Cores", ram: "128 GB RAM", storage: "2 x 960 GB SSD", bandwidth: "10 TB Bandwidth", price: 27692 },
//   { name: "Dual EPYC 7313", cores: "32 Cores", ram: "128 GB RAM", storage: "4 x 960 GB SSD", bandwidth: "10 TB Bandwidth", price: 23462 },
//   { name: "Dual EPYC 7543", cores: "64 Cores", ram: "256 GB RAM", storage: "4 x 960 GB SSD", bandwidth: "10 TB Bandwidth", price: 33852 },
//   { name: "Dual EPYC 7763", cores: "128 Cores", ram: "256 GB RAM", storage: "4 x 960 GB SSD", bandwidth: "10 TB Bandwidth", price: 41996 },
// ];

// /* YEARLY (original values) */
// const monthlyPlans = [
//   { name: "E3-123x v3", cores: "4 Cores", ram: "32 GB RAM", storage: "2 x 480 GB SSD", bandwidth: "10 TB Bandwidth", price: 5000 },
//   { name: "E3-123x v5/v6", cores: "4 Cores", ram: "64 GB RAM", storage: "2 x 480 GB SSD", bandwidth: "10 TB Bandwidth", price: 6000 },
//   { name: "E-2136", cores: "6 Cores", ram: "64 GB RAM", storage: "2 x 480 GB SSD", bandwidth: "10 TB Bandwidth", price: 8000 },
//   { name: "E-2286G", cores: "6 Cores", ram: "64 GB RAM", storage: "2 x 480 GB SSD", bandwidth: "10 TB Bandwidth", price: 10000 },
//   { name: "E5-2667v4", cores: "8 Cores", ram: "32 GB RAM", storage: "4 x 480 GB SSD", bandwidth: "10 TB Bandwidth", price: 10000 },
//   { name: "Dual E5-2667v4", cores: "16 Cores", ram: "64 GB RAM", storage: "4 x 480 GB SSD", bandwidth: "10 TB Bandwidth", price: 12000 },
//   { name: "E5-2680v4", cores: "14 Cores", ram: "128 GB RAM", storage: "4 x 480 GB SSD", bandwidth: "10 TB Bandwidth", price: 12000 },
//   { name: "Dual E5-2680v4", cores: "28 Cores", ram: "256 GB RAM", storage: "4 x 480 GB SSD", bandwidth: "10 TB Bandwidth", price: 15000 },
//   { name: "EPYC 7313", cores: "16 Cores", ram: "64 GB RAM", storage: "2 x 960 GB SSD", bandwidth: "10 TB Bandwidth", price: 25000 },
//   { name: "EPYC 7543", cores: "32 Cores", ram: "128 GB RAM", storage: "2 x 960 GB SSD", bandwidth: "10 TB Bandwidth", price: 30000 },
//   { name: "EPYC 7763", cores: "64 Cores", ram: "128 GB RAM", storage: "2 x 960 GB SSD", bandwidth: "10 TB Bandwidth", price: 35000 },
//   { name: "Dual EPYC 7313", cores: "32 Cores", ram: "128 GB RAM", storage: "4 x 960 GB SSD", bandwidth: "10 TB Bandwidth", price: 40000 },
//   { name: "Dual EPYC 7543", cores: "64 Cores", ram: "256 GB RAM", storage: "4 x 960 GB SSD", bandwidth: "10 TB Bandwidth", price: 42000 },
//   { name: "Dual EPYC 7763", cores: "128 Cores", ram: "256 GB RAM", storage: "4 x 960 GB SSD", bandwidth: "10 TB Bandwidth", price: 50000 },
// ];

// export default function Pricing() {
//   const [isYearly, setIsYearly] = useState(false);

//   const plans = isYearly ? yearlyPlans : monthlyPlans;

//   return (
//     <section className={styles.pricing}>
//       <div className={styles.container}>
//         <h2 className={styles.heading}>
//           Pricing That Suits You & Your Business
//         </h2>

//         {/* Toggle */}
//         <div className={styles.toggleWrapper}>
//           <div className={styles.toggle}>
//             <button
//               className={!isYearly ? styles.active : ""}
//               onClick={() => setIsYearly(false)}
//             >
//               Monthly
//             </button>
//             <button
//               className={isYearly ? styles.active : ""}
//               onClick={() => setIsYearly(true)}
//             >
//               Yearly
//             </button>
//           </div>
//           <span className={styles.save}>Save 20%</span>
//         </div>

//         {/* Table */}
//         <div className={styles.table}>
//           <div className={styles.tableHeader}>
//             <span>VALUE</span>
//             <span>CORE</span>
//             <span>RAM</span>
//             <span>STORAGE</span>
//             <span>BANDWIDTH</span>
//             <span>
//               {isYearly ? "Monthly Price" : "Price per Month"}
//             </span>
//             <span></span>
//           </div>

//           {plans.map((plan, i) => (
//             <div key={i} className={styles.row}>
//               <span>{plan.name}</span>
//               <span>{plan.cores}</span>
//               <span>{plan.ram}</span>
//               <span>{plan.storage}</span>
//               <span>{plan.bandwidth}</span>
//               <span>₹{plan.price} /mo</span>
//               <button className={styles.btn}>Order Now</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// ------------


"use client";

import { useState } from "react";
import styles from "./DedicatedPricing.module.scss";




const yearlyPlans = [
  { name: "E3-123x v3", cores: "4 Cores", ram: "32 GB RAM", storage: "2 x 480 GB SSD", bandwidth: "10 TB Bandwidth", price: 4000 },
  { name: "E3-123x v5/v6", cores: "4 Cores", ram: "64 GB RAM", storage: "2 x 480 GB SSD", bandwidth: "10 TB Bandwidth", price: 4731 },
  { name: "E-2136", cores: "6 Cores", ram: "64 GB RAM", storage: "2 x 480 GB SSD", bandwidth: "10 TB Bandwidth", price: 6116 },
  { name: "E-2286G", cores: "6 Cores", ram: "64 GB RAM", storage: "2 x 480 GB SSD", bandwidth: "10 TB Bandwidth", price: 8039 },
  { name: "E5-2667v4", cores: "8 Cores", ram: "32 GB RAM", storage: "4 x 480 GB SSD", bandwidth: "10 TB Bandwidth", price: 7155 },
  { name: "Dual E5-2667v4", cores: "16 Cores", ram: "64 GB RAM", storage: "4 x 480 GB SSD", bandwidth: "10 TB Bandwidth", price: 7963 },
  { name: "E5-2680v4", cores: "14 Cores", ram: "128 GB RAM", storage: "4 x 480 GB SSD", bandwidth: "10 TB Bandwidth", price: 7847 },
  { name: "Dual E5-2680v4", cores: "28 Cores", ram: "256 GB RAM", storage: "4 x 480 GB SSD", bandwidth: "10 TB Bandwidth", price: 9270 },
  { name: "EPYC 7313", cores: "16 Cores", ram: "64 GB RAM", storage: "2 x 960 GB SSD", bandwidth: "10 TB Bandwidth", price: 18467 },
  { name: "EPYC 7543", cores: "32 Cores", ram: "128 GB RAM", storage: "2 x 960 GB SSD", bandwidth: "10 TB Bandwidth", price: 23680 },
  { name: "EPYC 7763", cores: "64 Cores", ram: "128 GB RAM", storage: "2 x 960 GB SSD", bandwidth: "10 TB Bandwidth", price: 27692 },
  { name: "Dual EPYC 7313", cores: "32 Cores", ram: "128 GB RAM", storage: "4 x 960 GB SSD", bandwidth: "10 TB Bandwidth", price: 23462 },
  { name: "Dual EPYC 7543", cores: "64 Cores", ram: "256 GB RAM", storage: "4 x 960 GB SSD", bandwidth: "10 TB Bandwidth", price: 33852 },
  { name: "Dual EPYC 7763", cores: "128 Cores", ram: "256 GB RAM", storage: "4 x 960 GB SSD", bandwidth: "10 TB Bandwidth", price: 41996 },
];

/* YEARLY (original values) */
const monthlyPlans = [
  { name: "E3-123x v3", cores: "4 Cores", ram: "32 GB RAM", storage: "2 x 480 GB SSD", bandwidth: "10 TB Bandwidth", price: 5000 },
  { name: "E3-123x v5/v6", cores: "4 Cores", ram: "64 GB RAM", storage: "2 x 480 GB SSD", bandwidth: "10 TB Bandwidth", price: 6000 },
  { name: "E-2136", cores: "6 Cores", ram: "64 GB RAM", storage: "2 x 480 GB SSD", bandwidth: "10 TB Bandwidth", price: 8000 },
  { name: "E-2286G", cores: "6 Cores", ram: "64 GB RAM", storage: "2 x 480 GB SSD", bandwidth: "10 TB Bandwidth", price: 10000 },
  { name: "E5-2667v4", cores: "8 Cores", ram: "32 GB RAM", storage: "4 x 480 GB SSD", bandwidth: "10 TB Bandwidth", price: 10000 },
  { name: "Dual E5-2667v4", cores: "16 Cores", ram: "64 GB RAM", storage: "4 x 480 GB SSD", bandwidth: "10 TB Bandwidth", price: 12000 },
  { name: "E5-2680v4", cores: "14 Cores", ram: "128 GB RAM", storage: "4 x 480 GB SSD", bandwidth: "10 TB Bandwidth", price: 12000 },
  { name: "Dual E5-2680v4", cores: "28 Cores", ram: "256 GB RAM", storage: "4 x 480 GB SSD", bandwidth: "10 TB Bandwidth", price: 15000 },
  { name: "EPYC 7313", cores: "16 Cores", ram: "64 GB RAM", storage: "2 x 960 GB SSD", bandwidth: "10 TB Bandwidth", price: 25000 },
  { name: "EPYC 7543", cores: "32 Cores", ram: "128 GB RAM", storage: "2 x 960 GB SSD", bandwidth: "10 TB Bandwidth", price: 30000 },
  { name: "EPYC 7763", cores: "64 Cores", ram: "128 GB RAM", storage: "2 x 960 GB SSD", bandwidth: "10 TB Bandwidth", price: 35000 },
  { name: "Dual EPYC 7313", cores: "32 Cores", ram: "128 GB RAM", storage: "4 x 960 GB SSD", bandwidth: "10 TB Bandwidth", price: 40000 },
  { name: "Dual EPYC 7543", cores: "64 Cores", ram: "256 GB RAM", storage: "4 x 960 GB SSD", bandwidth: "10 TB Bandwidth", price: 42000 },
  { name: "Dual EPYC 7763", cores: "128 Cores", ram: "256 GB RAM", storage: "4 x 960 GB SSD", bandwidth: "10 TB Bandwidth", price: 50000 },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = isYearly ? yearlyPlans : monthlyPlans;

  return (
    <section className={styles.pricing}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Pricing That Suits You & Your Business
        </h2>

        {/* Toggle */}
        <div className={styles.toggleWrapper}>
          <div className={styles.toggle}>
            <button
              className={!isYearly ? styles.active : ""}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </button>
            <button
              className={isYearly ? styles.active : ""}
              onClick={() => setIsYearly(true)}
            >
              Yearly
            </button>
          </div>
          <span className={styles.save}>Save 20%</span>
        </div>

        {/* TABLE WRAPPER (IMPORTANT) */}
        <div className={styles.tableWrapper}>
          <div className={styles.table}>
            
            <div className={styles.tableHeader}>
              <span>VALUE</span>
              <span>CORE</span>
              <span>RAM</span>
              <span>STORAGE</span>
              <span>BANDWIDTH</span>
              <span>
                {isYearly ? "Monthly Price" : "Price per Month"}
              </span>
              <span></span>
            </div>

            {plans.map((plan, i) => (
              <div key={i} className={styles.row}>
                <span>{plan.name}</span>
                <span>{plan.cores}</span>
                <span>{plan.ram}</span>
                <span>{plan.storage}</span>
                <span>{plan.bandwidth}</span>
                <span>₹{plan.price} /mo</span>
                <button className={styles.btn}>Order Now</button>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}