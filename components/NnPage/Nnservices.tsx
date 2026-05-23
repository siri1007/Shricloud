


// // --

// "use client";

// import { useState } from "react";
// import styles from "./NnservicesSection.module.scss";
// export default function HeroLeft() {
//   return (
//     <section className={styles.hero}>
//       <div className={styles.wrapper}>
        
//         {/* LEFT CONTENT */}
//         <div className={styles.container}>
          
//           <h1 className={styles.title}>
//             Workflow Automation Platform <br />
//             <span>Connect workflows.</span> <br />
//             <span className={styles.highlight}>Integrate data.</span>
//           </h1>

//           <p className={styles.description}>
//             Build powerful no-code integrations and intelligent data pipelines
//             across your entire stack. Unify every tool, trigger, and team —
//             without writing a single line of code.
//           </p>

//           <div className={styles.actions}>
//             <button className={styles.primaryBtn}>Get Started</button>
//             <button className={styles.secondaryBtn}>Watch Demo</button>
//           </div>

//           <div className={styles.stats}>
//             <div>
//               <h3>500+</h3>
//               <p>Integrations</p>
//             </div>
//             <div>
//               <h3>10M+</h3>
//               <p>Workflows run daily</p>
//             </div>
//             <div>
//               <h3>99.9%</h3>
//               <p>Uptime SLA</p>
//             </div>
//           </div>

//           <div className={styles.features}>
//             <div className={styles.card}>
//               <div>
//                 <h4>500+ Integrations</h4>
//                 <p>Connect apps and services seamlessly</p>
//               </div>
//               <span>→</span>
//             </div>

//             <div className={styles.card}>
//               <div>
//                 <h4>AI-Powered Nodes</h4>
//                 <p>Build intelligent automated workflows</p>
//               </div>
//               <span>→</span>
//             </div>

//             <div className={styles.card}>
//               <div>
//                 <h4>Pre-built Workflows</h4>
//                 <p>Launch faster with ready templates</p>
//               </div>
//               <span>→</span>
//             </div>
//           </div>

//         </div>

//         {/* RIGHT IMAGE */}
//         <div className={styles.imageWrapper}>
//           <img 
//             src="/img/workflow-ui.png" 
//             alt="Workflow UI" 
//             className={styles.image}
//           />
//         </div>

//       </div>
//     </section>
//   );
// }



// ----------------------




"use client";

import styles from "./NnservicesSection.module.scss";

export default function HeroLeft() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.wrapper}>

        {/* LEFT CONTENT */}
        <div className={styles.contentSection}>

          <h1 className={styles.title}>
            Workflow Automation Platform
            <br />
            <span>Connect workflows.</span>
            <br />
            <span className={styles.highlight}>
              Integrate data.
            </span>
          </h1>

          <p className={styles.description}>
            Build powerful no-code integrations and intelligent
            data pipelines across your entire stack. Unify every
            tool, trigger, and team — without writing a single
            line of code.
          </p>

          <div className={styles.actions}>
            <button className={styles.primaryBtn}>
              Get Started
            </button>

            <button className={styles.secondaryBtn}>
              Watch Demo
            </button>
          </div>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <h3>500+</h3>
              <p>Integrations</p>
            </div>

            <div className={styles.statItem}>
              <h3>10M+</h3>
              <p>Workflows run daily</p>
            </div>

            <div className={styles.statItem}>
              <h3>99.9%</h3>
              <p>Uptime SLA</p>
            </div>
          </div>

          <div className={styles.features}>

            <div className={styles.featureCard}>
              <div>
                <h4>500+ Integrations</h4>
                <p>Connect apps and services seamlessly</p>
              </div>

              <span>→</span>
            </div>

            <div className={styles.featureCard}>
              <div>
                <h4>AI-Powered Nodes</h4>
                <p>Build intelligent automated workflows</p>
              </div>

              <span>→</span>
            </div>

            <div className={styles.featureCard}>
              <div>
                <h4>Pre-built Workflows</h4>
                <p>Launch faster with ready templates</p>
              </div>

              <span>→</span>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.imageSection}>
          <img
            src="/img/workflow-ui.png"
            alt="Workflow UI"
            className={styles.heroImage}
          />
        </div>

      </div>
    </section>
  );
}